package org.goumiesland.factory;

public class MyFactoryDemo {
    public static void main(String[] args) {
        Vehicle vehicle = VehicleFactory.getVehicle(VehicleType.CAR);

        System.out.println(vehicle);

        vehicle = VehicleFactory.getVehicle(VehicleType.MOTOR_BIKE);

        System.out.println(vehicle);
    }
}
