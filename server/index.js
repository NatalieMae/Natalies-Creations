import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// import nodemailer from 'nodemailer';
import multer from 'multer';
// import bcrypt from 'bycrypt';


import postRoutes from './Routes/posts.js';

const app = express();

const upload = multer({ dest: "uploads" })
const CONNECTION_URL = "mongodb+srv://nataliemae:dominick1@cluster0.bnyagzx.mongodb.net/PhotosDB"; 
const PORT = process.env.PORT || 5001

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/posts', postRoutes);

app.set("view engine", "html")

app.get('/', (req, res) => {
        res.render('index')
})

app.post("/upload", upload.single("file"), async (req, res) => {
        const fileData = {
                path:req.file.path,
                originalName: req.file.originalname
        }
        if (req.body.password != null && req.body.password !== "")
        {
                fileData.password = await bcrypt.hash(req.body.password, 10)
        }
        const file = await file.create(fileData)
})




mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`)))
        .catch((error) => console.log(`${error} did not connect`));





