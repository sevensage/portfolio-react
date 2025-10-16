import React from "react";
import bannerImage from "../assets/images/banner.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/Services.css";

export default function Services() {
  return (
    <>
      {/* Bannière */}
      <header
        className="banner d-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
      </header>

      {/* Titres */}
      <section className="text-center my-5 container">
        <h1 className="fw-bold title">Mon offre de services</h1>
        <h2 className="fw-normal subtitle">
          Voici les prestations sur lesquelles je peux intervenir
        </h2>
        <div className="line-blue mx-auto"></div>
      </section>

      {/* Cartes Services */}
      <section className="container py-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="service-card border rounded p-4 h-100">
              <i className="bi bi-pen fs-1 text-primary mb-3"></i>
              <h4 className="fw-semibold">UX Design</h4>
              <p className="text-muted">
                L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) 
                en plaçant l'utilisateur au centre des préoccupations. L'objectif est do rondro l'expérienco utilisateur la plus fluide possible
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="service-card border rounded p-4 h-100">
              <i className="bi bi-code-slash fs-1 text-primary mb-3"></i>
              <h4 className="fw-semibold">Développement web</h4>
              <p className="text-muted">
                Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation 
                (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="service-card border rounded p-4 h-100">
              <i className="bi bi-search fs-1 text-primary mb-3"></i>
              <h4 className="fw-semibold">Référencement</h4>
              <p className="text-muted">
                Le reterencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans
                les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
