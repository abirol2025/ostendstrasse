// server.js
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/api/arrivals', async (req, res) => {
  try {
    const response = await fetch('https://live.kvv.de/webapp/stops/700/Arrivals?timeSpan=60');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Fehler beim Abrufen der Daten:', error);
    res.status(500).json({ error: 'Fehler beim Abrufen der Daten' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy läuft auf http://localhost:${PORT}`);
});

