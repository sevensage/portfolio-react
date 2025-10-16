export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          {/* Colonne 1 : Infos développeur */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">John Doe</h5>
            <p>
              40 rue Laure Diebold <br />
              69009 Lyon, France <br />
              12 34 56 78 90 <br />
              john.doe@gmail.com
            </p>
            <div className="d-flex gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer nofollow"
                className="social-link"
              >
                <i className="bi bi-github fs-4"></i>
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer nofollow"
                className="social-link"
              >
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer nofollow"
                className="social-link"
              >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 : Liens */}
          <div className="col-md-4 mb-4">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Accueil</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/portfolio" className="text-light text-decoration-none">Portfolio</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="/mentions-legales" className="text-light text-decoration-none">Mentions légales</a></li>
            </ul>
          </div>

          {/* Colonne 3 : Réalisations */}
          <div className="col-md-4 mb-4">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><a href="/portfolio" className="text-light text-decoration-none">Fresh Food</a></li>
              <li><a href="/portfolio" className="text-light text-decoration-none">Restaurant Akira</a></li>
              <li><a href="/portfolio" className="text-light text-decoration-none">Espace bien-être</a></li>
              <li><a href="/portfolio" className="text-light text-decoration-none">SEO</a></li>
              <li><a href="/portfolio" className="text-light text-decoration-none">Création d'une API</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
