package org.goumiesland.singleton;

public class DbSingleton {

    // The instance remains a Singleton through every JVM changes
    private static volatile DbSingleton instance = null;

    private DbSingleton() {
        // Avoids the reflection class and reinstanciation from anywhere
        // https://www.geeksforgeeks.org/reflection-in-java/
        if (instance != null)
            throw new RuntimeException("Use getInstance() method to create");
    }

    public static DbSingleton getInstance() {
        if (instance == null)
            synchronized (DbSingleton.class) {
                if (instance == null)
                    instance = new DbSingleton();
            }

        return instance;
    }
}
