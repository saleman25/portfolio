import React, {Component} from 'react';
import '../App.css';
import * as emailjs from "emailjs-com";
import { toast } from 'react-toastify';
import{ init } from 'emailjs-com';
import Badges from './Badges.js';
init("user_9aQ988aPuDujNfLP91Wf4");



const userId = 'user_9aQ988aPuDujNfLP91Wf4'
const emailId = 'service_o8qv7ii';

export default class Contact extends Component {
    constructor(props) {
      super(props);
  this.state = {
        name: "",
        email: "",
        feedback: "",
      };
    }


  handleInputChange(event) {
      event.preventDefault();
      const target = event.target;
      const name = target.name;
      const value = target.value;
  this.setState({ [name]: value });
    }

    sendMessage(event) {
        event.preventDefault();
    if (!this.validateMail()) {
          return;
        }
    var templateParams = {
          from_name: this.state.name + " (" + this.state.email + ")",
          to_name: {emailId},
          feedback: this.state.feedback
        };
    emailjs
          .send("gmail", "portfoliositecontact", templateParams, {userId})
          .then(
            function(response) {
              toast.success("Your message has successfully sent!", {
                position: toast.POSITION.BOTTOM_CENTER
              });
              console.log("SUCCESS!", response.status, response.text);
            },
            function(err) {
              toast.error("Your message was not able to be sent");
            }
          );
    this.setState({
          name: "",
          email: "",
          feedback: ""
        });
      }

    render() {
        return (
          <div>
              <br></br>
            <form
              className="ui form"
              id={this.props.id}
              name={this.props.name}
              method={this.props.method}
              action={this.props.action}
            >
              <textarea
                id="name"
                name="name"
                onChange={this.handleInputChange.bind(this)}
                placeholder="Your name"
                required
                value={this.state.name}
                style={{ width: "100%" }}
                rows={1}
              />
              <br />
              <textarea
                id="email"
                name="email"
                onChange={this.handleInputChange.bind(this)}
                placeholder="Your email address"
                required
                value={this.state.email}
                
                style={{ width: "100%" }}
                rows={1}
              />
              <br />
              <textarea
                id="feedback"
                name="feedback"
                onChange={this.handleInputChange.bind(this)}
                placeholder="What would you like to chat about?"
                required
                value={this.state.feedback}
                style={{ width: "100%", height: "250px" }}
              />
              <br />
              <input
                type="button"
                value="Send"
                className="ui button"
                style={{
                  fontFamily: "Amatic SC",
                  fontSize: "20px",
                  color: "hotpink"
                }}
                onClick={this.sendMessage.bind(this)}
              />
            </form>
            <br></br>
                <Badges></Badges>
          </div>
        );
      };
    }