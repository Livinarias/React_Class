// This is a spread example
const List = [1,2,3]
const NewList = [...List,4]

console.log(NewList)

const Person = {
  name: 'MAX'
}

const NewPerson = {
  ...Person,
  Age: 12
}

console.log(NewPerson)
