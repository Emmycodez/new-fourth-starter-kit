// actions/serverActions.js
import emailjs from "@emailjs/browser";

export const sendEmail = async (formData) => {
  const serviceID = "service_00462o3";
  const templateID = "template_4q01xfm";
  const publicKey = "jyKJgo3hXmy1GT-sy";

  const templateParams = {
    from_name: formData.get("name"),
    from_email: formData.get("email"),
    message: formData.get("message"),
  };

  try {
    await emailjs.send(serviceID, templateID, templateParams, publicKey);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
};
