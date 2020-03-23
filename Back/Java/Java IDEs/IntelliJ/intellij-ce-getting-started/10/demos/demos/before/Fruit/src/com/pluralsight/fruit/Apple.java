package com.pluralsight.fruit;


public class Apple implements IFruit {

    private static final String NAME = "Apple";
    private static final int ROLL_MULTIPLIER = 10;

    @Override
    public String getName() {

        return NAME;
    }

    @Override
    public int getRollMultiplier() {

        return ROLL_MULTIPLIER;
    }
}

