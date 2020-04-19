import React, { useEffect, useState } from 'react'

const TodosList = ({userId}) => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
            .then(response => response.json())
            .then(json => setTodos(json))
        return () => {
            //cleanup
        }
    }, [])
    return (
        <h1>JSON Placeholder - Todos List</h1>
    )
}

export default TodosList;