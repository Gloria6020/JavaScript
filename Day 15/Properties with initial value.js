class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
  }
  
  const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
  const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
  console.log(person1.score)
  console.log(person2.score)
  
  console.log(person1.skills)
  console.log(person2.skills)