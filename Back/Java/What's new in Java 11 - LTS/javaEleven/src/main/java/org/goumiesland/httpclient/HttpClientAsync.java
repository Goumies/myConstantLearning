package org.goumiesland.httpclient;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.concurrent.CompletableFuture;

public class HttpClientAsync {
    public static void main(String[] args) throws IOException, InterruptedException {
        HttpClient httpClient = HttpClient.newBuilder()
                .version(HttpClient.Version.HTTP_2)
                .build();

        HttpRequest req = HttpRequest.newBuilder(URI.create("https://google.com"))
                .GET()
                .build();

        // CompletableFuture = asynchronous computation in Java, introduced in Java 8
        CompletableFuture<HttpResponse<String>> resFuture = httpClient.sendAsync(req, HttpResponse.BodyHandlers.ofString());

        resFuture.thenAccept(res -> System.out.println(res.version()));
        resFuture.join();
        // waits for the server response
    }
}
