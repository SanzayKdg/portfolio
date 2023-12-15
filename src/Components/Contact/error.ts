export interface ErrorState {
  name: string;
  email: string;
  message: string;
}
export const validationErrors : ErrorState = {
  name: "",
  email: "",
  message: "",
};
/*--------------------- Message Form Error --------------------------------*/

export const validate = (name: string, email: string, message: string) => {
  if (name === "" || !name) {
    validationErrors.name = "Please enter your name.";
  } else if (name.length < 3) {
    validationErrors.name = "Name must be atleast 3 characters long.";
  } else {
    validationErrors.name = "";
  }

  if (email === "" && !email) {
    validationErrors.email = "Please enter your email.";
  } else {
    validationErrors.email = "";
  }

  if (message === "" && !message) {
    validationErrors.message = "Please enter your message.";
  } else if (message.length < 150) {
    validationErrors.message = "Message must be atleast 150 characters long.";
  } else {
    validationErrors.message = "";
  }
  return validationErrors;
};
