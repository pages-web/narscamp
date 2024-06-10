import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div id="contact" className="home-one-cta-two cta-area-1">
      <div className="container">
        <div className="row justify-content-center px-50">
          <div className="col-xl-8">
            <div className="home-one-cta edu-cta-box bg-image">
              <div className="inner">
                <div className="content text-md-end">
                  <span className="subtitle">Холбоо барих:</span>
                  <h3 className="title">
                    <Link href="mailto:info@edublink">
                      Narscamp72@gmail.com
                    </Link>
                  </h3>
                </div>
                <div className="sparator">
                  <span>&lt;&gt;</span>
                </div>
                <div className="content">
                  <span className="subtitle">Залгах:</span>
                  <h3 className="title">
                    <Link href="tel:+011235641231">+976 99096109</Link>
                  </h3>
                </div>
              </div>
              <ul className="shape-group">
                <li className="shape-01 scene">
                  <img
                    data-depth="2"
                    src="https://office.erxes.io/gateway/read-file?key=0.4264599996356233shape-06.png"
                    alt="shape"
                  />
                </li>
                <li className="shape-02 scene">
                  <img
                    data-depth="-2"
                    src="https://office.erxes.io/gateway/read-file?key=0.9818429328759148shape-12.png"
                    alt="shape"
                  />
                </li>
                <li className="shape-03 scene">
                  <img
                    data-depth="-3"
                    src="https://office.erxes.io/gateway/read-file?key=0.5478797081012079shape-04.png"
                    alt="shape"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
