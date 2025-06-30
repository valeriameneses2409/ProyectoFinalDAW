import React, { useState, useEffect } from "react";
import { auth } from "./firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import Grafica from "./Grafica"; // 👈 importar componente de gráfica

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Usuario registrado");
    } catch (error) {
      alert("Error al registrar: " + error.message);
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Inicio de sesión exitoso");
    } catch (error) {
      alert("Error al iniciar sesión: " + error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    alert("Sesión cerrada");
    setEmail("");
    setPassword("");
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Login con Firebase</h2>

      {user ? (
        <>
          <p>Bienvenido: {user.email}</p>
          <button onClick={logout}>Cerrar Sesión</button>

          <hr />
          <Grafica /> {/* 👈 Aquí se muestra la gráfica */}
        </>
      ) : (
        <>
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br /><br />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br /><br />
          <button onClick={register}>Registrar</button>
          <button onClick={login}>Iniciar Sesión</button>
        </>
      )}
    </div>
  );
}

export default App;
