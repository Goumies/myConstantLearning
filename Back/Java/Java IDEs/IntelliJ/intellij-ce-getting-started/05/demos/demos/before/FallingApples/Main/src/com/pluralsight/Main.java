package com.pluralsight;

import com.pluralsight.fruit.Apple;
import com.pluralsight.fruit.IFruit;
import com.pluralsight.fruit.Tree;
import com.pluralsight.toolbox.MeasuringTape;

import java.util.ArrayList;

class Main {

    public static void main(String[] args) {

        ArrayList<IFruit> fruit = getFruit();

        Tree tree = new Tree(fruit);

        DropAllTheFruit(tree);

    }

    private static ArrayList<IFruit> getFruit() {

        ArrayList<IFruit> fruit = new ArrayList<>(10);

        for (int i = 0; i < 10; i++) {
            fruit.add(new Apple());
        }

        return fruit;
    }

    private static void DropAllTheFruit(Tree tree) {

        MeasuringTape measuringTape = new MeasuringTape();

        int startingFruitOnTree = tree.getFruitOnTree();

        System.out.println("STARTING FRUIT ON TREE: " + tree.getFruitOnTree());

        for (int i = 1; i <= startingFruitOnTree; i++) {

            IFruit fruit = tree.dropFruit();

            double distanceFromTree = measuringTape.getDistance(tree, fruit);

            System.out.println(fruit.getName() + " " + (i) + ": " + (int) distanceFromTree + " feet");
        }

        System.out.println("ENDING FRUIT ON TREE: " + tree.getFruitOnTree());

    }
}

