package org.goumiesland.dataprocessingwithlambdasandcollectionframework;

import org.goumiesland.newpatternstoexistingapi.Person;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Main{
    public static void main(String[] args){
        Person firstPerson = new Person("Neo", "Dertal", 26);
        Person secondPerson = new Person("Malicia", "Mice", 18);
        Person thirdPerson = new Person("Ethel", "Rice", 24);

        List<Person> people = new ArrayList<>();
        people.add(firstPerson);
        people.add(secondPerson);
        people.add(thirdPerson);

        people.forEach(System.out::println);
        people.removeIf(person -> person.getAge() < 20);
        System.out.println(people);

        List<String> names = new ArrayList();
        names.add( "Alberta");
        names.add("Fatoumata");
        names.add("Debora");
        names.replaceAll(String::toUpperCase);
        System.out.println(names);

        /*
        people.sort(
                Comparator.comparing(Person::getLastName)
                          .thenComparing(Person::getAge)
        );
        */

        List<Person> people1 = new ArrayList<>();
        people1.add(firstPerson);
        people1.add(secondPerson);
        people1.add(thirdPerson);
        List<Person> people2 = new ArrayList<>();

        Map<String, List<Person>> map = new HashMap();

        map.put("Paris", people1);
        map.put("Beijin", Collections.EMPTY_LIST);

        people2.add(secondPerson);
        people2.add(secondPerson);
        people2.add(secondPerson);
        people2.add(secondPerson);
        people2.add(secondPerson);

        people1.removeIf(person -> person.getAge() > 20);

        map.put("Kinshasa", people2);

        map.forEach(
                (city, list) ->
                        System.out.println(city + " : " + list.size() + " people")
        );

        System.out.println(map.getOrDefault("Milan", Collections.EMPTY_LIST));
        System.out.println(map.getOrDefault("Paris", Collections.EMPTY_LIST));
        map.putIfAbsent("London", new ArrayList());
        map.get("London").add(thirdPerson);
        System.out.println(map.getOrDefault("London", Collections.EMPTY_LIST));

        Map<String, List<Person>> map1 = new HashMap<>();
        Map<String, List<Person>> map2 = new HashMap<>();
        map2.forEach(
                (key, value) ->
                        map1.merge(
                                key, value,
                                (existingPeople, newPeople) -> {
                                    existingPeople.addAll(newPeople);
                                    return existingPeople;
                                }
                        )
        );
    }
}
