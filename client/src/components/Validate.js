
const validate = (value, rules, field) => {
  let isValid = true;
  var errorText = "";
  for (let rule in rules) {

    switch (rule) {
      case 'isRequired':
        isValid = isValid && requiredValidator(value);
        break;
      	case 'minLength':
          isValid = isValid && minLengthValidator(value, rules[rule]);
          errorText = "Your " + field + " must be at least "+ rules[rule] + " characters long.";
          break;
        case 'isEmail':
          isValid = isValid && emailValidator(value);
          errorText = "Please enter a valid email address";
          break;
        case 'isDropdown' :
          isValid = isValid && dropdownValidator(value);
          errorText = "Please select your " + field;
          break;
        case 'isCheckbox':
          isValid = isValid && value == "true";
          errorText = "Please tick the box for " + field;
          break;
        case 'isDate':
          isValid = isValid && dateValidator(value);
          errorText = "Please provide a valid date";
          break;
        case 'isPhoneNumber':
          isValid = isValid && numberAndCount(value, 10);
          errorText = "Please provide a valid phone number";
          break;
        case 'isYear':
          isValid = isValid && numberAndCount(value, 4);
          errorText = "Please provide a valid year";
        break;
        case 'isBuildCover':
          isValid = isValid && numberAndCount(removeCommas(value), 6);
          errorText = "Please provide a valid number";
        break;
        case 'isContentsCover':
          isValid = isValid && numberAndRange(removeCommas(value), 5, 6);
          errorText = "Please provide a valid number";
        break;
        case 'isExcessCover':
          isValid = isValid && numberAndRange(removeCommas(value), 3, 5);
          errorText = "Please provide a valid number";
        break;
      	default: isValid = true;
    }

  }
  const returnArray = [isValid, errorText];
  return returnArray;
  console.log(isValid);
  //return isValid;
}

{/*length validation*/}
const minLengthValidator = (value, minLength) => {
    return value.length >= minLength;
}

{/*required field validation*/}
const requiredValidator = value => {
    return value.trim() !== '';
}

{/*email validation*/}
const emailValidator = value => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}

{/*dropdown validation*/}
const dropdownValidator = value => {
    return value != " " && value != "Day" && value != "Month" && value != "Year";

}

const dateValidator = value => {
  var re = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/; 
  return re.test(String(value).toLowerCase());
}

const isNumber = value => {
  var re = /^\d+$/;
  return re.test(String(value));
}

const numberAndCount = (value, count) => {
  return isNumber(value) && value.length == count;
}

const removeCommas = value => {
  return value.replace(/[, ]/g,'');
}

const numberAndRange = (value, min, max) => {
  return isNumber(value) && (value.length >= min && value.length <= max);
}

export default validate;
