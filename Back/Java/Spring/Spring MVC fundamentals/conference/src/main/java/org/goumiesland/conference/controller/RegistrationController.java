package org.goumiesland.conference.controller;

import org.goumiesland.conference.model.Registration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class RegistrationController {

    @GetMapping("registration")
    public String getRegistration(@ModelAttribute("registration") Registration registration) {
        return "registration";
    }

    @PostMapping("registration")
    public String addRegistration(@ModelAttribute("registration") Registration registration) {
        return "redirect:registration";
    }
    /*
        @GetMapping("old-registration")
        public String getOldRegistration(@ModelAttribute("registration") Registration registration) {
            return "registration";
        }


        @PostMapping("old-registration")
        public String addOldRegistration(@ModelAttribute("registration") Registration registration) {
            return "registration"; // keeps old input
        }
    */

}
