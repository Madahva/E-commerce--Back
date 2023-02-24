import nodemailer from "nodemailer";
import { Request, Response } from "express";

const { GMAIL_ADMIN, PASSWORD_ADMIN } = process.env;

export const pago = async (req : Request, res : Response): Promise<void> =>{
    const { name, email } = req.body
  try {
    //creacion y configuracion del envio de mail
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: GMAIL_ADMIN, // generated ethereal user
        pass: PASSWORD_ADMIN, // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    //mensaje que se envia al mail
    let informacion = await transporter.sendMail({
      from: `"Ecomerce 👾⚒️" <${GMAIL_ADMIN}>`, // sender address
      to: email, // list of receivers
      subject: "SUCCESSFUL PAYMENT ", // Subject line
      html: `Hello ${name} 🛒.thank you for shopping with us in a few days your order will arrive👌. <a href='https://ecommerce-pf.vercel.app/'>Enter here to return to the site</a>`, // html body
    });
    res.status(200).send(informacion)
  } catch (error) {
    res.status(402).send(error);
  }
};



export const newUser = async (req: Request, res: Response): Promise<void> => {
    const { name, email } = req.body;
  
    try {
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: GMAIL_ADMIN,
          pass: PASSWORD_ADMIN,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
  
      let info = await transporter.sendMail({
        from: `${GMAIL_ADMIN}`,
        to: `${email}`,
        subject: "BIENVENID@ A ECOMERCE",
        html: `Hello ${name}. Thank you very much for joining HIREMY SKILLS 👏. <br></br>We invite you to browse our page and find the ideal purchase.  
           .<br></br>the best shopping site✍️📉 <br></br>
           <a href='https://ecommerce-pf.vercel.app/'>Enter here to return to the site</a> - <br></br>
          `,
      });
  
      res.status(200).send(info);
    } catch (error) {
      res.status(402).send(error);
      console.log(error);
    }
  };
 
  
  
  
  
  
// export  const  newUser = async(req : Request , res : Response):Promise<void>=>{
//     const { name, email } = req.body
//   //creacion y configuracion del envio de mail
// try{
//   let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true, // true for 465, false for other ports
//     auth: {
//       user: "HyreMySkills@gmail.com", // generated ethereal user
//       pass: "zmqaurfzdaozwfsk", // generated ethereal password
//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//   });

//   //mensaje que se envia al mail
//   let informacion = await transporter.sendMail({
//     from: `"Ecomerce 👾⚒️" <${GMAIL_ADMIN}>`, // sender address
//     to: email, // list of receivers
//     subject: " BIENVENID@ A HIREMYSKILLS ", // Subject line
//     html: `Hello ${name} . Thank you very much for joining HIREMY SKILLS 👏. <br></br>We invite you to browse our page and find the ideal purchase.  
//          .<br></br>the best shopping site✍️📉 <br></br>
//          <a href='https://ecommerce-pf.vercel.app/'> Enter here to return to the site</a> - <br></br>
//         `, // html body
//   });
//   res.status(200).send(informacion)
// }catch(error){
//     res.status(402).send(error);
//     console.log(error);
// }
// }


