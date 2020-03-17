package org.goumiesland.abstractfactory;

public class MongoDBOneQueryValidator implements QueryValidator {
    @Override
    public boolean isValid(MyQuery query) {
        return false;
    }
}
