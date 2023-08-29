    //3.Write a “person” class to hold all the details.
    //-------------------------------------------------

    class person {
        constructor(firstName, lastName, age, email, mobile, city){
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email=email;
            this.mobile=mobile;
            this.city = city;
        }
        personDetails(){
            return `            Name: ${this.firstName} ${this.lastName}
            age: ${this.age}
            email: ${this.email}
            mobile: ${this.mobile}
            city: ${this.city}`;
        }
    }
    let person1 = new person("Ajith", "Kumar",27, "ajith@gmail.com", 9874563210, "Erode");
    let person2 = new person("Deva","Raj", 25, "deva23@gmail.com", 9080706050, "Salem");
    
    console.log(person1.personDetails());
//     console.log(person2.personDetails());
    
    //output for person1 :
    //--------------------
    
            // Name: Ajith Kumar
            // age: 27
            // email: ajith@gmail.com
            // mobile: 9874563210
            // city: Erode