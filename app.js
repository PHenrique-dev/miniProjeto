const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const proprietarioRoutes = require('./routes/proprietarioRoutes');
const veiculoRoutes = require('./routes/veiculoRoutes');
const estacionamentoRoutes = require('./routes/estacionamentoRoutes');

const app = express();
app.use(bodyParser.json());

app.use(proprietarioRoutes);
app.use(veiculoRoutes);
app.use(estacionamentoRoutes);

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
module.exports = app;