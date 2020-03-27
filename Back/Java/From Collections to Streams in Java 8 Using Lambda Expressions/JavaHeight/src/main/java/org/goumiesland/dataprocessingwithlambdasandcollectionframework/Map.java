package org.goumiesland.dataprocessingwithlambdasandcollectionframework;

import java.util.function.BiConsumer;

public interface Map {
    <K, V> void forEach(BiConsumer<? super K, ? super V> consumer);
}
