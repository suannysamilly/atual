import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioLogado = JSON.parse(localStorage.getItem("ses_usuario_logado"));

    if (!usuarioLogado) {
      navigate("/");
    } else {
      setUsuario(usuarioLogado);
    }
  }, [navigate]);

  function handleLogout() {
    localStorage.removeItem("ses_usuario_logado");
    navigate("/");
  }

  return (
    <div className="dashboard">
      <header>
        <h2>Olá, {usuario?.nome}</h2>
        <p>{usuario?.tipo === "admin" ? "Administrador" : "Solicitante"}</p>

        <button onClick={handleLogout}>Sair</button>
      </header>

      <main>
        {usuario?.tipo === "admin" ? (
          <AdminArea />
        ) : (
          <SolicitanteArea />
        )}
      </main>
    </div>
  );
}

function AdminArea() {
  return (
    <div>
      <h3>Dashboard Admin</h3>
      {/* aqui depois você coloca tabela, gráfico etc */}
    </div>
  );
}

function SolicitanteArea() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h3>Minhas Solicitações</h3>
      <button>Ir para solicitações</button>
    </div>
  );
}

export default Dashboard;