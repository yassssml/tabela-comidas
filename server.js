
import express from "express";
import dotenv from "dotenv";
import comidaRoutes from './src/routes/comidaRoutes.js'

const app = express();
app.use(express.json());

app.use('/comidas', comidaRoutes);

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("🚀 Servidor funcionando...");
});


app.listen(serverPort, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${serverPort} 🚀`);
});