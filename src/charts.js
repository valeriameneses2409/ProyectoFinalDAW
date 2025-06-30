import { Bar } from 'react-chartjs-2';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const Dashboard = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "sales_data"));
      const data = querySnapshot.docs.map(doc => doc.data());
      setDatos(data);
    };
    fetchData();
  }, []);

  const chartData = {
    labels: datos.map(d => d.region),
    datasets: [{
      label: 'Ventas',
      data: datos.map(d => d.ventas),
      backgroundColor: 'rgba(75,192,192,0.6)'
    }]
  };

  return <Bar data={chartData} />;
};