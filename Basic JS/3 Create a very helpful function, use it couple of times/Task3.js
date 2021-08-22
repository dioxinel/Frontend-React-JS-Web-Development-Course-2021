const cat = {
  sound: 'meow',
  greet: function() {
    _this = this
    setTimeout(function() {
        console.log(_this.sound)
    }, 
    0)
  }
 };
 cat.greet();