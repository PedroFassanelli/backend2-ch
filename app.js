import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import passport from 'passport';
import sessionRoutes from './src/routes/sessions.js';
import userRoutes from './src/routes/users.js';

import './src/config/passport.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(passport.initialize());

// Rutas
app.use('/api/sessions', sessionRoutes);
app.use('/api/users', userRoutes);

// Conexión a la base de datos y arranque
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Conectado a MongoDB');
    app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
  }).catch(err => console.error('Error al conectar a MongoDB', err));
