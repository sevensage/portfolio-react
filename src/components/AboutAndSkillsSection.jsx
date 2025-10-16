import React from 'react';
import aboutImg from '../assets/images/john-doe-about.jpg';

export default function AboutAndSkillsSection() {
  return (
    <section className="py-5" id="about" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="container">
        <div
          className="p-4 rounded shadow bg-white"
          style={{ maxWidth: '1100px', margin: '0 auto' }}
        >
          <div className="row">
            {/* À propos */}
            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <h3 className="fw-bold border-bottom pb-2 mb-3">A propos</h3>
              <img
                src={aboutImg}
                alt="John Doe"
                className="img-fluid rounded mb-3"
                style={{ maxHeight: '200px', objectFit: 'cover', width: '100%' }}
              />
              <p>
                Lorem iure sit  consectetur  perferendis neque elit. Optio, at?
                consectetur tempore amet dolor adipisicing nostrum, exreiciendis
                impedit aut ipsum enim pariatur? delectus necessitatibus Natus. 
                
              </p>
              <p>
                Lorem iure sit  consectetur  perferendis neque elit. Optio, at?
                consectetur tempore amet dolor adipisicing nostrum, exreiciendis
                impedit aut ipsum enim pariatur? delectus necessitatibus Natus. 
              </p>
              <p>
               Lorem iure sit  consectetur  perferendis neque elit. Optio, at?
                consectetur tempore amet dolor adipisicing nostrum, exreiciendis
                impedit aut ipsum enim pariatur? delectus necessitatibus Natus.
              </p>
            </div>

            {/* Mes compétences */}
            <div className="col-lg-6 col-md-12">
              <h3 className="fw-bold border-bottom pb-2 mb-3">Mes compétences</h3>

              {/* HTML5 */}
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>HTML5</span>
                  <span>90%</span>
                </div>
                <div className="progress" style={{ height: '10px' }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '90%', backgroundColor: '#dc3545' }}
                  ></div>
                </div>
              </div>

              {/* CSS3 */}
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>CSS3</span>
                  <span>80%</span>
                </div>
                <div className="progress" style={{ height: '10px' }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>

              {/* JAVASCRIPT */}
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>JAVASCRIPT</span>
                  <span>70%</span>
                </div>
                <div className="progress" style={{ height: '10px' }}>
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: '70%' }}
                  ></div>
                </div>
              </div>

              {/* PHP */}
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>PHP</span>
                  <span>60%</span>
                </div>
                <div className="progress" style={{ height: '10px' }}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: '60%' }}
                  ></div>
                </div>
              </div>

              {/* REACT */}
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span>REACT</span>
                  <span>50%</span>
                </div>
                <div className="progress" style={{ height: '10px' }}>
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: '50%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
