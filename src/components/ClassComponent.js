import React, { Component } from "react";

export default class ClassComponent extends Component {
  render() {
    return (
      <div className="card text-white bg-dark">
        <img className="card-img-top" src="holder.js/100px180/" alt />
        <div className="card-body">
          <h4 className="card-title">Title</h4>
          <p className="card-text">Text</p>
        </div>
      </div>
    );
  }
}
