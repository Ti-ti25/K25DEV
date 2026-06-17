const express = require('express');
const path = require('path');
const app = express();

// Permet au serveur de lire les données envoyées par les formulaires
app.use(express.urlencoded({ extended: true }));

// Renvoyer la page d'accueil (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Renvoyer la page de contact
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// Renvoyer la page admin
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// Gestion du port DYNAMIQUE pour Render (TRÈS IMPORTANT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`K25 DEV est en ligne sur le port ${PORT}`);
});