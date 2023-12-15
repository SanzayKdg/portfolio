import { FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import "./ContactMe.css";
import { validate, validationErrors } from "./error";
const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [emailSrc, setEmailSrc] = useState("");
  const [phoneSrc, setPhoneSrc] = useState("");
  const [locationSrc, setLocationSrc] = useState("");
  const form: any = useRef();
  const toast = useToast();
  const position = "bottom";

  const [error, setError] = useState(validationErrors);

  const validateError = validate(name, email, message);
  useEffect(() => {
    if (Object.keys(validateError).length > 0) {
      setError(validateError);
      return;
    }
  }, [name, email, message, validateError]);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (email === "" || message === "" || email === "") {
      toast({
        title: "Error!",
        description: "Please fill all the required fields.",
        position,
        isClosable: true,
        status: "error",
        duration: 2000,
      });
      return;
    }

    if (!error.name && !error.message && !error.email) {
      toast({
        status: "loading",
        title: "Loading",
        description: "Sending Message.",
        position,
        duration: 500,
      });
      // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      emailjs
        .sendForm(
          "service_u92l7aa",
          "template_fnqkrlm",
          form.current,
          "Wy6RWM7YdDaaxGrwO"
        )
        .then(
          (res: any) => {
            toast({
              title: "Success",
              description: "Your message has been sent.",
              position,
              isClosable: true,
              status: "success",
              duration: 2000,
            });
          },
          (error: any) => {
            toast({
              title: "Error!",
              description: "Something went wrong. Try Again",
              position,
              isClosable: true,
              status: "error",
              duration: 2000,
            });
          }
        );
    } else {
      toast({
        title: "Error!",
        description: "Please fill all the required fields.",
        position,
        isClosable: true,
        status: "error",
        duration: 2000,
      });
    }

    clearForm();
  };

  function clearForm() {
    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <div id="contact" className="contact__container">
      <div className="contact__top">
        <h4 className="contact__heading">Contact</h4>
      </div>

      <div className="contact__bottom">
        <div className="left__contact">
          <div className="contact__info">
            <div
              className="icon__container"
              onMouseLeave={() => setEmailSrc("")}
              onMouseEnter={() => setEmailSrc("src")}
            >
              <img
                className="contact__icons"
                src={emailSrc === "src" ? "/email_white.svg" : "/email.svg"}
                alt="email icon"
              />
            </div>
            <div className="email__label">
              <h5 className="contact__label">Email:</h5>
              <p className="contact__description">sanjaykhadgi9861@gmail.com</p>
            </div>
          </div>
          <div className="contact__info">
            <div
              className="icon__container"
              onMouseLeave={() => setPhoneSrc("")}
              onMouseEnter={() => setPhoneSrc("src")}
            >
              <img
                className="contact__icons"
                src={phoneSrc === "src" ? "/phone_white.svg" : "/phone.svg"}
                alt="phone icon"
              />
            </div>
            <div>
              <h5 className="contact__label">Phone:</h5>
              <p className="contact__description">+977 9861365442</p>
            </div>
          </div>
          <div className="contact__info">
            <div
              className="icon__container"
              onMouseLeave={() => setLocationSrc("")}
              onMouseEnter={() => setLocationSrc("src")}
            >
              <img
                className="contact__icons"
                src={
                  locationSrc === "src"
                    ? "/location_white.svg"
                    : "/location.svg"
                }
                alt="location icon"
              />
            </div>
            <div>
              <h5 className="contact__label">Location:</h5>
              <p className="contact__description">Lalitpur, Nepal</p>
            </div>
          </div>

          <div className="contact__map">
            <iframe
              title="My location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56542.93101046565!2d85.28195211196996!3d27.65753873528882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19d3cf18ca51%3A0xd10ec3d53656e18f!2sLalitpur!5e0!3m2!1sen!2snp!4v1702390979770!5m2!1sen!2snp"
              width="600"
              height="450"
              loading="lazy"
              className="google__map"
            />
          </div>
        </div>
        <div className="right__contact__section">
          <form onSubmit={sendEmail} ref={form} className="contact__form">
            <FormLabel className="required">
              Please fill all the required fields. (*)
            </FormLabel>
            <div className="form__item">
              <FormLabel className="form__label">
                Your Name <span className="required">*</span>
              </FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="John Doe"
                name="from_name"
                className="form__input"
              />
              {error.name && <p className="required">{error.name}</p>}
            </div>

            <div className="form__item">
              <FormLabel className="form__label">
                Your Email <span className="required">*</span>
              </FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="johndoe@gmail.com"
                name="from_email"
                className="form__input"
              />
              {error.email && <p className="required">{error.email}</p>}
            </div>

            <div className="form__item">
              <FormLabel className="form__label">
                Your Message <span className="required">*</span>
              </FormLabel>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message Here..."
                name="message"
                rows={10}
                className="form__input"
              />
              {error.message && <p className="required">{error.message}</p>}
            </div>

            <button className="send__form__btn" type="submit">
              <p className="send__text">Send Message</p>
              <img
                src="/send.svg"
                alt="send button"
                className="send__btn__icon"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
