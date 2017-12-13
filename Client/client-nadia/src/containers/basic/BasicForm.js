import { Form, Text, Radio, RadioGroup, Select, Checkbox,TextArea } from 'react-form';
import React, { Component } from "react";
import * as writetolog  from "./formValidation.js";
import ImageUploader from 'react-images-upload';

// make a border in css+ centralize submit + centalize the all form

class BasicForm extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={submittedValues => this.setState( { submittedValues } )}>
          { formApi => (
            <form onSubmit={formApi.submitForm} id="form2">
              <label htmlFor="firstName">First name</label>
            <Text field="firstName" id="firstName" /><br />
              <label htmlFor="lastName">Last name</label>
              <Text field="lastName" id="lastName" />
            <RadioGroup field="role">
                { group => (
                  <div>
                  <label htmlFor="choose"><b>Choose:</b> </label><br />
                    <label htmlFor="customer" className="mr-2">I'm Customer</label>
                    <Radio group={group} value="customer" id="customer" className="mr-3 d-inline-block" />
                  <label htmlFor="buisness" className="mr-2">I'm Buisness Owner</label>
                    <Radio group={group} value="buisness" id="buisness" className="d-inline-block" />
                  </div>
                )}
              </RadioGroup>
            <label htmlFor="mail">Mail:</label>
          <Text field="mail" oninput={writetolog.writetolog()} id="mail" /><br />
        <label htmlFor="password">Password:</label>
      <input type="password"  password name="password"/><br /><br />
          <button type="submit" className="mb-4 btn btn-primary">Submit</button>

            </form>
          )}
        </Form>
      </div>
    );
  }
}
export default BasicForm;
