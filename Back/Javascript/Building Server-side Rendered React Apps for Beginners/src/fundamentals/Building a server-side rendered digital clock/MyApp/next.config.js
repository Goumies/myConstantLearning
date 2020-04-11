// Here is the place to customize the webpack config

const withCSS = require('@zeit/next-css');

require("dotenv").config();
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = withCSS(
    {
        serverRuntimeConfig: {
            // will only be available on the server side
        },
        publicRuntimeConfig: {
            // will be available on both server and client
            RESTURL_SPEAKERS_PROD: "https://www.siliconvalley-codecamp.com/rest/speakers/ps",
            RESTURL_SPEAKER_PROD: "https://www.siliconvalley-codecamp.com/rest/Speaker",
            RESTURL_SESSIONS_PROD: "https://www.siliconvalley-codecamp.com/rest/sessions/ps"
        },
        webpack(config, options) {
            config.plugins = config.plugins || [];
            config.plugins = [
                ...config.plugins,
                // Read the .env file
                new Dotenv({
                    path: path.join(__dirname, ".env"),
                    systemvars: true
                })
            ];
            return config;
        }
    }
);