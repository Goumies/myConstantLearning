package com.pluralsight.fruittest;

import com.pluralsight.fruit.Orange;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/**
 * Created by David Starr.
 */
public class OrangeTest {

    private Orange orange;

    @Before
    public void BeforeEach() {
        orange = new Orange();
    }

    @Test
    public void KiwiNameTest() {

        Assert.assertEquals("Orange", orange.getName());
    }

    @Test
    public void KiwiRollMutiplierTest() {

        Assert.assertEquals(100, orange.getRollMultiplier());
    }

}
