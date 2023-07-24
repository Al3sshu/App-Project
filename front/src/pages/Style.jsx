import './style.css';

function Style() {

    return (
        <><h1 className='h1'>IDENTIFICATE </h1><>
            <section className='articulo'>
                <h2 className='casual'>Estilo Casual</h2>
                <div className='content'>
                    <img className='img-casual' src='casual.jpg'></img>
                    <p className='def1'>Estilo típico de hombre y mujeres activos y practicos.<br></br>
                        Sus prendas son líneas básicas y cómodas <br></br> generalmente holgadas, y de colores neutros <br></br>
                        Suelen usar pocos complementos o capuchas,<br></br> denim, leggins y zapatillas.<br></br> </p>
                </div>
            </section>

            <section >
                <h2 className='ejecutivo'>Estilo Ejecutivo</h2>
                <div className='conteiner'>
                    <img className='img-ejecutivo' src='ejecutivo.jpg'></img>
                    <p className='def2'>Estilo tipico de personas que buscan un estilo sencillo <br></br>
                        y profesional, solo utilizan complementos como bisuteria, cinturones <br></br>
                        se caracteriza en faldas largas, apenas llevvas transparencias, <br></br> y los zapatos no son muy altos, tacon medio-bajo. <br></br>
                    </p>
                </div>
            </section>

            <section>
                <h2 className='bohemio'> Estilo Bohemio</h2>
                <div className='content'>
                    <img className='img-bohemio' src='bohemio.jpg'></img>
                    <p className='def1'>Estilo tipico de personas que buscan la libertad y creatividad<br></br>
                        utilizan prendas de líneas sueltas y volumenes discretos <br></br>
                        estilo comodo y relajado influencia hippie,<br></br> uso de complementos de bisuteria cargados, sombreros. <br></br>
                        Utilizan chanclas, zapatos planos (zapatillas) o con un poco de tacon.</p>
                </div>
            </section>

            <section className='articulo'>
                <h2>Estilo Minimalista</h2>
                <div className='conteiner'>
                    <img className='img-minimalista' src='minimalista.jpg' ></img>
                    <p className='def2'>Este estilo son aquellas personas que no quieren destacar<br></br> o llamar la atencion mucho<br></br>
                        Usan prendas de lineas finas, limpias, sin volumen, <br></br> los colores
                        que usan son blancos, beige, grises o negros, <br></br>
                        no utilizan demasiados complemntos.</p>
                </div>
            </section>

            <section>
                <h2>Estilo Oversized</h2>
                <div className='content'>
                    <img className='img-over' src='oversized.jpg'></img>
                    <p className='def1'>Estilo comodo y desenfadado, pueden llevar varias tallas<br></br> mas grandes
                        que no corresponde a su figura, prendas alargadas, anchas, <br></br> descuidan un poco su aspecto.<br></br>
                        Utilizan zapatillas deportivas,<br></br> plataformas, el uso de complementos como gafas, cinturones y algo de bisuteria. </p>
                </div>
            </section>


            <section>
                <h2>Estilo Lingerie</h2>
                <div className='conteiner'>
                    <img className='img-lingerie' src='lingerie.jpg'></img>
                    <p className='def2'>Estilo llamativo y resaltando su figura, suelen emplearse en prendas <br></br>
                        transparentes, pieles, bordados, rasos, sedas, o estampados de animales salvajes<br></br>
                        no se sule usarse en ambientes conservadores<br></br>
                        Utilizan complementos pero no muy recargados, usan tacones altos, plataformas.</p>
                </div>
            </section>

            <h2>FORMULARIO</h2>
            
            <ul className="creaction">

                <li className="ask"> ¿Cual es tu estacion favorita? <br></br>
                    <select name="estacion" id="estacion">
                        <option value="verano">Verano</option>
                        <option value="otoño">Otoño</option>
                        <option value="primaver">Primavera</option>
                        <option value="invierno">Invierno</option>
                    </select><br></br></li>

                    <li className="ask"> ¿Cual es tu lugar preferido? <br></br>
                        <select name="lugar" id="lugar">
                            <option value="playa">Playa</option>
                            <option value="montaña">Montaña</option>
                            <option value="nieve">Nieve</option>
                            <option value="ciudad">Ciudad</option>
                            <option value="pueblo">Pueblo</option>
                        </select><br></br></li>

                    <li className="ask"> ¿Dime tu hobbie que mas te identificas? <br></br>
                        <select name="hobbie" id="hobbie">
                            <option value="pintar">Pintar</option>
                            <option value="deporte">Deporte</option>
                            <option value="bailar">Bailar</option>
                            <option value="yoga">Yoga</option>
                            <option value="patinar">Patinar</option>
                            <option value="pasear">Pasear</option>
                        </select> <br></br></li>

                    <li className="ask">¿De que tipo de cabello tienes? <br></br>
                        <select name="lugar" id="lugar">
                            <option value="rizado">Rizado</option>
                            <option value="afro">Afro</option>
                            <option value="ondulado">Ondulado</option>
                            <option value="liso">Liso</option>
                            <option value="calvo">Calva/o</option>
                        </select> <br></br></li>

                    <li className="ask">¿Cual es tu color de cabello?<br></br>
                        <select name="lugar" id="lugar">
                            <option value="moreno">Moreno</option>
                            <option value="castaño">Castaño</option>
                            <option value="rubio">Rubio</option>
                            <option value="Pelirrojo">Pelirrojo</option>

                        </select> <br></br></li>

                    <li className="ask">¿Color de ojos?<br></br>
                        <select name="lugar" id="lugar">
                            <option value="marrones">Marrones</option>
                            <option value="avellana">Avellana</option>
                            <option value="azul">Azul</option>
                            <option value="verdes">Verdes</option>
                            <option value="grises">Grises</option>
                            <option value="negros">Negros</option>
                        </select> <br></br> </li>

                    <li className="ask">¿Que tono de piel tienes?<br></br>
                        <select name="lugar" id="lugar">
                            <option value="playa">Playa</option>
                            <option value="montaña">Montaña</option>
                            <option value="nieve">Nieve</option>
                            <option value="ciudad">Ciudad</option>
                            <option value="pueblo">Pueblo</option>
                        </select> <br></br></li>

                    <li className="ask">¿Con que colores te indentificas?<br></br>
                        <select name="lugar" id="lugar">
                            <option value="invierno">Colores frios, oscuros, brillantes, azul, verdes</option>
                            <option value="primavera"> Colores calidos,brillantes dorados, amarillos,  </option>
                            <option value="otoño"> Colores calidos,oscuros, suaves, marrones, naranjas, beige...</option>
                            <option value="verano">Colores frios, claros, suaves, lilas, azules , rosas...</option>


                        </select >

                        <li className="ask">¿Cual ovalo de rostro tienes?<br></br>
                            <select name="rostro" id="rostro">
                                <option value="oval">Oval</option>
                                <option value="rectangulo">  Rectangulo  </option>
                                <option value="triangulo"> Triangulo</option>
                                <option value="triangulo-invertido">Triangulo invertido</option>
                                <option value="diamante">Diamante</option>
                                <option value="corazon">Corazon</option>
                                <option value="hexagonal">Hexagonal</option>
                                <option value="cuadrado">Cuadrado</option>
                                <option value="redondo">Redondo</option>


                            </select >


                            <br></br></li> <br></br>
                        <input></input><br></br>
                        <button>ENVIAR</button>

                    </li><br></br>

            </ul></></>
    )
}


export default Style;