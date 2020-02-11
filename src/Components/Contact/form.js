import React, { Component } from 'react';
import styled from 'styled-components';

const INITIAL_STATE = {
  name: '',
  email: '',
  message: '',
  status: 'LIVE'
};

export default class MyForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
  
  render() {
    const {
      name,
      email,
      message,
      status
    } = this.state;
    const isInvalid =
      message === '' ||
      email === '' ||
      name === '';
    return (
      <FormContainer>
        {status === "LIVE"
          ?
          <TheForm
          onSubmit={this.submitForm}
          action="https://formspree.io/xeqedpgy"
          method="POST"
          >
            <FormFields changer={this.onChange}/>
            <button disabled={isInvalid}>
              <Plane className="fa fa-paper-plane" aria-hidden="true" alt="Submit"></Plane>
            </button>
          </TheForm>
          : null
        }
        <FormNoti status={status}/>
      </FormContainer>
    );
  }


}
const TheForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  > div, input, textarea, button {
    margin: 2% 0;
    color: #454049;
    background-color: rgba(white, .8);
    font-family: 'Overpass', sans-serif;
    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      color: #454049;
    }
    ::-moz-placeholder { /* Firefox 19+ */
      color: #454049;
    }
    :-ms-input-placeholder { /* IE 10+ */
      color: #454049;
    }
    :-moz-placeholder { /* Firefox 18- */
      color: #454049;
    };
  }
  > textarea{
    height: 167px;
  }
  /* > button{
    background:white;
  } */
`
const FormFields = ({changer}) => (
  <React.Fragment>
    <input type="text" name="name" onChange={changer} placeholder="Name" />
    <input type="email" name="email" onChange={changer} placeholder="Email" />
    <textarea type="text" name="message" onChange={changer} placeholder="Message" />
  </React.Fragment>
)
const Noti = styled.p`

`
const NOTIFICATION_STATES = {
  "SUCCESS": <Noti>Thanks! I will be in touch shortly.</Noti>,
  "ERROR": <Noti>Ooops! There was an error.</Noti>
};
function FormNoti({ status }) {
  return (
    <div>
      {NOTIFICATION_STATES[status]}
    </div>
  );
}
const FormContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  height:50%;
  @media only screen and (orientation: landscape){
    height: 65%;
    width: 40%;
  }
  @media only screen and (max-width: 823px) and (orientation: landscape){
    order: 2;
    width: 1000px;
    margin-top: 2%;
  }
`
const Plane = styled.i`
  font-size: 200%;
`