import { useRef, useState, use } from "react"
import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import { Dialog } from "./components/Dialog"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import { SubHeading } from "./components/SubHeading"
import { ToDoItem } from "./components/ToDoItem"
import { ToDoList } from "./components/ToDoList"
import { TextInput } from "./components/TextInput"
import { Button } from "./components/Button"
import { TodoForm } from "./components/TodoForm"
import TodoContext from "./components/TodoProvider/TodoContext"
import { TodoGroup } from "./components/TodoGroup"

// const todos = [
//   {
//     id: 1,
//     description: "JSX e componentes",
//     completed: false,
//     createdAt: "2022-10-31"
//   },
//   {
//     id: 2,
//     description: "Props, state e hooks",
//     completed: false,
//     createdAt: "2022-10-31"
//   },
//   {
//     id: 3,
//     description: "Ciclo de vida dos componentes",
//     completed: false,
//     createdAt: "2022-10-31"
//   },
//   {
//     id: 4,
//     description: "Testes unitários com Jest",
//     completed: false,
//     createdAt: "2022-10-31"
//   }
// ]
// const completed = [
//   {
//     id: 5,
//     description: "Controle de inputs e formulários controlados",
//     completed: true,
//     createdAt: "2022-10-31"
//   },
//   {
//     id: 6,
//     description: "Rotas dinâmicas",
//     completed: true,
//     createdAt: "2022-10-31"
//   }
// ]

function App() {

  const [showDialog, setShowDialog] = useState(false)
  const { todos, addTodo } = use(TodoContext)

  const toggleDialog = () => {
    setShowDialog(!showDialog)
  }

  const handleFormSubmit = (formData) => {
    addTodo(formData)
    toggleDialog()
  }

    // const [todos, setTodos] = useState([{
    //   id: 1,
    //   description: "JSX e componentes",
    //   completed: false,
    //   createdAt: "2022-10-31"
    // },
    // {
    //   id: 2,
    //   description: "Controle de inputs e formulários controlados",
    //   completed: true,
    //   createdAt: "2022-10-31"
    // }])

    // const toogleDialog = () => {
    //   setShowDialog(!showDialog)
    //   //console.log('alternar modal')
    // }

    // const addTodo = (formData) => {
    //   const description = formData.get('description')
    //   setTodos(prevState => {
    //     const todo = {
    //       id: prevState.length + 1,
    //       description: description,
    //       completed: false,
    //       createdAt: new Date().toISOString()
    //     }
    //     return [...prevState, todo]
    //   })
    //   console.log('precisamos add o novo todo')
    //   toogleDialog()
    // }

    // const toggleTodoCompleted = (todo) => {
    //   setTodos(prevState => {
    //     return prevState.map(t => {
    //       if (t.id == todo.id) {
    //         return {
    //           ...t,
    //           completed : !t.completed
    //         }
    //       }
    //       return t
    //     })
    //   })
    // }

    // const deleteTodo = (todo) => {
    //   setTodos(prevState => {
    //     return prevState.filter(t => t.id != todo.id)
    //   })
    // }

    return (
      <main>
        <Container>
          <Header>
            <Heading>
              <IconSchool /> Plano de estudos
            </Heading>
          </Header>

          <ChecklistsWrapper>
            <TodoGroup
              heading="Para estudar"
              items={todos.filter(t => !t.completed)}
            />

            <TodoGroup
              heading="Concluído"
              items={todos.filter(t => t.completed)}
            />


            {/* <SubHeading>Para estudar</SubHeading>
          <ToDoList>
            {todos.filter(t => !t.completed).map(function (t) {
              return <ToDoItem
                key={t.id}
                item={t}
                onToggleCompleted={toggleTodoCompleted}
                onDeleteTodo={deleteTodo}
              />
            })}
          </ToDoList>
          <SubHeading>Concluído</SubHeading>
          <ToDoList>
            {todos.filter(t => t.completed).map(function (t) {
              return <ToDoItem
                key={t.id}
                item={t}
                onToggleCompleted={toggleTodoCompleted}
                onDeleteTodo={deleteTodo}
              />
            })}
          </ToDoList> */}
            <Footer>
              <Dialog isOpen={showDialog} onClose={toggleDialog}>
                <TodoForm onSubmit={handleFormSubmit} />
              </Dialog>
              <FabButton onClick={toggleDialog}>
                <IconPlus />
              </FabButton>
            </Footer>
          </ChecklistsWrapper>
        </Container>
      </main>
    )
  }

  export default App
