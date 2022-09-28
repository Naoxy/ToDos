import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Table, Form, Button } from 'react-bootstrap'
import { TodosContext } from './App'
import useAPI from './UseAPI'
import { v4 as uuidv4 } from 'uuid'


function ToDoList() {
  // receive state and dispatch from index.js
  const { state, dispatch } = useContext(TodosContext)
  const [todoText, setTodoText] = useState("")
  const [editMode, setEditMode] = useState(false)
  const [editTodo, setEditTodo] = useState(null)
  const buttonTitle = editMode ? "Edit" : "Add"; 

  const endpoint = "https://run.mocky.io/v3/"
  const savedTodos = useAPI(endpoint)

  useEffect(() => {
    dispatch({type: "get", payload: savedTodos})
  }, [dispatch, savedTodos]) // dispatch whoever savedTodos changes

  const handleSubmit = async event => {
    event.preventDefault() 
    if(editMode) {
      await axios.patch(endpoint + editTodo.id, {text:todoText})
      dispatch({type: 'edit', payload:{...editTodo, text:todoText}})
      setEditMode(false)
      setEditTodo(null)
    } else {
      const newTodo = {id: uuidv4(), text: todoText}
      await axios.post(endpoint, newTodo)
      dispatch({type: 'add', payload: newTodo})
    }
    setTodoText("") // to clear field after adding
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formBasicEmail'>
          <Form.Control type='text' placeholder='Enter To Do' onChange={event => setTodoText(event.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          {buttonTitle}
        </Button>
      </Form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>To Do</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tBody>
          {state.todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.text}</td>
              <td onClick={() => {
              setTodoText(todo.text)
              setEditMode(true)
              setEditTodo(todo)
              }}>
                <Button variant='link'>Edit</Button>
              </td>
              <td onClick={ async () => {
                await axios.delete(endpoint + todo.id)
                dispatch({type: 'delete', payload:todo})}}>
                <Button variant='link'>Delete</Button>
              </td>
            </tr>
          ))}
          </tBody> 
      </Table>
    </>
  )
}

export default ToDoList