import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash , faSquareCheck , faSquareMinus} from '@fortawesome/free-solid-svg-icons'
import { taskContext } from './taskContext';
const List=()=>{
    const {taskItem , setTaskItam}=useContext(taskContext)

    const handelSuccess = (id )=>{
         const index=taskItem.findIndex(c=>c.id ==id)
         let newTaskItem=[...taskItem]
         newTaskItem[index].done=true
         setTaskItam(newTaskItem)
    }
    const handelNotSuccess = (id )=>{
        const index=taskItem.findIndex(c=>c.id ==id)
        let newTaskItem=[...taskItem]
        newTaskItem[index].done=false
        setTaskItam(newTaskItem)
   }
   const handelDeleat = (id )=>{
    let newTaskItem=taskItem.filter(c=>c.id !=id)
    setTaskItam(newTaskItem)
  
    
}

    if(taskItem.length){
        return(
            <ul className='list-group m-0 p-0 mt-2 mb-2 '>
              {
                taskItem.map(c=>(
                    
                    <li className={`list-group-item  d-flex justify-content-between  ${c.done?"list-group-item-success":""}`}>
                    {c.title}
                    <span>
                        {
                            c.done?(
                                <i className='text-success m-2 pointer'><FontAwesomeIcon icon={faSquareCheck}  onClick={()=>{handelNotSuccess(c.id)}} /></i>
                            ):(
                                <i className='text-warning m-2 pointer'><FontAwesomeIcon icon={faSquareMinus} onClick={()=>{handelSuccess(c.id)}} /></i>
                            )
    
                        }
                        
                        
                        <i className='text-danger m-2 pointer'><FontAwesomeIcon icon={faTrash} onClick={()=>{handelDeleat(c.id)}}/></i>
              
                    </span>
                </li>
                ))
              }
               
            </ul>
        )

    }
    else{
        return(<h4 className='text-center text-danger text-shadow  fw-lighter m-4'> آیتمی وجود ندارد ... !</h4>)
        

    }
    

}

export default List;