export type todoType = {
  id: string,
  name: string,
  completed: boolean,
}

export type todoListProps = {
  todos: Array<todoType>,
  toggleTodo: (id: string) => void,
}

export default todoType;