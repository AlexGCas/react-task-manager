import React from 'react';


import './tasks.css';

class Task extends React.Component{
  state = {
    completed : 'en proceso'
  }
  stylesDiv = () => {
    return(
      {
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      }
    )
  }
  stylesButton= ()=>{return(
    {
      background: 'red',
      borderRadius: '50%',
      width: '20px',
      height: '20px'
    }
  )}
  onClick = ()=>{
    this.props.onClick(this.props.task.id)
  }
  render(){
    return(
      <div className = "task" style = {this.stylesDiv()}>
        <h1>titulo: {this.props.task.title}</h1>
        <p className = "p1">description: {this.props.task.descripcion}</p>
        <p className = "p2">estado: {this.props.status}</p>
        <button style = {this.stylesButton()} onClick = {this.onClick}>
          x
        </button>
      </div>
    )
  }
} 
export default Task;
