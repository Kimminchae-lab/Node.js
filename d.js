const nodemailer = require("nodemailer");
const email = {
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7b63a8ccac9901",
    pass: "a242bba97738da",
  },
};

const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
      return info.response;
    }
  });
};

let data = {
  from: "rlaalsco1022@gmail.com",
  to: "rlaalsco1022@gmail.com",
};
