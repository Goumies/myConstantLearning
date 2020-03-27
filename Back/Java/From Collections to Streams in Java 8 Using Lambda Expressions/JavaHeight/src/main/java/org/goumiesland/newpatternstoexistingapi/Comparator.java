package org.goumiesland.newpatternstoexistingapi;

import java.util.function.Function;

@FunctionalInterface
public interface Comparator<T> {
    // Abstract method to implement
    int compare(T first, T second);

    // U, because in a static method
    static <U> Comparator<U> comparing(Function<U, Comparable> function) {
        return (first, second) -> function.apply(first).compareTo(function.apply(second));
    }

    default Comparator<T> thenComparing(Function<T, Comparable> function) {
        return thenComparing(comparing(function));
    }

    default Comparator<T> thenComparing(Comparator<T> personComparator) {
        return (first, second) -> compare(first, second) == 0
                ? personComparator.compare(first, second)
                : compare(first, second);
    }

}
