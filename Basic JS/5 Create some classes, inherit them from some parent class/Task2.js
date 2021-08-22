function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
 }

 class TodoItem {
   constructor(name) {
     this.id = generateId();
     this.name = name
     this.checked = false;
   }

   get checked() {
     return this._checked
   }

   set checked(value) {
     if (typeof value === 'boolean') this._checked = value;
   }

 }

 class TodoList {
  constructor(name) {
    this.id = generateId();
    this.name = name
    this.items = [];
  }

  addItem(item) {
    if (item instanceof TodoItem) {
      return this.items = [...this.items, item]
    }
    console.log('Incorrect input')
  }

  removeItemById(id) {
    this.items = this.items.filter((item) => {
      if (item.id !== id) return true
    })
  }

  getItemById(id) {
    return this.items.find((item) => {
      if (item.id === id) return true
    })
  }

}
const todoListItem = new TodoList('Today List');

const task1 = new TodoItem('To cook')
const task2 = new TodoItem('To eat')
const task3 = new TodoItem('To walk')
const task4 = new TodoItem('To sleep')

todoListItem.addItem(task1)
todoListItem.addItem(task2)
todoListItem.addItem(task3)
todoListItem.addItem(task4)
console.log(todoListItem)

task2.checked = true;
todoListItem.items[3].checked = true;
console.log(todoListItem)

todoListItem.removeItemById(todoListItem.items[0].id)
todoListItem.removeItemById(todoListItem.items[2].id)

console.log(todoListItem)