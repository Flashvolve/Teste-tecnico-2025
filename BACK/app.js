const express = require('express');
const cors = require('cors'); // Importar o middleware CORS
const usersRoutes = require('./routes/usersRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Permitir todas as origens
app.use(express.json());

// Routes
app.use('/user', usersRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
