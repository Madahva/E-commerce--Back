import nodemailer from "nodemailer";
import { Request, Response } from "express";

const { GMAIL_ADMIN, PASSWORD_ADMIN } = process.env;

export const pago = async (req: Request, res: Response): Promise<void> => {
  const { name, email } = req.body;
  try {
    //creacion y configuracion del envio de mail
    var transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "HyreMySkills@gmail.com",
        pass: PASSWORD_ADMIN,
      },
    });

    var mailOptions = {
      from: "HyreMySkills@gmail.com",
      to: `${email}`,
      subject: `SUCCESSFUL PAYMENT 👏`,
      html: `THANK YOU FOR YOUR PURCHASE AND BE PART OF ECOMERCE. ✍️📉`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.send(error);
        console.log(error);
      } else {
        res.send("Email enviado: " + info.response);
        console.log("Email enviado: " + info.response);
      }
    });
  } catch (error) {
    res.status(402).send(error);
  }
};

export const newUser = async (req: Request, res: Response): Promise<void> => {
  const { name, email } = req.body;

  try {
    var transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "HyreMySkills@gmail.com",
        pass: PASSWORD_ADMIN,
      },
    });

    var mailOptions = {
      from: "HyreMySkills@gmail.com",
      to: `${email}`,
      subject: `WELCOME A ECOMERCE 👏`,
      html: `THANK YOU FOR SUBSCRIBING TO OUR PAGE ENJOY GREAT DISCOUNTS. 👾⚒️`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.send(error);
        console.log(error);
      } else {
        res.send("Email enviado: " + info.response);
        console.log("Email enviado: " + info.response);
      }
    });
  } catch (error) {
    res.status(402).send(error);
    console.log(error);
  }
};
