import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { UPDATE_NAME, UPDATE_CATEGORY } from "./../../store";
import "./Name.css";

class Name extends Component {
  constructor(props) {
    super(props);
    //store.getState gives access to the Redux state object.
    //store the return value in a variable so it can be referenced easily. 
    const reduxState = store.getState();
    this.state = {
      name: reduxState.name,
      category: reduxState.category
    };
    console.log(this.state)
  }
  handleNameChange(nameVal) {
    this.setState({
      name: nameVal
    });
  }

  handleCategoryChange(catVal) {
    this.setState({
      category: catVal
    });
  }
  saveChanges() {
    // Send data to Redux state
    // store is an object with a method on it called dispatch.
    //dispatch sends actions to the reducer.
    store.dispatch({
      //the type of action objects should match the action types imported from above
      type: UPDATE_NAME,
      //payload pulls the values of the input boxes from state where they are being stored
      payload: this.state.name
    });

    store.dispatch({
      type: UPDATE_CATEGORY,
      payload: this.state.category
    });
    
  }
  render() {
    return (
      <div className="Name forms">
        <div className="input_container">
          <h2>Recipe Name:</h2>
          <input
            value={this.state.name}
            onChange={e => this.handleNameChange(e.target.value)}
          />
        </div>
        <div className="input_container">
          <h2>Category:</h2>
          <select
            value={this.state.category}
            onChange={e => this.handleCategoryChange(e.target.value)}
          >
            <option value={""}>----</option>
            <option value={"Breakfast"}>Breakfast</option>
            <option value={"Second Breakfast"}>Second Breakfast</option>
            <option value={"Brunch"}>Brunch</option>
            <option value={"Lunch"}>Lunch</option>
            <option value={"Dinner"}>Dinner</option>
            <option value={"Drinks"}>Drinks</option>
            <option value={"Dessert"}>Dessert</option>
          </select>
        </div>
        <Link to="/add/author">
          <button onClick={() => this.saveChanges()} className="right_button">
            Next
          </button>
        </Link>
      </div>
    );
  }
}

export default Name;
