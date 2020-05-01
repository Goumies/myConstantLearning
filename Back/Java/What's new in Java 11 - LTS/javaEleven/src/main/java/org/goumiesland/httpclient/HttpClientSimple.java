package org.goumiesland.httpclient;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class HttpClientSimple {
    public static void main(String[] args) throws IOException, InterruptedException {
        HttpClient httpClient = HttpClient.newHttpClient();

        HttpRequest req = HttpRequest.newBuilder(URI.create("https://pluralsight.com"))
                .GET()
                .build();

        HttpResponse<String> response = httpClient.send(req, HttpResponse.BodyHandlers.ofString());

        System.out.println(response.headers().map());
        /*
         * returns
         *
         * {:status=[301], content-length=[150], content-type=[text/html],
         * date=[Fri, 01 May 2020 00:03:36 GMT],
         * location=[https://www.pluralsight.com:443/], server=[awselb/2.0]}
         *
         * status 301 which indicates a redirect
         * HttpClient by default doesn't follow redirects
         * We can configure it to redirect
         * */
    }
}
