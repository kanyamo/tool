import { v4 as uuidv4 } from "uuid";

class Todo {
  public id: string;
  public name: string;
  public completed: boolean;
  
  constructor(config: {
    id?: string,
    name: string,
    completed?: boolean,
  }) {
    this.id = config.id ?? uuidv4();
    this.name = config.name;
    this.completed = config.completed ?? false;
  };

  /**
   * 自分自身の完了状況をトグルするコマンド
   */
  toggleTodo() {
    this.completed = !this.completed;
  }
}

export default Todo;
