import express from "express";

const app = express();
const PORT = 3000 || 3001;






app.use((err, req, res, next) => {
    res.status(400).send(err.message);
 });




app.listen(PORT, () => {
    console.log(`server running on Port: ${PORT}`);
});
