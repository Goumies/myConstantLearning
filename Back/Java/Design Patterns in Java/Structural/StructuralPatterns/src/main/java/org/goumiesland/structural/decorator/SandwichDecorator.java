package org.goumiesland.structural.decorator;

public abstract class SandwichDecorator implements Sandwich {

	// Decorator should be treated as objects

	// All sub decorators will build apon
	protected Sandwich customSandwich;

	// customSandwich can be from a concrete class or another decorator
	public SandwichDecorator(Sandwich customSandwich) {
		this.customSandwich = customSandwich;
	}

	public String make() {
		return customSandwich.make();
	}
}
