import { useMemo, useState } from 'react'
import './App.css'

type Todo = {
  id: number
  title: string
  completed: boolean
}

const initialTodos: Todo[] = [
  { id: 1, title: 'Review pull request feedback', completed: true },
  { id: 2, title: 'Write component tests', completed: false },
  { id: 3, title: 'Polish dashboard interface', completed: false },
]

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  const [newTodo, setNewTodo] = useState('')
  const [filter, setFilter] = useState<'all' | 'active' | 'done'>('all')

  const filteredTodos = useMemo(() => {
    if (filter === 'active') return todos.filter((todo) => !todo.completed)
    if (filter === 'done') return todos.filter((todo) => todo.completed)
    return todos
  }, [todos, filter])

  const completedCount = todos.filter((todo) => todo.completed).length
  const remainingCount = todos.length - completedCount

  const addTodo = () => {
    const title = newTodo.trim()
    if (!title) return

    setTodos((current) => [
      ...current,
      {
        id: Date.now(),
        title,
        completed: false,
      },
    ])

    setNewTodo('')
  }

  const toggleTodo = (id: number) => {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  const deleteTodo = (id: number) => {
    setTodos((current) => current.filter((todo) => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos((current) => current.filter((todo) => !todo.completed))
  }

  return (
    <main className="page">
      <section className="todo-shell">
        <header className="header">
          <div>
            <span className="label">Simple task manager</span>
            <h1>Today</h1>
          </div>

          <div className="summary">
            <span>{remainingCount}</span>
            <small>left</small>
          </div>
        </header>

        <form
          className="add-form"
          onSubmit={(event) => {
            event.preventDefault()
            addTodo()
          }}
        >
          <input
            value={newTodo}
            onChange={(event) => setNewTodo(event.target.value)}
            placeholder="Add a new task"
            aria-label="Add a new task"
          />

          <button type="submit">Add</button>
        </form>

        <nav className="tabs" aria-label="Todo filters">
          {(['all', 'active', 'done'] as const).map((item) => (
            <button
              key={item}
              type="button"
              className={filter === item ? 'selected' : ''}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </nav>

        <ul className="list">
          {filteredTodos.length === 0 ? (
            <li className="empty">No tasks to show.</li>
          ) : (
            filteredTodos.map((todo) => (
              <li key={todo.id} className={todo.completed ? 'todo done' : 'todo'}>
                <button
                  type="button"
                  className="toggle"
                  onClick={() => toggleTodo(todo.id)}
                  aria-label={`Mark ${todo.title} as ${
                    todo.completed ? 'active' : 'done'
                  }`}
                >
                  <span />
                </button>

                <span className="title">{todo.title}</span>

                <button
                  type="button"
                  className="remove"
                  onClick={() => deleteTodo(todo.id)}
                  aria-label={`Delete ${todo.title}`}
                >
                  Remove
                </button>
              </li>
            ))
          )}
        </ul>

        <footer className="footer">
          <span>
            {completedCount} completed · {todos.length} total
          </span>

          <button type="button" onClick={clearCompleted}>
            Clear completed
          </button>
        </footer>
      </section>
    </main>
  )
}

export default App