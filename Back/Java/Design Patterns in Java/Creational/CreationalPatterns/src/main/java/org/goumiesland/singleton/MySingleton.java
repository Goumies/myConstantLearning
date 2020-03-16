package org.goumiesland.singleton;

public class MySingleton {

    private static volatile MySingleton instance = null;

    private MySingleton() {
        if (instance != null) {
            throw new RuntimeException("Use getInstance() method for creation");
        }
    }

    public static MySingleton getInstance() {
        if (instance == null) {
            synchronized (MySingleton.class) {
                if (instance == null) {
                    instance = new MySingleton();
                }
            }
        }
        return instance;
    }
}
