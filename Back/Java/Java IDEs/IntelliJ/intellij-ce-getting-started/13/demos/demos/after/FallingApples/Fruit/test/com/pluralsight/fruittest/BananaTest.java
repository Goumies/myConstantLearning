package com.pluralsight.fruittest;

import com.pluralsight.fruit.Banana;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/**
 * Created by David Starr.
 */
public class BananaTest {

    private Banana banana;

    @Before
    public void setUp() throws Exception {
        banana = new Banana();
    }

    @Test
    public void getName() throws Exception {
        Assert.assertEquals("Banana", banana.getName());
    }

    @Test
    public void getRollMultiplier() throws Exception {
        Assert.assertEquals(0, banana.getRollMultiplier());
    }

}