import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div
      id="club"
      className="edu-categorie-area categorie-area-2 edu-section-gap"
    >
      <div className="container" style={{ maxWidth: "1185px" }}>
        <div
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="800"
          className="section-title section-center sal-animate"
        >
          <h2 className="title" style={{ fontSize: "26px", fontWeight: "700" }}>
            Клубын төрлүүд
          </h2>
          <span className="shape-line">
            <i className="icon-19"></i>
          </span>
          <p id="iu0ckm">
            Зусланд амрагч хүүхэд бүрийн хүсэл сонирхол нь өөр байдаг учраас
            тэдгээрт зориулж олон төрлийн клубүүд хичээллэдэг. Клубын хөтөлбөр
            нь хүүхэд бүрт өөрийгөө нээх, танин мэдэх, авьяас чадвараа хөгжүүлэх
            боломжийг бүрдүүлж өгдөг. Клубын сургалт нь өдөрт 1-2 цагаар
            явагддаг.
          </p>
        </div>
        <div className="row g-5">
          <div
            data-sal-delay="50"
            data-sal="slide-up"
            data-sal-duration="800"
            className="col-lg-4 col-md-6 sal-animate"
          >
            <div className="categorie-grid categorie-style-2 color-primary-style edublink-svg-animate">
              <div className="icon">
                <img
                  src="https://office.erxes.io/gateway/read-file?key=0.9872555630945099karaoke.png"
                  id="ihkoi5"
                />
              </div>
              <div className="content">
                <Link href="#club" style={{ textDecoration: "none" }}>
                  <h5 className="title">Соёл урлагийн клуб</h5>
                </Link>
              </div>
            </div>
          </div>
          <div
            data-sal-delay="100"
            data-sal="slide-up"
            data-sal-duration="800"
            className="col-lg-4 col-md-6 sal-animate"
          >
            <div className="categorie-grid categorie-style-2 color-secondary-style">
              <div className="icon">
                <img
                  src="https://office.erxes.io/gateway/read-file?key=0.9328808744254105balls-sports.png"
                  id="idj7as"
                />
              </div>
              <div className="content">
                <Link href="#club" style={{ textDecoration: "none" }}>
                  <h5 className="title">Спортын клуб</h5>
                </Link>
              </div>
            </div>
          </div>
          <div
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="800"
            className="col-lg-4 col-md-6 sal-animate"
          >
            <div className="categorie-grid categorie-style-2 color-extra01-style">
              <div className="icon">
                <img
                  src="https://office.erxes.io/gateway/read-file?key=0.8506819286133447smart.png"
                  id="iy63mg"
                />
              </div>
              <div className="content">
                <Link href="#club" style={{ textDecoration: "none" }}>
                  <h5 className="title">Оюун ухааны клуб</h5>
                </Link>
              </div>
            </div>
          </div>
          <div
            data-sal-delay="100"
            data-sal="slide-up"
            data-sal-duration="800"
            className="col-lg-4 col-md-6 sal-animate"
          >
            <div className="categorie-grid categorie-style-2 color-extra02-style">
              <div className="icon">
                <img
                  src="https://office.erxes.io/gateway/read-file?key=0.5370626693040388languages.png"
                  id="iccppj"
                />
              </div>
              <div className="content">
                <Link href="#club" style={{ textDecoration: "none" }}>
                  <h5 className="title">Гадаад хэлний клуб</h5>
                </Link>
              </div>
            </div>
          </div>
          <div
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="800"
            className="col-lg-4 col-md-6 sal-animate"
          >
            <div className="categorie-grid categorie-style-2 color-extra03-style">
              <div className="icon">
                <img
                  src="https://office.erxes.io/gateway/read-file?key=0.5072246281414845design-thinking.png"
                  id="ih2nkg"
                />
              </div>
              <div className="content">
                <Link href="#club" style={{ textDecoration: "none" }}>
                  <h5 className="title">Бүтээлч клуб</h5>
                </Link>
              </div>
            </div>
          </div>
          <div
            data-sal-delay="50"
            data-sal="slide-up"
            data-sal-duration="800"
            className="col-lg-4 col-md-6 sal-animate"
          >
            <div className="categorie-grid categorie-style-2 color-extra04-style">
              <div className="icon">
                <img
                  src="https://office.erxes.io/gateway/read-file?key=0.7322881944155526photographer.png"
                  id="i0tke2"
                />
              </div>
              <div className="content">
                <Link href="#club" style={{ textDecoration: "none" }}>
                  <h5 className="title">
                    Өсвөрийн сэтгүүлч, гэрэл зургийн клуб
                  </h5>
                </Link>
              </div>
            </div>
          </div>
          <div
            data-sal-delay="100"
            data-sal="slide-up"
            data-sal-duration="800"
            className="col-lg-4 col-md-6 sal-animate"
          >
            <div className="categorie-grid categorie-style-2 color-extra05-style">
              <div className="icon">
                <img
                  src="https://office.erxes.io/gateway/read-file?key=0.9677403545026297travel.png"
                  id="idylqu"
                />
              </div>
              <div className="content">
                <Link href="#club" style={{ textDecoration: "none" }}>
                  <h5 className="title">Аялалын клуб</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
