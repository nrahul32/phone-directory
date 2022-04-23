import React, { Component } from "react";
import Header from "./Header";
import "./AddContact.css"

class AddContact extends Component {
    render() {
        return (
            <div>
                <Header heading="Add Contact" />
                <div className=""></div>
                <button className="btn back-btn">Back</button>

                <form>
                    <label htmlFor="name" className="label-control">Name:</label><br/>
                    <input id="name" className="input-control"></input><br/>
                    <label htmlFor="name" className="label-control">Phone:</label><br/>
                    <input id="name" className="input-control"></input><br/>
                    <div className="contact-info-container">
                        <span className="contact-info">Contact to be added</span><br/>
                        <span className="contact-info">Name:</span><br/>
                        <span className="contact-info">Phone:</span><br/>
                    </div>
                    <button className="btn add-btn">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact;
