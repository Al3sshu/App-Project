import './cabecera.css';

function Menu() {

    return(
    <header className='header'>
        <h1 className='cabecera-h1'> Menu</h1>
        <a href='#' className='login'>
            Subcribete
        </a> 

       

        <nav className='navbar'>
            <ul>
                <a href='./colorimetria' className='lista-nav' > Colorimetria</a> <br></br>
               <a href='./style' className='lista-nav'>Estilos</a><br></br>
               <a href='./rostro' className='lista-nav'>Rostro</a>
            </ul>

        </nav>
    </header>
    )
}

export default Menu;