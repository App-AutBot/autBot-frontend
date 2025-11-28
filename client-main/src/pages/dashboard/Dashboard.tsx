import { useEffect, useState } from "react";
import SharedTopBar from "../../components/topbar/SharedTopBar";
import { getDashboardStats } from "../../service/Dashboard"; 
import BarChartDashboard from "../../components/BarChartDashboard";
import "./Dashboard.css";

interface DashboardData {
  totalUsuarios: number;
  totalChats: number;
  mensagensEnviadas?: number;  
  usuariosAtivosHoje?: number; 
}
export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getDashboardStats();
        setData(result);
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar estatísticas do dashboard.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="dashboard-page">
      <SharedTopBar pageType="dashboard" />
      
      <div className="dashboard-content">
        <h1>Dashboard</h1>

        {loading && <p>Carregando...</p>}
        {error && <p className="error">{error}</p>}

        {data && (
          <>
            {/*CARDS DA ESQUERDA*/}
            <div className="dashboard-cards">
              <div className="dashboard-card">
                <h3>Total de Usuários</h3>
                <p>{data.totalUsuarios}</p>
              </div>
              <div className="dashboard-card">
                <h3>Total de Chats</h3>
                <p>{data.totalChats}</p>
              </div>
              <div className="dashboard-card">
                <h3>Mensagens Enviadas</h3>
                <p>{data.mensagensEnviadas || 0}</p>
              </div>
              <div className="dashboard-card">
                <h3>Usuários Ativos Hoje</h3>
                <p>{data.usuariosAtivosHoje || 0}</p>
              </div>
            </div>

            {/* GRÁFICO NA ÁREA VAZIA*/}
            <div className="dashboard-chart-area">
              <BarChartDashboard
                totalUsuarios={data.totalUsuarios}
                totalChats={data.totalChats}
                totalMensagens={data.mensagensEnviadas || 0}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

