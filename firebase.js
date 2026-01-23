// firebase.js
import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDxUwAXjHPiYpDwqUGAz6zuRvZQJ-tLzl0",
  authDomain: "inventory-94871.firebaseapp.com",
  projectId: "inventory-94871",
  storageBucket: "inventory-94871.firebasestorage.app",
  messagingSenderId: "1008805145842",
  appId: "1:1008805145842:web:f1190c384ccc0682ee346b"
};

// INIT FIREBASE
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
