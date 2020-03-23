package com.pluralsight.toolbox;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/**
 * Created by David Starr.
 */
public class MeasuringTapeTest {

    private static MeasuringTape measuringTape;

    @Before
    public void beforeAll() {

        measuringTape = MeasuringTape.createMeasuringTape();
    }

    @Test
    public void measuringTapeFactoryTest() {

        Assert.assertNotNull(measuringTape);
    }
}
