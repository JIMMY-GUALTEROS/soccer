// Obtener elementos del DOM
const modal = document.getElementById("myModal1");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.getElementsByClassName("close1-btn")[0];

// Contenido dinámico
const contents = {
    "contenido1": `
    <div class="locationn">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="section-header text-center">
                                <p>Noticias</p>
                                <h2>real pasion f.c</h2>
                            </div>
        
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
                 <!-- Single Post Start-->
        <div class="single">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="single-content">
                            <img src="imagen/mayra-ramirez-11.webp" />
                            <h2>Historia de Real Pasion Fútbol Club - Funza, Cundinamarca</h2>
                            <p>
                                En el corazón de Funza, Cundinamarca, nació un sueño que tomó forma en las calles y canchas del municipio: el Real Pasion Fútbol Club. Fundado en 2015, este equipo no es solo un club, sino un símbolo de la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                            </p>
                            <p>
                                La historia de Real Pasion está estrechamente ligada a la vida de una de sus talentosas jugadoras, Mayra Ramírez, una talentosa jugadora de fútbol que se destacó por su habilidad, dedicación, y espíritu indomable. Mayra, oriunda de Cundinamarca, siempre tuvo el sueño de hacer parte de un club que no solo fuera un refugio para jóvenes futbolistas, sino también un espacio donde se fomentara la igualdad de género en el deporte. Tras su participación en la selección de fútbol de Colombia, Mayra decidió volver a sus raíces y contribuir al desarrollo del fútbol en su región.                            </p>
                            <p>
                                Junto con un grupo de entusiastas del fútbol local, Mayra desempeño un rol importante en el Real Pasion Fútbol Club, un club con un enfoque especial en la formación de jóvenes talentos, tanto en categorías masculinas como femeninas. Desde sus inicios, el club se ha destacado por su metodología integral, que no solo se enfoca en el desarrollo técnico y táctico de los jugadores, sino también en su crecimiento personal y académico.                            </p>
                            <h3>Real Pasion F.C.</h3>
                            <p>
                                Real Pasion F.C. rápidamente se ganó un lugar en la comunidad, participando en torneos locales y regionales, y destacándose por su estilo de juego dinámico y su férrea disciplina. Bajo la dirección de Jean Albert Martínez y su equipo de entrenadores, el club ha formado a varios jugadores que han logrado destacar a nivel nacional, algunos de los cuales han seguido los pasos de Mayra, alcanzando las ligas profesionales y la selección nacional.                            </p>
                            <p>
                                El club también es conocido por sus programas de inclusión social, que buscan brindar oportunidades a niños y niñas de bajos recursos, ofreciendo becas deportivas y acceso a entrenamientos de alta calidad. Esto ha hecho que Real Pasion no solo sea un equipo de fútbol, sino una verdadera comunidad unida por el amor al deporte.                            </p>
                            <h4>Actualidad </h4>
                            <p>
                                Hoy en día, Real Pasion Fútbol Club sigue creciendo, manteniendo vivo el sueño de una de sus mejores jugadoras. Mayra Ramírez continúa siendo una figura inspiradora dentro y fuera del campo, trabajando incansablemente para que más jóvenes encuentren en el fútbol una pasión y una oportunidad de vida. El club, orgulloso de sus raíces y de su historia, mira hacia el futuro con la certeza de que aún hay muchas más historias de éxito por escribir.                            </p>
                            
                        </div>
                       
                       

                        
                        
                    </div>

                    <div class="col-lg-4">
                        <div class="sidebar">
                            <div class="sidebar-widget">
                                <div class="single-bio">
                                    <div class="single-bio-img">
                                        <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                    </div>
                                    <div class="single-bio-text">
                                        <h3>Mayra Ramirez</h3>
                                        <p>
                                            En Funza, Cundinamarca, nació en 2015 el Real Pasion Fútbol Club, un equipo que simboliza la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                                        </p>
                                    </div>
                                    <div class="single-bio-social">
                                        <a class="btn" href="https://x.com/FCFSeleccionCol/status/1639591908237344768" target="_blank"><i class="fab fa-twitter" target="_blank"></i></a>
                                        <a class="btn" href="https://www.facebook.com/watch/?v=1666431423490772" target="_blank"><i class="fab fa-facebook-f" target="_blank"></i></a>
                                        <a class="btn" href="https://www.youtube.com/@mayraramirez537" target="_blank"><i class="fab fa-youtube" target="_blank"></i></a>
                                        <a class="btn" href="https://www.instagram.com/mayra.ramirez9/?hl=es" target="_blank"><i class="fab fa-instagram"></i></a>
                                        <a class="btn" href="https://es.linkedin.com/posts/forbes-colombia_la-colombiana-mayra-ram%C3%ADrez-desbanca-a-walsh-activity-7156692267028627457-qoKs" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="sidebar-widget">
                                <div class="search-widget">
                                    <form>
                                        <input class="form-control" type="text" placeholder="Buscar palabra clave">
                                        <button class="btn"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h2 class="widget-title">Publicación reciente</h2>
                                <div class="recent-post">
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/mayra nominada.jpeg" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Bombazo y para adentro: gol y nominación de Mayra Ramírez</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Mayra Ramírez, imagen del Chelsea en su nueva camiseta</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto1.mayra.avif" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia Femenina jugará amistosos ante Venezuela</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <div class="image-widget">
                                    <a href="#"><img src="imagen/imagen.mayra.ramirez.jpg" alt="Image"></a>
                                </div>
                            </div>

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "contenido2": `
        <div class="locationn">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="section-header text-center">
                                <p>Noticias</p>
                                <h2>real pasion f.c</h2>
                            </div>
        
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
                 <!-- Single Post Start-->
        <div class="single">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="single-content">
                            <img src="imagen/mayra-ramirez-11.webp" />
                            <h2>Historia de Real Pasion Fútbol Club - Funza, Cundinamarca</h2>
                            <p>
                                En el corazón de Funza, Cundinamarca, nació un sueño que tomó forma en las calles y canchas del municipio: el Real Pasion Fútbol Club. Fundado en 2015, este equipo no es solo un club, sino un símbolo de la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                            </p>
                            <p>
                                La historia de Real Pasion está estrechamente ligada a la vida de una de sus talentosas jugadoras, Mayra Ramírez, una talentosa jugadora de fútbol que se destacó por su habilidad, dedicación, y espíritu indomable. Mayra, oriunda de Cundinamarca, siempre tuvo el sueño de hacer parte de un club que no solo fuera un refugio para jóvenes futbolistas, sino también un espacio donde se fomentara la igualdad de género en el deporte. Tras su participación en la selección de fútbol de Colombia, Mayra decidió volver a sus raíces y contribuir al desarrollo del fútbol en su región.                            </p>
                            <p>
                                Junto con un grupo de entusiastas del fútbol local, Mayra desempeño un rol importante en el Real Pasion Fútbol Club, un club con un enfoque especial en la formación de jóvenes talentos, tanto en categorías masculinas como femeninas. Desde sus inicios, el club se ha destacado por su metodología integral, que no solo se enfoca en el desarrollo técnico y táctico de los jugadores, sino también en su crecimiento personal y académico.                            </p>
                            <h3>Real Pasion F.C.</h3>
                            <p>
                                Real Pasion F.C. rápidamente se ganó un lugar en la comunidad, participando en torneos locales y regionales, y destacándose por su estilo de juego dinámico y su férrea disciplina. Bajo la dirección de Jean Albert Martínez y su equipo de entrenadores, el club ha formado a varios jugadores que han logrado destacar a nivel nacional, algunos de los cuales han seguido los pasos de Mayra, alcanzando las ligas profesionales y la selección nacional.                            </p>
                            <p>
                                El club también es conocido por sus programas de inclusión social, que buscan brindar oportunidades a niños y niñas de bajos recursos, ofreciendo becas deportivas y acceso a entrenamientos de alta calidad. Esto ha hecho que Real Pasion no solo sea un equipo de fútbol, sino una verdadera comunidad unida por el amor al deporte.                            </p>
                            <h4>Actualidad </h4>
                            <p>
                                Hoy en día, Real Pasion Fútbol Club sigue creciendo, manteniendo vivo el sueño de una de sus mejores jugadoras. Mayra Ramírez continúa siendo una figura inspiradora dentro y fuera del campo, trabajando incansablemente para que más jóvenes encuentren en el fútbol una pasión y una oportunidad de vida. El club, orgulloso de sus raíces y de su historia, mira hacia el futuro con la certeza de que aún hay muchas más historias de éxito por escribir.                            </p>
                            
                        </div>
                       
                       

                        
                        
                    </div>

                    <div class="col-lg-4">
                        <div class="sidebar">
                            <div class="sidebar-widget">
                                <div class="single-bio">
                                    <div class="single-bio-img">
                                        <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                    </div>
                                    <div class="single-bio-text">
                                        <h3>Mayra Ramirez</h3>
                                        <p>
                                            En Funza, Cundinamarca, nació en 2015 el Real Pasion Fútbol Club, un equipo que simboliza la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                                        </p>
                                    </div>
                                    <div class="single-bio-social">
                                        <a class="btn" href="https://x.com/FCFSeleccionCol/status/1639591908237344768" target="_blank"><i class="fab fa-twitter" target="_blank"></i></a>
                                        <a class="btn" href="https://www.facebook.com/watch/?v=1666431423490772" target="_blank"><i class="fab fa-facebook-f" target="_blank"></i></a>
                                        <a class="btn" href="https://www.youtube.com/@mayraramirez537" target="_blank"><i class="fab fa-youtube" target="_blank"></i></a>
                                        <a class="btn" href="https://www.instagram.com/mayra.ramirez9/?hl=es" target="_blank"><i class="fab fa-instagram"></i></a>
                                        <a class="btn" href="https://es.linkedin.com/posts/forbes-colombia_la-colombiana-mayra-ram%C3%ADrez-desbanca-a-walsh-activity-7156692267028627457-qoKs" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="sidebar-widget">
                                <div class="search-widget">
                                    <form>
                                        <input class="form-control" type="text" placeholder="Buscar palabra clave">
                                        <button class="btn"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h2 class="widget-title">Publicación reciente</h2>
                                <div class="recent-post">
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/jugadoradelfundadorclub.jpg" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia se aferra a Mayra, para ir por la hazaña ante España</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Mayra Ramírez, imagen del Chelsea en su nueva camiseta</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto1.mayra.avif" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia Femenina jugará amistosos ante Venezuela</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <div class="image-widget">
                                    <a href="#"><img src="imagen/imagen.mayra.ramirez.jpg" alt="Image"></a>
                                </div>
                            </div>

                            

                            

                            

                            

                            

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "contenido3": `
        <div class="locationn">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="section-header text-center">
                                <p>Noticias</p>
                                <h2>real pasion f.c</h2>
                            </div>
        
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
                 <!-- Single Post Start-->
        <div class="single">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="single-content">
                            <img src="imagen/mayra-ramirez-11.webp" />
                            <h2>Historia de Real Pasion Fútbol Club - Funza, Cundinamarca</h2>
                            <p>
                                En el corazón de Funza, Cundinamarca, nació un sueño que tomó forma en las calles y canchas del municipio: el Real Pasion Fútbol Club. Fundado en 2015, este equipo no es solo un club, sino un símbolo de la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                            </p>
                            <p>
                                La historia de Real Pasion está estrechamente ligada a la vida de una de sus talentosas jugadoras, Mayra Ramírez, una talentosa jugadora de fútbol que se destacó por su habilidad, dedicación, y espíritu indomable. Mayra, oriunda de Cundinamarca, siempre tuvo el sueño de hacer parte de un club que no solo fuera un refugio para jóvenes futbolistas, sino también un espacio donde se fomentara la igualdad de género en el deporte. Tras su participación en la selección de fútbol de Colombia, Mayra decidió volver a sus raíces y contribuir al desarrollo del fútbol en su región.                            </p>
                            <p>
                                Junto con un grupo de entusiastas del fútbol local, Mayra desempeño un rol importante en el Real Pasion Fútbol Club, un club con un enfoque especial en la formación de jóvenes talentos, tanto en categorías masculinas como femeninas. Desde sus inicios, el club se ha destacado por su metodología integral, que no solo se enfoca en el desarrollo técnico y táctico de los jugadores, sino también en su crecimiento personal y académico.                            </p>
                            <h3>Real Pasion F.C.</h3>
                            <p>
                                Real Pasion F.C. rápidamente se ganó un lugar en la comunidad, participando en torneos locales y regionales, y destacándose por su estilo de juego dinámico y su férrea disciplina. Bajo la dirección de Jean Albert Martínez y su equipo de entrenadores, el club ha formado a varios jugadores que han logrado destacar a nivel nacional, algunos de los cuales han seguido los pasos de Mayra, alcanzando las ligas profesionales y la selección nacional.                            </p>
                            <p>
                                El club también es conocido por sus programas de inclusión social, que buscan brindar oportunidades a niños y niñas de bajos recursos, ofreciendo becas deportivas y acceso a entrenamientos de alta calidad. Esto ha hecho que Real Pasion no solo sea un equipo de fútbol, sino una verdadera comunidad unida por el amor al deporte.                            </p>
                            <h4>Actualidad </h4>
                            <p>
                                Hoy en día, Real Pasion Fútbol Club sigue creciendo, manteniendo vivo el sueño de una de sus mejores jugadoras. Mayra Ramírez continúa siendo una figura inspiradora dentro y fuera del campo, trabajando incansablemente para que más jóvenes encuentren en el fútbol una pasión y una oportunidad de vida. El club, orgulloso de sus raíces y de su historia, mira hacia el futuro con la certeza de que aún hay muchas más historias de éxito por escribir.                            </p>
                            
                        </div>
                       
                       

                        
                        
                    </div>

                    <div class="col-lg-4">
                        <div class="sidebar">
                            <div class="sidebar-widget">
                                <div class="single-bio">
                                    <div class="single-bio-img">
                                        <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                    </div>
                                    <div class="single-bio-text">
                                        <h3>Mayra Ramirez</h3>
                                        <p>
                                            En Funza, Cundinamarca, nació en 2015 el Real Pasion Fútbol Club, un equipo que simboliza la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                                        </p>
                                    </div>
                                    <div class="single-bio-social">
                                        <a class="btn" href="https://x.com/FCFSeleccionCol/status/1639591908237344768" target="_blank"><i class="fab fa-twitter" target="_blank"></i></a>
                                        <a class="btn" href="https://www.facebook.com/watch/?v=1666431423490772" target="_blank"><i class="fab fa-facebook-f" target="_blank"></i></a>
                                        <a class="btn" href="https://www.youtube.com/@mayraramirez537" target="_blank"><i class="fab fa-youtube" target="_blank"></i></a>
                                        <a class="btn" href="https://www.instagram.com/mayra.ramirez9/?hl=es" target="_blank"><i class="fab fa-instagram"></i></a>
                                        <a class="btn" href="https://es.linkedin.com/posts/forbes-colombia_la-colombiana-mayra-ram%C3%ADrez-desbanca-a-walsh-activity-7156692267028627457-qoKs" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="sidebar-widget">
                                <div class="search-widget">
                                    <form>
                                        <input class="form-control" type="text" placeholder="Buscar palabra clave">
                                        <button class="btn"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h2 class="widget-title">Publicación reciente</h2>
                                <div class="recent-post">
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/jugadoradelfundadorclub.jpg" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia se aferra a Mayra, para ir por la hazaña ante España</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Mayra Ramírez, imagen del Chelsea en su nueva camiseta</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto1.mayra.avif" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia Femenina jugará amistosos ante Venezuela</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <div class="image-widget">
                                    <a href="#"><img src="imagen/imagen.mayra.ramirez.jpg" alt="Image"></a>
                                </div>
                            </div>

                            

                            

                            

                            

                            

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "contenido4": `
      <div class="locationn">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="section-header text-center">
                                <p>Noticias</p>
                                <h2>real pasion f.c</h2>
                            </div>
        
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
                 <!-- Single Post Start-->
        <div class="single">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="single-content">
                            <img src="imagen/mayra-ramirez-11.webp" />
                            <h2>Historia de Real Pasion Fútbol Club - Funza, Cundinamarca</h2>
                            <p>
                                En el corazón de Funza, Cundinamarca, nació un sueño que tomó forma en las calles y canchas del municipio: el Real Pasion Fútbol Club. Fundado en 2015, este equipo no es solo un club, sino un símbolo de la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                            </p>
                            <p>
                                La historia de Real Pasion está estrechamente ligada a la vida de una de sus talentosas jugadoras, Mayra Ramírez, una talentosa jugadora de fútbol que se destacó por su habilidad, dedicación, y espíritu indomable. Mayra, oriunda de Cundinamarca, siempre tuvo el sueño de hacer parte de un club que no solo fuera un refugio para jóvenes futbolistas, sino también un espacio donde se fomentara la igualdad de género en el deporte. Tras su participación en la selección de fútbol de Colombia, Mayra decidió volver a sus raíces y contribuir al desarrollo del fútbol en su región.                            </p>
                            <p>
                                Junto con un grupo de entusiastas del fútbol local, Mayra desempeño un rol importante en el Real Pasion Fútbol Club, un club con un enfoque especial en la formación de jóvenes talentos, tanto en categorías masculinas como femeninas. Desde sus inicios, el club se ha destacado por su metodología integral, que no solo se enfoca en el desarrollo técnico y táctico de los jugadores, sino también en su crecimiento personal y académico.                            </p>
                            <h3>Real Pasion F.C.</h3>
                            <p>
                                Real Pasion F.C. rápidamente se ganó un lugar en la comunidad, participando en torneos locales y regionales, y destacándose por su estilo de juego dinámico y su férrea disciplina. Bajo la dirección de Jean Albert Martínez y su equipo de entrenadores, el club ha formado a varios jugadores que han logrado destacar a nivel nacional, algunos de los cuales han seguido los pasos de Mayra, alcanzando las ligas profesionales y la selección nacional.                            </p>
                            <p>
                                El club también es conocido por sus programas de inclusión social, que buscan brindar oportunidades a niños y niñas de bajos recursos, ofreciendo becas deportivas y acceso a entrenamientos de alta calidad. Esto ha hecho que Real Pasion no solo sea un equipo de fútbol, sino una verdadera comunidad unida por el amor al deporte.                            </p>
                            <h4>Actualidad </h4>
                            <p>
                                Hoy en día, Real Pasion Fútbol Club sigue creciendo, manteniendo vivo el sueño de una de sus mejores jugadoras. Mayra Ramírez continúa siendo una figura inspiradora dentro y fuera del campo, trabajando incansablemente para que más jóvenes encuentren en el fútbol una pasión y una oportunidad de vida. El club, orgulloso de sus raíces y de su historia, mira hacia el futuro con la certeza de que aún hay muchas más historias de éxito por escribir.                            </p>
                            
                        </div>
                       
                       

                        
                        
                    </div>

                    <div class="col-lg-4">
                        <div class="sidebar">
                            <div class="sidebar-widget">
                                <div class="single-bio">
                                    <div class="single-bio-img">
                                        <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                    </div>
                                    <div class="single-bio-text">
                                        <h3>Mayra Ramirez</h3>
                                        <p>
                                            En Funza, Cundinamarca, nació en 2015 el Real Pasion Fútbol Club, un equipo que simboliza la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                                        </p>
                                    </div>
                                    <div class="single-bio-social">
                                        <a class="btn" href="https://x.com/FCFSeleccionCol/status/1639591908237344768" target="_blank"><i class="fab fa-twitter" target="_blank"></i></a>
                                        <a class="btn" href="https://www.facebook.com/watch/?v=1666431423490772" target="_blank"><i class="fab fa-facebook-f" target="_blank"></i></a>
                                        <a class="btn" href="https://www.youtube.com/@mayraramirez537" target="_blank"><i class="fab fa-youtube" target="_blank"></i></a>
                                        <a class="btn" href="https://www.instagram.com/mayra.ramirez9/?hl=es" target="_blank"><i class="fab fa-instagram"></i></a>
                                        <a class="btn" href="https://es.linkedin.com/posts/forbes-colombia_la-colombiana-mayra-ram%C3%ADrez-desbanca-a-walsh-activity-7156692267028627457-qoKs" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="sidebar-widget">
                                <div class="search-widget">
                                    <form>
                                        <input class="form-control" type="text" placeholder="Buscar palabra clave">
                                        <button class="btn"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h2 class="widget-title">Publicación reciente</h2>
                                <div class="recent-post">
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/jugadoradelfundadorclub.jpg" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia se aferra a Mayra, para ir por la hazaña ante España</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Mayra Ramírez, imagen del Chelsea en su nueva camiseta</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto1.mayra.avif" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia Femenina jugará amistosos ante Venezuela</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <div class="image-widget">
                                    <a href="#"><img src="imagen/imagen.mayra.ramirez.jpg" alt="Image"></a>
                                </div>
                            </div>

                            

                            

                            

                            

                            

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "contenido5": `
       <div class="locationn">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="section-header text-center">
                                <p>Noticias</p>
                                <h2>real Pasión f.c</h2>
                            </div>
        
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
                 <!-- Single Post Start-->
        <div class="single">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="single-content">
                            <img src="imagen/union de equipos.jpg" />
                            <h2>Fusión histórica: Real Pasión Fútbol Club y Real Cundinamarca unen fuerzas</h2>
                            <p>
                                En el corazón de Funza, Cundinamarca, nació un sueño que tomó forma en las calles y canchas del municipio: el Real Pasión Fútbol Club. Fundado en 2015, este equipo no es solo un club, sino un símbolo de la pasión y el compromiso con el deporte.Desde sus inicios, Real Pasión F.C. ha trabajado por el desarrollo del talento local, enfocándose en la formación de jugadores con una metodología integral que combina técnica, disciplina y valores. Su crecimiento y reconocimiento en la región lo han convertido en una referencia del fútbol formativo en Cundinamarca.
                            </p>
                            <h4>Real Pasión F.C. y Real Cundinamarca: Un solo equipo, una sola pasión </h4>
                            <p>
                                En un movimiento que promete marcar un antes y un después en el fútbol de la región, Real Pasión F.C. y Real Cundinamarca han anunciado su fusión, consolidando un proyecto deportivo ambicioso con la misión de fortalecer el fútbol local. Esta unión busca aprovechar lo mejor de ambos equipos: la solidez y el prestigio de Real Cundinamarca junto con la identidad formativa y el talento de Real Pasión F.C. Juntos, crearán una estructura deportiva más fuerte y competitiva, con mayores oportunidades para jugadores y entrenadores. "Este es un paso gigante para el fútbol en nuestra región. La fusión nos permitirá crecer y ofrecer mejores condiciones a nuestros jugadores, impulsando su desarrollo profesional y personal", afirmaron los directivos durante el anuncio oficial.
                           </p>
                            
                                <h3>El futuro de la nueva institución</h3>
                            <p>
                                Con la fusión, se espera una reestructuración deportiva que incluirá nuevos programas de formación, infraestructura mejorada y una presencia más fuerte en torneos nacionales. Además, los aficionados pueden esperar pronto la presentación oficial de la nueva identidad del equipo, que combinará la esencia de ambos clubes.
                            </p>

                            <p>
                                El club también es conocido por sus programas de inclusión social, que buscan brindar oportunidades a niños y niñas de bajos recursos, ofreciendo becas deportivas y acceso a entrenamientos de alta calidad. Esto ha hecho que Real Pasion no solo sea un equipo de fútbol, sino una verdadera comunidad unida por el amor al deporte.                            </p>
                            <h4>Actualidad </h4>
                            <p>
                                Hoy, Real Pasión F.C. y Real Cundinamarca inician juntos un nuevo capítulo, con la convicción de que esta unión traerá grandes logros. Más que un equipo, ahora representan una familia más grande, unida por el amor al fútbol y el compromiso con la excelencia deportiva.
                            </p>
                            
                        </div>
                       
                       

                        
                        
                    </div>

                    <div class="col-lg-4">
                        <div class="sidebar">
                            <div class="sidebar-widget">
                                <div class="single-bio">
                                    <div class="single-bio-img">
                                        <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                    </div>
                                    <div class="single-bio-text">
                                        <h3>Mayra Ramirez</h3>
                                        <p>
                                            En Funza, Cundinamarca, nació en 2015 el Real Pasion Fútbol Club, un equipo que simboliza la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                                        </p>
                                    </div>
                                    <div class="single-bio-social">
                                        <a class="btn" href="https://x.com/FCFSeleccionCol/status/1639591908237344768" target="_blank"><i class="fab fa-twitter" target="_blank"></i></a>
                                        <a class="btn" href="https://www.facebook.com/watch/?v=1666431423490772" target="_blank"><i class="fab fa-facebook-f" target="_blank"></i></a>
                                        <a class="btn" href="https://www.youtube.com/@mayraramirez537" target="_blank"><i class="fab fa-youtube" target="_blank"></i></a>
                                        <a class="btn" href="https://www.instagram.com/mayra.ramirez9/?hl=es" target="_blank"><i class="fab fa-instagram"></i></a>
                                        <a class="btn" href="https://es.linkedin.com/posts/forbes-colombia_la-colombiana-mayra-ram%C3%ADrez-desbanca-a-walsh-activity-7156692267028627457-qoKs" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="sidebar-widget">
                                <div class="search-widget">
                                    <form>
                                        <input class="form-control" type="text" placeholder="Buscar palabra clave">
                                        <button class="btn"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h2 class="widget-title">Publicación reciente</h2>
                                <div class="recent-post">
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/jugadoradelfundadorclub.jpg" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia se aferra a Mayra, para ir por la hazaña ante España</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Mayra Ramírez, imagen del Chelsea en su nueva camiseta</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto1.mayra.avif" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia Femenina jugará amistosos ante Venezuela</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <div class="image-widget">
                                    <a href="#"><img src="imagen/imagen.mayra.ramirez.jpg" alt="Image"></a>
                                </div>
                            </div>

                            

                            

                            

                            

                            

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "contenido6": `
       <div class="locationn">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="section-header text-center">
                                <p>Noticias</p>
                                <h2>real pasion f.c</h2>
                            </div>
        
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
                 <!-- Single Post Start-->
        <div class="single">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="single-content">
                            <img src="imagen/mayra-ramirez-11.webp" />
                            <h2>Historia de Real Pasion Fútbol Club - Funza, Cundinamarca</h2>
                            <p>
                                En el corazón de Funza, Cundinamarca, nació un sueño que tomó forma en las calles y canchas del municipio: el Real Pasion Fútbol Club. Fundado en 2015, este equipo no es solo un club, sino un símbolo de la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                            </p>
                            <p>
                                La historia de Real Pasion está estrechamente ligada a la vida de una de sus talentosas jugadoras, Mayra Ramírez, una talentosa jugadora de fútbol que se destacó por su habilidad, dedicación, y espíritu indomable. Mayra, oriunda de Cundinamarca, siempre tuvo el sueño de hacer parte de un club que no solo fuera un refugio para jóvenes futbolistas, sino también un espacio donde se fomentara la igualdad de género en el deporte. Tras su participación en la selección de fútbol de Colombia, Mayra decidió volver a sus raíces y contribuir al desarrollo del fútbol en su región.                            </p>
                            <p>
                                Junto con un grupo de entusiastas del fútbol local, Mayra desempeño un rol importante en el Real Pasion Fútbol Club, un club con un enfoque especial en la formación de jóvenes talentos, tanto en categorías masculinas como femeninas. Desde sus inicios, el club se ha destacado por su metodología integral, que no solo se enfoca en el desarrollo técnico y táctico de los jugadores, sino también en su crecimiento personal y académico.                            </p>
                            <h3>Real Pasion F.C.</h3>
                            <p>
                                Real Pasion F.C. rápidamente se ganó un lugar en la comunidad, participando en torneos locales y regionales, y destacándose por su estilo de juego dinámico y su férrea disciplina. Bajo la dirección de Jean Albert Martínez y su equipo de entrenadores, el club ha formado a varios jugadores que han logrado destacar a nivel nacional, algunos de los cuales han seguido los pasos de Mayra, alcanzando las ligas profesionales y la selección nacional.                            </p>
                            <p>
                                El club también es conocido por sus programas de inclusión social, que buscan brindar oportunidades a niños y niñas de bajos recursos, ofreciendo becas deportivas y acceso a entrenamientos de alta calidad. Esto ha hecho que Real Pasion no solo sea un equipo de fútbol, sino una verdadera comunidad unida por el amor al deporte.                            </p>
                            <h4>Actualidad </h4>
                            <p>
                                Hoy en día, Real Pasion Fútbol Club sigue creciendo, manteniendo vivo el sueño de una de sus mejores jugadoras. Mayra Ramírez continúa siendo una figura inspiradora dentro y fuera del campo, trabajando incansablemente para que más jóvenes encuentren en el fútbol una pasión y una oportunidad de vida. El club, orgulloso de sus raíces y de su historia, mira hacia el futuro con la certeza de que aún hay muchas más historias de éxito por escribir.                            </p>
                            
                        </div>
                       
                       

                        
                        
                    </div>

                    <div class="col-lg-4">
                        <div class="sidebar">
                            <div class="sidebar-widget">
                                <div class="single-bio">
                                    <div class="single-bio-img">
                                        <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                    </div>
                                    <div class="single-bio-text">
                                        <h3>Mayra Ramirez</h3>
                                        <p>
                                            En Funza, Cundinamarca, nació en 2015 el Real Pasion Fútbol Club, un equipo que simboliza la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                                        </p>
                                    </div>
                                    <div class="single-bio-social">
                                        <a class="btn" href="https://x.com/FCFSeleccionCol/status/1639591908237344768" target="_blank"><i class="fab fa-twitter" target="_blank"></i></a>
                                        <a class="btn" href="https://www.facebook.com/watch/?v=1666431423490772" target="_blank"><i class="fab fa-facebook-f" target="_blank"></i></a>
                                        <a class="btn" href="https://www.youtube.com/@mayraramirez537" target="_blank"><i class="fab fa-youtube" target="_blank"></i></a>
                                        <a class="btn" href="https://www.instagram.com/mayra.ramirez9/?hl=es" target="_blank"><i class="fab fa-instagram"></i></a>
                                        <a class="btn" href="https://es.linkedin.com/posts/forbes-colombia_la-colombiana-mayra-ram%C3%ADrez-desbanca-a-walsh-activity-7156692267028627457-qoKs" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="sidebar-widget">
                                <div class="search-widget">
                                    <form>
                                        <input class="form-control" type="text" placeholder="Buscar palabra clave">
                                        <button class="btn"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h2 class="widget-title">Publicación reciente</h2>
                                <div class="recent-post">
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/jugadoradelfundadorclub.jpg" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia se aferra a Mayra, para ir por la hazaña ante España</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Mayra Ramírez, imagen del Chelsea en su nueva camiseta</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto1.mayra.avif" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia Femenina jugará amistosos ante Venezuela</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <div class="image-widget">
                                    <a href="#"><img src="imagen/imagen.mayra.ramirez.jpg" alt="Image"></a>
                                </div>
                            </div>

                            

                            

                            

                            

                            

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "contenido7": `
       <div class="locationn">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="section-header text-center">
                                <p>Noticias</p>
                                <h2>real pasion f.c</h2>
                            </div>
        
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
                 <!-- Single Post Start-->
        <div class="single">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="single-content">
                            <img src="imagen/mayra-ramirez-11.webp" />
                            <h2>Historia de Real Pasion Fútbol Club - Funza, Cundinamarca</h2>
                            <p>
                                En el corazón de Funza, Cundinamarca, nació un sueño que tomó forma en las calles y canchas del municipio: el Real Pasion Fútbol Club. Fundado en 2015, este equipo no es solo un club, sino un símbolo de la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                            </p>
                            <p>
                                La historia de Real Pasion está estrechamente ligada a la vida de una de sus talentosas jugadoras, Mayra Ramírez, una talentosa jugadora de fútbol que se destacó por su habilidad, dedicación, y espíritu indomable. Mayra, oriunda de Cundinamarca, siempre tuvo el sueño de hacer parte de un club que no solo fuera un refugio para jóvenes futbolistas, sino también un espacio donde se fomentara la igualdad de género en el deporte. Tras su participación en la selección de fútbol de Colombia, Mayra decidió volver a sus raíces y contribuir al desarrollo del fútbol en su región.                            </p>
                            <p>
                                Junto con un grupo de entusiastas del fútbol local, Mayra desempeño un rol importante en el Real Pasion Fútbol Club, un club con un enfoque especial en la formación de jóvenes talentos, tanto en categorías masculinas como femeninas. Desde sus inicios, el club se ha destacado por su metodología integral, que no solo se enfoca en el desarrollo técnico y táctico de los jugadores, sino también en su crecimiento personal y académico.                            </p>
                            <h3>Real Pasion F.C.</h3>
                            <p>
                                Real Pasion F.C. rápidamente se ganó un lugar en la comunidad, participando en torneos locales y regionales, y destacándose por su estilo de juego dinámico y su férrea disciplina. Bajo la dirección de Jean Albert Martínez y su equipo de entrenadores, el club ha formado a varios jugadores que han logrado destacar a nivel nacional, algunos de los cuales han seguido los pasos de Mayra, alcanzando las ligas profesionales y la selección nacional.                            </p>
                            <p>
                                El club también es conocido por sus programas de inclusión social, que buscan brindar oportunidades a niños y niñas de bajos recursos, ofreciendo becas deportivas y acceso a entrenamientos de alta calidad. Esto ha hecho que Real Pasion no solo sea un equipo de fútbol, sino una verdadera comunidad unida por el amor al deporte.                            </p>
                            <h4>Actualidad </h4>
                            <p>
                                Hoy en día, Real Pasion Fútbol Club sigue creciendo, manteniendo vivo el sueño de una de sus mejores jugadoras. Mayra Ramírez continúa siendo una figura inspiradora dentro y fuera del campo, trabajando incansablemente para que más jóvenes encuentren en el fútbol una pasión y una oportunidad de vida. El club, orgulloso de sus raíces y de su historia, mira hacia el futuro con la certeza de que aún hay muchas más historias de éxito por escribir.                            </p>
                            
                        </div>
                       
                       

                        
                        
                    </div>

                    <div class="col-lg-4">
                        <div class="sidebar">
                            <div class="sidebar-widget">
                                <div class="single-bio">
                                    <div class="single-bio-img">
                                        <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                    </div>
                                    <div class="single-bio-text">
                                        <h3>Mayra Ramirez</h3>
                                        <p>
                                            En Funza, Cundinamarca, nació en 2015 el Real Pasion Fútbol Club, un equipo que simboliza la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                                        </p>
                                    </div>
                                    <div class="single-bio-social">
                                        <a class="btn" href="https://x.com/FCFSeleccionCol/status/1639591908237344768" target="_blank"><i class="fab fa-twitter" target="_blank"></i></a>
                                        <a class="btn" href="https://www.facebook.com/watch/?v=1666431423490772" target="_blank"><i class="fab fa-facebook-f" target="_blank"></i></a>
                                        <a class="btn" href="https://www.youtube.com/@mayraramirez537" target="_blank"><i class="fab fa-youtube" target="_blank"></i></a>
                                        <a class="btn" href="https://www.instagram.com/mayra.ramirez9/?hl=es" target="_blank"><i class="fab fa-instagram"></i></a>
                                        <a class="btn" href="https://es.linkedin.com/posts/forbes-colombia_la-colombiana-mayra-ram%C3%ADrez-desbanca-a-walsh-activity-7156692267028627457-qoKs" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="sidebar-widget">
                                <div class="search-widget">
                                    <form>
                                        <input class="form-control" type="text" placeholder="Buscar palabra clave">
                                        <button class="btn"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h2 class="widget-title">Publicación reciente</h2>
                                <div class="recent-post">
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/jugadoradelfundadorclub.jpg" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia se aferra a Mayra, para ir por la hazaña ante España</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Mayra Ramírez, imagen del Chelsea en su nueva camiseta</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto1.mayra.avif" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia Femenina jugará amistosos ante Venezuela</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <div class="image-widget">
                                    <a href="#"><img src="imagen/imagen.mayra.ramirez.jpg" alt="Image"></a>
                                </div>
                            </div>

                            

                            

                            

                            

                            

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "contenido8": `
        <div class="locationn">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="section-header text-center">
                                <p>Noticias</p>
                                <h2>real pasion f.c</h2>
                            </div>
        
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
                 <!-- Single Post Start-->
        <div class="single">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="single-content">
                            <img src="imagen/mayra-ramirez-11.webp" />
                            <h2>Historia de Real Pasion Fútbol Club - Funza, Cundinamarca</h2>
                            <p>
                                En el corazón de Funza, Cundinamarca, nació un sueño que tomó forma en las calles y canchas del municipio: el Real Pasion Fútbol Club. Fundado en 2015, este equipo no es solo un club, sino un símbolo de la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                            </p>
                            <p>
                                La historia de Real Pasion está estrechamente ligada a la vida de una de sus talentosas jugadoras, Mayra Ramírez, una talentosa jugadora de fútbol que se destacó por su habilidad, dedicación, y espíritu indomable. Mayra, oriunda de Cundinamarca, siempre tuvo el sueño de hacer parte de un club que no solo fuera un refugio para jóvenes futbolistas, sino también un espacio donde se fomentara la igualdad de género en el deporte. Tras su participación en la selección de fútbol de Colombia, Mayra decidió volver a sus raíces y contribuir al desarrollo del fútbol en su región.                            </p>
                            <p>
                                Junto con un grupo de entusiastas del fútbol local, Mayra desempeño un rol importante en el Real Pasion Fútbol Club, un club con un enfoque especial en la formación de jóvenes talentos, tanto en categorías masculinas como femeninas. Desde sus inicios, el club se ha destacado por su metodología integral, que no solo se enfoca en el desarrollo técnico y táctico de los jugadores, sino también en su crecimiento personal y académico.                            </p>
                            <h3>Real Pasion F.C.</h3>
                            <p>
                                Real Pasion F.C. rápidamente se ganó un lugar en la comunidad, participando en torneos locales y regionales, y destacándose por su estilo de juego dinámico y su férrea disciplina. Bajo la dirección de Jean Albert Martínez y su equipo de entrenadores, el club ha formado a varios jugadores que han logrado destacar a nivel nacional, algunos de los cuales han seguido los pasos de Mayra, alcanzando las ligas profesionales y la selección nacional.                            </p>
                            <p>
                                El club también es conocido por sus programas de inclusión social, que buscan brindar oportunidades a niños y niñas de bajos recursos, ofreciendo becas deportivas y acceso a entrenamientos de alta calidad. Esto ha hecho que Real Pasion no solo sea un equipo de fútbol, sino una verdadera comunidad unida por el amor al deporte.                            </p>
                            <h4>Actualidad </h4>
                            <p>
                                Hoy en día, Real Pasion Fútbol Club sigue creciendo, manteniendo vivo el sueño de una de sus mejores jugadoras. Mayra Ramírez continúa siendo una figura inspiradora dentro y fuera del campo, trabajando incansablemente para que más jóvenes encuentren en el fútbol una pasión y una oportunidad de vida. El club, orgulloso de sus raíces y de su historia, mira hacia el futuro con la certeza de que aún hay muchas más historias de éxito por escribir.                            </p>
                            
                        </div>
                       
                       

                        
                        
                    </div>

                    <div class="col-lg-4">
                        <div class="sidebar">
                            <div class="sidebar-widget">
                                <div class="single-bio">
                                    <div class="single-bio-img">
                                        <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                    </div>
                                    <div class="single-bio-text">
                                        <h3>Mayra Ramirez</h3>
                                        <p>
                                            En Funza, Cundinamarca, nació en 2015 el Real Pasion Fútbol Club, un equipo que simboliza la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                                        </p>
                                    </div>
                                    <div class="single-bio-social">
                                        <a class="btn" href="https://x.com/FCFSeleccionCol/status/1639591908237344768" target="_blank"><i class="fab fa-twitter" target="_blank"></i></a>
                                        <a class="btn" href="https://www.facebook.com/watch/?v=1666431423490772" target="_blank"><i class="fab fa-facebook-f" target="_blank"></i></a>
                                        <a class="btn" href="https://www.youtube.com/@mayraramirez537" target="_blank"><i class="fab fa-youtube" target="_blank"></i></a>
                                        <a class="btn" href="https://www.instagram.com/mayra.ramirez9/?hl=es" target="_blank"><i class="fab fa-instagram"></i></a>
                                        <a class="btn" href="https://es.linkedin.com/posts/forbes-colombia_la-colombiana-mayra-ram%C3%ADrez-desbanca-a-walsh-activity-7156692267028627457-qoKs" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="sidebar-widget">
                                <div class="search-widget">
                                    <form>
                                        <input class="form-control" type="text" placeholder="Buscar palabra clave">
                                        <button class="btn"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h2 class="widget-title">Publicación reciente</h2>
                                <div class="recent-post">
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/jugadoradelfundadorclub.jpg" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia se aferra a Mayra, para ir por la hazaña ante España</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Mayra Ramírez, imagen del Chelsea en su nueva camiseta</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto1.mayra.avif" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia Femenina jugará amistosos ante Venezuela</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <div class="image-widget">
                                    <a href="#"><img src="imagen/imagen.mayra.ramirez.jpg" alt="Image"></a>
                                </div>
                            </div>

                            

                            

                            

                            

                            

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "contenido9": `
      <div class="locationn">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="section-header text-center">
                                <p>Noticias</p>
                                <h2>real pasion f.c</h2>
                            </div>
        
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
                 <!-- Single Post Start-->
        <div class="single">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="single-content">
                            <img src="imagen/mayra-ramirez-11.webp" />
                            <h2>Historia de Real Pasion Fútbol Club - Funza, Cundinamarca</h2>
                            <p>
                                En el corazón de Funza, Cundinamarca, nació un sueño que tomó forma en las calles y canchas del municipio: el Real Pasion Fútbol Club. Fundado en 2015, este equipo no es solo un club, sino un símbolo de la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                            </p>
                            <p>
                                La historia de Real Pasion está estrechamente ligada a la vida de una de sus talentosas jugadoras, Mayra Ramírez, una talentosa jugadora de fútbol que se destacó por su habilidad, dedicación, y espíritu indomable. Mayra, oriunda de Cundinamarca, siempre tuvo el sueño de hacer parte de un club que no solo fuera un refugio para jóvenes futbolistas, sino también un espacio donde se fomentara la igualdad de género en el deporte. Tras su participación en la selección de fútbol de Colombia, Mayra decidió volver a sus raíces y contribuir al desarrollo del fútbol en su región.                            </p>
                            <p>
                                Junto con un grupo de entusiastas del fútbol local, Mayra desempeño un rol importante en el Real Pasion Fútbol Club, un club con un enfoque especial en la formación de jóvenes talentos, tanto en categorías masculinas como femeninas. Desde sus inicios, el club se ha destacado por su metodología integral, que no solo se enfoca en el desarrollo técnico y táctico de los jugadores, sino también en su crecimiento personal y académico.                            </p>
                            <h3>Real Pasion F.C.</h3>
                            <p>
                                Real Pasion F.C. rápidamente se ganó un lugar en la comunidad, participando en torneos locales y regionales, y destacándose por su estilo de juego dinámico y su férrea disciplina. Bajo la dirección de Jean Albert Martínez y su equipo de entrenadores, el club ha formado a varios jugadores que han logrado destacar a nivel nacional, algunos de los cuales han seguido los pasos de Mayra, alcanzando las ligas profesionales y la selección nacional.                            </p>
                            <p>
                                El club también es conocido por sus programas de inclusión social, que buscan brindar oportunidades a niños y niñas de bajos recursos, ofreciendo becas deportivas y acceso a entrenamientos de alta calidad. Esto ha hecho que Real Pasion no solo sea un equipo de fútbol, sino una verdadera comunidad unida por el amor al deporte.                            </p>
                            <h4>Actualidad </h4>
                            <p>
                                Hoy en día, Real Pasion Fútbol Club sigue creciendo, manteniendo vivo el sueño de una de sus mejores jugadoras. Mayra Ramírez continúa siendo una figura inspiradora dentro y fuera del campo, trabajando incansablemente para que más jóvenes encuentren en el fútbol una pasión y una oportunidad de vida. El club, orgulloso de sus raíces y de su historia, mira hacia el futuro con la certeza de que aún hay muchas más historias de éxito por escribir.                            </p>
                            
                        </div>
                       
                       

                        
                        
                    </div>

                    <div class="col-lg-4">
                        <div class="sidebar">
                            <div class="sidebar-widget">
                                <div class="single-bio">
                                    <div class="single-bio-img">
                                        <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                    </div>
                                    <div class="single-bio-text">
                                        <h3>Mayra Ramirez</h3>
                                        <p>
                                            En Funza, Cundinamarca, nació en 2015 el Real Pasion Fútbol Club, un equipo que simboliza la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                                        </p>
                                    </div>
                                    <div class="single-bio-social">
                                        <a class="btn" href="https://x.com/FCFSeleccionCol/status/1639591908237344768" target="_blank"><i class="fab fa-twitter" target="_blank"></i></a>
                                        <a class="btn" href="https://www.facebook.com/watch/?v=1666431423490772" target="_blank"><i class="fab fa-facebook-f" target="_blank"></i></a>
                                        <a class="btn" href="https://www.youtube.com/@mayraramirez537" target="_blank"><i class="fab fa-youtube" target="_blank"></i></a>
                                        <a class="btn" href="https://www.instagram.com/mayra.ramirez9/?hl=es" target="_blank"><i class="fab fa-instagram"></i></a>
                                        <a class="btn" href="https://es.linkedin.com/posts/forbes-colombia_la-colombiana-mayra-ram%C3%ADrez-desbanca-a-walsh-activity-7156692267028627457-qoKs" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="sidebar-widget">
                                <div class="search-widget">
                                    <form>
                                        <input class="form-control" type="text" placeholder="Buscar palabra clave">
                                        <button class="btn"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h2 class="widget-title">Publicación reciente</h2>
                                <div class="recent-post">
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/jugadoradelfundadorclub.jpg" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia se aferra a Mayra, para ir por la hazaña ante España</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Mayra Ramírez, imagen del Chelsea en su nueva camiseta</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto1.mayra.avif" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia Femenina jugará amistosos ante Venezuela</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <div class="image-widget">
                                    <a href="#"><img src="imagen/imagen.mayra.ramirez.jpg" alt="Image"></a>
                                </div>
                            </div>

                            

                            

                            

                            

                            

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "contenido10": `
        <div class="locationn">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="section-header text-center">
                                <p>Noticias</p>
                                <h2>real pasion f.c</h2>
                            </div>
        
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
                 <!-- Single Post Start-->
        <div class="single">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="single-content">
                            <img src="imagen/mayranoticiaoro.jpg" />
                            <h2>Mayra Ramírez está nominada al balón de oro</h2>
                            <p>
                                Mayra Ramírez ha hecho historia al convertirse en la segunda futbolista colombiana nominada al Balón de Oro Femenino 2024, un reconocimiento que destaca a las mejores jugadoras del mundo. Ramírez, de 25 años, tuvo una destacada temporada jugando para el Chelsea en Inglaterra y la Selección Colombia, siendo clave en competencias como los Juegos Olímpicos de París 2024.

Esta es su primera nominación, sumándose a una lista de grandes estrellas del fútbol femenino como Alexia Putellas y Salma Paralluelo. Aunque no es la favorita, su inclusión es un gran hito para el fútbol colombiano, recordando la nominación de Linda Caicedo el año anterior. La ceremonia de entrega del galardón será el 28 de octubre en París                    </p>
                            <p>
                                Mayra Ramírez, nacida en Sibaté, Cundinamarca, es una de las jugadoras más destacadas de la temporada 2023-2024, logrando su primera nominación al prestigioso Balón de Oro. Con una trayectoria llena de logros, Ramírez fue fichada por el Chelsea de Inglaterra después de jugar en equipos como el Levante. Su adaptación al equipo inglés fue rápida, y sus goles fueron determinantes para llevar al Chelsea a ganar la liga inglesa y avanzar a las semifinales de la Champions League Femenina​ </p>
                            
                            <h3>Real Pasion F.C.</h3>
                            <p>
                                Real Pasion F.C. rápidamente se ganó un lugar en la comunidad, participando en torneos locales y regionales, y destacándose por su estilo de juego dinámico y su férrea disciplina. Bajo la dirección de Jean Albert Martínez y su equipo de entrenadores, el club ha formado a varios jugadores que han logrado destacar a nivel nacional, algunos de los cuales han seguido los pasos de Mayra, alcanzando las ligas profesionales y la selección nacional.                            </p>
                            <p>
                                El club también es conocido por sus programas de inclusión social, que buscan brindar oportunidades a niños y niñas de bajos recursos, ofreciendo becas deportivas y acceso a entrenamientos de alta calidad. Esto ha hecho que Real Pasion no solo sea un equipo de fútbol, sino una verdadera comunidad unida por el amor al deporte.                            </p>
                            <h4>Actualidad </h4>
                            <p>
                                Hoy en día, Real Pasion Fútbol Club sigue creciendo, manteniendo vivo el sueño de una de sus mejores jugadoras. Mayra Ramírez continúa siendo una figura inspiradora dentro y fuera del campo, trabajando incansablemente para que más jóvenes encuentren en el fútbol una pasión y una oportunidad de vida. El club, orgulloso de sus raíces y de su historia, mira hacia el futuro con la certeza de que aún hay muchas más historias de éxito por escribir.                            </p>
                            
                        </div>
                       
                       

                        
                        
                    </div>

                    <div class="col-lg-4">
                        <div class="sidebar">
                            <div class="sidebar-widget">
                                <div class="single-bio">
                                    <div class="single-bio-img">
                                        <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                    </div>
                                    <div class="single-bio-text">
                                        <h3>Mayra Ramirez</h3>
                                        <p>
                                            En Funza, Cundinamarca, nació en 2015 el Real Pasion Fútbol Club, un equipo que simboliza la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                                        </p>
                                    </div>
                                    <div class="single-bio-social">
                                        <a class="btn" href="https://x.com/FCFSeleccionCol/status/1639591908237344768" target="_blank"><i class="fab fa-twitter" target="_blank"></i></a>
                                        <a class="btn" href="https://www.facebook.com/watch/?v=1666431423490772" target="_blank"><i class="fab fa-facebook-f" target="_blank"></i></a>
                                        <a class="btn" href="https://www.youtube.com/@mayraramirez537" target="_blank"><i class="fab fa-youtube" target="_blank"></i></a>
                                        <a class="btn" href="https://www.instagram.com/mayra.ramirez9/?hl=es" target="_blank"><i class="fab fa-instagram"></i></a>
                                        <a class="btn" href="https://es.linkedin.com/posts/forbes-colombia_la-colombiana-mayra-ram%C3%ADrez-desbanca-a-walsh-activity-7156692267028627457-qoKs" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="sidebar-widget">
                                <div class="search-widget">
                                    <form>
                                        <input class="form-control" type="text" placeholder="Buscar palabra clave">
                                        <button class="btn"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h2 class="widget-title">Publicación reciente</h2>
                                <div class="recent-post">
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/jugadoradelfundadorclub.jpg" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia se aferra a Mayra, para ir por la hazaña ante España</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Mayra Ramírez, imagen del Chelsea en su nueva camiseta</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto1.mayra.avif" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia Femenina jugará amistosos ante Venezuela</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <div class="image-widget">
                                    <a href="#"><img src="imagen/imagen.mayra.ramirez.jpg" alt="Image"></a>
                                </div>
                            </div>

                            

                            

                            

                            

                            

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "contenido11": `
        <div class="locationn">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="section-header text-center">
                                <p>Noticias</p>
                                <h2>real pasion f.c</h2>
                            </div>
        
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
                 <!-- Single Post Start-->
        <div class="single">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="single-content">
                            <img src="imagen/mayra-ramirez-11.webp" />
                            <h2>Historia de Real Pasion Fútbol Club - Funza, Cundinamarca</h2>
                            <p>
                                En el corazón de Funza, Cundinamarca, nació un sueño que tomó forma en las calles y canchas del municipio: el Real Pasion Fútbol Club. Fundado en 2015, este equipo no es solo un club, sino un símbolo de la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                            </p>
                            <p>
                                La historia de Real Pasion está estrechamente ligada a la vida de una de sus talentosas jugadoras, Mayra Ramírez, una talentosa jugadora de fútbol que se destacó por su habilidad, dedicación, y espíritu indomable. Mayra, oriunda de Cundinamarca, siempre tuvo el sueño de hacer parte de un club que no solo fuera un refugio para jóvenes futbolistas, sino también un espacio donde se fomentara la igualdad de género en el deporte. Tras su participación en la selección de fútbol de Colombia, Mayra decidió volver a sus raíces y contribuir al desarrollo del fútbol en su región.                            </p>
                            <p>
                                Junto con un grupo de entusiastas del fútbol local, Mayra desempeño un rol importante en el Real Pasion Fútbol Club, un club con un enfoque especial en la formación de jóvenes talentos, tanto en categorías masculinas como femeninas. Desde sus inicios, el club se ha destacado por su metodología integral, que no solo se enfoca en el desarrollo técnico y táctico de los jugadores, sino también en su crecimiento personal y académico.                            </p>
                            <h3>Real Pasion F.C.</h3>
                            <p>
                                Real Pasion F.C. rápidamente se ganó un lugar en la comunidad, participando en torneos locales y regionales, y destacándose por su estilo de juego dinámico y su férrea disciplina. Bajo la dirección de Jean Albert Martínez y su equipo de entrenadores, el club ha formado a varios jugadores que han logrado destacar a nivel nacional, algunos de los cuales han seguido los pasos de Mayra, alcanzando las ligas profesionales y la selección nacional.                            </p>
                            <p>
                                El club también es conocido por sus programas de inclusión social, que buscan brindar oportunidades a niños y niñas de bajos recursos, ofreciendo becas deportivas y acceso a entrenamientos de alta calidad. Esto ha hecho que Real Pasion no solo sea un equipo de fútbol, sino una verdadera comunidad unida por el amor al deporte.                            </p>
                            <h4>Actualidad </h4>
                            <p>
                                Hoy en día, Real Pasion Fútbol Club sigue creciendo, manteniendo vivo el sueño de una de sus mejores jugadoras. Mayra Ramírez continúa siendo una figura inspiradora dentro y fuera del campo, trabajando incansablemente para que más jóvenes encuentren en el fútbol una pasión y una oportunidad de vida. El club, orgulloso de sus raíces y de su historia, mira hacia el futuro con la certeza de que aún hay muchas más historias de éxito por escribir.                            </p>
                            
                        </div>
                       
                       

                        
                        
                    </div>

                    <div class="col-lg-4">
                        <div class="sidebar">
                            <div class="sidebar-widget">
                                <div class="single-bio">
                                    <div class="single-bio-img">
                                        <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                    </div>
                                    <div class="single-bio-text">
                                        <h3>Mayra Ramirez</h3>
                                        <p>
                                            En Funza, Cundinamarca, nació en 2015 el Real Pasion Fútbol Club, un equipo que simboliza la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                                        </p>
                                    </div>
                                    <div class="single-bio-social">
                                        <a class="btn" href="https://x.com/FCFSeleccionCol/status/1639591908237344768" target="_blank"><i class="fab fa-twitter" target="_blank"></i></a>
                                        <a class="btn" href="https://www.facebook.com/watch/?v=1666431423490772" target="_blank"><i class="fab fa-facebook-f" target="_blank"></i></a>
                                        <a class="btn" href="https://www.youtube.com/@mayraramirez537" target="_blank"><i class="fab fa-youtube" target="_blank"></i></a>
                                        <a class="btn" href="https://www.instagram.com/mayra.ramirez9/?hl=es" target="_blank"><i class="fab fa-instagram"></i></a>
                                        <a class="btn" href="https://es.linkedin.com/posts/forbes-colombia_la-colombiana-mayra-ram%C3%ADrez-desbanca-a-walsh-activity-7156692267028627457-qoKs" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="sidebar-widget">
                                <div class="search-widget">
                                    <form>
                                        <input class="form-control" type="text" placeholder="Buscar palabra clave">
                                        <button class="btn"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h2 class="widget-title">Publicación reciente</h2>
                                <div class="recent-post">
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/jugadoradelfundadorclub.jpg" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia se aferra a Mayra, para ir por la hazaña ante España</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Mayra Ramírez, imagen del Chelsea en su nueva camiseta</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto1.mayra.avif" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia Femenina jugará amistosos ante Venezuela</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <div class="image-widget">
                                    <a href="#"><img src="imagen/imagen.mayra.ramirez.jpg" alt="Image"></a>
                                </div>
                            </div>

                            

                            

                            

                            

                            

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "contenido12": `
        <div class="locationn">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="section-header text-center">
                                <p>Noticias</p>
                                <h2>real pasion f.c</h2>
                            </div>
        
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
                 <!-- Single Post Start-->
        <div class="single">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="single-content">
                            <img src="imagen/mayra-ramirez-11.webp" />
                            <h2>Historia de Real Pasion Fútbol Club - Funza, Cundinamarca</h2>
                            <p>
                                En el corazón de Funza, Cundinamarca, nació un sueño que tomó forma en las calles y canchas del municipio: el Real Pasion Fútbol Club. Fundado en 2015, este equipo no es solo un club, sino un símbolo de la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                            </p>
                            <p>
                                La historia de Real Pasion está estrechamente ligada a la vida de una de sus talentosas jugadoras, Mayra Ramírez, una talentosa jugadora de fútbol que se destacó por su habilidad, dedicación, y espíritu indomable. Mayra, oriunda de Cundinamarca, siempre tuvo el sueño de hacer parte de un club que no solo fuera un refugio para jóvenes futbolistas, sino también un espacio donde se fomentara la igualdad de género en el deporte. Tras su participación en la selección de fútbol de Colombia, Mayra decidió volver a sus raíces y contribuir al desarrollo del fútbol en su región.                            </p>
                            <p>
                                Junto con un grupo de entusiastas del fútbol local, Mayra desempeño un rol importante en el Real Pasion Fútbol Club, un club con un enfoque especial en la formación de jóvenes talentos, tanto en categorías masculinas como femeninas. Desde sus inicios, el club se ha destacado por su metodología integral, que no solo se enfoca en el desarrollo técnico y táctico de los jugadores, sino también en su crecimiento personal y académico.                            </p>
                            <h3>Real Pasion F.C.</h3>
                            <p>
                                Real Pasion F.C. rápidamente se ganó un lugar en la comunidad, participando en torneos locales y regionales, y destacándose por su estilo de juego dinámico y su férrea disciplina. Bajo la dirección de Jean Albert Martínez y su equipo de entrenadores, el club ha formado a varios jugadores que han logrado destacar a nivel nacional, algunos de los cuales han seguido los pasos de Mayra, alcanzando las ligas profesionales y la selección nacional.                            </p>
                            <p>
                                El club también es conocido por sus programas de inclusión social, que buscan brindar oportunidades a niños y niñas de bajos recursos, ofreciendo becas deportivas y acceso a entrenamientos de alta calidad. Esto ha hecho que Real Pasion no solo sea un equipo de fútbol, sino una verdadera comunidad unida por el amor al deporte.                            </p>
                            <h4>Actualidad </h4>
                            <p>
                                Hoy en día, Real Pasion Fútbol Club sigue creciendo, manteniendo vivo el sueño de una de sus mejores jugadoras. Mayra Ramírez continúa siendo una figura inspiradora dentro y fuera del campo, trabajando incansablemente para que más jóvenes encuentren en el fútbol una pasión y una oportunidad de vida. El club, orgulloso de sus raíces y de su historia, mira hacia el futuro con la certeza de que aún hay muchas más historias de éxito por escribir.                            </p>
                            
                        </div>
                       
                       

                        
                        
                    </div>

                    <div class="col-lg-4">
                        <div class="sidebar">
                            <div class="sidebar-widget">
                                <div class="single-bio">
                                    <div class="single-bio-img">
                                        <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                    </div>
                                    <div class="single-bio-text">
                                        <h3>Mayra Ramirez</h3>
                                        <p>
                                            En Funza, Cundinamarca, nació en 2015 el Real Pasion Fútbol Club, un equipo que simboliza la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                                        </p>
                                    </div>
                                    <div class="single-bio-social">
                                        <a class="btn" href="https://x.com/FCFSeleccionCol/status/1639591908237344768" target="_blank"><i class="fab fa-twitter" target="_blank"></i></a>
                                        <a class="btn" href="https://www.facebook.com/watch/?v=1666431423490772" target="_blank"><i class="fab fa-facebook-f" target="_blank"></i></a>
                                        <a class="btn" href="https://www.youtube.com/@mayraramirez537" target="_blank"><i class="fab fa-youtube" target="_blank"></i></a>
                                        <a class="btn" href="https://www.instagram.com/mayra.ramirez9/?hl=es" target="_blank"><i class="fab fa-instagram"></i></a>
                                        <a class="btn" href="https://es.linkedin.com/posts/forbes-colombia_la-colombiana-mayra-ram%C3%ADrez-desbanca-a-walsh-activity-7156692267028627457-qoKs" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="sidebar-widget">
                                <div class="search-widget">
                                    <form>
                                        <input class="form-control" type="text" placeholder="Buscar palabra clave">
                                        <button class="btn"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h2 class="widget-title">Publicación reciente</h2>
                                <div class="recent-post">
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/jugadoradelfundadorclub.jpg" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia se aferra a Mayra, para ir por la hazaña ante España</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Mayra Ramírez, imagen del Chelsea en su nueva camiseta</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto1.mayra.avif" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia Femenina jugará amistosos ante Venezuela</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <div class="image-widget">
                                    <a href="#"><img src="imagen/imagen.mayra.ramirez.jpg" alt="Image"></a>
                                </div>
                            </div>

                            

                            

                            

                            

                            

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "contenido13": `
        <div class="locationn">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="section-header text-center">
                                <p>Noticias</p>
                                <h2>real pasion f.c</h2>
                            </div>
        
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
                 <!-- Single Post Start-->
        <div class="single">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="single-content">
                            <img src="imagen/mayra-ramirez-11.webp" />
                            <h2>Historia de Real Pasion Fútbol Club - Funza, Cundinamarca</h2>
                            <p>
                                En el corazón de Funza, Cundinamarca, nació un sueño que tomó forma en las calles y canchas del municipio: el Real Pasion Fútbol Club. Fundado en 2015, este equipo no es solo un club, sino un símbolo de la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                            </p>
                            <p>
                                La historia de Real Pasion está estrechamente ligada a la vida de una de sus talentosas jugadoras, Mayra Ramírez, una talentosa jugadora de fútbol que se destacó por su habilidad, dedicación, y espíritu indomable. Mayra, oriunda de Cundinamarca, siempre tuvo el sueño de hacer parte de un club que no solo fuera un refugio para jóvenes futbolistas, sino también un espacio donde se fomentara la igualdad de género en el deporte. Tras su participación en la selección de fútbol de Colombia, Mayra decidió volver a sus raíces y contribuir al desarrollo del fútbol en su región.                            </p>
                            <p>
                                Junto con un grupo de entusiastas del fútbol local, Mayra desempeño un rol importante en el Real Pasion Fútbol Club, un club con un enfoque especial en la formación de jóvenes talentos, tanto en categorías masculinas como femeninas. Desde sus inicios, el club se ha destacado por su metodología integral, que no solo se enfoca en el desarrollo técnico y táctico de los jugadores, sino también en su crecimiento personal y académico.                            </p>
                            <h3>Real Pasion F.C.</h3>
                            <p>
                                Real Pasion F.C. rápidamente se ganó un lugar en la comunidad, participando en torneos locales y regionales, y destacándose por su estilo de juego dinámico y su férrea disciplina. Bajo la dirección de Jean Albert Martínez y su equipo de entrenadores, el club ha formado a varios jugadores que han logrado destacar a nivel nacional, algunos de los cuales han seguido los pasos de Mayra, alcanzando las ligas profesionales y la selección nacional.                            </p>
                            <p>
                                El club también es conocido por sus programas de inclusión social, que buscan brindar oportunidades a niños y niñas de bajos recursos, ofreciendo becas deportivas y acceso a entrenamientos de alta calidad. Esto ha hecho que Real Pasion no solo sea un equipo de fútbol, sino una verdadera comunidad unida por el amor al deporte.                            </p>
                            <h4>Actualidad </h4>
                            <p>
                                Hoy en día, Real Pasion Fútbol Club sigue creciendo, manteniendo vivo el sueño de una de sus mejores jugadoras. Mayra Ramírez continúa siendo una figura inspiradora dentro y fuera del campo, trabajando incansablemente para que más jóvenes encuentren en el fútbol una pasión y una oportunidad de vida. El club, orgulloso de sus raíces y de su historia, mira hacia el futuro con la certeza de que aún hay muchas más historias de éxito por escribir.                            </p>
                            
                        </div>
                       
                       

                        
                        
                    </div>

                    <div class="col-lg-4">
                        <div class="sidebar">
                            <div class="sidebar-widget">
                                <div class="single-bio">
                                    <div class="single-bio-img">
                                        <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                    </div>
                                    <div class="single-bio-text">
                                        <h3>Mayra Ramirez</h3>
                                        <p>
                                            En Funza, Cundinamarca, nació en 2015 el Real Pasion Fútbol Club, un equipo que simboliza la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                                        </p>
                                    </div>
                                    <div class="single-bio-social">
                                        <a class="btn" href="https://x.com/FCFSeleccionCol/status/1639591908237344768" target="_blank"><i class="fab fa-twitter" target="_blank"></i></a>
                                        <a class="btn" href="https://www.facebook.com/watch/?v=1666431423490772" target="_blank"><i class="fab fa-facebook-f" target="_blank"></i></a>
                                        <a class="btn" href="https://www.youtube.com/@mayraramirez537" target="_blank"><i class="fab fa-youtube" target="_blank"></i></a>
                                        <a class="btn" href="https://www.instagram.com/mayra.ramirez9/?hl=es" target="_blank"><i class="fab fa-instagram"></i></a>
                                        <a class="btn" href="https://es.linkedin.com/posts/forbes-colombia_la-colombiana-mayra-ram%C3%ADrez-desbanca-a-walsh-activity-7156692267028627457-qoKs" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="sidebar-widget">
                                <div class="search-widget">
                                    <form>
                                        <input class="form-control" type="text" placeholder="Buscar palabra clave">
                                        <button class="btn"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h2 class="widget-title">Publicación reciente</h2>
                                <div class="recent-post">
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/jugadoradelfundadorclub.jpg" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia se aferra a Mayra, para ir por la hazaña ante España</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Mayra Ramírez, imagen del Chelsea en su nueva camiseta</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto1.mayra.avif" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia Femenina jugará amistosos ante Venezuela</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <div class="image-widget">
                                    <a href="#"><img src="imagen/imagen.mayra.ramirez.jpg" alt="Image"></a>
                                </div>
                            </div>

                            

                            

                            

                            

                            

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "contenido14": `
      <div class="locationn">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="section-header text-center">
                                <p>Noticias</p>
                                <h2>real pasion f.c</h2>
                            </div>
        
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
                 <!-- Single Post Start-->
        <div class="single">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="single-content">
                            <img src="imagen/mayra-ramirez-11.webp" />
                            <h2>Historia de Real Pasion Fútbol Club - Funza, Cundinamarca</h2>
                            <p>
                                En el corazón de Funza, Cundinamarca, nació un sueño que tomó forma en las calles y canchas del municipio: el Real Pasion Fútbol Club. Fundado en 2015, este equipo no es solo un club, sino un símbolo de la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                            </p>
                            <p>
                                La historia de Real Pasion está estrechamente ligada a la vida de una de sus talentosas jugadoras, Mayra Ramírez, una talentosa jugadora de fútbol que se destacó por su habilidad, dedicación, y espíritu indomable. Mayra, oriunda de Cundinamarca, siempre tuvo el sueño de hacer parte de un club que no solo fuera un refugio para jóvenes futbolistas, sino también un espacio donde se fomentara la igualdad de género en el deporte. Tras su participación en la selección de fútbol de Colombia, Mayra decidió volver a sus raíces y contribuir al desarrollo del fútbol en su región.                            </p>
                            <p>
                                Junto con un grupo de entusiastas del fútbol local, Mayra desempeño un rol importante en el Real Pasion Fútbol Club, un club con un enfoque especial en la formación de jóvenes talentos, tanto en categorías masculinas como femeninas. Desde sus inicios, el club se ha destacado por su metodología integral, que no solo se enfoca en el desarrollo técnico y táctico de los jugadores, sino también en su crecimiento personal y académico.                            </p>
                            <h3>Real Pasion F.C.</h3>
                            <p>
                                Real Pasion F.C. rápidamente se ganó un lugar en la comunidad, participando en torneos locales y regionales, y destacándose por su estilo de juego dinámico y su férrea disciplina. Bajo la dirección de Jean Albert Martínez y su equipo de entrenadores, el club ha formado a varios jugadores que han logrado destacar a nivel nacional, algunos de los cuales han seguido los pasos de Mayra, alcanzando las ligas profesionales y la selección nacional.                            </p>
                            <p>
                                El club también es conocido por sus programas de inclusión social, que buscan brindar oportunidades a niños y niñas de bajos recursos, ofreciendo becas deportivas y acceso a entrenamientos de alta calidad. Esto ha hecho que Real Pasion no solo sea un equipo de fútbol, sino una verdadera comunidad unida por el amor al deporte.                            </p>
                            <h4>Actualidad </h4>
                            <p>
                                Hoy en día, Real Pasion Fútbol Club sigue creciendo, manteniendo vivo el sueño de una de sus mejores jugadoras. Mayra Ramírez continúa siendo una figura inspiradora dentro y fuera del campo, trabajando incansablemente para que más jóvenes encuentren en el fútbol una pasión y una oportunidad de vida. El club, orgulloso de sus raíces y de su historia, mira hacia el futuro con la certeza de que aún hay muchas más historias de éxito por escribir.                            </p>
                            
                        </div>
                       
                       

                        
                        
                    </div>

                    <div class="col-lg-4">
                        <div class="sidebar">
                            <div class="sidebar-widget">
                                <div class="single-bio">
                                    <div class="single-bio-img">
                                        <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                    </div>
                                    <div class="single-bio-text">
                                        <h3>Mayra Ramirez</h3>
                                        <p>
                                            En Funza, Cundinamarca, nació en 2015 el Real Pasion Fútbol Club, un equipo que simboliza la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                                        </p>
                                    </div>
                                    <div class="single-bio-social">
                                        <a class="btn" href="https://x.com/FCFSeleccionCol/status/1639591908237344768" target="_blank"><i class="fab fa-twitter" target="_blank"></i></a>
                                        <a class="btn" href="https://www.facebook.com/watch/?v=1666431423490772" target="_blank"><i class="fab fa-facebook-f" target="_blank"></i></a>
                                        <a class="btn" href="https://www.youtube.com/@mayraramirez537" target="_blank"><i class="fab fa-youtube" target="_blank"></i></a>
                                        <a class="btn" href="https://www.instagram.com/mayra.ramirez9/?hl=es" target="_blank"><i class="fab fa-instagram"></i></a>
                                        <a class="btn" href="https://es.linkedin.com/posts/forbes-colombia_la-colombiana-mayra-ram%C3%ADrez-desbanca-a-walsh-activity-7156692267028627457-qoKs" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="sidebar-widget">
                                <div class="search-widget">
                                    <form>
                                        <input class="form-control" type="text" placeholder="Buscar palabra clave">
                                        <button class="btn"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h2 class="widget-title">Publicación reciente</h2>
                                <div class="recent-post">
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/jugadoradelfundadorclub.jpg" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia se aferra a Mayra, para ir por la hazaña ante España</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Mayra Ramírez, imagen del Chelsea en su nueva camiseta</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto1.mayra.avif" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia Femenina jugará amistosos ante Venezuela</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <div class="image-widget">
                                    <a href="#"><img src="imagen/imagen.mayra.ramirez.jpg" alt="Image"></a>
                                </div>
                            </div>

                            

                            

                            

                            

                            

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "contenido15": `
        <div class="locationn">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="section-header text-center">
                                <p>Noticias</p>
                                <h2>real pasion f.c</h2>
                            </div>
        
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
                 <!-- Single Post Start-->
        <div class="single">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="single-content">
                            <img src="imagen/mayra-ramirez-11.webp" />
                            <h2>Historia de Real Pasion Fútbol Club - Funza, Cundinamarca</h2>
                            <p>
                                En el corazón de Funza, Cundinamarca, nació un sueño que tomó forma en las calles y canchas del municipio: el Real Pasion Fútbol Club. Fundado en 2015, este equipo no es solo un club, sino un símbolo de la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                            </p>
                            <p>
                                La historia de Real Pasion está estrechamente ligada a la vida de una de sus talentosas jugadoras, Mayra Ramírez, una talentosa jugadora de fútbol que se destacó por su habilidad, dedicación, y espíritu indomable. Mayra, oriunda de Cundinamarca, siempre tuvo el sueño de hacer parte de un club que no solo fuera un refugio para jóvenes futbolistas, sino también un espacio donde se fomentara la igualdad de género en el deporte. Tras su participación en la selección de fútbol de Colombia, Mayra decidió volver a sus raíces y contribuir al desarrollo del fútbol en su región.                            </p>
                            <p>
                                Junto con un grupo de entusiastas del fútbol local, Mayra desempeño un rol importante en el Real Pasion Fútbol Club, un club con un enfoque especial en la formación de jóvenes talentos, tanto en categorías masculinas como femeninas. Desde sus inicios, el club se ha destacado por su metodología integral, que no solo se enfoca en el desarrollo técnico y táctico de los jugadores, sino también en su crecimiento personal y académico.                            </p>
                            <h3>Real Pasion F.C.</h3>
                            <p>
                                Real Pasion F.C. rápidamente se ganó un lugar en la comunidad, participando en torneos locales y regionales, y destacándose por su estilo de juego dinámico y su férrea disciplina. Bajo la dirección de Jean Albert Martínez y su equipo de entrenadores, el club ha formado a varios jugadores que han logrado destacar a nivel nacional, algunos de los cuales han seguido los pasos de Mayra, alcanzando las ligas profesionales y la selección nacional.                            </p>
                            <p>
                                El club también es conocido por sus programas de inclusión social, que buscan brindar oportunidades a niños y niñas de bajos recursos, ofreciendo becas deportivas y acceso a entrenamientos de alta calidad. Esto ha hecho que Real Pasion no solo sea un equipo de fútbol, sino una verdadera comunidad unida por el amor al deporte.                            </p>
                            <h4>Actualidad </h4>
                            <p>
                                Hoy en día, Real Pasion Fútbol Club sigue creciendo, manteniendo vivo el sueño de una de sus mejores jugadoras. Mayra Ramírez continúa siendo una figura inspiradora dentro y fuera del campo, trabajando incansablemente para que más jóvenes encuentren en el fútbol una pasión y una oportunidad de vida. El club, orgulloso de sus raíces y de su historia, mira hacia el futuro con la certeza de que aún hay muchas más historias de éxito por escribir.                            </p>
                            
                        </div>
                       
                       

                        
                        
                    </div>

                    <div class="col-lg-4">
                        <div class="sidebar">
                            <div class="sidebar-widget">
                                <div class="single-bio">
                                    <div class="single-bio-img">
                                        <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                    </div>
                                    <div class="single-bio-text">
                                        <h3>Mayra Ramirez</h3>
                                        <p>
                                            En Funza, Cundinamarca, nació en 2015 el Real Pasion Fútbol Club, un equipo que simboliza la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                                        </p>
                                    </div>
                                    <div class="single-bio-social">
                                        <a class="btn" href="https://x.com/FCFSeleccionCol/status/1639591908237344768" target="_blank"><i class="fab fa-twitter" target="_blank"></i></a>
                                        <a class="btn" href="https://www.facebook.com/watch/?v=1666431423490772" target="_blank"><i class="fab fa-facebook-f" target="_blank"></i></a>
                                        <a class="btn" href="https://www.youtube.com/@mayraramirez537" target="_blank"><i class="fab fa-youtube" target="_blank"></i></a>
                                        <a class="btn" href="https://www.instagram.com/mayra.ramirez9/?hl=es" target="_blank"><i class="fab fa-instagram"></i></a>
                                        <a class="btn" href="https://es.linkedin.com/posts/forbes-colombia_la-colombiana-mayra-ram%C3%ADrez-desbanca-a-walsh-activity-7156692267028627457-qoKs" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="sidebar-widget">
                                <div class="search-widget">
                                    <form>
                                        <input class="form-control" type="text" placeholder="Buscar palabra clave">
                                        <button class="btn"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h2 class="widget-title">Publicación reciente</h2>
                                <div class="recent-post">
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/jugadoradelfundadorclub.jpg" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia se aferra a Mayra, para ir por la hazaña ante España</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Mayra Ramírez, imagen del Chelsea en su nueva camiseta</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto1.mayra.avif" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia Femenina jugará amistosos ante Venezuela</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <div class="image-widget">
                                    <a href="#"><img src="imagen/imagen.mayra.ramirez.jpg" alt="Image"></a>
                                </div>
                            </div>

                            

                            

                            

                            

                            

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "contenido16": `
       <div class="locationn">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="section-header text-center">
                                <p>Noticias</p>
                                <h2>real pasion f.c</h2>
                            </div>
        
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
                 <!-- Single Post Start-->
        <div class="single">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="single-content">
                            <img src="imagen/mayra-ramirez-11.webp" />
                            <h2>Historia de Real Pasion Fútbol Club - Funza, Cundinamarca</h2>
                            <p>
                                En el corazón de Funza, Cundinamarca, nació un sueño que tomó forma en las calles y canchas del municipio: el Real Pasion Fútbol Club. Fundado en 2015, este equipo no es solo un club, sino un símbolo de la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                            </p>
                            <p>
                                La historia de Real Pasion está estrechamente ligada a la vida de una de sus talentosas jugadoras, Mayra Ramírez, una talentosa jugadora de fútbol que se destacó por su habilidad, dedicación, y espíritu indomable. Mayra, oriunda de Cundinamarca, siempre tuvo el sueño de hacer parte de un club que no solo fuera un refugio para jóvenes futbolistas, sino también un espacio donde se fomentara la igualdad de género en el deporte. Tras su participación en la selección de fútbol de Colombia, Mayra decidió volver a sus raíces y contribuir al desarrollo del fútbol en su región.                            </p>
                            <p>
                                Junto con un grupo de entusiastas del fútbol local, Mayra desempeño un rol importante en el Real Pasion Fútbol Club, un club con un enfoque especial en la formación de jóvenes talentos, tanto en categorías masculinas como femeninas. Desde sus inicios, el club se ha destacado por su metodología integral, que no solo se enfoca en el desarrollo técnico y táctico de los jugadores, sino también en su crecimiento personal y académico.                            </p>
                            <h3>Real Pasion F.C.</h3>
                            <p>
                                Real Pasion F.C. rápidamente se ganó un lugar en la comunidad, participando en torneos locales y regionales, y destacándose por su estilo de juego dinámico y su férrea disciplina. Bajo la dirección de Jean Albert Martínez y su equipo de entrenadores, el club ha formado a varios jugadores que han logrado destacar a nivel nacional, algunos de los cuales han seguido los pasos de Mayra, alcanzando las ligas profesionales y la selección nacional.                            </p>
                            <p>
                                El club también es conocido por sus programas de inclusión social, que buscan brindar oportunidades a niños y niñas de bajos recursos, ofreciendo becas deportivas y acceso a entrenamientos de alta calidad. Esto ha hecho que Real Pasion no solo sea un equipo de fútbol, sino una verdadera comunidad unida por el amor al deporte.                            </p>
                            <h4>Actualidad </h4>
                            <p>
                                Hoy en día, Real Pasion Fútbol Club sigue creciendo, manteniendo vivo el sueño de una de sus mejores jugadoras. Mayra Ramírez continúa siendo una figura inspiradora dentro y fuera del campo, trabajando incansablemente para que más jóvenes encuentren en el fútbol una pasión y una oportunidad de vida. El club, orgulloso de sus raíces y de su historia, mira hacia el futuro con la certeza de que aún hay muchas más historias de éxito por escribir.                            </p>
                            
                        </div>
                       
                       

                        
                        
                    </div>

                    <div class="col-lg-4">
                        <div class="sidebar">
                            <div class="sidebar-widget">
                                <div class="single-bio">
                                    <div class="single-bio-img">
                                        <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                    </div>
                                    <div class="single-bio-text">
                                        <h3>Mayra Ramirez</h3>
                                        <p>
                                            En Funza, Cundinamarca, nació en 2015 el Real Pasion Fútbol Club, un equipo que simboliza la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                                        </p>
                                    </div>
                                    <div class="single-bio-social">
                                        <a class="btn" href="https://x.com/FCFSeleccionCol/status/1639591908237344768" target="_blank"><i class="fab fa-twitter" target="_blank"></i></a>
                                        <a class="btn" href="https://www.facebook.com/watch/?v=1666431423490772" target="_blank"><i class="fab fa-facebook-f" target="_blank"></i></a>
                                        <a class="btn" href="https://www.youtube.com/@mayraramirez537" target="_blank"><i class="fab fa-youtube" target="_blank"></i></a>
                                        <a class="btn" href="https://www.instagram.com/mayra.ramirez9/?hl=es" target="_blank"><i class="fab fa-instagram"></i></a>
                                        <a class="btn" href="https://es.linkedin.com/posts/forbes-colombia_la-colombiana-mayra-ram%C3%ADrez-desbanca-a-walsh-activity-7156692267028627457-qoKs" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="sidebar-widget">
                                <div class="search-widget">
                                    <form>
                                        <input class="form-control" type="text" placeholder="Buscar palabra clave">
                                        <button class="btn"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h2 class="widget-title">Publicación reciente</h2>
                                <div class="recent-post">
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/jugadoradelfundadorclub.jpg" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia se aferra a Mayra, para ir por la hazaña ante España</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Mayra Ramírez, imagen del Chelsea en su nueva camiseta</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto1.mayra.avif" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia Femenina jugará amistosos ante Venezuela</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <div class="image-widget">
                                    <a href="#"><img src="imagen/imagen.mayra.ramirez.jpg" alt="Image"></a>
                                </div>
                            </div>

                            

                            

                            

                            

                            

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "contenido17": `
       <div class="locationn">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="section-header text-center">
                                <p>Noticias</p>
                                <h2>real pasion f.c</h2>
                            </div>
        
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
                 <!-- Single Post Start-->
        <div class="single">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="single-content">
                            <img src="imagen/mayra-ramirez-11.webp" />
                            <h2>Historia de Real Pasion Fútbol Club - Funza, Cundinamarca</h2>
                            <p>
                                En el corazón de Funza, Cundinamarca, nació un sueño que tomó forma en las calles y canchas del municipio: el Real Pasion Fútbol Club. Fundado en 2015, este equipo no es solo un club, sino un símbolo de la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                            </p>
                            <p>
                                La historia de Real Pasion está estrechamente ligada a la vida de una de sus talentosas jugadoras, Mayra Ramírez, una talentosa jugadora de fútbol que se destacó por su habilidad, dedicación, y espíritu indomable. Mayra, oriunda de Cundinamarca, siempre tuvo el sueño de hacer parte de un club que no solo fuera un refugio para jóvenes futbolistas, sino también un espacio donde se fomentara la igualdad de género en el deporte. Tras su participación en la selección de fútbol de Colombia, Mayra decidió volver a sus raíces y contribuir al desarrollo del fútbol en su región.                            </p>
                            <p>
                                Junto con un grupo de entusiastas del fútbol local, Mayra desempeño un rol importante en el Real Pasion Fútbol Club, un club con un enfoque especial en la formación de jóvenes talentos, tanto en categorías masculinas como femeninas. Desde sus inicios, el club se ha destacado por su metodología integral, que no solo se enfoca en el desarrollo técnico y táctico de los jugadores, sino también en su crecimiento personal y académico.                            </p>
                            <h3>Real Pasion F.C.</h3>
                            <p>
                                Real Pasion F.C. rápidamente se ganó un lugar en la comunidad, participando en torneos locales y regionales, y destacándose por su estilo de juego dinámico y su férrea disciplina. Bajo la dirección de Jean Albert Martínez y su equipo de entrenadores, el club ha formado a varios jugadores que han logrado destacar a nivel nacional, algunos de los cuales han seguido los pasos de Mayra, alcanzando las ligas profesionales y la selección nacional.                            </p>
                            <p>
                                El club también es conocido por sus programas de inclusión social, que buscan brindar oportunidades a niños y niñas de bajos recursos, ofreciendo becas deportivas y acceso a entrenamientos de alta calidad. Esto ha hecho que Real Pasion no solo sea un equipo de fútbol, sino una verdadera comunidad unida por el amor al deporte.                            </p>
                            <h4>Actualidad </h4>
                            <p>
                                Hoy en día, Real Pasion Fútbol Club sigue creciendo, manteniendo vivo el sueño de una de sus mejores jugadoras. Mayra Ramírez continúa siendo una figura inspiradora dentro y fuera del campo, trabajando incansablemente para que más jóvenes encuentren en el fútbol una pasión y una oportunidad de vida. El club, orgulloso de sus raíces y de su historia, mira hacia el futuro con la certeza de que aún hay muchas más historias de éxito por escribir.                            </p>
                            
                        </div>
                       
                       

                        
                        
                    </div>

                    <div class="col-lg-4">
                        <div class="sidebar">
                            <div class="sidebar-widget">
                                <div class="single-bio">
                                    <div class="single-bio-img">
                                        <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                    </div>
                                    <div class="single-bio-text">
                                        <h3>Mayra Ramirez</h3>
                                        <p>
                                            En Funza, Cundinamarca, nació en 2015 el Real Pasion Fútbol Club, un equipo que simboliza la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                                        </p>
                                    </div>
                                    <div class="single-bio-social">
                                        <a class="btn" href="https://x.com/FCFSeleccionCol/status/1639591908237344768" target="_blank"><i class="fab fa-twitter" target="_blank"></i></a>
                                        <a class="btn" href="https://www.facebook.com/watch/?v=1666431423490772" target="_blank"><i class="fab fa-facebook-f" target="_blank"></i></a>
                                        <a class="btn" href="https://www.youtube.com/@mayraramirez537" target="_blank"><i class="fab fa-youtube" target="_blank"></i></a>
                                        <a class="btn" href="https://www.instagram.com/mayra.ramirez9/?hl=es" target="_blank"><i class="fab fa-instagram"></i></a>
                                        <a class="btn" href="https://es.linkedin.com/posts/forbes-colombia_la-colombiana-mayra-ram%C3%ADrez-desbanca-a-walsh-activity-7156692267028627457-qoKs" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="sidebar-widget">
                                <div class="search-widget">
                                    <form>
                                        <input class="form-control" type="text" placeholder="Buscar palabra clave">
                                        <button class="btn"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h2 class="widget-title">Publicación reciente</h2>
                                <div class="recent-post">
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/jugadoradelfundadorclub.jpg" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia se aferra a Mayra, para ir por la hazaña ante España</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Mayra Ramírez, imagen del Chelsea en su nueva camiseta</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto1.mayra.avif" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia Femenina jugará amistosos ante Venezuela</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <div class="image-widget">
                                    <a href="#"><img src="imagen/imagen.mayra.ramirez.jpg" alt="Image"></a>
                                </div>
                            </div>

                            

                            

                            

                            

                            

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "contenido18": `
      <div class="locationn">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="section-header text-center">
                                <p>Noticias</p>
                                <h2>real pasion f.c</h2>
                            </div>
        
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
                 <!-- Single Post Start-->
        <div class="single">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="single-content">
                            <img src="imagen/mayra-ramirez-11.webp" />
                            <h2>Historia de Real Pasion Fútbol Club - Funza, Cundinamarca</h2>
                            <p>
                                En el corazón de Funza, Cundinamarca, nació un sueño que tomó forma en las calles y canchas del municipio: el Real Pasion Fútbol Club. Fundado en 2015, este equipo no es solo un club, sino un símbolo de la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                            </p>
                            <p>
                                La historia de Real Pasion está estrechamente ligada a la vida de una de sus talentosas jugadoras, Mayra Ramírez, una talentosa jugadora de fútbol que se destacó por su habilidad, dedicación, y espíritu indomable. Mayra, oriunda de Cundinamarca, siempre tuvo el sueño de hacer parte de un club que no solo fuera un refugio para jóvenes futbolistas, sino también un espacio donde se fomentara la igualdad de género en el deporte. Tras su participación en la selección de fútbol de Colombia, Mayra decidió volver a sus raíces y contribuir al desarrollo del fútbol en su región.                            </p>
                            <p>
                                Junto con un grupo de entusiastas del fútbol local, Mayra desempeño un rol importante en el Real Pasion Fútbol Club, un club con un enfoque especial en la formación de jóvenes talentos, tanto en categorías masculinas como femeninas. Desde sus inicios, el club se ha destacado por su metodología integral, que no solo se enfoca en el desarrollo técnico y táctico de los jugadores, sino también en su crecimiento personal y académico.                            </p>
                            <h3>Real Pasion F.C.</h3>
                            <p>
                                Real Pasion F.C. rápidamente se ganó un lugar en la comunidad, participando en torneos locales y regionales, y destacándose por su estilo de juego dinámico y su férrea disciplina. Bajo la dirección de Jean Albert Martínez y su equipo de entrenadores, el club ha formado a varios jugadores que han logrado destacar a nivel nacional, algunos de los cuales han seguido los pasos de Mayra, alcanzando las ligas profesionales y la selección nacional.                            </p>
                            <p>
                                El club también es conocido por sus programas de inclusión social, que buscan brindar oportunidades a niños y niñas de bajos recursos, ofreciendo becas deportivas y acceso a entrenamientos de alta calidad. Esto ha hecho que Real Pasion no solo sea un equipo de fútbol, sino una verdadera comunidad unida por el amor al deporte.                            </p>
                            <h4>Actualidad </h4>
                            <p>
                                Hoy en día, Real Pasion Fútbol Club sigue creciendo, manteniendo vivo el sueño de una de sus mejores jugadoras. Mayra Ramírez continúa siendo una figura inspiradora dentro y fuera del campo, trabajando incansablemente para que más jóvenes encuentren en el fútbol una pasión y una oportunidad de vida. El club, orgulloso de sus raíces y de su historia, mira hacia el futuro con la certeza de que aún hay muchas más historias de éxito por escribir.                            </p>
                            
                        </div>
                       
                       

                        
                        
                    </div>

                    <div class="col-lg-4">
                        <div class="sidebar">
                            <div class="sidebar-widget">
                                <div class="single-bio">
                                    <div class="single-bio-img">
                                        <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                    </div>
                                    <div class="single-bio-text">
                                        <h3>Mayra Ramirez</h3>
                                        <p>
                                            En Funza, Cundinamarca, nació en 2015 el Real Pasion Fútbol Club, un equipo que simboliza la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                                        </p>
                                    </div>
                                    <div class="single-bio-social">
                                        <a class="btn" href="https://x.com/FCFSeleccionCol/status/1639591908237344768" target="_blank"><i class="fab fa-twitter" target="_blank"></i></a>
                                        <a class="btn" href="https://www.facebook.com/watch/?v=1666431423490772" target="_blank"><i class="fab fa-facebook-f" target="_blank"></i></a>
                                        <a class="btn" href="https://www.youtube.com/@mayraramirez537" target="_blank"><i class="fab fa-youtube" target="_blank"></i></a>
                                        <a class="btn" href="https://www.instagram.com/mayra.ramirez9/?hl=es" target="_blank"><i class="fab fa-instagram"></i></a>
                                        <a class="btn" href="https://es.linkedin.com/posts/forbes-colombia_la-colombiana-mayra-ram%C3%ADrez-desbanca-a-walsh-activity-7156692267028627457-qoKs" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="sidebar-widget">
                                <div class="search-widget">
                                    <form>
                                        <input class="form-control" type="text" placeholder="Buscar palabra clave">
                                        <button class="btn"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h2 class="widget-title">Publicación reciente</h2>
                                <div class="recent-post">
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/jugadoradelfundadorclub.jpg" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia se aferra a Mayra, para ir por la hazaña ante España</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Mayra Ramírez, imagen del Chelsea en su nueva camiseta</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto1.mayra.avif" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia Femenina jugará amistosos ante Venezuela</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <div class="image-widget">
                                    <a href="#"><img src="imagen/imagen.mayra.ramirez.jpg" alt="Image"></a>
                                </div>
                            </div>

                            

                            

                            

                            

                            

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "contenido19": `
      <div class="locationn">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="section-header text-center">
                                <p>Noticias</p>
                                <h2>real pasion f.c</h2>
                            </div>
        
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
                 <!-- Single Post Start-->
        <div class="single">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="single-content">
                            <img src="imagen/mayra-ramirez-11.webp" />
                            <h2>Historia de Real Pasion Fútbol Club - Funza, Cundinamarca</h2>
                            <p>
                                En el corazón de Funza, Cundinamarca, nació un sueño que tomó forma en las calles y canchas del municipio: el Real Pasion Fútbol Club. Fundado en 2015, este equipo no es solo un club, sino un símbolo de la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                            </p>
                            <p>
                                La historia de Real Pasion está estrechamente ligada a la vida de una de sus talentosas jugadoras, Mayra Ramírez, una talentosa jugadora de fútbol que se destacó por su habilidad, dedicación, y espíritu indomable. Mayra, oriunda de Cundinamarca, siempre tuvo el sueño de hacer parte de un club que no solo fuera un refugio para jóvenes futbolistas, sino también un espacio donde se fomentara la igualdad de género en el deporte. Tras su participación en la selección de fútbol de Colombia, Mayra decidió volver a sus raíces y contribuir al desarrollo del fútbol en su región.                            </p>
                            <p>
                                Junto con un grupo de entusiastas del fútbol local, Mayra desempeño un rol importante en el Real Pasion Fútbol Club, un club con un enfoque especial en la formación de jóvenes talentos, tanto en categorías masculinas como femeninas. Desde sus inicios, el club se ha destacado por su metodología integral, que no solo se enfoca en el desarrollo técnico y táctico de los jugadores, sino también en su crecimiento personal y académico.                            </p>
                            <h3>Real Pasion F.C.</h3>
                            <p>
                                Real Pasion F.C. rápidamente se ganó un lugar en la comunidad, participando en torneos locales y regionales, y destacándose por su estilo de juego dinámico y su férrea disciplina. Bajo la dirección de Jean Albert Martínez y su equipo de entrenadores, el club ha formado a varios jugadores que han logrado destacar a nivel nacional, algunos de los cuales han seguido los pasos de Mayra, alcanzando las ligas profesionales y la selección nacional.                            </p>
                            <p>
                                El club también es conocido por sus programas de inclusión social, que buscan brindar oportunidades a niños y niñas de bajos recursos, ofreciendo becas deportivas y acceso a entrenamientos de alta calidad. Esto ha hecho que Real Pasion no solo sea un equipo de fútbol, sino una verdadera comunidad unida por el amor al deporte.                            </p>
                            <h4>Actualidad </h4>
                            <p>
                                Hoy en día, Real Pasion Fútbol Club sigue creciendo, manteniendo vivo el sueño de una de sus mejores jugadoras. Mayra Ramírez continúa siendo una figura inspiradora dentro y fuera del campo, trabajando incansablemente para que más jóvenes encuentren en el fútbol una pasión y una oportunidad de vida. El club, orgulloso de sus raíces y de su historia, mira hacia el futuro con la certeza de que aún hay muchas más historias de éxito por escribir.                            </p>
                            
                        </div>
                       
                       

                        
                        
                    </div>

                    <div class="col-lg-4">
                        <div class="sidebar">
                            <div class="sidebar-widget">
                                <div class="single-bio">
                                    <div class="single-bio-img">
                                        <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                    </div>
                                    <div class="single-bio-text">
                                        <h3>Mayra Ramirez</h3>
                                        <p>
                                            En Funza, Cundinamarca, nació en 2015 el Real Pasion Fútbol Club, un equipo que simboliza la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                                        </p>
                                    </div>
                                    <div class="single-bio-social">
                                        <a class="btn" href="https://x.com/FCFSeleccionCol/status/1639591908237344768" target="_blank"><i class="fab fa-twitter" target="_blank"></i></a>
                                        <a class="btn" href="https://www.facebook.com/watch/?v=1666431423490772" target="_blank"><i class="fab fa-facebook-f" target="_blank"></i></a>
                                        <a class="btn" href="https://www.youtube.com/@mayraramirez537" target="_blank"><i class="fab fa-youtube" target="_blank"></i></a>
                                        <a class="btn" href="https://www.instagram.com/mayra.ramirez9/?hl=es" target="_blank"><i class="fab fa-instagram"></i></a>
                                        <a class="btn" href="https://es.linkedin.com/posts/forbes-colombia_la-colombiana-mayra-ram%C3%ADrez-desbanca-a-walsh-activity-7156692267028627457-qoKs" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="sidebar-widget">
                                <div class="search-widget">
                                    <form>
                                        <input class="form-control" type="text" placeholder="Buscar palabra clave">
                                        <button class="btn"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h2 class="widget-title">Publicación reciente</h2>
                                <div class="recent-post">
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/jugadoradelfundadorclub.jpg" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia se aferra a Mayra, para ir por la hazaña ante España</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Mayra Ramírez, imagen del Chelsea en su nueva camiseta</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto1.mayra.avif" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia Femenina jugará amistosos ante Venezuela</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <div class="image-widget">
                                    <a href="#"><img src="imagen/imagen.mayra.ramirez.jpg" alt="Image"></a>
                                </div>
                            </div>

                            

                            

                            

                            

                            

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "contenido20": `
       <div class="locationn">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="section-header text-center">
                                <p>Noticias</p>
                                <h2>real pasion f.c</h2>
                            </div>
        
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
                 <!-- Single Post Start-->
        <div class="single">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="single-content">
                            <img src="imagen/mayra-ramirez-11.webp" />
                            <h2>Historia de Real Pasion Fútbol Club - Funza, Cundinamarca</h2>
                            <p>
                                En el corazón de Funza, Cundinamarca, nació un sueño que tomó forma en las calles y canchas del municipio: el Real Pasion Fútbol Club. Fundado en 2015, este equipo no es solo un club, sino un símbolo de la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                            </p>
                            <p>
                                La historia de Real Pasion está estrechamente ligada a la vida de una de sus talentosas jugadoras, Mayra Ramírez, una talentosa jugadora de fútbol que se destacó por su habilidad, dedicación, y espíritu indomable. Mayra, oriunda de Cundinamarca, siempre tuvo el sueño de hacer parte de un club que no solo fuera un refugio para jóvenes futbolistas, sino también un espacio donde se fomentara la igualdad de género en el deporte. Tras su participación en la selección de fútbol de Colombia, Mayra decidió volver a sus raíces y contribuir al desarrollo del fútbol en su región.                            </p>
                            <p>
                                Junto con un grupo de entusiastas del fútbol local, Mayra desempeño un rol importante en el Real Pasion Fútbol Club, un club con un enfoque especial en la formación de jóvenes talentos, tanto en categorías masculinas como femeninas. Desde sus inicios, el club se ha destacado por su metodología integral, que no solo se enfoca en el desarrollo técnico y táctico de los jugadores, sino también en su crecimiento personal y académico.                            </p>
                            <h3>Real Pasion F.C.</h3>
                            <p>
                                Real Pasion F.C. rápidamente se ganó un lugar en la comunidad, participando en torneos locales y regionales, y destacándose por su estilo de juego dinámico y su férrea disciplina. Bajo la dirección de Jean Albert Martínez y su equipo de entrenadores, el club ha formado a varios jugadores que han logrado destacar a nivel nacional, algunos de los cuales han seguido los pasos de Mayra, alcanzando las ligas profesionales y la selección nacional.                            </p>
                            <p>
                                El club también es conocido por sus programas de inclusión social, que buscan brindar oportunidades a niños y niñas de bajos recursos, ofreciendo becas deportivas y acceso a entrenamientos de alta calidad. Esto ha hecho que Real Pasion no solo sea un equipo de fútbol, sino una verdadera comunidad unida por el amor al deporte.                            </p>
                            <h4>Actualidad </h4>
                            <p>
                                Hoy en día, Real Pasion Fútbol Club sigue creciendo, manteniendo vivo el sueño de una de sus mejores jugadoras. Mayra Ramírez continúa siendo una figura inspiradora dentro y fuera del campo, trabajando incansablemente para que más jóvenes encuentren en el fútbol una pasión y una oportunidad de vida. El club, orgulloso de sus raíces y de su historia, mira hacia el futuro con la certeza de que aún hay muchas más historias de éxito por escribir.                            </p>
                            
                        </div>
                       
                       

                        
                        
                    </div>

                    <div class="col-lg-4">
                        <div class="sidebar">
                            <div class="sidebar-widget">
                                <div class="single-bio">
                                    <div class="single-bio-img">
                                        <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                    </div>
                                    <div class="single-bio-text">
                                        <h3>Mayra Ramirez</h3>
                                        <p>
                                            En Funza, Cundinamarca, nació en 2015 el Real Pasion Fútbol Club, un equipo que simboliza la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                                        </p>
                                    </div>
                                    <div class="single-bio-social">
                                        <a class="btn" href="https://x.com/FCFSeleccionCol/status/1639591908237344768" target="_blank"><i class="fab fa-twitter" target="_blank"></i></a>
                                        <a class="btn" href="https://www.facebook.com/watch/?v=1666431423490772" target="_blank"><i class="fab fa-facebook-f" target="_blank"></i></a>
                                        <a class="btn" href="https://www.youtube.com/@mayraramirez537" target="_blank"><i class="fab fa-youtube" target="_blank"></i></a>
                                        <a class="btn" href="https://www.instagram.com/mayra.ramirez9/?hl=es" target="_blank"><i class="fab fa-instagram"></i></a>
                                        <a class="btn" href="https://es.linkedin.com/posts/forbes-colombia_la-colombiana-mayra-ram%C3%ADrez-desbanca-a-walsh-activity-7156692267028627457-qoKs" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="sidebar-widget">
                                <div class="search-widget">
                                    <form>
                                        <input class="form-control" type="text" placeholder="Buscar palabra clave">
                                        <button class="btn"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h2 class="widget-title">Publicación reciente</h2>
                                <div class="recent-post">
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/jugadoradelfundadorclub.jpg" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia se aferra a Mayra, para ir por la hazaña ante España</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Mayra Ramírez, imagen del Chelsea en su nueva camiseta</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto1.mayra.avif" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia Femenina jugará amistosos ante Venezuela</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <div class="image-widget">
                                    <a href="#"><img src="imagen/imagen.mayra.ramirez.jpg" alt="Image"></a>
                                </div>
                            </div>

                            

                            

                            

                            

                            

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `

};

// Abrir modal al hacer clic en cualquier enlace con la clase 'openModalLink'
document.querySelectorAll('.openModalLink').forEach(link => {
    link.onclick = function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        const contentKey = this.getAttribute('data-content');
        
        if (contents[contentKey]) {
            modalContent.innerHTML = contents[contentKey]; // Cargar el contenido dinámico en el modal
            modal.style.display = "block"; // Mostrar el modal
        }
    };
});

// Cerrar modal al hacer clic en el botón de cerrar
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




document.addEventListener('DOMContentLoaded', function() {
    const modalParam = new URLSearchParams(window.location.search).get('modal');
    const modalContent = document.getElementById('modalContent');
    const modal = document.getElementById('myModal1');
    const closeButton = document.querySelector('.close1-btn');

    if (modalParam === 'contenido10') {
        modalContent.innerHTML =  `
       <div class="locationn">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="section-header text-center">
                                <p>Noticias</p>
                                <h2>real pasion f.c</h2>
                            </div>
        
                            
                            
                        </div>
                        
                    </div>
                </div>
            </div>
                 <!-- Single Post Start-->
        <div class="single">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="single-content">
                            <img src="imagen/mayranoticiaoro.jpg" />
                            <h2>Mayra Ramírez está nominada al balón de oro</h2>
                            <p>
                                Mayra Ramírez ha hecho historia al convertirse en la segunda futbolista colombiana nominada al Balón de Oro Femenino 2024, un reconocimiento que destaca a las mejores jugadoras del mundo. Ramírez, de 25 años, tuvo una destacada temporada jugando para el Chelsea en Inglaterra y la Selección Colombia, siendo clave en competencias como los Juegos Olímpicos de París 2024.

Esta es su primera nominación, sumándose a una lista de grandes estrellas del fútbol femenino como Alexia Putellas y Salma Paralluelo. Aunque no es la favorita, su inclusión es un gran hito para el fútbol colombiano, recordando la nominación de Linda Caicedo el año anterior. La ceremonia de entrega del galardón será el 28 de octubre en París                    </p>
                            <p>
                                Mayra Ramírez, nacida en Sibaté, Cundinamarca, es una de las jugadoras más destacadas de la temporada 2023-2024, logrando su primera nominación al prestigioso Balón de Oro. Con una trayectoria llena de logros, Ramírez fue fichada por el Chelsea de Inglaterra después de jugar en equipos como el Levante. Su adaptación al equipo inglés fue rápida, y sus goles fueron determinantes para llevar al Chelsea a ganar la liga inglesa y avanzar a las semifinales de la Champions League Femenina​ </p>
                            
                            <h3>Real Pasion F.C.</h3>
                            <p>
                                Real Pasion F.C. rápidamente se ganó un lugar en la comunidad, participando en torneos locales y regionales, y destacándose por su estilo de juego dinámico y su férrea disciplina. Bajo la dirección de Jean Albert Martínez y su equipo de entrenadores, el club ha formado a varios jugadores que han logrado destacar a nivel nacional, algunos de los cuales han seguido los pasos de Mayra, alcanzando las ligas profesionales y la selección nacional.                            </p>
                            <p>
                                El club también es conocido por sus programas de inclusión social, que buscan brindar oportunidades a niños y niñas de bajos recursos, ofreciendo becas deportivas y acceso a entrenamientos de alta calidad. Esto ha hecho que Real Pasion no solo sea un equipo de fútbol, sino una verdadera comunidad unida por el amor al deporte.                            </p>
                            <h4>Actualidad </h4>
                            <p>
                                Hoy en día, Real Pasion Fútbol Club sigue creciendo, manteniendo vivo el sueño de una de sus mejores jugadoras. Mayra Ramírez continúa siendo una figura inspiradora dentro y fuera del campo, trabajando incansablemente para que más jóvenes encuentren en el fútbol una pasión y una oportunidad de vida. El club, orgulloso de sus raíces y de su historia, mira hacia el futuro con la certeza de que aún hay muchas más historias de éxito por escribir.                            </p>
                            
                        </div>
                       
                       

                        
                        
                    </div>

                    <div class="col-lg-4">
                        <div class="sidebar">
                            <div class="sidebar-widget">
                                <div class="single-bio">
                                    <div class="single-bio-img">
                                        <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                    </div>
                                    <div class="single-bio-text">
                                        <h3>Mayra Ramirez</h3>
                                        <p>
                                            En Funza, Cundinamarca, nació en 2015 el Real Pasion Fútbol Club, un equipo que simboliza la pasión y el compromiso con el deporte, especialmente en el fútbol femenino.                                        </p>
                                    </div>
                                    <div class="single-bio-social">
                                        <a class="btn" href="https://x.com/FCFSeleccionCol/status/1639591908237344768" target="_blank"><i class="fab fa-twitter" target="_blank"></i></a>
                                        <a class="btn" href="https://www.facebook.com/watch/?v=1666431423490772" target="_blank"><i class="fab fa-facebook-f" target="_blank"></i></a>
                                        <a class="btn" href="https://www.youtube.com/@mayraramirez537" target="_blank"><i class="fab fa-youtube" target="_blank"></i></a>
                                        <a class="btn" href="https://www.instagram.com/mayra.ramirez9/?hl=es" target="_blank"><i class="fab fa-instagram"></i></a>
                                        <a class="btn" href="https://es.linkedin.com/posts/forbes-colombia_la-colombiana-mayra-ram%C3%ADrez-desbanca-a-walsh-activity-7156692267028627457-qoKs" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="sidebar-widget">
                                <div class="search-widget">
                                    <form>
                                        <input class="form-control" type="text" placeholder="Buscar palabra clave">
                                        <button class="btn"><i class="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <h2 class="widget-title">Publicación reciente</h2>
                                <div class="recent-post">
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/jugadoradelfundadorclub.jpg" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia se aferra a Mayra, para ir por la hazaña ante España</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto.Maira-Tatiana-Ramirez.webp" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Mayra Ramírez, imagen del Chelsea en su nueva camiseta</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-item">
                                        <div class="post-img">
                                            <img src="imagen/foto1.mayra.avif" />
                                        </div>
                                        <div class="post-text">
                                            <a href="">Colombia Femenina jugará amistosos ante Venezuela</a>
                                            <div class="post-meta">
                                                <p>By<a href="">Admin</a></p>
                                                <p>In<a href="">Web Design</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>

                            <div class="sidebar-widget">
                                <div class="image-widget">
                                    <a href="#"><img src="imagen/imagen.mayra.ramirez.jpg" alt="Image"></a>
                                </div>
                            </div>

                            

                            

                            

                            

                            

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
      `
      
      
  ;
        modal.style.display = 'block'; // Mostrar el modal
    }

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});






