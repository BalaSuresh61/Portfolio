// // server.js
// import express from 'express';
// import cors from 'cors';
// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';

// dotenv.config();
// const app = express();
// app.use(express.json());

// app.use(cors({
//   origin: 'http://localhost:5173'
// }));

// app.post('/send-email', async (req, res) => {
//   const { message } = req.body;

//   try {
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASS
//       }
//     });

//     const info = await transporter.sendMail({
//       from: process.env.EMAIL,
//       to: 'kbsbala61@gmail.com',
//       subject: 'Hello',
//       text: message
//     });

//     console.log('Message: ',message)
//     res.json({ success: true, messageId: info.messageId });
//   } catch (err) {
//     res.status(500).json({ success: false, error: err.message });
//   }
// });

// app.listen(3001, () => console.log('Server running on port 3001'));
