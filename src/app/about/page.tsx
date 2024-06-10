import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div
      id="about"
      className="gap-bottom-equal edu-about-area about-style-1"
      style={{ marginTop: "50px" }}
    >
      <div className="container edublink-animated-shape">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="about-image-gallery">
              <img
                src="https://office.erxes.io/gateway/read-file?key=0.7083488646848655manai-zuslan.png"
                alt="About Image"
                className="main-img-1"
              />
              <div
                data-sal-delay="150"
                data-sal="slide-down"
                data-sal-duration="800"
                className="video-box sal-animate"
              >
                <div className="inner">
                  <div className="thumb">
                    <img
                      src="https://office.erxes.io/gateway/read-file?key=0.14841743154502884bid-hen-be.png"
                      alt="About Image"
                      id="i3op75-2-2"
                    />
                    <Link
                      href="https://www.youtube.com/watch?v=RbOfYKmwC7c&amp;start=975"
                      target="_blank"
                      className="popup-icon video-popup-activation"
                    >
                      <i className="fa-solid fa-play"></i>
                    </Link>
                  </div>
                  <div className="loading-bar">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
              <ul className="shape-group">
                <li
                  data-sal-delay="500"
                  data-sal="fade"
                  data-sal-duration="200"
                  className="shape-1 scene sal-animate"
                >
                  <img
                    data-depth="1"
                    src="https://office.erxes.io/gateway/read-file?key=0.6029637158999961shape-36.png"
                    alt="Shape"
                  />
                </li>
                <li
                  data-sal-delay="500"
                  data-sal="fade"
                  data-sal-duration="200"
                  className="shape-2 scene sal-animate"
                >
                  <img
                    data-depth="-1"
                    src="https://office.erxes.io/gateway/read-file?key=0.07985463138171323shape-37.png"
                    alt="Shape"
                  />
                </li>
                <li
                  data-sal-delay="500"
                  data-sal="fade"
                  data-sal-duration="200"
                  className="shape-3 scene sal-animate"
                >
                  <img
                    data-depth="1"
                    src="https://office.erxes.io/gateway/read-file?key=0.17710189431814483shape-02.png"
                    alt="Shape"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div
            data-sal-delay="150"
            data-sal="slide-left"
            data-sal-duration="800"
            className="col-lg-6 sal-animate"
          >
            <div>
              <div className="about-content">
                <div className="section-title section-left">
                  <span
                    className="pre-title"
                    style={{ fontSize: "15px", color: "gray" }}
                  >
                    Бидний тухай
                  </span>
                  <h2
                    className="title"
                    style={{ fontSize: "22px", fontWeight: "700" }}
                  >
                    Манай зуслан
                  </h2>
                  <span className="shape-line">
                    <i className="icon-19"></i>
                  </span>
                  <p className="w-[400px]" style={{ maxWidth: "550px" }}>
                    Олон улсын Хүүхэд хөгжлийн Нарс зуслан нь 1984 онд
                    байгуулагдсан. Манай зуслан нь Хангайн нурууны баруун өмнөд
                    салбар уулсад далайн түвшнээс дээш 1400 метрын өндөрт нарсан
                    ойн дунд оршдог. СХД-ын 24-р хороо, Баруун салааны байгалийн
                    үзэсгэлэнт Баянсогоотын аманд, Улаанбаатар хотын төвөөс 20
                    км-ын зайд байрладаг.
                  </p>
                </div>
                <div
                  data-sal-delay="150"
                  data-sal="slide-up"
                  data-sal-duration="1200"
                  className="course-view-all sal-animate"
                >
                  <Link
                    href="#about"
                    className="edu-btn"
                    style={{ textDecoration: "none" }}
                  >
                    Дэлгэрэнгүй<i className="material-icons">arrow_forward</i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="shape-group">
          <li
            data-sal-delay="500"
            data-sal="fade"
            data-sal-duration="200"
            className="shape-1 circle scene sal-animate"
          >
            <span data-depth="-2.3"></span>
          </li>
        </ul>
      </div>
    </div>
  );
}
