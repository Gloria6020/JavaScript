const rect = {
    width: 20,
    height: 10
  }
  
const calculatePerimeter = ({ width, height }) => {
    return 2 * (width + height)
  }
  
  console.log(calculatePerimeter(rect)) // 60