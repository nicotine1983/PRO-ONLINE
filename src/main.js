const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", app: "PRO ONLINE" });
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
      client: "Bouygues",
    }
  ]);
});

app.get("/api/timeline", (req, res) => {
  res.json([
    { step: "Commande fournisseur", status: "OK" },
    { step: "Transport", status: "EN_COURS" },
    { step: "Livraison", status: "14:00" },
    { step: "Retour matériel", status: "Demain 08:00" }
  ]);
});

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
  ]);
}); 
    }
  ]);
});
