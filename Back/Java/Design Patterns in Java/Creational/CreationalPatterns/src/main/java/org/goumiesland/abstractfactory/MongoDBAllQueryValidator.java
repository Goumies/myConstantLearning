package org.goumiesland.abstractfactory;

public class MongoDBAllQueryValidator implements QueryValidator {
    @Override
    public boolean isValid(MyQuery query) {
        return false;
    }
}
