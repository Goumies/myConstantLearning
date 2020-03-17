package org.goumiesland.abstractfactory;

public abstract class QueryFactory {

    public static QueryFactory getQueryFactory(String database) {

        if (database.contains("SQL")) {
            return new PostgreSQLFactory();
        }
        return new MongoDBFactory();
    }

    public abstract MyQuery getQuery(QueryType type);

    public abstract QueryValidator getQueryValidator(QueryType type);
}
