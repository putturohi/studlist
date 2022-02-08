import React, { Component } from 'react'

class AddStudent extends React.Component
{
  state = {
  name: "",email: "",usn: "", sem: "",div: ""    
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === ""|| this.state.usn === ""|| this.state.sem === ""|| this.state.div === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addStudentHandler(this.state);
    this.setState({ name: "", email: "", usn: "", sem: "", div: "" });
  };
    render(){
        return(
            <div className="ui main">
                <h2>AddStudents</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Student Name</label>
    <input type="text" name="name" placeholder="Name"
      value={this.state.name}
     onChange={(e) => 
      this.setState({ name: e.target.value })}
         />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
                 />
          </div>
          <div className="field">
            <label>USN</label>
            <input
              type="text"
              name="usn"
              placeholder="USN"
              value={this.state.usn}
              onChange={(e) => this.setState({ usn: e.target.value })}
                 />
          </div>
          <div className="field">
            <label>Semester</label>
            <input
              type="text"
              name="sem"
              placeholder="Semester"
              value={this.state.sem}
              onChange={(e) => this.setState({ sem: e.target.value })}
                 />
          </div>
          <div className="field">
            <label>Division</label>
            <input
              type="text"
              name="div"
              placeholder="Division"
              value={this.state.div}
              onChange={(e) => this.setState({ div: e.target.value })}
                 />
          </div>
          <button className="ui button blue">
            Add</button>
        </form>
      </div>
        )

    }
    
}
export default AddStudent;