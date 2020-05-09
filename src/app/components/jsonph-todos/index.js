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
        <>
            <ul>
                {todos.map(t => {
                    return <li key={t.id}>
                        {t.title}
                    </li>
                })}
            </ul>
        </>
    )
}

export default TodosList;