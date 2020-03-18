package org.goumiesland.structural.bridge;

public class Shape2BridgeDemo {

	public static void main(String[] args) {
		Color blue = new Blue();

		Shape square = new Square(blue);

		Color red = new Red();

		Shape circle = new Circle(red);

		Color green = new Green();

		Shape diamond = new Diamond(green);

		square.applyColor();
		circle.applyColor();
		diamond.applyColor();
	}

}
