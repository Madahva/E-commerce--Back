"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUser = exports.pago = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const { GMAIL_ADMIN, PASSWORD_ADMIN } = process.env;
const pago = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    try {
        //creacion y configuracion del envio de mail
        let transporter = nodemailer_1.default.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: GMAIL_ADMIN,
                pass: PASSWORD_ADMIN, // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        //mensaje que se envia al mail
        let informacion = yield transporter.sendMail({
            from: `${GMAIL_ADMIN}`,
            to: `${email}`,
            subject: "SUCCESSFUL PAYMENT ",
            html: `Hello ${name} 🛒.thank you for shopping with us in a few days your order will arrive👌. <a href='https://ecommerce-pf.vercel.app/'>Enter here to return to the site</a>`, // html body
        });
        res.status(200).send(informacion);
    }
    catch (error) {
        res.status(402).send(error);
    }
});
exports.pago = pago;
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    try {
        let transporter = nodemailer_1.default.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: GMAIL_ADMIN,
                pass: PASSWORD_ADMIN,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });
        let info = yield transporter.sendMail({
            from: `${GMAIL_ADMIN}>`,
            to: `${email}`,
            subject: "BIENVENID@ A ECOMERCE",
            html: `Hello ${name}. Thank you very much for joining HIREMY SKILLS 👏. <br></br>We invite you to browse our page and find the ideal purchase.  
           .<br></br>the best shopping site✍️📉 <br></br>
           <a href='https://ecommerce-pf.vercel.app/'>Enter here to return to the site</a> - <br></br>
          `,
        });
        res.status(200).send(info);
    }
    catch (error) {
        res.status(402).send(error);
        console.log(error);
    }
});
exports.newUser = newUser;
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
