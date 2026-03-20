const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API running");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", app: "PRO ONLINE" });
});

app.get("/api/missions", (req, res) => {
  res.json([
    {
      id: "MISSION-MANU-001",
      nom: "Levage charpente",
      statut: "EN_COURS",
      grue: "MK88",
      client: "Bouygues"
    },
    {
      id: "MISSION-MANU-002",
      nom: "Pose clim",
      statut: "PREPARATION",
      grue: "MK88",
      client: "Bouygues"
    }
  ]);
});

app.get("/api/timeline", (req, res) => {
  res.json([
    { step: "Préparation", status: "Aujourd'hui 10:00" },
    { step: "Levage principal", status: "Aujourd'hui 14:00" },
    { step: "Retour matériel", status: "Demain 08:00" }
  ]);
});

app.get("/api/map", (req, res) => {
  res.json({
    chantier: {
      lat: 48.8566,
      lng: 2.3522,
      zoom: 15
    }
  });
});

app.get("/api/alerts", (req, res) => {
  res.json([
    {
      type: "SURCHARGE",
      niveau: "CRITIQUE",
      message: "Charge proche limite"
    },
    {
      type: "CONFLIT_PLANNING",
      niveau: "MOYEN",
      message: "Chevauchement missions"
    },
    {
      type: "SECURITE",
      niveau: "IMPORTANT",
      message: "Zone non sécurisée"
    }
  ]);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
