
import heroBanner from "../assets/images/hero-bg.jpg";

export default function Hero() {
  return (
    <header
      className="d-flex flex-column justify-content-center align-items-center text-white text-center"
      style={{
        backgroundImage: `url(${heroBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
      }}
    >
      <h1 className="fw-bold">Bonjour, je suis John Doe</h1>
      <h2 className="fw-bold mb-4">Développeur web full stack</h2>
      <button
        className="btn btn-danger btn-lg"
        data-bs-toggle="modal"
        data-bs-target="#enSavoirPlus"
      >
        En savoir plus
      </button>
    </header>
  );
}
