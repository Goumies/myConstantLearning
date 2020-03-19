package org.goumiesland.structural.decorator;

public class MeatDecorator extends SandwichDecorator {

	// Concrete decorator

	public MeatDecorator(Sandwich customSandwich) {
		super(customSandwich);
	}

	public String make() {
		return customSandwich.make() + addMeat();
	}

	private String addMeat() {
		return " + turkey";
	}
}
