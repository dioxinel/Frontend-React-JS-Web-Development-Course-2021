class classWithName {
  constructor() {
    this.name = 'Name';
    this.timeOut = setTimeout(() => {this.name = null}, 5000)
  }

  saveName() {
    clearTimeout(this.timeOut)
  }
}

const item = new classWithName()
item.saveName()
setTimeout(() => {console.log(item.name)}, 7000)