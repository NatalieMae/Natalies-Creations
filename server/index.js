import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// import nodemailer from 'nodemailer';
import multer from 'multer';
import bcrypt from 'bcrypt';


import postRoutes from './Routes/posts.js';

const app = express();

const upload = multer({ dest: "uploads" })
const CONNECTION_URI = "mongodb+srv://nataliemae:dominick1@cluster0.bnyagzx.mongodb.net/PhotosDB"; 
const PORT = process.env.PORT || 5001

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.uriencoded({ limit: "30mb", extended: true }));
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
        const file = await File.create(fileData)
        res.render("index", {fileLink: `${req.headers.origin}/file/${file.id}` })
})

app.get("/finalproject/server/models/file.js", (req, res) => {})



mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => app.listen(PORT, () => console.log(`Server running on port: mongodb://localhost:${PORT}`)))
        .catch((error) => console.log(`${error} did not connect`));





