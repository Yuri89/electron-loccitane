import "./style.css";

import {Link, useLocation} from 'react-router-dom'

function Header(){

    const rota = useLocation();
    const nomeRota = rota.pathname;
    return(
    <>
    <header>
        <nav className="NavBar">
            <h1>Sistem Stock</h1>

            {nomeRota == '/dados'?
            <div>
            <Link to='/test' className=" link-nav">DashBoard</Link>
            <Link to='/test' className=" link-nav">Metricas</Link>
            <Link to='/test' className=" link-nav">Mapa</Link>
            </div>:null}

            {nomeRota == '/estoque'?
            <div>
            <Link to='/test' className=" link-nav">Cadastrar</Link>
            <Link to='/test' className=" link-nav">Listar</Link>
            <Link to='/test' className=" link-nav">Deletar</Link>
            </div>:null}

            {nomeRota == '/gestao'?
            <div>
            <Link to='/test' className=" link-nav">Cadastrar</Link>
            <Link to='/test' className=" link-nav">Listar</Link>
            <Link to='/test' className=" link-nav">Deletar</Link>
            </div>:null}


            {nomeRota == '/config'?
            <div>
            
            </div>:null}

            {nomeRota == '/test'?
            <div>
            <Link to='/test' className=" link-nav">test1</Link>
            <Link to='/test' className=" link-nav">test2</Link>
            <Link to='/test' className=" link-nav">test3</Link>
            </div>:null}
            
        </nav>
     </header>
    </>
    );
}

export default Header;