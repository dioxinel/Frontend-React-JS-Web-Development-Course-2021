class Api {
  constructor() {
    this.url = "https://api-nodejs-todolist.herokuapp.com/";
    this.headers = { "Content-Type": "application/json" };
  }

  async register({...input}) {
    const res = await fetch(`${this.url}user/register`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({...input})
    });
    const data = await res.json();
    console.log(data)
    this.headers.Authorization = `Bearer ${data.token}`;
  }

  async login({...input}) {
    const res = await fetch(`${this.url}user/login`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({...input})
    });
    const data = await res.json();
    this.headers.Authorization = `Bearer ${data.token}`;
  }

  // Написати функцію яка повертає масив ToDo елементів із API
  async fetchAllTodoItems() {
    const res = await fetch('https://api-nodejs-todolist.herokuapp.com/task', {
      method: "GET",
      headers: this.headers
    });
    const data = await res.json();
    return data
  }

  // Написати функцію яка відсилає ToDo елемент до API та повертає результат
  async addTodoItem(todoDescription) {
    const res = await fetch('https://api-nodejs-todolist.herokuapp.com/task', {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({description: todoDescription})
    });
    const data = await res.json();
    return data
  }

  // Написати функцію яка видаляє ToDo елемент з API
  async removeTodoItem(id) {
    const res = await fetch(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, {
      method: "DELETE",
      headers: this.headers,
    });
    const data = await res.json();
    return data
  }

  // Написати функцію яка оновляє ToDo елемент у API
  async updateTodoItem(id, completed) {
    const res = await fetch(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, {
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify({completed})
    });
    const data = await res.json();
    return data
  }
}

export default new Api();
