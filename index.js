import express from "express";
import bodyParser from "body-parser";
import sql from "msnodesqlv8"

const app = express();
app.use(bodyParser.json());

const port = 3000;
const connectionString = "server=XXX;Database=carros;Trusted_Connection=Yes;Driver={Sql Server Native Client 11.0}";

//Leitura
app.get("/carros", (req,res) => {
    sql.query(connectionString, "SELECT * FROM carros", (erro, rows) => {
        if (erro) {
            res.status(500).json("Erro Interno de Servidor");
        } else {
            res.status(200).json(rows);
        }
    });
});

app.listen(PORT, () => console.log(`Server rodando na porta ${PORT}`));