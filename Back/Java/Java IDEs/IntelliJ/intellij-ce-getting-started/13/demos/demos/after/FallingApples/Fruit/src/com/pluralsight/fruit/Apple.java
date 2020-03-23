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

    public void method() {
        int a = 1;
        int b = 2;
        int c = add(a, b);
        int d = add(b, c);
    }

    private int add(int a, int b) {
        return a + b;
    }

}

