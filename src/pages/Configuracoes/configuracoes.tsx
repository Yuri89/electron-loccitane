import { useState } from "react";
import "./style.css";
import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/header";
import NavBarVertical from "../../components/SiderBar/siderbar";

function Configuracoes(){
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
                        <div className="page2">
                            <div className="secao">

                            </div>
                            <div className="secao">

                            </div>
                        </div>

                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Configuracoes;