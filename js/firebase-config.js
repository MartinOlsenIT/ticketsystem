  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA6ZMjlVXSnpRLSxYnfDgfr39LnDTBchcI",
    authDomain: "ticket-system-22e3b.firebaseapp.com",
    projectId: "ticket-system-22e3b",
    storageBucket: "ticket-system-22e3b.firebasestorage.app",
    messagingSenderId: "1016922388739",
    appId: "1:1016922388739:web:c0875c6f807776a3f25136",
    measurementId: "G-JZFK9DQJJ4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);