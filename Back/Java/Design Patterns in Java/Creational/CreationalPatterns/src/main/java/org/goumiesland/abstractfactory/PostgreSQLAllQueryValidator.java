package org.goumiesland.abstractfactory;

public class PostgreSQLAllQueryValidator implements QueryValidator {
    @Override
    public boolean isValid(MyQuery query) {
        return false;
    }
}
