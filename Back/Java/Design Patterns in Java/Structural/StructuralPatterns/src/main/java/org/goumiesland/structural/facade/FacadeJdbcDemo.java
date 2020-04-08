package org.goumiesland.structural.facade;

import java.util.List;

public class FacadeJdbcDemo {

    public static void main(String... args) {

        JdbcFacade jdbcFacade = new JdbcFacade();

        jdbcFacade.createTable();

        System.out.println("Table created.");

        jdbcFacade.insertIntoTable();

        System.out.println("Record inserted.");

        List<JdbcFacade.Address> addresses = jdbcFacade.getAddresses();

        for (JdbcFacade.Address address : addresses) {
            System.out.println("From Main : " + address.getId() + " " + address.getStreetName() + " " + address.getCity());
        }
    }
}

