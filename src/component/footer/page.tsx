import React from "react";

export default function Footer() {
  return (
    <footer className="edu-footer footer-lighten bg-image footer-style-1">
      <div className="footer-top">
        <div className="container" style={{ maxWidth: "1185px" }}>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <div className="edu-footer-widget">
                <div className="logo">
                  <a href="/">
                    <img
                      src="https://office.erxes.io/gateway/read-file?key=0.8265365204258499logo-dark.png"
                      alt="Corporate Logo"
                      className="logo-dark"
                    />
                  </a>
                  <img
                    id="iq4915"
                    src="https://narscamp.api.erxes.io/api/read-file?key=erxes-saas/eudT7OzcwDTuXapC28hzMүг.png"
                  />
                </div>
                <div className="widget-information">
                  <ul className="information-list">
                    <li>
                      <span>Хаяг:</span>ЧД 5-р хороо Самбуугийн гудамж 21/1
                      (тэнгис кино театрын баруун талд)
                    </li>
                    <li>
                      <span>Утас:</span>
                      <a href="tel:+011235641231">
                        +976 99096109, +976 95553352 +976 11325329
                      </a>
                    </li>
                    <li>
                      <span>Цахим шуудан:</span>
                      <a href="mailto:info@edublink.com" target="_blank">
                        Narscamp72@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="edu-footer-widget explore-widget">
                <h4
                  className="widget-title"
                  style={{ fontSize: "20px", fontWeight: "700" }}
                >
                  Дотоод холбоосууд
                </h4>
                <div className="inner">
                  <ul className="footer-link link-hover">
                    <li>
                      <a href="#about">Бидний тухай</a>
                    </li>
                    <li>
                      <a href="#club">Клубүүд</a>
                    </li>
                    <li>
                      <a href="#contact">Холбоо барих</a>
                    </li>
                    <li>
                      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPnOx6MA4EOijexuRPdz70OqKzumzdEAjGc9yXqTfd17FPDA/viewform">
                        Бүртгүүлэх
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="edu-footer-widget quick-link-widget">
                <h4
                  className="widget-title"
                  style={{ fontSize: "20px", fontWeight: "700" }}
                >
                  Сошиал холбоосууд
                </h4>
                <div className="inner">
                  <ul className="footer-link link-hover">
                    <li>
                      <a href="https://www.facebook.com/narssummercamp?mibextid=LQQJ4d">
                        <i className="fa-brands fa-facebook color-primary"> </i>
                         Фэйсбүүк
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/narscamp.mongolia/">
                        <i className="fa-brands fa-instagram color-primary">
                          {" "}
                        </i>
                         Инстаграм
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@narschildrenscamp9739">
                        <i className="fa-brands fa-youtube color-primary"> </i>
                         Youtube
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner text-center">
                <p id="ik27d7">
                  Нарс зуслан © 2024 Бүх эрх хуулиар хамгаалагдсан.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
