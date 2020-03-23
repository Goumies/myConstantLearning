package com.pluralsight.toolbox;

import com.pluralsight.fruit.IFruit;
import com.pluralsight.fruit.Tree;

import java.util.Random;

public class MeasuringTape {

    private Random random;

    private MeasuringTape() {
        random = new Random();
    }

    private MeasuringTape(Random randomGen) {

        random = randomGen;
    }

    public static MeasuringTape createMeasuringTape() {

        return new MeasuringTape();
    }

    public static MeasuringTape createMeasuringTape(Random random) {

        return new MeasuringTape(random);
    }

    // TODO: Implement a Measuring Tape that actually measures distances
    public double getDistance(IFruit aFruit, Tree tree) {

        return random.nextDouble() * aFruit.getRollMultiplier();

    }
}
