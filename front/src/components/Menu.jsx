import './cabecera.css';

function Menu() {

    return(
    <header className='header'>
        <h1 className='cabecera-h1'> Menu</h1>
        <a href='#' className='login'>
            Subcribete
        </a>

        <button className='click'>
            Click
        </button>

        <nav className='navbar'>
            <ul>
                <a href='./colorimetria'><li className='lista-nav' > Colorimetria</li></a>
               <a href='./style'> <li className='lista-nav'>Estilos</li></a>
               <a href='./rostro'> <li className='lista-nav'>Rostro</li></a>
            </ul>

        </nav>
    </header>
    )
}

export default Menu;