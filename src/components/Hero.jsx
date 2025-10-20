import React, { useState, useEffect } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import "../styles/Global.css";

export default function Home() {
  const [show, setShow] = useState(false);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch("https://api.github.com/users/github-john-doe")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération du profil :", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Bienvenue sur mon portfolio</h1>
        <p>Développeur front-end passionné</p>
        <Button variant="danger" onClick={handleShow}>
          En savoir plus
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Mon profil GitHub</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" />
            </div>
          ) : profile ? (
            <div className="github-profile-modal">
              <div className="modal-left">
                <img
                  src={profile.avatar_url}
                  alt="Avatar GitHub"
                  className="github-avatar"
                />
              </div>
              <div className="modal-right">
                <p>
                  <strong>
                    <a href={profile.html_url} target="_blank" rel="noreferrer">
                      {profile.name}
                    </a>
                  </strong>
                </p>
                <p>{profile.bio}</p>
                <p>📦 Repositories : {profile.public_repos}</p>
                <p>👥 Followers : {profile.followers}</p>
                <p>➡️ Following : {profile.following}</p>
              </div>
            </div>
          ) : (
            <p>Impossible de charger le profil.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
