const express = require('express');
const app = express();
const estacionamentoRoutes = require('./routes/estacionamentoRoutes');
const proprietarioRoutes = require('./routes/proprietarioRoutes');
const veiculoRoutes = require('./routes/veiculoRoutes');

app.use(express.json());

app.use('/estacionamento', estacionamentoRoutes);
app.use('/proprietarios', proprietarioRoutes);
app.use('/veiculos', veiculoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
