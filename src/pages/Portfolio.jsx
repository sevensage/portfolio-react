import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Portfolio.css"; 
import bannerImage from "../assets/images/banner.jpg"; 

import freshFood from "../assets/images/fresh-food.jpg";
import restaurantAkira from "../assets/images/restaurant-japonais.jpg";
import espaceBienEtre from "../assets/images/espace-bien-etre.jpg";
import seoImage from "../assets/images/seo.jpg";
import apiImage from "../assets/images/coder.jpg";
import maquetteSite from "../assets/images/screens.jpg";

export default function Portfolio() {
  const projects = [
    {
      img: freshFood,
      title: "Fresh Food",
      description: "Site de vente de produits frais en ligne",
      button: "Voir le site",
      footer: "Site réalisé avec PHP et MySQL",
    },
    {
      img: restaurantAkira,
      title: "Restaurant Akira",
      description: "Site de vente de produits frais en ligne",
      button: "Voir le site",
      footer: "Site réalisé avec WordPress",
    },
    {
      img: espaceBienEtre,
      title: "Espace bien-être",
      description: "Site de vente de produits frais en ligne",
      button: "Voir le site",
      footer: "Site réalisé avec LARAVEL",
    },
    {
      img: seoImage,
      title: "SEO",
      description: "Amélioration du référencement d’un site e-commerce",
      button: "Voir le site",
      footer: "Utilisation des outils SEO",
    },
    {
      img: apiImage,
      title: "Création d'une API",
      description: "Création d’une API RESTFUL publique",
      button: "Voir le site",
      footer: "PHP - SYMFONY",
    },
    {
      img: maquetteSite,
      title: "Maquette d'un site web",
      description: "Création d’un prototype de site web",
      button: "Voir le site",
      footer: "Réalisé avec FIGMA",
    },
  ];

  return (
    <>
      {/* Bannière */}
      <header
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
        }}
        className="d-flex align-items-center justify-content-center text-white text-center"
      ></header>

      {/* Titre section */}
      <section className="text-center my-5 container">
        <h1 className="fw-bold title">Portfolio</h1>
        <h2 className="fw-light mb-4 subtitle">
          Voici quelques-unes de mes réalisations
        </h2>
        <div className="blue-line mx-auto"></div>
      </section>

      {/* Cartes Portfolio */}
      <section className="container py-5">
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 portfolio-card">
                <img
                  src={project.img}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>
                  <button className="btn btn-primary">{project.button}</button>
                </div>
                <div className="card-footer text-center text-muted">
                  {project.footer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
