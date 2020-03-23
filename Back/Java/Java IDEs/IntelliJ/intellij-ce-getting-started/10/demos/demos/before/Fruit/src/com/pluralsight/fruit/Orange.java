package com.pluralsight.fruit;

public class Orange implements IFruit {

    @Override
    public String getName() {
        return "Orange";
    }

    @Override
    public int getRollMultiplier() {
        return 100;
    }
}
