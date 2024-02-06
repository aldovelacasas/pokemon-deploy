/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// import React from 'react'
// import Navbar from '../../component/navbar/navbar'

// export default function About() {
//   return (
//     <div>
//     <Navbar />
//     </div>




//   )
// }




import React from 'react';
import Navbar from '../../component/navbar/navbar';
import './about.css';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <div className="about-content">
          <h1>¡Hola, soy Aldo Vela Casas! 👋</h1>
          <p>Desarrollador Full Stack</p>

          <p>🚀 Apasionado por la tecnología y la programación 🌟</p>

          <h2>Acerca de mí</h2>
          <p>
            ¡Hola! Soy Aldo, un desarrollador Full Stack con experiencia en una variedad de tecnologías web.
            Graduado del bootcamp de desarrollo web de [Soy Henry], donde adquirí habilidades sólidas en JavaScript, React, HTML, CSS y mucho más.
            Mi pasión por la programación me ha llevado a explorar y trabajar con una amplia gama de tecnologías, incluyendo:
          </p>

          <p>Frontend: React, Redux, HTML, CSS, Tailwind CSS.</p>
          <p>Backend: Node.js, Express, PostgreSQL, MySQL.</p>
          <p>Herramientas: Vite, Next.js.</p>

          <h2>Mis Proyectos Destacados</h2>
          <p>Aquí están algunos de mis proyectos más destacados:</p>
<ul>
            <li>[https://github.com/aldovelacasas/PI-videogames]: [Una aplicación que muestra información sobre videojuegos utilizando Vite y React.].</li>


            <li>[https://pf-rent-car2-1us3pfgxe-aldovelacasas.vercel.app/]: [Una plataforma de alquiler de autos desarrollada con tecnologías Full Stack.].</li>

            </ul>

          <h2>Contacto</h2>
          <p>
            Si deseas ponerte en contacto conmigo o colaborar en proyectos emocionantes, no dudes en hacerlo a través de:
          </p>

          <p>📧 Email: <Link>aldo251_@hotmail.com</Link></p>
          <p>💼 LinkedIn:<Link> https://www.linkedin.com/in/aldo-vela/</Link></p>
          <p>🗄️ Github: <Link>https://github.com/aldovelacasas  </Link> </p>
          <p>¡Gracias por visitar mi perfil y explorar mis proyectos! Estoy emocionado de compartir mi pasión por la programación y seguir aprendiendo en el mundo del desarrollo web.</p>
        </div>
      </div>
    </div>
  );
}
