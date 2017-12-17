import * as errorMessages from './errorMessages.js';
import * as EmailValidator from 'email-validator';
export const required = (text) => {
if (text) {
return null;
} else {
return errorMessages.isRequired;
}
};

export const emailValidator = (text) => {
return EmailValidator.validate(text) ? null : errorMessages.notCorrectMail;
};

export const mustMatch = (field, fieldName) => {
  return (text, state) => {
    return state[field] === text ? null : errorMessages.mustMatch(fieldName);
  };
};

export const minLength = (length) => {
return (text) => {
console.log("Checking for length greater than ", length);
return text.length >= length ? null : errorMessages.minLength(length);
};
};
