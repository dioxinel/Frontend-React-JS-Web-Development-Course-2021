const car = {
  name : "Tesla",
  model : "X",
 };
  
 function showCarInfo() {
    console.log(this.name, this.model)
 }
 showCarInfo()

showCarInfo.bind(car)()
