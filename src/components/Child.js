import React,{useState} from "react";
import ReactDOM from "react-dom";

const Child = ({todoList, getId}) => {


    return(
        <div>
            <ul>
                <h1>Child Component</h1>
                {
                    todoList.map((each) => (
                        <li key = {each.id}>
                            {each.content}

                            {
                            (each.status) 
                            &&
                            <button onClick={() => getId(each.id)}> Complete </button>
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Child;