package org.goumiesland.conference.controller;

import org.goumiesland.conference.model.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @GetMapping("/user")
    public User getUser(@RequestParam(value = "firstname", defaultValue = "Romy") String firstname,
                        @RequestParam(value = "lastname", defaultValue = "Alula") String lastname,
                        @RequestParam(value = "age", defaultValue = "70") int age) {
        System.out.println("firstname : " + firstname);
        // Usually a service handles interactions w/ DB
        User user = new User();

        user.setFirstName(firstname);
        user.setLastName(lastname);
        user.setAge(age);
        return user; // returns actual body of the response
    }

    @PostMapping("/user")
    public User postUser(User user) {
        System.out.println("User first name : " + user.getFirstName());
        return user;
    }
}
