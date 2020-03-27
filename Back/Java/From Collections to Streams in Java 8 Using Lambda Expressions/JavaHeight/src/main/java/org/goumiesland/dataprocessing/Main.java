package org.goumiesland.dataprocessing;

public class Main {
    public static void main(String[] args) {
        Predicate<String> predicateST20 = s -> s.length() < 20;
        Predicate<String> predicateST5 = s -> s.length() < 5;

        boolean firstResult = predicateST20.test("Hello World !");
        System.out.println("Hello World ! is shorter than 20 chars : " + firstResult);

        boolean secondResult = predicateST5.test("Hello World !");
        System.out.println("Hello World ! is shorter than 5 chars : " + secondResult);

        Predicate<String> andChainedPredicate = predicateST20.and(predicateST5);
        boolean thirdResult = andChainedPredicate.test("Hello World !");
        System.out.println("Hello World ! is shorter than 20 chars & 5 chars : " + thirdResult);

        Predicate<String> orChainedPredicate = predicateST20.or(predicateST5);
        boolean fourthResult = orChainedPredicate.test("HelloHelloHelloHello");
        System.out.println("Hello World ! is shorter than 20 chars or 5 chars : " + fourthResult);

        Predicate<String> staticPredicate = Predicate.isEqualTo("Yes");
        boolean fifthResult = staticPredicate.test("Yes");
        System.out.println("Yes is equal to Yes : " + fifthResult);

        boolean sixthResult = staticPredicate.test("No");
        System.out.println("No is equal to Yes : " + sixthResult);

    }
}
