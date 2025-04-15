import express from "express";
import fs from "fs";
import bikeRoutes from "./routes/bikeRoutes.mjs"

const app = express();
const PORT = 3000 || 3001;


app.engine('template', (filePath, options, callback)=>{
    fs.readFile(filePath, (err, content)=>{
        if(err) return callback(err);

        const rendered = content.toString()

        return callback(null, rendered);
    });
});

app.set('views', './views'); 
app.set('view engine', 'template');

app.use('/bike', routes);


app.use((err, req, res, next) => {
    res.status(400).send(err.message);
 });




app.listen(PORT, () => {
    console.log(`server running on Port: ${PORT}`);
});
