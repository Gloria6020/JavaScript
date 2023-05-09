//Whenever we sort objects in an array, we use the object key to compare. objArr.sort(function (a, b) {
    objArr.sort(function (a, b) {
        if (a.key < b.key) return -1
        if (a.key > b.key) return 1
        return 0
      })
      
      // or
      
      objArr.sort(function (a, b) {
        if (a['key'] < b['key']) return -1
        if (a['key'] > b['key']) return 1
        return 0
      })
      
      const users = [
        { name: 'Asabeneh', age: 150 },
        { name: 'Brook', age: 50 },
        { name: 'Eyob', age: 100 },
        { name: 'Elias', age: 22 },
      ]
      users.sort((a, b) => {
        if (a.age < b.age) return -1
        if (a.age > b.age) return 1
        return 0
      })
      console.log(users) // sorted ascending
      // [{…}, {…}, {…}, {…}]