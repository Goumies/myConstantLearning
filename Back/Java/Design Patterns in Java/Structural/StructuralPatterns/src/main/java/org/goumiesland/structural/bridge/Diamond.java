package org.goumiesland.structural.bridge;

public class Diamond extends Shape {
    public Diamond(Color color) {
        super(color);
    }

    @Override
    public void applyColor() {
        color.applyColor();
    }
}
