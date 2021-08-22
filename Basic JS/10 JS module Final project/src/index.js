import Api from './api.js';
import { asyncProvider } from './helpers.js'
import { insertSingleTodoToHtml, 
  insertAllTodosToHtml, 
  removeFromHtmlById, 
  updateTodoState,
} from './webApi.js'
  
 
// Написати функцію яка залогінює користувача, фетчить список ToDo елементів та добавляє їх на фронт (нові мають бути зверху)
window.login = () => {
  asyncProvider(
    async () => {
      await Api.login({
        email: "supertester3@gmail.com",
        password: "12345678",
      })
      const todos = await Api.fetchAllTodoItems()
      insertAllTodosToHtml(todos.data)
     }
  )
};

// Написати функцію яка реєструє користувача, фетчить список ToDo елементів та добавляє їх на фронт (нові мають бути зверху)
window.register = () => {
  asyncProvider(
    async () => {
      await Api.register({
        name: "Tester",
        email: "supertester3@gmail.com",
        password: "12345678",
        age: 20
      })
      const todos = await Api.fetchAllTodoItems()
      insertAllTodosToHtml(todos.data)   
     }
  )
};

// Написати функцію яка добавляє ToDo елемент до API та фронта
window.addTodo = () => {
  const input = document.getElementById("descriptionInput");
  const description = input.value;
  asyncProvider(
    async () => {
      const response = await Api.addTodoItem(description)
      if(response.success) {
        insertSingleTodoToHtml(description, response.data._id);
      }
      input.value = "";
    }
  )

};

// Написати функцію(приймає id та completed - поточний стан ToDo елемента) яка модифікує Todo елемента на API та фронті.
window.modifyTodo = (_id, completed) => {
  asyncProvider(
    async () => { 
      const response = await Api.updateTodoItem(_id, !completed)
      if(response.success) {
        return updateTodoState(_id)
      }
      
    }
  ) 
};

// Написати функцію(приймає id ) яка видаляє ToDo елемент із API та фронта.
window.removeTodo = (_id) => {
  asyncProvider(
    async () => { 
      const response = await Api.removeTodoItem(_id);
      if(response.success) {
        return removeFromHtmlById(_id)
      }
    }
  ) 

};
