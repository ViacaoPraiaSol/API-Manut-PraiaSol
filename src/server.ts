import app from "./app";
import 'dotenv/config'

const PORT = process.env.PORT || 7070;

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`))