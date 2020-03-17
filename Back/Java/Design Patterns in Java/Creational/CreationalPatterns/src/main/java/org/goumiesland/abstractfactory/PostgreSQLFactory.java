package org.goumiesland.abstractfactory;

public class PostgreSQLFactory extends QueryFactory {
    @Override
    public MyQuery getQuery(QueryType type) {
        switch (type) {
            case ALL:
                return new PostgreSQLAllQuery();
            case ONE:
                return new PostgreSQLOneQuery();
            default:
                return null;
        }
    }

    @Override
    public QueryValidator getQueryValidator(QueryType type) {
        switch (type) {
            case ALL:
                return new PostgreSQLAllQueryValidator();
            case ONE:
                return new PostgreSQLOneQueryValidator();
            default:
                return null;
        }
    }
}
