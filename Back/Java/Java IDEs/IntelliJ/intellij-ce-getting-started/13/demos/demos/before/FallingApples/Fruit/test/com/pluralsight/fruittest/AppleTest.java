package com.pluralsight.fruittest;

import com.pluralsight.fruit.Apple;
import org.junit.Assert;
import org.junit.Test;

/**
 * Created by David Starr.
 */
public class AppleTest {

    @Test
    public void AppleHasCorrectName() {

        Apple apple = new Apple();
        Assert.assertEquals("Apple", apple.getName());
    }


    @Test
    public void AppleHasCorrectRollMultiplier() {
        Apple apple = new Apple();
        Assert.assertEquals(10, apple.getRollMultiplier());
    }

}
