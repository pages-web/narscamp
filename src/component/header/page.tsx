"use client";
import React, { use } from "react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick((previousState) => !previousState);
  };
  return (
    <header className="edu-header header-style-1 header-fullwidth">
      <div id="edu-sticky-placeholder"></div>
      <div className="header-mainmenu">
        <div className="container-fluid">
          <div className="header-navbar">
            <div className="header-brand">
              <div className="logo">
                <Link href="/">
                  <img
                    id="i0v325"
                    src="https://narscamp.api.erxes.io/api/read-file?key=erxes-saas/wmqJZBRwYn4FbGDpDDCqMүг.png"
                  />
                </Link>
                <img
                  src="https://office.erxes.io/gateway/read-file?key=0.8265365204258499logo-dark.png"
                  alt="Corporate Logo"
                  className="logo-dark"
                />
              </div>
            </div>
            <div className="header-mainnav">
              <nav className="mainmenu-nav">
                <ul className="mainmenu">
                  <li>
                    <Link href="/">Нүүр</Link>
                  </li>
                  <li>
                    <Link href="#about">Бидний Тухай</Link>
                  </li>
                  <li>
                    <Link href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&utm_campaign=designshare&utm_medium=link&utm_source=editor">
                      Хөтөлбөрүүд
                    </Link>
                  </li>
                  <li>
                    <Link href="#club" id="i0aa9">
                      Клубүүд
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfPnOx6MA4EOijexuRPdz70OqKzumzdEAjGc9yXqTfd17FPDA/viewform"
                      id="i95h3"
                    >
                      Бүртгүүлэх
                    </Link>
                  </li>
                  <li>
                    <Link href="#contact">Холбоо барих</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-right">
              <ul className="header-action">
                <li className="flex gap-10">
                  <Link
                    href="https://www.facebook.com/narssummercamp?mibextid=LQQJ4d"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook fa-xl color-primary"></i>
                  </Link>
                  <Link
                    href="https://youtube.com/@narschildrenscamp9739"
                    target="_blank"
                  >
                    <i className="fa-brands fa-youtube fa-xl color-primary"></i>
                  </Link>
                  <Link
                    href="https://instagram.com/narscamp.mongolia?igshid=NTc4MTIwNjQ2YQ=="
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram fa-xl color-primary"></i>
                  </Link>
                </li>
                <li className="mobile-menu-bar d-block d-xl-none">
                  <button className="hamberger-button" onClick={handleClick}>
                    <i className="fa-solid fa-bars"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {isClick ? (
        <div className="mobile-menu mto-10 p-10 w-300 bg-main ml-300">
          <ul>
            <li>
              <Link href="https://narscamp.mn/" className="text-white">
                Нүүр
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-white">
                Бидний Тухай
              </Link>
            </li>
            <li>
              <Link
                href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&utm_campaign=designshare&utm_medium=link&utm_source=editor"
                className="text-white"
              >
                Хөтөлбөрүүд
              </Link>
            </li>
            <li>
              <Link href="#club" className="text-white">
                Клубүүд
              </Link>
            </li>
            <li>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfPnOx6MA4EOijexuRPdz70OqKzumzdEAjGc9yXqTfd17FPDA/viewform"
                className="text-white"
              >
                Бүртгүүлэх
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-white">
                Холбоо барих
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </header>
  );
}
