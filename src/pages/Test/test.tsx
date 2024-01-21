import { useState } from "react";
import Footer from "../../components/Footer/footer";
import NavBarVertical from "../../components/SiderBar/siderbar";
import Prateleira from '../../assets/svg/prateleira.svg'
import "./style.css";

function Test() {
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

                <div className="tela">
                    <div className="setor">
                        <span><div className="textSetor">A1</div>
                            <div className="corredor">
                                <div className="caixaPrateleira">
                                    <img src={Prateleira} alt="" className="img a"/>
                                    <img src={Prateleira} alt="" className="img b"/>
                                    <img src={Prateleira} alt="" className="img c"/>
                                </div>
                                <div className="caixaPrateleira">
                                    <img src={Prateleira} alt="" className="img a"/>
                                    <img src={Prateleira} alt="" className="img b"/>
                                    <img src={Prateleira} alt="" className="img c"/>
                                </div>
                                <div className="caixaPrateleira">
                                    <img src={Prateleira} alt="" className="img a"/>
                                    <img src={Prateleira} alt="" className="img b"/>
                                    <img src={Prateleira} alt="" className="img c"/>
                                </div>
                                
                            </div>

                            
                        </span>
                        <span><div className="textSetor">A2</div>
                            <div className="corredor">
                                <div className="caixaPrateleira">
                                    <img src={Prateleira} alt="" className="img a"/>
                                    <img src={Prateleira} alt="" className="img b"/>
                                    <img src={Prateleira} alt="" className="img c"/>
                                </div>
                                <div className="caixaPrateleira">
                                    <img src={Prateleira} alt="" className="img a"/>
                                    <img src={Prateleira} alt="" className="img b"/>
                                    <img src={Prateleira} alt="" className="img c"/>
                                </div>
                                <div className="caixaPrateleira">
                                    <img src={Prateleira} alt="" className="img a"/>
                                    <img src={Prateleira} alt="" className="img b"/>
                                    <img src={Prateleira} alt="" className="img c"/>
                                </div>
                                
                            </div>

                            
                        </span>
                    </div>
                    
                </div>
                <Footer/>
                </div>
            </div>
        </>
    );
}



export default Test;