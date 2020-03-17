package org.goumiesland.factory;

import java.util.ArrayList;
import java.util.List;

public class Wheels extends VehiclePart {
    List<Wheel> wheels = new ArrayList<>();

    public void add(Wheel wheel) {
        wheels.add(wheel);
    }
}
