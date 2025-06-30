import React from "react";
import { useAuth } from "../AuthContext";

const Dashboard = () => {
  const { user, role } = useAuth();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bienvenido, {user.email}</h1>
      <h2>Tu rol es: {role}</h2>
      <p>Aquí irán las gráficas, filtros, etc.</p>
    </div>
  );
};

export default Dashboard;