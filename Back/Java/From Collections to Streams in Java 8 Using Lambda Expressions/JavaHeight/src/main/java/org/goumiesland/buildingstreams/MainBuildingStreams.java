package org.goumiesland.buildingstreams;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class MainBuildingStreams {
    public static void main(String... args) {
        List<Integer> ints = Arrays.asList(0, 1, 2, 3, 4);

        Stream<Integer> stream1 = ints.stream();
        Stream<Integer> stream2 = Stream.of(0, 1, 2, 3, 4);
        stream1.forEach(System.out::println);

        Stream<String> streamOfStrings = Stream.generate(() -> "one");
        streamOfStrings.limit(6).forEach(System.out::println);

        Stream<String> growingStream = Stream.iterate("+", s -> s + "+");
        growingStream.limit(6).forEach(System.out::println);

        IntStream unboundedStream = ThreadLocalRandom.current().ints();
        unboundedStream.limit(10).forEach(System.out::println);
    }
}
