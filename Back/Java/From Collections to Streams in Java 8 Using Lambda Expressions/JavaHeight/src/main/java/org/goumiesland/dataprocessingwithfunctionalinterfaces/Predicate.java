package org.goumiesland.dataprocessingwithfunctionalinterfaces;

@FunctionalInterface
public interface Predicate<T> {
    boolean test(T t);

    static <U> Predicate<U> isEqualTo(U u) {
        return s -> s.equals(u);
    }

    default Predicate<T> and(Predicate<T> other) {
        return t -> test(t) && other.test(t);
    }

    default Predicate<T> or(Predicate<T> other) {
        return t -> test(t) || other.test(t);
    }
}
