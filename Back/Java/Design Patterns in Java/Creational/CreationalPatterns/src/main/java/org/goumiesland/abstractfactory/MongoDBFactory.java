package org.goumiesland.abstractfactory;

public class MongoDBFactory extends QueryFactory {
    @Override
    public MyQuery getQuery(QueryType type) {
        switch (type) {
            case ALL:
                return new MongoDBAllQuery();
            case ONE:
                return new MongoDBOneQuery();
            default:
                return null;
        }
    }

    @Override
    public QueryValidator getQueryValidator(QueryType type) {
        switch (type) {
            case ALL:
                return new MongoDBAllQueryValidator();
            case ONE:
                return new MongoDBOneQueryValidator();
            default:
                return null;
        }
    }
}
