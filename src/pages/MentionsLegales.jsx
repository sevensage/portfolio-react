import React from "react";
import Accordion from "react-bootstrap/Accordion";

export default function MentionsLegales() {
  return (
    <section className="container my-5">
      <h1 className="fw-bold text-center">Mentions légales</h1>
      <div className="blue-line mx-auto"></div>

      <Accordion defaultActiveKey="0" className="mt-4">
      
        <Accordion.Item eventKey="0">
          <Accordion.Header>Éditeur du site</Accordion.Header>
          <Accordion.Body>
            John Doe<br />
            123 Rue de l’Exemple<br />
            75000 Paris<br />
            Email : johndoe@example.com
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur</Accordion.Header>
          <Accordion.Body>
            Hébergement assuré par : Hosting<br />
            Adresse : 456 Avenue de l’Hébergement, 75000 Paris
          </Accordion.Body>
        </Accordion.Item>

        {/* Crédits */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            Les images utilisées proviennent de{" "}
            <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">
              Pixabay
            </a>{" "}
            et le favicon est issu de{" "}
            <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer">
              Flaticon
            </a>.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}
