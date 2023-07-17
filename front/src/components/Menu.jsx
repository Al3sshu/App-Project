import './cabecera.css';
function menu () {

    return <header className='header'>
         <h1 className='cabecera-h1'> Menu</h1>
         <a href='#' className='login'>
            Subcribete
         </a>

         <button className='click'>
            Click
            </button>

            <nav className='navbar'>
                <ul>
                    <li className='lista-nav'> Colorimetria</li>
                    <li className='lista-nav'>Estilos</li>
                    <li className='lista-nav'>Rostro</li>
                </ul>

            </nav>
    </header>
}

export default menu;