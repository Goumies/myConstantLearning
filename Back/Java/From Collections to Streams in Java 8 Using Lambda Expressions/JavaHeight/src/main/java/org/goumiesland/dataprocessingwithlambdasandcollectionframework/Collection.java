package org.goumiesland.dataprocessingwithlambdasandcollectionframework;

import java.util.function.Predicate;

public interface Collection {
    <E> boolean removeIf(Predicate<? super E> filter);
}
