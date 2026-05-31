export function landingView(procedures) {
  return `
    <style>
      html { scroll-behavior: smooth; }
      #inicio, #nosotros, #servicios, #precios, #contacto { scroll-margin-top: 95px; }
      .view-container { font-family: 'Segoe UI', sans-serif; color: #2d3748; background: #ffffff; }
      .btn-primary { background: #63a3a1; color: white; border: none; padding: 10px 25px; border-radius: 25px; font-weight: 600; cursor: pointer; transition: 0.3s; }
      .btn-primary:hover { background: #4d8280; }
      .btn-dark { background: #1a202c; color: white; border: none; padding: 15px 35px; border-radius: 30px; font-weight: 600; font-size: 15px; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.1); transition: 0.3s; }
      .btn-dark:hover { background: #2d3748; }
      .card { background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.04); transition: 0.3s; }
      .card:hover { transform: translateY(-5px); }
    </style>

    <div class="view-container">
      <header class="navbar" style="background: #ffffff; padding: 20px 40px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 2px 15px rgba(0,0,0,0.03); position: sticky; top: 0; z-index: 1000;">
        <div class="logo" style="display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 24px; color: #2d3748;">
          <i class="fa-solid fa-tooth" style="color: #63a3a1; font-size: 28px;"></i>
          Dent<span style="color: #63a3a1;">Care</span>
        </div>
        <nav style="display: flex; align-items: center; gap: 25px;">
          <a href="#inicio" style="color: #2d3748; font-weight: 600; text-decoration: none; font-size: 15px;">Inicio</a>
          <a href="#nosotros" style="color: #718096; font-weight: 500; text-decoration: none; font-size: 15px;">Nosotros</a>
          <a href="#servicios" style="color: #718096; font-weight: 500; text-decoration: none; font-size: 15px;">Servicios</a>
          <a href="#precios" style="color: #718096; font-weight: 500; text-decoration: none; font-size: 15px;">Precios</a>
          <a href="#contacto" style="color: #718096; font-weight: 500; text-decoration: none; font-size: 15px;">Contacto</a>
          <button id="loginBtn" class="btn-primary">Iniciar Sesión</button>
        </nav>
      </header>

      <section id="inicio" class="hero" style="background: #e9f4f4; padding: 120px 20px; text-align: center; position: relative; overflow: hidden;">
        <h1 style="font-size: 52px; color: #1a202c; font-weight: 800; margin-bottom: 20px; letter-spacing: -1px;">Tu sonrisa, nuestra prioridad</h1>
        <p style="color: #4a5568; max-width: 750px; margin: 0 auto 40px; font-size: 17px; line-height: 1.7;">
          En DentCare brindamos atención odontológica integral con profesionales especializados, tecnología moderna y un enfoque centrado en el bienestar de cada paciente.
        </p>
        <div style="display: flex; justify-content: center; gap: 15px;">
          <button id="heroBookBtn" class="btn-dark">Solicitar Turno</button>
        </div>
      </section>

      <section id="nosotros" style="padding: 90px 20px; max-width: 1200px; margin: auto;">
        <h2 style="text-align: center; font-size: 36px; color: #1a202c; font-weight: 700; margin-bottom: 50px;">Sobre Nosotros</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; align-items: start; margin-bottom: 60px;">
          <div>
            <h3 style="font-size: 22px; color: #2d3748; margin-bottom: 15px; font-weight: 600;">Nuestra Historia</h3>
            <p style="color: #4a5568; font-size: 16px; line-height: 1.8; margin-bottom: 15px;">
              Somos una clínica odontológica comprometida con brindar atención de calidad, combinando profesionalismo, tecnología y un trato cercano para ofrecer la mejor experiencia a nuestros pacientes.
            </p>
            <p style="color: #4a5568; font-size: 16px; line-height: 1.8;">
              Nacimos con el objetivo de transformar la consulta dental tradicional en un espacio de confianza, relajación y alta precisión médica para toda la familia.
            </p>
          </div>
          
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div style="background: #f7fafc; padding: 20px; border-radius: 10px; border-left: 4px solid #63a3a1;">
              <h4 style="margin: 0 0 5px 0; color: #1a202c; font-weight: 600;"><i class="fa-solid fa-eye" style="margin-right: 8px; color: #63a3a1;"></i> Nuestra Visión</h4>
              <p style="margin: 0; color: #718096; font-size: 14px; line-height: 1.6;">Ser la clínica líder de la región, reconocida por nuestra calidez humana y vanguardia tecnológica.</p>
            </div>
            <div style="background: #f7fafc; padding: 20px; border-radius: 10px; border-left: 4px solid #63a3a1;">
              <h4 style="margin: 0 0 5px 0; color: #1a202c; font-weight: 600;"><i class="fa-solid fa-bullseye" style="margin-right: 8px; color: #63a3a1;"></i> Nuestra Misión</h4>
              <p style="margin: 0; color: #718096; font-size: 14px; line-height: 1.6;">Cuidar y diseñar sonrisas saludables mediante tratamientos odontológicos integrales y personalizados.</p>
            </div>
          </div>
        </div>

        <div style="margin-top: 60px;">
          <h3 style="text-align: center; font-size: 22px; margin-bottom: 30px; color: #2d3748; font-weight: 600;">Testimonios de Pacientes</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px;">
            <div class="card" style="font-style: italic; color: #4a5568; position: relative;">
              <i class="fa-solid fa-quote-left" style="color: #e2e8f0; font-size: 35px; position: absolute; top: 15px; left: 15px; z-index: 1;"></i>
              <p style="position: relative; z-index: 2; margin-bottom: 15px;">"Excelente atención de todo el equipo. Me realicé un tratamiento de ortodoncia y los resultados superaron mis expectativas."</p>
              <span style="font-weight: 700; color: #2d3748; font-style: normal; font-size: 14px;">- María Mendieta</span>
            </div>
            <div class="card" style="font-style: italic; color: #4a5568; position: relative;">
              <i class="fa-solid fa-quote-left" style="color: #e2e8f0; font-size: 35px; position: absolute; top: 15px; left: 15px; z-index: 1;"></i>
              <p style="position: relative; z-index: 2; margin-bottom: 15px;">"Tienen tecnología de primera y las instalaciones son impecables. Hacen que ir al dentista ya no sea una experiencia estresante."</p>
              <span style="font-weight: 700; color: #2d3748; font-style: normal; font-size: 14px;">- Lucas Rodríguez</span>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" style="background: #f7fafc; padding: 90px 20px;">
        <div style="max-width: 1200px; margin: auto;">
          <h2 style="text-align: center; font-size: 36px; color: #1a202c; font-weight: 700; margin-bottom: 50px;">Nuestros Servicios Especializados</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <div class="card" style="text-align: center;">
              <div style="width: 60px; height: 60px; background: #e9f4f4; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                <i class="fa-solid fa-stethoscope" style="color: #63a3a1; font-size: 24px;"></i>
              </div>
              <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 15px;">Odontología General</h3>
              <p style="color: #718096; font-size: 15px; line-height: 1.6;">Prevención, diagnóstico y tratamiento de problemas dentales comunes para mantener tu boca sana.</p>
            </div>
            <div class="card" style="text-align: center;">
              <div style="width: 60px; height: 60px; background: #e9f4f4; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                <i class="fa-solid fa-wand-magic-sparkles" style="color: #63a3a1; font-size: 24px;"></i>
              </div>
              <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 15px;">Odontología Estética</h3>
              <p style="color: #718096; font-size: 15px; line-height: 1.6;">Diseño de sonrisa, blanqueamientos avanzados y carillas de porcelana de alta calidad estética.</p>
            </div>
            <div class="card" style="text-align: center;">
              <div style="width: 60px; height: 60px; background: #e9f4f4; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                <i class="fa-solid fa-teeth" style="color: #63a3a1; font-size: 24px;"></i>
              </div>
              <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 15px;">Ortodoncia</h3>
              <p style="color: #718096; font-size: 15px; line-height: 1.6;">Alineación dental mediante brackets tradicionales y sistemas modernos de alineadores invisibles.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="precios" style="padding: 90px 20px; max-width: 1200px; margin: auto;">
        <h2 style="text-align: center; font-size: 36px; color: #1a202c; font-weight: 700; margin-bottom: 20px;">Precios de Tratamientos Disponibles</h2>
        <p style="text-align: center; color: #718096; margin-bottom: 50px; max-width: 600px; margin-left: auto; margin-right: auto;">
          Transparencia absoluta en nuestros servicios. Conocé el valor de cada procedimiento e iniciá tu camino hacia una boca saludable de forma directa.
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 25px;">
          ${procedures.map(p => `
            <div class="card" style="display: flex; flex-direction: column; justify-content: space-between; border: 1px solid #edf2f7;">
              <div>
                <span style="font-size: 12px; font-weight: 700; color: #63a3a1; text-transform: uppercase; letter-spacing: 1px;">Tratamiento</span>
                <h3 style="font-size: 18px; font-weight: 700; margin: 5px 0 15px 0; color: #2d3748;">${p.name}</h3>
              </div>
              <div style="margin-top: 20px; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 24px; font-weight: 800; color: #1a202c;">$${p.price}</span>
                <a href="#inicio" style="background: #edf2f7; color: #4a5568; text-decoration: none; padding: 8px 16px; border-radius: 6px; font-size: 13px; font-weight: 600; transition: 0.2s;">Reservar</a>
              </div>
            </div>
          `).join('')}
        </div>
      </section>
<section id="contacto" style="background: #f7fafc; border-top: 1px solid #e2e8f0;">
        <div style="width: 100%; height: 350px; background: #e2e8f0; position: relative; overflow: hidden;">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.4650521633152!2d-57.98738472348993!3d-34.944950975600875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e80cb400338f%3A0x8ed78fc5381796fd!2sC.%2049%202229%2C%20B1908FWS%20San%20Carlos%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1780242816236!5m2!1ses!2sar" 
          width="1800" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <footer style="background: #2d3748; color: #e2e8f0; padding: 60px 40px 30px 40px;">
          <div style="max-width: 1200px; margin: auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 40px; margin-bottom: 40px;">
            <div>
              <div style="font-weight: 700; font-size: 22px; color: white; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                <i class="fa-solid fa-tooth" style="color: #63a3a1;"></i> DentCare
              </div>
              <p style="color: #a0aec0; font-size: 14px; line-height: 1.6; margin: 0;">
                Atención odontológica integral con profesionales altamente calificados y equipamiento de última generación.
              </p>
            </div>
            <div>
              <h4 style="color: white; font-weight: 600; margin: 0 0 15px 0; font-size: 16px;">Navegación</h4>
              <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; font-size: 14px;">
                <li><a href="#inicio" style="color: #a0aec0; text-decoration: none;">Inicio</a></li>
                <li><a href="#nosotros" style="color: #a0aec0; text-decoration: none;">Nosotros</a></li>
                <li><a href="#servicios" style="color: #a0aec0; text-decoration: none;">Servicios</a></li>
                <li><a href="#precios" style="color: #a0aec0; text-decoration: none;">Precios</a></li>
              </ul>
            </div>
            <div>
              <h4 style="color: white; font-weight: 600; margin: 0 0 15px 0; font-size: 16px;">Horarios de Atención</h4>
              <p style="color: #a0aec0; font-size: 14px; line-height: 1.6; margin: 0;">
                Lunes a Viernes: 08:00 - 20:00 hs<br>
                Sábados: 09:00 - 13:00 hs<br>
                Domingos y Feriados: Cerrado
              </p>
            </div>
            <div>
              <h4 style="color: white; font-weight: 600; margin: 0 0 15px 0; font-size: 16px;">Contacto</h4>
              <p style="color: #a0aec0; font-size: 14px; line-height: 1.6; margin: 0; display: flex; flex-direction: column; gap: 8px;">
                <span><i class="fa-solid fa-phone" style="color: #63a3a1; margin-right: 8px;"></i> 2214940473</span>
                <span><i class="fa-solid fa-envelope" style="color: #63a3a1; margin-right: 8px;"></i> info@dentcare.com</span>
                <span><i class="fa-solid fa-location-dot" style="color: #63a3a1; margin-right: 8px;"></i> 49 N° 2229</span>
              </p>
            </div>
          </div>
          <hr style="border: 0; border-top: 1px solid #4a5568; margin-bottom: 20px;">
          <div style="text-align: center; color: #a0aec0; font-size: 13px;">
            © 2026 DentCare. Todos los derechos reservados.
          </div>
        </footer>
      </section>
    </div>
  `;
}
export function loginView() {
  return `
    <div style="padding: 40px; font-family: 'Segoe UI', sans-serif; background: #f7fafc; min-height: 100vh; display: flex; justify-content: center; align-items: center;">
      <div style="background: white; padding: 40px; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); width: 100%; max-width: 400px;">
        <h2 style="text-align: center; font-size: 24px; color: #1a202c; font-weight: 700; margin-bottom: 30px;">Iniciar Sesión</h2>
        <form id="loginForm" style="display: flex; flex-direction: column; gap: 20px;">
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <label style="font-size: 14px; color: #4a5568; font-weight: 600;">Correo Electrónico</label>
            <input type="email" id="loginEmail" style="padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 14px;" required>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <label style="font-size: 14px; color: #4a5568; font-weight: 600;">Contraseña</label>
            <input type="password" id="loginPass" style="padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 14px;" required>
          </div>
          <button type="submit" style="background: #63a3a1; color: white; border: none; padding: 14px; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 15px; margin-top: 10px;">
            Ingresar
          </button>
          <p style="text-align: center; font-size: 14px; color: #718096; margin: 10px 0 0 0;">
            ¿No tienes cuenta? <span id="toRegisterBtn" style="color: #63a3a1; cursor: pointer; font-weight: 600;">Regístrate</span>
          </p>
        </form>
      </div>
    </div>
  `;
}
export function registerView() {
  return `
    <div style="padding: 40px; font-family: 'Segoe UI', sans-serif; background: #f7fafc; min-height: 100vh; display: flex; justify-content: center; align-items: center;">
      <div style="background: white; padding: 40px; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); width: 100%; max-width: 400px;">
        <h2 style="text-align: center; font-size: 24px; color: #1a202c; font-weight: 700; margin-bottom: 25px;">Crear Cuenta</h2>
        <form id="registerForm" style="display: flex; flex-direction: column; gap: 12px;">
          
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <label style="font-size: 13px; color: #4a5568; font-weight: 600;">Nombre</label>
            <input type="text" id="regName" style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 8px;" required>
          </div>

          <div style="display: flex; flex-direction: column; gap: 4px;">
            <label style="font-size: 13px; color: #4a5568; font-weight: 600;">Apellido</label>
            <input type="text" id="regLastName" style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 8px;" required>
          </div>

          <div style="display: flex; flex-direction: column; gap: 4px;">
            <label style="font-size: 13px; color: #4a5568; font-weight: 600;">DNI</label>
            <input type="number" id="regDni" style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 8px;" required>
          </div>

          <div style="display: flex; flex-direction: column; gap: 4px;">
            <label style="font-size: 13px; color: #4a5568; font-weight: 600;">Teléfono</label>
            <input type="tel" id="regPhone" style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 8px;" required>
          </div>

          <div style="display: flex; flex-direction: column; gap: 4px;">
            <label style="font-size: 13px; color: #4a5568; font-weight: 600;">Fecha de Nacimiento</label>
            <input type="date" id="regBirth" style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 8px;" required>
          </div>

          <div style="display: flex; flex-direction: column; gap: 4px;">
            <label style="font-size: 13px; color: #4a5568; font-weight: 600;">Correo Electrónico</label>
            <input type="email" id="regEmail" style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 8px;" required>
          </div>

          <div style="display: flex; flex-direction: column; gap: 4px;">
            <label style="font-size: 13px; color: #4a5568; font-weight: 600;">Contraseña</label>
            <input type="password" id="regPass" style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 8px;" required>
          </div>

          <button type="submit" style="background: #63a3a1; color: white; border: none; padding: 12px; border-radius: 8px; font-weight: 600; cursor: pointer; margin-top: 10px;">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  `;
}
export function bookingView(procedures, doctors) {
  return `
    <div style="padding: 40px; font-family: 'Segoe UI', sans-serif; background: #f7fafc; min-height: 100vh; display: flex; justify-content: center; align-items: center;">
      <div style="background: white; padding: 40px; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); width: 100%; max-width: 550px;">
        <h2 style="text-align: center; font-size: 24px; color: #1a202c; font-weight: 700; margin-bottom: 10px;">Reserva tu turno online</h2>
        <p style="text-align: center; color: #718096; font-size: 14px; margin-bottom: 30px;">
          Selecciona el tratamiento para asignar el profesional disponible automáticamente.
        </p>
        <form id="bookingForm" style="display: flex; flex-direction: column; gap: 20px;">
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <label style="font-size: 14px; color: #4a5568; font-weight: 600;">Seleccionar tratamiento</label>
            <select id="bookProcedure" style="padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 14px; color: #2d3748; background: white;" required>
              <option value="">-- Selecciona un tratamiento --</option>
              ${procedures.map(p => `<option value="${p.name}">${p.name} ($${p.price})</option>`).join('')}
            </select>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <label style="font-size: 14px; color: #4a5568; font-weight: 600;">Elegir profesional</label>
            <select id="bookDoctor" style="padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 14px; color: #2d3748; background: white;" required>
              <option value="">-- Selecciona un especialista --</option>
              ${doctors.map(d => `<option value="${d.name}">${d.name}</option>`).join('')}
            </select>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <label style="font-size: 14px; color: #4a5568; font-weight: 600;">Seleccionar fecha</label>
            <input type="date" id="bookDate" style="padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 14px; color: #2d3748;" required>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <label style="font-size: 14px; color: #4a5568; font-weight: 600;">Seleccionar horario</label>
            <select id="bookTime" style="padding: 12px; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 14px; color: #2d3748; background: white;" required>
              <option value="">Seleccionar horario</option>
            </select>
          </div>
          <div style="display: flex; gap: 15px; margin-top: 10px;">
            <button type="submit" style="flex: 1; background: #63a3a1; color: white; border: none; padding: 14px; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 15px;">
              Confirmar Turno
            </button>
            <button type="button" id="cancelBookingBtn" style="flex: 1; background: #edf2f7; color: #4a5568; border: none; padding: 14px; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 15px;">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

export function confirmationView(appt) {
  return `
    <div style="padding: 40px; font-family: 'Segoe UI', sans-serif; background: #f7fafc; min-height: 100vh; display: flex; justify-content: center; align-items: center;">
      <div style="background: white; padding: 40px; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); width: 100%; max-width: 500px; text-align: center;">
        <div style="width: 80px; height: 80px; background: #e6fffa; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
          <i class="fa-solid fa-calendar-check" style="color: #319795; font-size: 35px;"></i>
        </div>
        <h2 style="font-size: 24px; color: #1a202c; font-weight: 700; margin-bottom: 10px;">¡Turno Reservado!</h2>
        <p style="color: #718096; font-size: 15px; margin-bottom: 30px;">Tu solicitud ha sido procesada con éxito.</p>
        <div style="background: #f7fafc; padding: 20px; border-radius: 12px; text-align: left; margin-bottom: 30px; display: flex; flex-direction: column; gap: 12px;">
          <div>
            <span style="font-size: 13px; color: #a0aec0; font-weight: 600;">TRATAMIENTO</span>
            <p style="margin: 3px 0 0 0; color: #2d3748; font-weight: 600; font-size: 16px;">${appt.procedure}</p>
          </div>
          <div>
            <span style="font-size: 13px; color: #a0aec0; font-weight: 600;">PROFESIONAL</span>
            <p style="margin: 3px 0 0 0; color: #2d3748; font-weight: 600; font-size: 16px;">${appt.doctor}</p>
          </div>
          <div style="display: flex; gap: 20px;">
            <div style="flex: 1;">
              <span style="font-size: 13px; color: #a0aec0; font-weight: 600;">FECHA</span>
              <p style="margin: 3px 0 0 0; color: #2d3748; font-weight: 600; font-size: 16px;">${appt.date}</p>
            </div>
            <div style="flex: 1;">
              <span style="font-size: 13px; color: #a0aec0; font-weight: 600;">HORARIO</span>
              <p style="margin: 3px 0 0 0; color: #2d3748; font-weight: 600; font-size: 16px;">${appt.time} hs</p>
            </div>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <button id="finishBookingBtn" style="background: #63a3a1; color: white; border: none; padding: 14px; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 15px; width: 100%;">
            Entendido
          </button>
          <div style="display: flex; gap: 12px;">
            <button id="modifyBookingBtn" style="flex: 1; background: #edf2f7; color: #4a5568; border: none; padding: 12px; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 14px;">
              Modificar
            </button>
            <button id="cancelBookingBtn" style="flex: 1; background: #fff5f5; color: #e53e3e; border: 1px solid #fed7d7; padding: 12px; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 14px;">
              Cancelar Turno
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function adminDashboardView(users, doctors, appointments, procedures) {
  return `
    <div style="padding: 40px; font-family: 'Segoe UI', sans-serif; background: #f7fafc; min-height: 100vh;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
        <h1 style="font-size: 28px; color: #1a202c; font-weight: 700; margin: 0;">Panel Administrador</h1>
        <button id="logoutBtn" style="background: #e53e3e; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px;">
          <i class="fa-solid fa-right-from-bracket"></i> Cerrar Sesión
        </button>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-bottom: 40px;">
        <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
          <h3 style="margin: 0 0 15px 0; font-size: 16px; color: #4a5568;">Pacientes</h3>
          <p style="margin: 0; font-size: 32px; font-weight: 700; color: #1a202c;">${users.filter(u => u.role === 'patient').length}</p>
        </div>
        <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
          <h3 style="margin: 0 0 15px 0; font-size: 16px; color: #4a5568;">Doctores</h3>
          <p style="margin: 0; font-size: 32px; font-weight: 700; color: #1a202c;">${doctors.length}</p>
        </div>
        <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
          <h3 style="margin: 0 0 15px 0; font-size: 16px; color: #4a5568;">Turnos</h3>
          <p style="margin: 0; font-size: 32px; font-weight: 700; color: #1a202c;">${appointments.length}</p>
        </div>
      </div>
      <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.02); margin-bottom: 30px;">
        <h2 style="font-size: 20px; color: #1a202c; font-weight: 700; margin: 0 0 20px 0;">Equipo Médico</h2>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          ${doctors.map(d => `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; border-bottom: 1px solid #edf2f7;">
              <span>${d.name} (${d.specialties.join(', ')})</span>
              <button class="view-profile-btn" data-id="${d.id}" style="background: #3182ce; color: white; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; font-size: 13px;">
                Ver Perfil
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

export function doctorDashboardView(doctor, appointments) {
  const doctorAppointments = appointments.filter(a => a.doctor === doctor.name);
  const pending = doctorAppointments.filter(a => a.status === "Pendiente").length;
  const confirmed = doctorAppointments.filter(a => a.status === "Confirmado").length;
  const finished = doctorAppointments.filter(a => a.status === "Finalizado").length;

  return `
    <div style="padding:40px;font-family:'Segoe UI',sans-serif; background: #f7fafc; min-height: 100vh;">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div>
          <h1 style="margin:0;">Portal Médico</h1>
          <p style="margin:5px 0 0 0;">Bienvenido ${doctor.name}</p>
        </div>
        <button id="logoutBtn" style="background:#e53e3e;color:white;border:none;padding:10px 20px;border-radius:8px;font-weight:600;cursor:pointer;">
          <i class="fa-solid fa-right-from-bracket"></i> Cerrar Sesión
        </button>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin:30px 0;">
        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);"><h3>Pendientes</h3><h2>${pending}</h2></div>
        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);"><h3>Confirmados</h3><h2>${confirmed}</h2></div>
        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);"><h3>Finalizados</h3><h2>${finished}</h2></div>
      </div>
      <table style="width:100%; border-collapse: collapse; text-align: left; background: white; border-radius: 8px; overflow: hidden;">
        <thead>
          <tr style="background: #edf2f7;">
            <th style="padding: 12px;">Paciente</th>
            <th style="padding: 12px;">Tratamiento</th>
            <th style="padding: 12px;">Fecha y Hora</th>
            <th style="padding: 12px;">Estado</th>
            <th style="padding: 12px;">Acciones</th>
          </tr>
        </thead>
        <tbody>
          ${doctorAppointments.map(a => `
            <tr style="border-bottom: 1px solid #edf2f7;">
              <td style="padding: 12px;">${a.patientName}</td>
              <td style="padding: 12px;">${a.procedure}</td>
              <td style="padding: 12px;">${a.date} - ${a.time} hs</td>
              <td style="padding: 12px;">${a.status}</td>
              <td style="padding: 12px;">
                ${a.status === 'Pendiente' ? `<button class="confirm-appt-btn" data-id="${a.id}" style="background: #319795; color: white; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; margin-right: 5px;">Confirmar</button>` : ''}
                ${a.status === 'Confirmado' ? `<button class="finish-appt-btn" data-id="${a.id}" style="background: #4a5568; color: white; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer;">Finalizar</button>` : ''}
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

export function patientDashboardView(currentUser, appointments) {
  const patientAppointments = appointments.filter(a => a.userEmail === currentUser.email);
  return `
    <div style="padding: 40px; font-family: 'Segoe UI', sans-serif; background: #f7fafc; min-height: 100vh;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
        <div>
          <h1 style="font-size: 28px; color: #1a202c; font-weight: 700; margin: 0;">Portal de Pacientes</h1>
          <p style="margin: 5px 0 0 0; color: #718096;">Bienvenido/a, ${currentUser.name}</p>
        </div>
        <div style="display: flex; gap: 15px;">
          <button id="goToBookingBtn" style="background: #63a3a1; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer;">
            <i class="fa-solid fa-calendar-plus"></i> Solicitar Turno
          </button>
          <button id="logoutBtn" style="background: #e53e3e; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer;">
            <i class="fa-solid fa-right-from-bracket"></i> Cerrar Sesión
          </button>
        </div>
      </div>
      <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
        <h2 style="font-size: 20px; color: #1a202c; font-weight: 700; margin: 0 0 20px 0;">Mis Turnos Solicitados</h2>
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
          <thead>
            <tr style="background: #f7fafc;">
              <th style="padding: 12px; color: #4a5568; border-bottom: 2px solid #e2e8f0;">Tratamiento</th>
              <th style="padding: 12px; color: #4a5568; border-bottom: 2px solid #e2e8f0;">Profesional</th>
              <th style="padding: 12px; color: #4a5568; border-bottom: 2px solid #e2e8f0;">Fecha y Hora</th>
              <th style="padding: 12px; color: #4a5568; border-bottom: 2px solid #e2e8f0;">Estado</th>
              <th style="padding: 12px; color: #4a5568; border-bottom: 2px solid #e2e8f0;">Acciones</th>
            </tr>
          </thead>
          <tbody>
            ${patientAppointments.map(a => `
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${a.procedure}</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${a.doctor}</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${a.date} - ${a.time} hs</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${a.status}</td>
                <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">
                  ${a.status === 'Pendiente' ? `<button class="cancel-appt-btn" data-id="${a.id}" style="background: #fff5f5; color: #e53e3e; border: 1px solid #fed7d7; padding: 6px 12px; border-radius: 6px; cursor: pointer;">Cancelar</button>` : ''}
                </td>
              </tr>
            `).join('')}
            ${patientAppointments.length === 0 ? '<tr><td colspan="5" style="padding:20px; text-align:center; color:#a0aec0;">No tienes turnos programados.</td></tr>' : ''}
          </tbody>
        </table>
      </div>
    </div>
  `;
}
export function doctorProfileView(doctor, procedures, doctorAppts) {
  const doctorProcedures = procedures.filter(p => p.doctorId === doctor.id);
  
  const appointmentsHTML = doctorAppts.length > 0 
    ? doctorAppts.map(a => `
        <tr>
          <td style="padding: 10px; color: #4a5568; border-bottom: 1px solid #edf2f7;">${a.patientName}</td>
          <td style="padding: 10px; color: #4a5568; border-bottom: 1px solid #edf2f7;">${a.procedure}</td>
        </tr>`).join('')
    : "<tr><td colspan='2' style='padding: 10px; text-align: center; color: #a0aec0;'>Sin turnos asignados</td></tr>";

  return `
    <div style="padding: 40px; font-family: 'Segoe UI', sans-serif; background: #f7fafc; min-height: 100vh; display: flex; justify-content: center; align-items: center;">
      <div style="background: white; padding: 40px; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); width: 100%; max-width: 650px; position: relative;">
        <button id="backToDashboardBtn" style="position: absolute; top: 20px; left: 20px; background: transparent; border: none; color: #718096; cursor: pointer; font-weight: 600;">
          <i class="fa-solid fa-arrow-left"></i> Volver
        </button>
        <div style="text-align: center; margin-top: 20px;">
          <h2 style="font-size: 26px; color: #1a202c; font-weight: 700; margin: 0;">${doctor.name}</h2>
          <p style="color: #63a3a1; font-weight: 600; margin: 5px 0 25px 0;">Especialidades: ${doctor.specialties.join(', ')}</p>
        </div>
        
        <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 25px 0;">
        
        <h4 style="font-size: 16px; color: #2d3748; margin: 0 0 15px 0;">Turnos Asignados</h4>
        <table style="width: 100%; border-collapse: collapse; text-align: left; margin-bottom: 30px;">
          <thead>
            <tr style="background: #f7fafc;">
              <th style="padding: 10px; color: #718096; border-bottom: 1px solid #e2e8f0;">Paciente</th>
              <th style="padding: 10px; color: #718096; border-bottom: 1px solid #e2e8f0;">Procedimiento</th>
            </tr>
          </thead>
          <tbody>
            ${appointmentsHTML}
          </tbody>
        </table>

        <h4 style="font-size: 16px; color: #2d3748; margin: 0 0 15px 0;">Tratamientos Habilitados</h4>
        <table style="width: 100%; border-collapse: collapse; text-align: left;">
          <thead>
            <tr style="background: #f7fafc;">
              <th style="padding: 10px; color: #718096; border-bottom: 1px solid #e2e8f0;">Procedimiento</th>
              <th style="padding: 10px; color: #718096; border-bottom: 1px solid #e2e8f0; text-align: right;">Precio</th>
            </tr>
          </thead>
          <tbody>
            ${doctorProcedures.map(p => `
              <tr>
                <td style="padding: 10px; color: #4a5568; border-bottom: 1px solid #edf2f7;">${p.name}</td>
                <td style="padding: 10px; color: #2d3748; border-bottom: 1px solid #edf2f7; text-align: right; font-weight:600;">$${p.price}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}