package org.goumiesland.factory;

public class VehicleFactory {

    public static Vehicle getVehicle(VehicleType type){
        switch (type){
            case CAR : {
                return new Car();
            }
            case MOTOR_BIKE : {
                return new MotorBike();
            }
            default : {
                return null;
            }
        }
    }
}
