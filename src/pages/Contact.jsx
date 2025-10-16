import React from "react";
import { BsGeoAlt, BsTelephone, BsEnvelope } from "react-icons/bs";

export default function Contact() {
  return (
    <>
      {/* Section Titre */}
      <section className="text-center my-5 container">
        <h1 className="fw-bold">Contact</h1>
        <h2 className="fw-light mb-4 subtitle">
          Pour me contacter en vue d’un entretien ou d’une future collaboration, merci de remplir le formulaire de contact.
        </h2>
        <div
          style={{
            width: "400px",
            height: "4px",
            backgroundColor: "#0d6efd",
            margin: "0 auto",
          }}
        ></div>
      </section>

      {/* Formulaire et Coordonnées */}
      <section className="container py-5">
        <div className="row g-4">
          {/* Formulaire */}
          <div className="col-md-6">
            <div className="p-4 border rounded shadow-sm">
              <h4 className="fw-bold text-center">Formulaire de contact</h4>
              <div
                style={{
                  width: "2O0px",
                  height: "3px",
                  backgroundColor: "#0d6efd",
                  margin: "10px auto 20px auto",
                }}
              ></div>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Votre adresse email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Votre numéro de téléphone"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Sujet"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Votre message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm px-4"
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Coordonnées */}
          <div className="col-md-6">
            <div className="p-4 border rounded shadow-sm">
              <h4 className="fw-bold text-center">Mes coordonnées</h4>
              <div
                style={{
                  width: "600px",
                  height: "3px",
                  backgroundColor: "#0d6efd",
                  margin: "10px auto 20px auto",
                }}
              ></div>
              <p>
                <BsGeoAlt className="me-2 text-primary" />
                40 rue Laure Diebold<br />
                69009 Lyon, France
              </p>
              <p>
                <BsTelephone className="me-2 text-primary" />
                10 20 30 40 50
              </p>
              <p>
                <BsEnvelope className="me-2 text-primary" />
                john.doe@gmail.com
              </p>
              <div className="mt-3">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2774.090355497835!2d4.80034931557136!3d45.778949179106376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebff1f3f5c7d%3A0x3e03e8a4ee6c9018!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1698252942660!5m2!1sfr!2sfr"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
