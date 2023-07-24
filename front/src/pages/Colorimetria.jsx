import './color.css';

function Colorimetria() {
    return (
        <><>
            <section className="caja"> <h1>¿Con que color te indentificas?</h1>
                <p>Empecemos explicando un poco de que trata este apartado, os preguntareis porque digo <br></br>
                    de que color os identificais, pues bien esta parte es curiosas ya que depende del color de vuestras piel, ojos, y cabello<br></br>
                    os favorecera unos colores u otros, hay una pequeña pista cuando os poneis diferentes colores,<br></br>
                    y es cuando os marcan las ojeras de los ojos, ¡Si habeis leido bien!, depende si os marcan mas las ojeras NO ES FAVORABLE, <br></br>
                    pero si no se marcan ¡SI ES FAVORABLE!.</p>
            </section>
            <section className="caja">
                <p>Pero hay que tranquilizarse, no creas que no eliges bien los colores, ya que por naturaleza<br></br>
                    normalmente prevalece y las probabilidades son buenas, y se eligen el color adecuado.<br></br>
                    Y vosotro@s probablemente ya sabeis que colores os hacen sentir confianza</p>
            </section>

            <section className="caja1">
                <h1>Las paletas segun tu estacion</h1>
                <p className='content1'>Cada estacion presenta un rasgo distinto de colores.<br></br>
                    Se puede clasificar en colores frios y colores calidos, pero en esas hay variables <br></br>
                    entonces distinguiendo entre si, los colores frios puedes ser oscuros o claros,<br></br> y en los colores calidos pasa lo mismo <br></br>
                </p>
            </section>

        </><img className="color" src="color.jpg"></img>
            <body>
                <div>
                    <h1>TONO DE PIEL</h1>
                    <p>El tono de piel nos ayuda tambien a confirmar que colores nos quedan mejor,<br></br>
                        tambien con el color del cabello y de los ojos, nos pueden dar pista de que paleta nos favorecen mejor<br></br>
                    </p>
                    <h1>Plaleta fria</h1>
                    <h2>INVIERNO</h2>
                    <p>La mayoria de las personas invierno, tienen ojos marrones, azulos o un verdoso grisaceo, o color avellana con tono gris<br></br>
                        el cabello de pelo castaño oscuro, negro.
                        La piel muy blanca con matid rojiza o negra con matiz azulado.
                        Presentan mucho contraste entre el tono de su piel y su cabello.
                    </p>

                </div>
                <div>
                    <h2>VERANO</h2>
                    <p>Las personas que que se consideren verano, tienen los ojos azul profundo, o marron medio, verdes<br></br>
                        pueden tener pecas, con el cabello, resalta su tono ceniza, rubios, castaños, marron <br></br>
                        su tono de piel piel blanca pero al broncearse, no se pone roja.
                        Presentan mucho menos contrastes entre el tono de su piel, cabello y ojos<br></br>
                    </p>


                </div>
                <table className='tabla'>
                    <tr>
                        <th>INVIERNO</th>
                        <th>VERANO</th>
                    </tr>
                    <tr>
                        <td>Azul marino</td>
                        <td>Azules claros</td>
                        
                    </tr>
                    <tr>
                        <td>Negro</td>
                        <td>Ciruela</td>
                    </tr>
                    <tr>
                        <td>Blanco</td>
                        <td>Rosa pastel</td>
                    </tr>
                    <tr>
                    <td>Rojo</td>
                    <td>Lavanda</td>
                    </tr>
                    
                </table>
                <img className='img-invierno' src='invierno.jpg'></img>
                    <img className='img-verano' src='verano.jpg'></img>

                <div>
                    <h1>Paleta calida</h1>
                    <h2>OTOÑO</h2>
                    <p> Las personas que tienen los oos marrones, verdes olivas<br></br>
                        el cabello tiene refejos dorados, o rojos, ya sean rubios o pelirrojos o morenos.<br></br>
                        Su piel  clara, melocotón, negra con matid dorada, beige con subtono amarillo<br></br>
                    </p>
                </div>

                <div>
                    <h2>PRIMAVERA</h2>
                    <p>Estas personas tiene ojos azules, verdes, ambar.Su cabello son mas rubias que se van oscureciendo con la edad,<br></br>
                        pero mantiene su tono dorado, castaños. El tono de piel es clara o de melocoton</p>
                </div>
                <table className='tabla'>
                    <tr>
                        <th>OTOÑO</th>
                        <th>PRIMAVERA</th>

                    </tr>
                    <tr>
                        <td>Marron oscuro</td>
                        <td>Marron dorado</td>
                    </tr>
                    <tr>
                        <td>Camel</td>
                        <td>Rosa melocoton</td>
                    </tr>
                    <tr>
                        <td>Beige</td>
                        <td>Amarillo dorado</td>
                    
                    </tr>
                    <tr>
                        <td>Musgo verde</td>
                        <td>Naranja</td>
                    </tr>

                </table>
                <img className='img-otoño' src='otoño.jpg'></img>
                <img className='img-primavera' src='primavera.jpg'></img>
            </body>

        </>
    )
}

export default Colorimetria;