package org.goumiesland.abstractfactory;

public class MyAbstractFactoryDemo {
    public static void main(String[] args) {
        QueryFactory abstractFactory = QueryFactory.getQueryFactory("MongoDB");

        MyQuery query = abstractFactory.getQuery(QueryType.ALL);

        System.out.println(query);

        abstractFactory = QueryFactory.getQueryFactory("PostgreSQL");

        MyQuery query2 = abstractFactory.getQuery(QueryType.ONE);

        System.out.println(query2);
    }
}
