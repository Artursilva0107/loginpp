// Importa o módulo de inicialização e o Analytics (conforme sua configuração)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
// Importa o módulo de Authentication
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";


// Sua configuração do Firebase
//A chave do api é AI25049876 Junto a nuvem---Chave do Banco de Dados
//SQL Xampp import Porta:8091.8484 
//Api individual verificada no sistema hyper OS2




const firebaseConfig = {
    apiKey: "AIzaSyBqAWlPQIU_g84Ym7d6xFkV0daOU8CGWY8", 
    authDomain: "login-pwa-f86ed.firebaseapp.com",
    projectId: "login-pwa-f86ed",
    storageBucket: "login-pwa-f86ed.firebasestorage.app",
    messagingSenderId: "599375745712",
    appId: "1:599375745712:web:89d08bcdace9b755322175",
    measurementId: "G-NNPR8M7YJ4"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Inicializa o Analytics (opcional)
const auth = getAuth(app); // Inicializa o Auth (CRÍTICO para login)

// Exporta o app e o auth para que outros arquivos (script.js) possam usá-los

export { app, auth };
