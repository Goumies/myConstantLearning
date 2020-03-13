package org.goumiesland.singleton;

public class DbSingleton {

    private static DbSingleton instance = null;

    private DbSingleton() {}

    public static DbSingleton getInstance() {
        // Not thread safe but substantial performance improvement
        if(instance == null)
            instance = new DbSingleton();

        return instance;
    }
}
