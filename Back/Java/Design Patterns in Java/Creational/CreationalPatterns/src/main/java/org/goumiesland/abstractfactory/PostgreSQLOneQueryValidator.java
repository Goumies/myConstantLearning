package org.goumiesland.abstractfactory;

public class PostgreSQLOneQueryValidator implements QueryValidator {
    @Override
    public boolean isValid(MyQuery query) {
        return false;
    }
}
