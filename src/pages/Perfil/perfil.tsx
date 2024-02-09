import { useState } from "react";
import "./style.css";
import Footer from "../../components/Footer/footer";
import SiderBar from "../../components/SiderBar/siderbar";
import Foto from '../../assets/img/user.jpg'
import Lapis from '../../assets/svg/lapis.svg'

function Perfil() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <div className="divisao">
                <div className={`container1 ${menuOpen ? 'open' : 'close'}`}>
                    <SiderBar click={handleClick} estado={`sliderbar ${menuOpen ? 'open' : 'close'}`} />
                </div>
                <div className={`container2 ${menuOpen ? 'open' : 'close'}`}>

                    <header className="perfilHeader">
                        <img src={Foto} alt=""/>
                        <div className="nomeCargo">
                            <h1 className="nomeApresentacao">Edson Nascimento</h1>
                            <h2 className="cargoApresentacao">Analista Gestão de Estoques</h2>
                        </div>

                    </header>
                    <section className="secaoPerfil">
                        <div className="containerPerfil1">
                            <span><h1>Nome</h1> <div><input type="text" value={'Edson'} disabled className="editavel"/> <img src={Lapis} alt="" className="editar"/></div></span>
                            <span><h1>Sobrenome</h1> <div><input type="text" value={'Nascimento'} disabled className="editavel"/> <img src={Lapis} alt="" className="editar"/></div></span>
                            <span><h1>Email</h1> <b className="naoEditavel">edson@email</b></span>
                            <span><h1>Endereco</h1> <div><input type="text" value={'rua madalena'} disabled className="editavel"/> <img src={Lapis} alt="" className="editar"/></div></span>
                            <span><h1>Numero</h1> <div><input type="number" value={'254'} disabled className="editavel"/> <img src={Lapis} alt="" className="editar"/></div></span>
                            <span><h1>Cargo</h1> <b className="naoEditavel">operador de produção</b></span>
                            <span><h1>Senha</h1> <div><input type="password" value={'********'} disabled className="editavel"/> <img src={Lapis} alt="" className="editar"/></div></span>
                            <div className="botaoEditarPerfil"><button>Confirmar Alterações</button><button>Reverter</button></div>
                        </div>
                        <div className="containerPerfil2">
                            <span><p className="descricao">Descricão:</p> ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</span>

                        </div>
                    </section>
                    


                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Perfil;