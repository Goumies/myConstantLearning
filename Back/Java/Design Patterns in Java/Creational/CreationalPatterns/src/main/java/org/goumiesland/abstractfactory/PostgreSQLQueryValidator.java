package org.goumiesland.abstractfactory;

public class PostgreSQLQueryValidator implements QueryValidator {
    @Override
    public boolean isValid(MyQuery query) {
        return false;
    }
}
