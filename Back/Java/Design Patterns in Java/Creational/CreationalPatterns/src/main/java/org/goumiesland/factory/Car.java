package org.goumiesland.factory;

public class Car extends Vehicle {
    @Override
    public void createVehicle() {
        vehicleParts.add(new VehicleEngine());
        vehicleParts.add(new SteeringWheel());
        wheels.add(new Wheel());
        wheels.add(new Wheel());
        wheels.add(new Wheel());
        wheels.add(new Wheel());
        vehicleParts.add(wheels);
    }
}
