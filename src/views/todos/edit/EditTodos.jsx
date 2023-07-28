import { getOneTodo } from '@/store/todos/todoslice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Router, useRouter } from 'next/router'
import EditForm from './EditForm'



const EditTodos = ({id}) => {

    const router = useRouter()
    const dispatch = useDispatch()
    const todo = useSelector(state => state.todos)
    console.log(todo)
    useEffect(() => {
        console.log(id)
      const getTodoById = async () => {
        dispatch(getOneTodo(id))
      }
        getTodoById()
    }, [id])
    
    console.log(todo)
    console.log(id)

    if (todo) {
        return (
            <div>
                <EditForm todo={todo}/>
            </div>
        )
    } else if (router.isFallback) {
        return <div>Loading...</div>
    } else {
        return null
    }
    

}

export default EditTodos