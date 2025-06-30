// src/Grafica.js
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Grafica() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const datosRef = collection(db, "ventas");
        const snapshot = await getDocs(datosRef);

        const datosFormateados = snapshot.docs.map((doc) => doc.data());

        console.log("Datos recibidos:", datosFormateados);
        setDatos(datosFormateados);
      } catch (error) {
        console.error("Error al obtener los datos de Firestore:", error);
      }
    };

    obtenerDatos();
  }, []);

  return (
    <div>
      <h3>Gráfica desde Firebase</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={datos}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="valor" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Grafica;
