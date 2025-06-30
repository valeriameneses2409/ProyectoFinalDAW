import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const login = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log("Login correcto", user);
  } catch (error) {
    console.error("Error en login", error.message);
  }
};