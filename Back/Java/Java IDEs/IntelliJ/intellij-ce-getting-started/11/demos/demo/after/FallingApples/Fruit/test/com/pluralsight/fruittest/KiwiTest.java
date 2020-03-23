package com.pluralsight.fruittest;

import com.pluralsight.fruit.Kiwi;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/**
 * Created by David Starr.
 */
public class KiwiTest {

    private Kiwi kiwi;

    @Before
    public void BeforeEach() {
        kiwi = new Kiwi();
    }

    @Test
    public void KiwiNameTest() {
        Assert.assertEquals("Kiwi", kiwi.getName());
    }

    @Test
    public void KiwiRollMutiplierTest() {
        Assert.assertEquals(0, kiwi.getRollMultiplier());
    }


}
