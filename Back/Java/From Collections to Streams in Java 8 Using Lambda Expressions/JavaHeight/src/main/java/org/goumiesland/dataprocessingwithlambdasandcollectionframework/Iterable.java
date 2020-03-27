package org.goumiesland.dataprocessingwithlambdasandcollectionframework;

import java.util.function.Consumer;

public interface Iterable {
    <E> boolean forEach(Consumer<? super E> consumer);
}


