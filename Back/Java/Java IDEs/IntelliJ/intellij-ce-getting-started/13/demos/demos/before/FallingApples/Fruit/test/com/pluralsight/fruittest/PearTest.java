package com.pluralsight.fruittest;

import com.pluralsight.fruit.Pear;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/**
 * Created by David Starr.
 */
public class PearTest {

    private Pear pear;

    @Before
    public void BeforeEach() {
        pear = new Pear();
    }

    @Test
    public void KiwiNameTest() {
        Assert.assertEquals("Pear", pear.getName());
    }

    @Test
    public void KiwiRollMutiplierTest() {
        Assert.assertEquals(0, pear.getRollMultiplier());
    }


}
