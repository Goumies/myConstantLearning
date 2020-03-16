package org.goumiesland.singleton;

public class MySingletonDemo {
    public static void main(String[] args) {
        MySingleton instance = MySingleton.getInstance();
        System.out.println(instance);
        MySingleton anotherInstance = MySingleton.getInstance();
        System.out.println(anotherInstance);
    }
}
