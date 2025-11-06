const SibApiV3Sdk = require("sib-api-v3-sdk");

async function sendEmail(toEmail, subject, htmlContent) {
  // Configure API key authorization
  const defaultClient = SibApiV3Sdk.ApiClient.instance;
  const apiKey = defaultClient.authentications["api-key"];
  apiKey.apiKey = process.env.BREVO_API_KEY; 

  // Create transactional email API instance
  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  // Create email parameters
  const sendSmtpEmail = {
    sender: { name: "National Express Security", email: process.env.EMAIL_NAME },
    to: [{ email: toEmail }],
    subject: subject,
    htmlContent: htmlContent, // your HTML message body
  };

  try {
    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log("✅ Email sent successfully:", response);
    return response;
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    throw error;
  }
}

module.exports = sendEmail; 
