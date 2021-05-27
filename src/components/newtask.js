import React from 'react';

export default class NewTask extends React.Component{
  state = {
    title : '',
    description : ''
  }
  onsubmit = (e) => {e.preventDefault()
    this.props.setTask(this.state.title, this.state.description)
    this.setState({title: '', description: ''})
  }
  onChange = (e) => this.setState(
  {[e.target.name] : e.target.value})
  render(){
    return(
    <form onSubmit = {this.onsubmit}>
      <input type="text" value = {this.state.title} 
      onChange = {this.onChange} name = "title"/>
      <br/>
      <textarea name="description" value = {this.state.description}
        onChange = {this.onChange} cols="30" rows="10">
        write something
      </textarea>
      <br/>
      <input type="submit" value = "enviar"/>
    </form>
      )
  }
}
