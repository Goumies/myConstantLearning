package com.pluralsight.fruit;

/**
 * Created by David Starr.
 */
public class Kiwi implements IFruit {
    @Override
    public String getName() {
        return "Kiwi";
    }

    @Override
    public int getRollMultiplier() {
        return 0;
    }
}
