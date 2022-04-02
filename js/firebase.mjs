// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1vdVhNre0zXZbDGdkRGrdsUKwH4XHmI8",
  authDomain: "formularioweb-71e65.firebaseapp.com",
  projectId: "formularioweb-71e65",
  storageBucket: "formularioweb-71e65.appspot.com",
  messagingSenderId: "744431062662",
  appId: "1:744431062662:web:58844a258222645817cb07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const envioForm = () => {
  const envioDatos = async () => {
    try {
      const docRef = await addDoc(collection(db, "usuarios"), {
        nombre: document.getElementById("name").value,
        correo: document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        textarea : document.getElementById("comments").value,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };
  envioDatos();
}
