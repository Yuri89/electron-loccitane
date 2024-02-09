import { Link } from 'react-router-dom'
import fotoEstoque from '../../../assets/img/fotoEstoque.png'
import './style.css'

function CardEstoque() {
    return (
        <>
            <Link to={'/paginacardestoque'}>
            <div className="cardEstoque">
                <img src={fotoEstoque} alt="" />
                <span>produto1: 1111234</span>
                <span>data: 10/10/2024</span>
                <span>está 6 dias no estoque</span>
            </div>
            </Link>
        </>
    )
}

export default CardEstoque