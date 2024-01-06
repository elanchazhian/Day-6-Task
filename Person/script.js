class Person {
    constructor(firstName, lastName, education, place) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.education = education;
      this.place = place;
  
      this.getFullName = function () {
        return this.firstName + " " + this.lastName;
      };
    }
  }
  
  let personOne = new Person( "Elanchazhian", "Manoharan", "B.sc Mathematics", "Karaikal" );
  
  console.log(personOne.getFullName());
  console.log(personOne.education);