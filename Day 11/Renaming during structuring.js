const r = {
    width: 200,
    height: 1,
    area: 200
  }
  let { width: w, height: h, area: a, perimeter: p } = r
  
  console.log(w, h, a, p)




  
  /*If the key is not found in the object the variable will be assigned to undefined. 
  Sometimes the key might not be in the object, in that case we can give a default value during declaration */
  const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }
  let { width, height, area, perimeter = 60 } = rectangle
  
  console.log(width, height, area, perimeter) //20 10 200 60
  //Let us modify the object:width to 30 and perimeter to 80

  