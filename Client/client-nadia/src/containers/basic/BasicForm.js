import React, {Component} from 'react';
import TextView from './TextView.js';
import update from 'immutability-helper';
import {run, ruleRunner} from './ruleRunner.js'
import {required, mustMatch, minLength,emailValidator} from './rules.js';
import $ from 'jquery';
import ImageUploader from 'react-images-upload';
import * as writetolog from "./sendForm.js";
import {ReversedRadioButton,RadioGroup, RadioButton} from 'react-radio-buttons';


const fieldValidations = [
  ruleRunner("firstName", "First Name", required),
  ruleRunner("lastName", "Last Name", required),
  ruleRunner("emailAddress", "Email Address", required,emailValidator),
  ruleRunner("password1", "Password", required, minLength(8)),
  ruleRunner("password2", "Password Confirmation", mustMatch("password1", "Password"))

];

class BasicForm extends Component {

  constructor(props) {
    super(props);
    this.handleFieldChanged = this.handleFieldChanged.bind(this);
  this.handleSubmitClicked = this.handleSubmitClicked.bind(this);
    this.errorFor = this.errorFor.bind(this);
    this.state = {
      showErrors: false,
      validationErrors: {}
    }
  }

  componentWillMount() {
    // Run validations on initial state
    this.setState({
      validationErrors: run(this.state, fieldValidations)
    });
  }

  errorFor(field) {
    return this.state.validationErrors[field] || "";
  }

  handleFieldChanged(field) {
    return(e) => {
      let newState = update(this.state, {
        [field]: {
          $set: e.target.value
        }
      });
      newState.validationErrors = run(newState, fieldValidations);
      this.setState(newState);
    };
  }

  handleSubmitClicked() {
    this.setState({showErrors: true});
    if($.isEmptyObject(this.state.validationErrors) === false) return null;
    return this.props.onCreateAccount(this.state);
  }

  onDrop(picture) {
    this.setState({pictures: this.state.pictures.concat(picture)});
  }
  render() {
    return (
    //  <div id="result"></div>
    <div className="CreateAccount">
      <form>
      <h4>Create a New Account</h4><br/>
    <TextView placeholder="First Name" showError={this.state.showErrors} text={this.props.firstName} onFieldChanged={this.handleFieldChanged("firstName")} errorText={this.errorFor("firstName")} name="fName" id="firstName" value="firsName"/><br/>
      <TextView placeholder="Last Name" showError={this.state.showErrors} text={this.props.firstName} onFieldChanged={this.handleFieldChanged("lastName")} errorText={this.errorFor("lastName")} name="lName" id="lastName"/><br/>
    <TextView placeholder="Email Address" showError={this.state.showErrors} text={this.props.emailAddress} onFieldChanged={this.handleFieldChanged("emailAddress")} errorText={this.errorFor("emailAddress")} name="mail" id="mail" value="Email" /><br/>
<b>Choose Who are you:</b>
    <RadioGroup id="role" name="role" onChange={this.onChange} horizontal value="1">
    <ReversedRadioButton value="1"  >
      Customer
    </ReversedRadioButton>
    <ReversedRadioButton value="2"  >
      Buisness
    </ReversedRadioButton>
  </RadioGroup><br/><br/>
<TextView placeholder="Password" onChange={this.test} showError={this.state.showErrors} type="password" text={this.props.password1} onFieldChanged={this.handleFieldChanged("password1")} errorText={this.errorFor("password1")} name="password" id="password"/><br/>
<TextView placeholder="Confirm Password" showError={this.state.showErrors} type="password"
          text={this.props.password2} onFieldChanged={this.handleFieldChanged("password2")}
          errorText={this.errorFor("password2")} />
    <b>Upload Profile Pic:</b>
  <ImageUploader id="pic" fileSizeError= " file size is too big" fileTypeError=" is not supported file extension" withIcon={true} buttonText='Choose images' onChange={this.onDrop} imgExtension={['.jpg', '.gif', '.png', '.gif']} maxFileSize={5242880}/>
<input id="CreateAccountButton" type='button' className="mb-4 btn btn-primary" value="Create Account" onClick={this.handleSubmitClicked} ></input>
  </form>
  </div>);
}
}
export default BasicForm;
