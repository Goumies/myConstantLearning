package org.goumiesland.newpatternstoexistingapi;

import java.util.function.Function;

public class MainComparator {
    public static void main(String[] args) {
        Comparator<Person> ageComparator = (first, second) -> second.getAge() - first.getAge();
        Comparator<Person> firstNameComparator = (first, second) -> second.getFirstName().compareTo(first.getFirstName());
        Comparator<Person> lastNameComparator = (first, second) -> second.getLastName().compareTo(first.getLastName());

        // Function as a parameter
        Function<Person, Integer> ageExtractor = person -> person.getAge();
        Function<Person, String> firstNameExtractor = person -> person.getFirstName();
        Function<Person, String> lastNameExtractor = person -> person.getLastName();

        // Generified version
        Comparator<Person> comparatorPersonAge = Comparator.comparing(Person::getAge);
        Comparator<Person> comparatorPersonLastName = Comparator.comparing(Person::getLastName);

        // Second comparison, in case of equality
        Comparator<Person> comparator = comparatorPersonAge.thenComparing(comparatorPersonLastName);

        Comparator<Person> chainedComparator = Comparator
                .comparing(Person::getLastName)
                .thenComparing(Person::getFirstName)
                .thenComparing(Person::getAge);
    }
}
