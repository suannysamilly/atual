import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        alert("Login enviado!");
    }

    function handleSwitch(e) {
        e.preventDefault();
        navigate("/cadastro");
    }

    return (
        <div className="main-container">
            <div className="left-panel">
                <div className="content-wrapper">
                    <img src="/logo-pe.png" alt="Logo SES/PE" className="logo" />
                    <h1 className="title">GESTÃO DE ESTOQUE</h1>
                </div>
            </div>

            <div className="right-panel">
                <form className="form-content" onSubmit={handleSubmit}>
                    <h2 className="form-title">Login</h2>

                    <div className="input-group-first">
                        {/* <label>Email</label> */}
                        <input type="email" placeholder="Usuário" required />
                    </div>

                    <div className="input-group-last">
                        {/* <label>Senha</label> */}
                        <input type="password" placeholder="••••••••••" required />
                        <div className="bottom-link">
                            <p>
                                Não possui conta?{" "}
                                <a href="#" onClick={handleSwitch}>
                                    Criar cadastro
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="btn-container">
                        <button type="submit" className="btn-entrar">
                            ENTRAR
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;