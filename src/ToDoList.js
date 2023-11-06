import React, { useState } from 'react'
import "./ToDoList.css"

function ToDoList() {

    let [Todolist,updatetodolist] = useState([{id:1,task:"learn reactjs"},{id:2,task:"learn angular"}])

    let[todoinput,updatetodoinput] = useState()



    let nextid = id + 1

    function addnewtodolist(){
        if (todoinput ==="")
        {
            alert("Add some task")
        }
        else
        { 
            let newtodos = [...Todolist,
            {
                id:nextid,task:todoinput
            }
            ]
            updatetodolist(newtodos)
            updatetodoinput("")
            nextid=nextid++
        }
    }

    function deletetodo(id) {
        let updatedtodo = Todolist.filter((todo) => todo.id !== id);
        updatetodolist(updatedtodo);
      }

 

  return (

    <div className='container mt-5 w-50'>
        <h3 className='text-center'>ToDo App Using React</h3>
        <div className='input-group'>
            <input className='form-control' onChange={(e)=>{
                let task = e.target.value
                updatetodoinput(task)
            }} type='text' value={todoinput}/>
            <button onClick={()=>{addnewtodolist()}} className='btn btn-primary'>Add ToDo</button>
        </div>
        <ul className='list-group mt-3'>
            {
                Todolist.map(
                    (todo)=>{
                        return(
                            <li className='list-group-item'>
                                
                                <p>{todo.task} id:{todo.id}</p>
                                <button  onClick={()=>{
                                    deletetodo(todo.id)
                                }} className='btn'>❌</button>
                            </li>
                        )
                    }
                )
                    
                }
            
        </ul>
      
    </div>
  )
}

export default ToDoList
