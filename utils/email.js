const nodemailer =require('nodemailer');

const sendEmail =async options =>{
    //1) create a transporter
     
    var transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "296d1d06b584b1",
          pass: "6bededb92c2da4"
        }
      });
    //2) Define the email option 
        const mailOption={
            from:'Santhoshkumar',
            to:options.email,
            subject:options.subject,
            text:options.message 
            //html
        };

    //3) Actually send the email
    await transporter.sendMail(mailOption)
}

module.exports=sendEmail;