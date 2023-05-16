class Person {
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  
  const person = new Person()
  
  console.log(person)








  class Perso {
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  
  const perso1 = new Perso('Asabeneh', 'Yetayeh')
  const perso2 = new Perso('Lidiya', 'Tekle')
  const perso3 = new Perso('Abraham', 'Yetayeh')
  
  console.log(perso1)
  console.log(perso2)
  console.log(perso3)