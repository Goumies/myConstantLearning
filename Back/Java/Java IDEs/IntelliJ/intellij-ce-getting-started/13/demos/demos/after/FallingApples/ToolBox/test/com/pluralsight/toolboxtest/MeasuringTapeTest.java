package com.pluralsight.toolboxtest;

import com.pluralsight.toolbox.MeasuringTape;
import org.junit.Assert;
import org.junit.Test;

/**
 * Created by David Starr.
 */
public class MeasuringTapeTest {

    @Test
    public void MeasuringTapeInstanceIsNotNull() {
        MeasuringTape measuringTape = MeasuringTape.createMeasuringTape();

        Assert.assertNotNull(measuringTape);
    }

}
