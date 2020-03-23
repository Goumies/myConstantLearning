package com.pluralsight.fruit;

import java.util.ArrayList;

public class Tree {

    private final ArrayList<IFruit> fruitOnTree;

    public Tree(ArrayList<IFruit> fruitOnTree) {

        this.fruitOnTree = fruitOnTree;

    }

    public IFruit dropFruit() {

        IFruit fruit = fruitOnTree.get(0);
        fruitOnTree.remove(0);

        return fruit;
    }

    public int getFruitOnTree() {
        return fruitOnTree.size();
    }

}
