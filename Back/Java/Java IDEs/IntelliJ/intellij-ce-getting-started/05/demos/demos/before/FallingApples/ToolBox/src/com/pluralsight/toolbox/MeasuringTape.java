package com.pluralsight.toolbox;

import java.util.Random;

public class MeasuringTape {


    // TODO: Implement a Measuring Tape that actually measures distances
    public double getDistance(Tree tree, IFruit fruit) {

        Random random = new Random();

        return random.nextDouble() * fruit.getRollMultiplier();

    }

}
