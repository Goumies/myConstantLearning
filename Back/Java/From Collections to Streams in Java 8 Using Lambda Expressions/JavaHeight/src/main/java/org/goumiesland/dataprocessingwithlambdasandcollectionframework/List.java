package org.goumiesland.dataprocessingwithlambdasandcollectionframework;

import java.util.function.UnaryOperator;

public interface List {
    <E> boolean replaceAll(UnaryOperator<? super E> operator);
}
