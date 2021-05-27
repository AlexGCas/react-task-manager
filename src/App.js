import './App.css';
import React from 'react';
import tasks from './samples/task.json'
// components
import Task from './components/tasks.js'
import NewTask from './components/newtask.js'
class App extends React.Component{
  state = {
    tasks: tasks
  }
  status(element){
    if(element.done){
      let estado = 'completada'
      return estado
    }
    else{
      let estado = 'en proceso'
      return estado
    }
  }
 addnewTask = (title, description)=>{this.setState(
    {tasks: [...this.state.tasks, {title: title,
      descripcion: description, done: false, id: this.state.tasks.length}]})}
  removeTask = (TaskId)=>{
    this.setState({tasks: this.state.tasks.filter( task => task.id !== TaskId)})
  }
  //addnewTask = (elemento) =>{console.log(elemento)}
  render(){ 
    return(
      <div > 
        {this.state.tasks.map(element => <Task task = {element} 
          status = {this.status(element)} key = {element.id}
        onClick = {this.removeTask}/>)}
        <NewTask setTask = {this.addnewTask}/>
      </div>
          )

}}
export default App;
