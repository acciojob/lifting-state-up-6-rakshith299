import React,{useState} from "react";
import ReactDOM from "react-dom";
import Child from "./Child";


const Parent = () => {

    const [state, setState] = useState(
        [
            {'id': 1, 'content': 'Learn React','status': true},
            {'id': 2,'content': 'Build a React app','status': true},
            {'id': 3,'content': 'Deploy the React app','status': true}
        ]);

    

    function makeItFalse(id){
        let updatedTodo = state.map((each) => {
            if(each.id === id){
                return {...each, status: false}
            }

            return each;
        })

        setState(updatedTodo)
    }

    return(
        <div>
            <h1>Parent Component</h1>
            <Child todoList = {state} getId = {makeItFalse}/>
        </div>
    )
}

export default Parent;