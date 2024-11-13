import React from "react";
import '../src/style.css'
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import InputTask from "./components/InputTask";



function App() {


    return (
        <div className="container">
            <Header />
            <ToDoList />
        </div>
    )
}

export default App;