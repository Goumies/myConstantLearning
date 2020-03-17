package org.goumiesland.factory;

import java.util.ArrayList;
import java.util.List;

public abstract class Vehicle {

    List<VehiclePart> vehicleParts = new ArrayList<>();
    Wheels wheels = new Wheels();

    public Vehicle() {
        this.createVehicle();
    }

    public abstract void createVehicle();

    public List<VehiclePart> getVehicleParts() {
        return vehicleParts;
    }
}
