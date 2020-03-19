package org.goumiesland.structural.decorator;

public class DressingDecorator extends SandwichDecorator {

	// Adding functionality through composition
	public DressingDecorator(Sandwich customSandwich) {
		super(customSandwich);
	}

	public String make() {
		return customSandwich.make() + addDressing();
	}

	private String addDressing() {
		return " + mustard";
	}

}
