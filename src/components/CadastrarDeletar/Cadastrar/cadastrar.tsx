import './style.css'

function Cadastrar(props: any) {

    return (
        <>
            {props.usuario === true?
        <div className='formBox'>
            
            <form className='form'>
                <h1>Cadastro</h1>
                <label htmlFor=""><span>Nome</span>  <input type="text" name="" id="" /></label>
                <label htmlFor=""><span>Sobrenome</span>  <input type="text" name="" id="" /></label>
                <label htmlFor=""><span>Telefone</span>  <input type="text" name="" id="" /></label>
                <label htmlFor=""><span>Email</span>  <input type="text" name="" id="" /></label>
                <label htmlFor=""><span>Senha</span>  <input type="text" name="" id="" /></label>
                <label htmlFor=""><span>Endreço</span>  <input type="text" name="" id="" /></label>
                <label htmlFor=""><span>Cargo</span>  <input type="text" name="" id="" /></label>
                <button className='botaoEditarPerfil'>salvar</button>
            </form>
            
        </div>:null}
            {props.estoque === true?
            <div className='formBox'>

                <form className='form'>
                    <h1>Cadastro</h1>

                    <label htmlFor="setor">
                        <span>Setor</span>
                        <select name="setor" id="setor" className='opcaoForm'>
                            <option value="opcao1">A</option>
                            <option value="opcao2">B</option>
                            <option value="opcao3">C</option>
                        </select>
                    </label>

                    <label htmlFor="corredor">
                        <span>Corredor</span>
                        <select name="corredor" id="corredor" className='opcaoForm' >
                            <option value="opcao1">1</option>
                            <option value="opcao2">2</option>
                            <option value="opcao3">3</option>
                            <option value="opcao3">4</option>
                            <option value="opcao3">5</option>
                            <option value="opcao3">6</option>
                        </select>
                    </label>

                    <label htmlFor="nivel">
                        <span>Nível</span>
                        <select name="nivel" id="nivel" className='opcaoForm'>
                            <option value="opcao1">1</option>
                            <option value="opcao2">2</option>
                            <option value="opcao3">3</option>
                            <option value="opcao3">4</option>
                        </select>
                    </label>

                    <label htmlFor="codigo">
                        <span>Código</span>
                        <input type="text" name="codigo" id="codigo" />
                    </label>

                    <button className='botaoEditarPerfil'>Salvar</button>
                </form>

            </div>
            :null}
        </>
    )
}

export default Cadastrar