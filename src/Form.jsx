import React, { Fragment, useContext, useState } from 'react'
import { taskContext } from './taskContext'

const Form = () =>{
    const [task,setTask]=useState("")
    const {taskItem,setTaskItam}=useContext(taskContext)

    const handelForm=(event)=>{
        setTask(event.target.value)
    }

    const handelAddItem=(event)=>{
        event.preventDefault();
        setTaskItam([...taskItem,{id:Math.random(), title:task ,done:false}])
    }
    return(
        <Fragment>
             <h4 className="text-center text-info text-shadow text-black fw-lighter ">به تودو خوش آمدید</h4>
             <form onSubmit={handelAddItem}>
                 <div className="form-group d-flex">
                    <input type="text" className="form-control" onChange={handelForm}/>
                    <button type="submit" className="btn btn-success me-1"  >ثبت</button>
                </div>
                
            </form>
        </Fragment>
    )
}

export default Form;