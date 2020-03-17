package org.goumiesland.factory;

public class MotorBike extends Vehicle {
    @Override
    public void createVehicle() {
        vehicleParts.add(new VehicleEngine());
        vehicleParts.add(new HandleBar());
        wheels.add(new Wheel());
        wheels.add(new Wheel());
        vehicleParts.add(wheels);
    }
}
