import React, { Component } from 'react'

export default class AddContact extends Component {
  state = {
    name :"",
    email:"",
  };

  Add = (e)=>{
    e.preventDefault();
    if(this.state.name === "" || this.state.email === ""){
      alert("Please enter name and email");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({name: "", email: ""});
  };

  render() {
    return (
      <div className="container">
        <h2 className="my-3">Add Contact</h2>
        <form onSubmit={this.Add}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="name" className="form-control" id="name" aria-describedby="emailHelp" placeholder='name' value={this.state.name}  onChange={(e)=>this.setState({name: e.target.value})} />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="email" aria-describedby="emailHelp" value={this.state.email} onChange={(e)=>{this.setState({email: e.target.value})}} />
          </div>

          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    )
  }
}
