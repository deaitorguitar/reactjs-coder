import "./Footer.css";

export const Footer = () => {
  return (
    <div>
      <footer>
        <section class="container-footer footer-todo">
          <div class="footer-secciones">
            <h4>Secciones</h4>
            <ul>
              <li>
                <a href="./pages/nosotros.html">Sobre nosotras</a>
              </li>
              <li>
                <a href="./pages/contacto.html">Contacto</a>
              </li>
              <li>
                <a href="./pages/Preguntas-frecuentes.html">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          <div class="footer-redes">
            <h4>Nuestras redes</h4>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/littlebrownieboxba/"
                >
                  <i class="bi bi-instagram"></i>Instagram
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/littlebrownieboxba"
                >
                  <i class="bi bi-facebook"></i>Facebook
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send/?phone=5401162726097&text&type=phone_number&app_absent=0"
                >
                  <i class="bi bi-whatsapp"></i>Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </section>

        <p class="footer-end">
          Little brownie box BA | Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
};
