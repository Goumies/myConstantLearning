package org.goumiesland.prototype;

public class MyPrototypeDemo {
    public static void main(String[] args) throws CloneNotSupportedException {
        Registry registry = new Registry();

        Movie movie = (Movie) registry.createItem(ItemType.MOVIE);
        movie.setTitle("Creational Patterns in Java");

        System.out.println(movie);
        System.out.println(movie.getTitle());
        System.out.println(movie.getRuntime());
        System.out.println(movie.getUrl());

        Movie anotherMovie = (Movie) registry.createItem(ItemType.MOVIE);
        anotherMovie.setTitle("Gang of Four");
        anotherMovie.setRuntime("1h30");
        anotherMovie.setUrl("www.gangoffour.com");

        System.out.println(anotherMovie);
        System.out.println(anotherMovie.getTitle());
        System.out.println(anotherMovie.getRuntime());
        System.out.println(anotherMovie.getUrl());

        Book book = (Book) registry.createItem(ItemType.BOOK);
        book.setTitle("Effective Java");
        book.setNumberOfPages(399);
        book.setUrl("www.effectivejava.com");

        System.out.println(book);
        System.out.println(book.getTitle());
        System.out.println(book.getNumberOfPages() + " pages");
        System.out.println(book.getUrl());
    }
}
