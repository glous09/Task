import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(){
    super();
    this.state= {
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e){
    //Obteniendo el valor de lo que se esta escribiendo y el nombre del input donde se está escribiendo
    //console.log(e.target.value, e.target.name);
    const { value, name }= e.target;
    this.setState({
        [name]: value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onAddTodo(this.state);
    console.log("sending the data...");
    }



  render (){
    return (
      <div className="card">
         <form className="card-body" onSubmit={this.handleSubmit}>
           <div className="form-group">
             <input type="text" name="title" onChange={this.handleInput} className="form-control" placeholder="Title"/>
           </div>
           <div className="form-group">
             <input type="text" name="responsible" onChange={this.handleInput} className="form-control" placeholder="Responsible"/>
           </div>
           <div className="form-group">
             <input type="text" name="description" onChange={this.handleInput} className="form-control" placeholder="Description"/>
           </div>
           <div className="form-group">
            <select  name="priority" className="form-control"  onChange={this.handleInput} >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
           </div>
          <button type="submit" className="btn btn-primary">
          Save
          </button>
         </form>
      </div>
     )
    }
  }

export default TodoForm;
