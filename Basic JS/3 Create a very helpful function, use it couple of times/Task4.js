const dog = {
  sound: 'bark',
  greet: function() {
      setTimeout(() => { // fix code in this line
          console.log(this.sound)
      },0)
    }
 }
 dog.greet();