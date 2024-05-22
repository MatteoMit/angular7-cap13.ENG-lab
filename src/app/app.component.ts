import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { country } from './model/country';
import { contact } from './model/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Template driven forms';

  countryList: country[] = [
    new country("1", "Europe"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
  
  contact:contact = new contact();

  ngOnInit() {
    this.contact = {
      firstname: "",
      lastname: "",
      email: "",
      gender: "male",
      isMarried: true,
      country: "1",
      address: { city: "Rome", street: "Perry Cross Rd", pincode: "400050" }
    };
  };

  onSubmit(contactForm: FormGroup) {
    console.log(contactForm.value);
  }
}

