export const validationErrors = {
  name: "",
  email: "",
  message: "",
};

/*--------------------- Message Form Error --------------------------------*/

export const validate = (name: string, email: string, message: string) => {
  if (name === "") {
    validationErrors.name = "Please enter your name.";
  } else if (name.length <= 2) {
    validationErrors.name = "Name must be atleast 3 characters long.";
  }

  if (email === "") {
    validationErrors.email = "Please enter your email.";
  }

  if (message === "") {
    validationErrors.message = "Please enter your message.";
  } else if (message.length < 150) {
    validationErrors.message = "Message must be atleast 150 characters long.";
  }
  return validationErrors;
};
