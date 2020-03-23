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

        dropAllTheFruit(tree);

    }

    private static ArrayList<IFruit> getFruit() {

        ArrayList<IFruit> fruit = new ArrayList<>(10);

        for (int i = 0; i < 12; i++) {
            fruit.add(new Apple());
        }

        return fruit;
    }

    private static void dropAllTheFruit(Tree tree) {

        MeasuringTape measuringTape = MeasuringTape.createMeasuringTape();

        int startingFruitOnTree = tree.getFruitOnTree();

        System.out.printf("STARTING FRUIT ON TREE: %d%n", tree.getFruitOnTree());

        for (int i = 1; i <= startingFruitOnTree; i++) {

            IFruit fruit = tree.dropFruit();

            double distanceFromTree = measuringTape.getDistance(fruit, tree);

            System.out.printf("%s %d: %s feet%n", fruit.getName(), i, (int) distanceFromTree);
        }

        System.out.printf("ENDING FRUIT ON TREE: %d%n", tree.getFruitOnTree());
    }
}

