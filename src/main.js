const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: [
    "https://pro-online-2.onrender.com",
    "https://pro-online.fr",
    "https://www.pro-online.fr"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.get("/", (req, res) => {
  res.send("API running");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", app: "PRO ONLINE" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/api/missions", (req, res) => {
  res.json([
    {
      id: 1,
      nom: "Levage charpente",
      statut: "EN_COURS",
      grue: "LTM 1200",
      client: "Eiffage",
    },
    {
      id: 2,
      nom: "Pose clim",
      statut: "PREPARATION",
      grue: "MK88",
      
app.get("/api/timeline", (req, res) => {
  res.json([
    { step: "Commande fournisseur", status: "OK" },
    { step: "Transport", status: "EN_COURS" },
    { step: "Livraison", status: "14:00" },
    { step: "Retour matériel", status: "Demain 08:00" }
  ]);
});
      client: "Bouygues",
       app.get("/api/map", (req, res) => {
  res.json({
    chantier: {
      nom: "Chantier Eiffage",
      lat: 44.8378,
      lng: -0.5792
    },
    grue: {
      nom: "LTM 1200",
      lat: 44.8384,
      lng: -0.5785,
      statut: "EN_POSTE"
    },
    convoi: {
      nom: "Convoi exceptionnel",
      lat: 44.8369,
      lng: -0.581,
      statut: "EN_APPROCHE"
    },
    zoneLevage: [
      [44.8381, -0.5790],
      [44.8381, -0.5783],
      [44.8375, -0.5783],
      [44.8375, -0.5790]
    ]
  });
});

app.get("/api/alerts", (req, res) => {
  res.json([
    {
      type: "SURCHARGE",
      niveau: "CRITIQUE",
      message: "Charge proche de la limite sur la mission Levage charpente"
    },
    {
      type: "CONFLIT_PLANNING",
      niveau: "MOYEN",
      message: "Chevauchement détecté entre MISSION-MANU-004 et MISSION-MANU-005"
    },
    {
      type: "SECURITE",
      niveau: "IMPORTANT",
      message: "Zone de levage à baliser avant reprise des opérations"
    }
  ]);
}); 
    }
  ]);
});
