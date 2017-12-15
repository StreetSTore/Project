import { Form, Text, Radio, RadioGroup, Select, Checkbox,TextArea } from 'react-form';
import React, { Component } from "react";
import * as writetolog  from "./formValidation.js";
import ImageUploader from 'react-images-upload';


// make a border in css+ centralize submit + centalize the all form

class BasicForm extends Component {
  constructor(props) {
    super(props);
    };

  onDrop(picture) {
    this.setState({pictures: this.state.pictures.concat(picture)});
  }
  


  render() {
    return (
      <div>
		  <div id = "result">fsdfsdf</div>
        <Form>
          { formApi => (
            <form  id="form2">
              <label htmlFor="firstName">First name</label>
            <Text field="firstName" name="fName" id="firstName" /><br />
              <label htmlFor="lastName">Last name</label>
            <Text field="lastName"  name="lName" id="lastName" />

          <RadioGroup field="role" id="role" name="role">
                { group => (
                  <div>
                  <label htmlFor="choose"><b>Choose:</b> </label><br />
                    <label htmlFor="customer" className="mr-2">I'm Customer</label>
                  <Radio group={group} value="1"  className="mr-3 d-inline-block" />
                  <label htmlFor="buisness" className="mr-2">I'm Buisness Owner</label>
                <Radio group={group} value="2"  className="d-inline-block" />
                  </div>
                )}
              </RadioGroup>
            <label htmlFor="mail">Mail:</label>
          <Text field="mail"  id="mail" /><br />
        <label htmlFor="password">Password:</label>
      <input type="password"  name="password" id="password"/><br /><br />
	        <label htmlFor="img" >Upload Photo:</label>
            <ImageUploader id="pic" withIcon={true} buttonText='Choose images' onChange={this.onDrop} imgExtension={['.jpg', '.gif', '.png', '.gif']} maxFileSize={5242880}/>
          

          <button  onClick={writetolog.writetolog} className="mb-4 btn btn-primary">Submit</button>

            </form>
          )}
        </Form>
      </div>
    );
  }
}
export default BasicForm;
