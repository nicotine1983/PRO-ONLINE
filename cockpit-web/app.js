const API_URL = "https://pro-online-1.onrender.com";

const sections = document.querySelectorAll(".panel");
const navButtons = document.querySelectorAll(".nav-btn");
const refreshBtn = document.getElementById("refresh-btn");

const apiDot = document.getElementById("api-status-dot");
const apiText = document.getElementById("api-status-text");
const apiMetric = document.getElementById("metric-api");

navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    navButtons.forEach((b) => b.classList.remove("active"));
    sections.forEach((s) => s.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.section).classList.add("active");
  });
});

async function testApi() {
  apiText.textContent = "Test en cours...";
  apiMetric.textContent = "Test...";
  apiDot.classList.remove("online");
  apiDot.classList.add("offline");

  try {
const response = await fetch(`${API_URL}/api/health`);
    const data = await response.json();

    if (data.status === "OK") {
      apiDot.classList.remove("offline");
      apiDot.classList.add("online");
      apiText.textContent = "API connectée";
      apiMetric.textContent = "OK";
    } else {
      apiText.textContent = "Réponse inattendue";
      apiMetric.textContent = "Erreur";
    }
  } catch (error) {
    apiText.textContent = "API indisponible";
    apiMetric.textContent = "Offline";
  }
}

refreshBtn.addEventListener("click", testApi);
window.addEventListener("load", () => {
  testApi();
  loadMissions();
});

async function loadMissions() {
  const res = await fetch(`${API_URL}/api/missions`);
  const missions = await res.json();

  const container = document.getElementById("missions-list");
  container.innerHTML = "";

  missions.forEach((m) => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${m.nom}</h3>
      <p>Client: ${m.client}</p>
      <p>Grue: ${m.grue}</p>
      <p>Statut: ${m.statut}</p>
    `;

    container.appendChild(div);
  });
}
