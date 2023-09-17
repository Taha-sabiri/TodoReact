import React from "react";
import { ReactDOM ,useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Form from "./Form";
import List from "./List";
import {taskContext} from "./taskContext";



const App = () => {

  const [taskItem , setTaskItam]= useState([
    {
      id:1,
      title : "کار شماره ۱",
      done :true
    },
    {
      id:2,
      title : "کار شماره ۲",
      done :false
    },
    {
      id:3,
      title : "کار شماره ۳",
      done :false
    }
  ])

  return(
    
    <div className="container w-100 h-100 p-3">
      <div className="row h-100 justify-content-center align-align-items-start">
        <div className="col-12 col-md-8 col-lg-6 bg-light h_fit shadow rounded-3">
          <taskContext.Provider value={{
              taskItem,
              setTaskItam
          }}>
            <Form/>
            <List/>
          </taskContext.Provider>
        </div>

      </div>
    </div>
  
    
  )
}

export default App;
