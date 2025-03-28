var nodemailer = require("nodemailer");

var mailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "coderaryan234@gmail.com",
    pass: "szjqwehyhchcxxcn",
  },
});

var maildetail = {
  from: "coderaryan234@gmail.com",
  to: "aryanchaudhary2108@gmail.com",
  subject: "Welcome to the Email Notification System",
  text:
    "Hi coderaryan,\n\n" +
    "Welcome to our Notification System!\n\n" +
    "This is a test email to verify that your Nodemailer setup is working correctly.\n\n" +
    "Please find the attached **Holiday Calendar** for reference.\n\n" +
    "Best Regards,\n" +
    "Aryan",
  attachments: [
    {
      filename: "Holiday_Calendar.pdf",
      path: "/home/user/Downloads/Holiday_calendar1.pdf",
    },
  ],
};

mailer.sendMail(maildetail, function (error, info) {
  if (error) {
    console.log("Error occurred: " + error.message);
  } else {
    console.log("Message sent: " + info.response);
  }
});
