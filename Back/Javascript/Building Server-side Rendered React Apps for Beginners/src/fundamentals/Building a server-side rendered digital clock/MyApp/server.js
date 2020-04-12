const express = require('express');
const next = require('next');
const LRUCache = require('lru-cache');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

const ssrCache = new LRUCache({
    // figures out how big the passed in obj is
    length: function (n, key) {
        return n.toString().length + key.toString().length;
    },
    max: 100 * 1000 * 1000, // 100MB cache soft limit
    // how big the cache should get before throwing stuff away
    maxAge: 1000 * 10, // 1000 * 60 * 60 // 1hour

});

app.prepare()
    .then(() => {
        const server = express();

        server.get('/speaker/:speakerId', (req, res) => {
            const actualPage = '/speaker';
            const queryParams = {speakerId: req.params.speakerId};
            app.render(req, res, actualPage, queryParams);
        });

        function getCacheKey(req) {
            return `${req.url}`;
        }

        async function renderAndCache(req, res, pagePath, queryParams) {
            const key = getCacheKey(req);
            if (ssrCache.has(key)) {
                res.setHeader('x-cache', 'HIT');
                res.send(ssrCache.get(key));
                cacheHits++;
                return;
            }
            try {
                const html = await app.renderToHTML(req, res, pagePath, queryParams);
                if (res.statusCode !== 200) {
                    res.send(html);
                    cacheErrors++;
                    return;
                }
                ssrCache.set(key, html);
                res.setHeader('x-cache', 'MISS');
                res.send(html);
            } catch (err) {
                app.renderError(err, req, res, pagePath, queryParams);
            }

        }

        server.get('*', (req, res) => {
            if (
                req.url === '/' ||
                req.url === '/speakers' ||
                req.url === '/sessions'
            ) {
                // checks if the page has already been rendered
                // grab the HTML out of server based memory and return it
                // avoids going through the React pipeline
                return renderAndCache(req, res, req.url, {})
            }
            return handle(req, res);
        });

        server.listen(3000, (err) => {
            if (err) throw err;
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1)
    });