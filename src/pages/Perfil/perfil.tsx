import { useState } from "react";
import "./style.css";
import Footer from "../../components/Footer/footer";
import NavBarVertical from "../../components/SiderBar/siderbar";
import Foto from '../../assets/img/user.jpg'

function Perfil() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <div className="divisao">
                <div className={`container1 ${menuOpen ? 'open' : 'close'}`}>
                    <NavBarVertical click={handleClick} estado={`sliderbar ${menuOpen ? 'open' : 'close'}`} />
                </div>
                <div className={`container2 ${menuOpen ? 'open' : 'close'}`}>

                <header className="perfilHeader">
                    <img src={Foto} alt="" /> 
                    <span>edson nascimento</span>
                    
                </header>
                <section className="secaoPerfil">
                    <div className="containerPerfil1">
                       <span>Nome: edson</span>
                       <span>Sobrenome: nascimento</span>
                       <span>Email: edson@email</span>
                       <span>Endereco: rua madalena</span>
                       <span>Numero: 253</span>
                       <span>Cargo: operador de produção</span>
                    </div>
                    <div className="containerPerfil2">
                       <span>Atributos: </span>
                       
                    </div>
                </section>
                <section className="secaoPerfil">
                    <span>senha *********</span>
                </section>
                

                <Footer/>
                </div>
            </div>
        </>
    );
}

export default Perfil;