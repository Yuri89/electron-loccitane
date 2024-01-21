import { useState } from "react";
import "./style.css";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import NavBarVertical from "../../components/SiderBar/siderbar";
import fotoEstoque from '../../assets/img/fotoEstoque.png'
import Lupa from '../../assets/svg/lupa.svg'

function Gestao(){
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
                    <Header />
                    <div className="page">
                        <div className="footer2">
                            <span className="caixaOpcao">filtro</span>
                            <span className="caixaOpcao">ordenar</span>
                            <div className="caixaOpcao"><input type="text" name="" id="" className="pesquisa" placeholder="pesquisar" /><img src={Lupa} alt="" /></div>
                        </div>

                        <div className="pageCard">
                            <div className="card">
                                <img src={fotoEstoque} alt="" />
                                <span>produto1: 1111234</span>
                                <span>data: 10/10/2024</span>
                                <span>está 6 dias no estoque</span>
                            </div>
                            <div className="card">
                                <img src={fotoEstoque} alt="" />
                                <span>produto1: 1111234</span>
                                <span>data: 10/10/2024</span>
                                <span>está 6 dias no estoque</span>
                            </div>
                            <div className="card">
                                <img src={fotoEstoque} alt="" />
                                <span>produto1: 1111234</span>
                                <span>data: 10/10/2024</span>
                                <span>está 6 dias no estoque</span>
                            </div>
                            <div className="card">
                                <img src={fotoEstoque} alt="" />
                                <span>produto1: 1111234</span>
                                <span>data: 10/10/2024</span>
                                <span>está 6 dias no estoque</span>
                            </div>
                            <div className="card">
                                <img src={fotoEstoque} alt="" />
                                <span>produto1: 1111234</span>
                                <span>data: 10/10/2024</span>
                                <span>está 6 dias no estoque</span>
                            </div>
                            <div className="card">
                                <img src={fotoEstoque} alt="" />
                                <span>produto1: 1111234</span>
                                <span>data: 10/10/2024</span>
                                <span>está 6 dias no estoque</span>
                            </div>
                            <div className="card">
                                <img src={fotoEstoque} alt="" />
                                <span>produto1: 1111234</span>
                                <span>data: 10/10/2024</span>
                                <span>está 6 dias no estoque</span>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>

            </div>
        </>
    );
}

export default Gestao;