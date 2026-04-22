import { useNavigate } from "react-router-dom";

function Cadastro() {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        alert("Cadastro enviado!");
    }

    function handleSwitch(e) {
        e.preventDefault();
        navigate("/");
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
                    <h2 className="form-title">Novo Cadastro</h2>

                    <div className="input-group-first">
                        {/* <label>Nome Completo</label> */}
                        <input type="text" placeholder="Digite seu nome completo" required />
                    </div>

                    <div className="input-group">
                        {/* <label>Email Corporativo</label> */}
                        <input type="email" placeholder="Digite seu email" required />
                    </div>

                    <div className="form-row" style={{ display: "flex", gap: "15px" }}>
                        <div className="input-group" style={{ flex: 1 }}>
                            {/* <label>UNIDADE</label> */}
                            <select required>
                                <option value="">UNIDADE</option>
                                <option>SEDE ADMINISTRATIVA (SES/PE)</option>
                                <option>FUSAM</option>
                            </select>
                        </div>

                        <div className="input-group" style={{ flex: 1 }}>
                            {/* <label>SETOR</label> */}
                            <input type="text" placeholder="Setor" required />
                        </div>
                    </div>

                    <div className="input-group-last">
                        {/* <label>SETOR</label> */}
                        <input type="password" placeholder="Crie uma senha segura" required />
                        <div className="bottom-link">
                            <p>
                                Já possui conta?{" "}
                                <a href="#" onClick={handleSwitch}>
                                    Realizar Login
                                </a>
                            </p>
                        </div>
                    </div>

                        <div className="btn-container">
                            <button type="submit" className="btn-entrar">
                                Confirmar Cadastro
                            </button>
                        </div>

                </form>
            </div>
        </div>
    );
}

export default Cadastro;