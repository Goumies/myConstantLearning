package com.pluralsight;

import com.pluralsight.fruit.Apple;
import com.pluralsight.fruit.IFruit;
import com.pluralsight.fruit.Tree;
import com.pluralsight.toolbox.MeasuringTape;

import java.util.ArrayList;

class Main {

    public static void main(String[] args) {

        ArrayList<IFruit> fruit = getFruit();

        Tree aTree= new Tree(fruit);

        if (aTree == null) {
            aTree.getFruitOnTree();
        }

        dropAllTheFruit(aTree);

    }

    private static ArrayList<IFruit> getFruit() {

        ArrayList<IFruit> fruit = new ArrayList<>(10);

        for (int i = 0; i < 12; i++) {
            fruit.add(new Apple());
        }

        return fruit;
    }

    private static void dropAllTheFruit(Tree aTree) {


        MeasuringTape measuringTape = MeasuringTape.createMeasuringTape();

        int startingFruitOnTree = aTree.getFruitOnTree();

        System.out.printf("STARTING FRUIT ON TREE: %d%n", aTree.getFruitOnTree());

        for (int i = 1; i <= startingFruitOnTree; i++) {

            IFruit fruit = aTree.dropFruit();

            double distanceFromTree = measuringTape.getDistance(fruit, aTree);

            System.out.printf("%s %d: %s feet%n", fruit.getName(), i, (int) distanceFromTree);
        }


        System.out.printf("ENDING FRUIT ON TREE: %d%n", aTree.getFruitOnTree());
    }
}

