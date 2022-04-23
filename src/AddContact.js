import React, { Component } from "react";
import Header from "./Header";
import "./AddContact.css"

class AddContact extends Component {
    constructor(){
        super();
        this.state = {
            id: 0,
            name: '',
            phone: ''
        }
    }

    inputChangeHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    render() {
        const {name, phone} = this.state;
        return (
            <div>
                <Header heading="Add Contact" />
                <div className=""></div>
                <button className="btn back-btn">Back</button>

                <form>
                    <label htmlFor="name" className="label-control">Name:</label><br/>
                    <input id="name" className="input-control" name="name" onChange={this.inputChangeHandler}></input><br/>
                    <label htmlFor="name" className="label-control">Phone:</label><br/>
                    <input id="name" className="input-control" name="phone" onChange={this.inputChangeHandler}></input><br/>
                    <div className="contact-info-container">
                        <span className="contact-info">Contact to be added</span><br/>
                        <span className="contact-info">Name: {name}</span><br/>
                        <span className="contact-info">Phone: {phone}</span><br/>
                    </div>
                    <button className="btn add-btn">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact;
