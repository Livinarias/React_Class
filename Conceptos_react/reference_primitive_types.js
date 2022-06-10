// this file show the reference primitive types

const Person = {
  name: 'Pepito'
};

const NewPerson = {
  ...Person
};
      
Person.name = 'Andres';

console.log(NewPerson,Person);
