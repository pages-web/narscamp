import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div id="main-wrapper" className="main-wrapper">
      <div className="hero-banner mb-230">
        <div className="row">
          <div className="videoContainer">
            <iframe
              width="1060"
              height="315"
              src={`https://www.youtube.com/embed/TWvOWU-VKvs?`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="videoContainer__video"
            ></iframe>
          </div>
        </div>
      </div>
      <img
        id="icxrwm"
        src="https://narscamp.api.erxes.io/api/read-file?key=erxes-saas/Log0KuyXd0Zb5xfmcwgbPNars Schedule.jpg"
      />

      <div
        id="signUp"
        className="gap-bottom-equal edu-about-area about-style-1"
      >
        <div className="container edublink-animated-shape">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="about-image-gallery">
                <img
                  src="https://office.erxes.io/gateway/read-file?key=0.8710966753703946mainbackground.png"
                  alt="About Image"
                  className="main-img-1"
                />
                <div
                  data-sal-delay="150"
                  data-sal="slide-down"
                  data-sal-duration="800"
                  className="video-box sal-animate"
                ></div>
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
              <div className="about-content">
                <div className="section-title section-left">
                  <h2 className="title">
                    2024 оны зуны ээлжийн бүртгэл эхэллээ
                  </h2>
                  <span className="shape-line">
                    <i className="icon-19"></i>
                  </span>
                </div>
                <div
                  data-sal-delay="150"
                  data-sal="slide-up"
                  data-sal-duration="1200"
                  className="course-view-all sal-animate"
                >
                  <Link
                    href="https://forms.gle/NLtyv6nFUq8umCR57"
                    className="edu-btn"
                  >
                    Бүртгүүлэх<i className="material-icons">arrow_forward</i>
                  </Link>
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
      <div id="features" className="features-area-2">
        <div className="container">
          <h2 className="text-center text-white pt-40">Бидний үнэт зүйлс</h2>
          <div className="features-grid-wrap">
            <div className="features-box features-style-2 edublink-svg-animate">
              <div className="icon">
                <img
                  src="https://office.erxes.io/gateway/read-file?key=0.23343993788433037children.png"
                  alt="animated icon"
                  className="svgInject"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  Зуслангийн хамт
                  <br /> олон
                </h5>
              </div>
            </div>
            <div className="features-box features-style-2 edublink-svg-animate">
              <div className="icon">
                <img
                  src="https://office.erxes.io/gateway/read-file?key=0.856770870541939handshake.png"
                  alt="animated icon"
                  className="svgInject"
                />
              </div>
              <div className="content">
                <h5 className="title">
                  Хамтран ажиллагч
                  <br /> байгууллагууд
                </h5>
              </div>
            </div>
            <div className="features-box features-style-2 edublink-svg-animate">
              <div className="icon certificate">
                <img
                  src="https://office.erxes.io/gateway/read-file?key=0.4837090052352133international.png"
                  alt="animated icon"
                  className="svgInject"
                />
              </div>
              <div className="content">
                <h5 className="title">Олон улсын харилцаа</h5>
              </div>
            </div>
            <div className="features-box features-style-2 edublink-svg-animate">
              <div className="icon">
                <img
                  src="https://office.erxes.io/gateway/read-file?key=0.9853499330697282family.png"
                  alt="animated icon"
                  className="svgInject"
                />
              </div>
              <div className="content">
                <h5 className="title">Амрагчид, эцэг эхчүүд</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="club"
        className="edu-categorie-area categorie-area-2 edu-section-gap"
      >
        <div className="container">
          <div
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="800"
            className="section-title section-center sal-animate"
          >
            <h2 className="title">Клубын төрлүүд</h2>
            <span className="shape-line">
              <i className="icon-19"></i>
            </span>
            <p id="iu0ckm">
              Зусланд амрагч хүүхэд бүрийн хүсэл сонирхол нь өөр байдаг учраас
              тэдгээрт зориулж олон төрлийн клубүүд хичээллэдэг. Клубын хөтөлбөр
              нь хүүхэд бүрт өөрийгөө нээх, танин мэдэх, авьяас чадвараа
              хөгжүүлэх боломжийг бүрдүүлж өгдөг. Клубын сургалт нь өдөрт 1-2
              цагаар явагддаг.
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
                  <Link href="#club">
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
                  <Link href="#club">
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
                  <Link href="#club">
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
                  <Link href="#club">
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
                  <Link href="#club">
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
                  <Link href="#club">
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
                  <Link href="#club">
                    <h5 className="title">Аялалын клуб</h5>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="gap-bottom-equal edu-about-area about-style-1">
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
              <div className="about-content">
                <div className="section-title section-left">
                  <span className="pre-title">Бидний тухай</span>
                  <h2 className="title">Манай зуслан</h2>
                  <span className="shape-line">
                    <i className="icon-19"></i>
                  </span>
                  <p>
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
                  <Link href="#about" className="edu-btn">
                    Дэлгэрэнгүй<i className="material-icons">arrow_forward</i>
                  </Link>
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
      <div
        id="course"
        className="edu-course-area course-area-1 edu-section-gap bg-lighten01"
      >
        <div className="container">
          <div
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="800"
            className="section-title section-center sal-animate"
          >
            <h2 className="title">Онцлох хөтөлбөрүүд</h2>
            <span className="shape-line">
              <i className="icon-19"></i>
            </span>
          </div>
          <div className="row g-5">
            <div
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
              className="col-md-6 col-xl-3 swiper-container sal-animate"
            >
              <div className="edu-course course-style-1 hover-button-bg-white">
                <div className="inner">
                  <div className="thumbnail">
                    <Link href="https://www.facebook.com/narssummercamp">
                      <img
                        src="https://office.erxes.io/gateway/read-file?key=0.8759454529463746nars-got-talent.jpg"
                        alt="Course Meta"
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor">
                        Nars got talent
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="course-hover-content-wrapper">
                  <button className="wishlist-btn">
                    <i className="icon-22"></i>
                  </button>
                </div>
                <div className="course-hover-content">
                  <div className="content">
                    <h6 className="title">
                      <Link
                        href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor"
                        id="ixwlml"
                      >
                        Nars got talent
                      </Link>
                    </h6>
                    <p>
                      Зуслангийн онцлох хөтөлбөрүүдийн нэг нь урлагийн үзлэг юм.
                      Урлагийн үзлэг нь дуу, бүжиг, хөгжим, шүлэг, чөлөөт
                      үзүүлбэрүүдээс гадна хүүхдийн оролцоог нэмэгдүүлэхийн тулд
                      найрал дуу, хамтлаг бүжиг гэх мэт төрлөөр зохион
                      байгуулагддаг. Мөн хөтөлбөрийн зохион байгуулалтын ажилд
                      урлагийн клубт хамрагдсан амрагч хүүхдүүд оролцдогоороо
                      онцлогтой. Зорилго: Амрагч хүүхдүүдийн авъяас чадварыг
                      нээн хөгжүүлэх, урлагаар дамжуулан тайзны соёл, гоо зүйн
                      төлөвшил, хүмүүжлийг олгох, идэвх оролцоог нэмэгдүүлж,
                      урлаг соёлын боловсролыг түгээхэд оршино.
                    </p>
                    <Link
                      href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor"
                      className="edu-btn btn-secondary btn-small"
                    >
                      Дэлгэрэнгүй{" "}
                      <i className="material-icons">arrow_forward</i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
              className="col-md-6 col-xl-3 sal-animate"
            >
              <div className="edu-course course-style-1 hover-button-bg-white">
                <div className="inner">
                  <div className="thumbnail">
                    <Link href="https://www.facebook.com/narssummercamp">
                      <img
                        src="https://office.erxes.io/gateway/read-file?key=0.9495816439720197hanand-aviralt.jpg"
                        alt="Course Meta"
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor">
                        Хананд авиралт
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="course-hover-content-wrapper">
                  <button className="wishlist-btn">
                    <i className="icon-22"></i>
                  </button>
                </div>
                <div className="course-hover-content">
                  <div className="content">
                    <h6 className="title">
                      <Link href="https://www.facebook.com/narssummercamp">
                        Хананд авиралт
                      </Link>
                    </h6>
                    <p>
                      Спорт авиралтаар хичээллэх нь хүний биеийн хурд, хүчийг
                      нэмэгдүүлж, нүдний харааг сайжруулж, тэсвэр хатуужилтай
                      болгодог. Мөн сэтгэхүйг хөгжүүлэх, хэцүү нөхцөлөөс
                      боломжийг олж харах, саад бэрхшээлийг даван туулах чадварт
                      сургадаг. Энэ спорт нь хөл гарын үзүүр дээр тогтдог учир
                      биеийн болон сэтгэхүйн тэнцвэртэй байдлыг шаарддаг экстрем
                      спорт юм.
                    </p>
                    <Link
                      href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor"
                      className="edu-btn btn-secondary btn-small"
                    >
                      Дэлгэрэнгүй{" "}
                      <i className="material-icons">arrow_forward</i>
                    </Link>
                  </div>
                </div>
                <div className="course-hover-content">
                  <div className="content">
                    <h6 className="title">
                      <Link href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor">
                        Хананд авиралт
                      </Link>
                    </h6>
                    <p>
                      Спорт авиралтаар хичээллэх нь хүний биеийн хурд, хүчийг
                      нэмэгдүүлж, нүдний харааг сайжруулж, тэсвэр хатуужилтай
                      болгодог. Мөн сэтгэхүйг хөгжүүлэх, хэцүү нөхцөлөөс
                      боломжийг олж харах, саад бэрхшээлийг даван туулах чадварт
                      сургадаг. Энэ спорт нь хөл гарын үзүүр дээр тогтдог учир
                      биеийн болон сэтгэхүйн тэнцвэртэй байдлыг шаарддаг экстрем
                      спорт юм.
                    </p>
                    <Link
                      href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor"
                      className="edu-btn btn-secondary btn-small"
                    >
                      Дэлгэрэнгүй{" "}
                      <i className="material-icons">arrow_forward</i>
                    </Link>
                  </div>
                </div>
                <div className="course-hover-content">
                  <div className="content">
                    <h6 className="title">
                      <Link href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor">
                        Хананд авиралт
                      </Link>
                    </h6>
                    <p>
                      Спорт авиралтаар хичээллэх нь хүний биеийн хурд, хүчийг
                      нэмэгдүүлж, нүдний харааг сайжруулж, тэсвэр хатуужилтай
                      болгодог. Мөн сэтгэхүйг хөгжүүлэх, хэцүү нөхцөлөөс
                      боломжийг олж харах, саад бэрхшээлийг даван туулах чадварт
                      сургадаг. Энэ спорт нь хөл гарын үзүүр дээр тогтдог учир
                      биеийн болон сэтгэхүйн тэнцвэртэй байдлыг шаарддаг экстрем
                      спорт юм.
                    </p>
                    <Link
                      href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor"
                      className="edu-btn btn-secondary btn-small"
                    >
                      Дэлгэрэнгүй{" "}
                      <i className="material-icons">arrow_forward</i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
              className="col-md-6 col-xl-3 sal-animate"
            >
              <div className="edu-course course-style-1 hover-button-bg-white">
                <div className="inner">
                  <div className="thumbnail">
                    <Link href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor">
                      <img
                        src="https://office.erxes.io/gateway/read-file?key=0.8807575509488055aylal.jpg"
                        alt="Course Meta"
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link href="https://www.facebook.com/narssummercamp">
                        Явган аялалын хөтөлбөр
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="course-hover-content-wrapper">
                  <button className="wishlist-btn">
                    <i className="icon-22"></i>
                  </button>
                </div>
                <div className="course-hover-content">
                  <div className="content">
                    <h6 className="title">
                      <Link href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor">
                        Явган аялалын хөтөлбөр
                      </Link>
                    </h6>
                    <p>
                      Нарс зуслан нь нарс модоор хүрээлэгдсэн ойн төгөлд
                      байрладаг. Нарс мод хүний дархлааг сайжруулдаг
                      интерфероныг /Хүний биед гаднаас вирус гэх мэт биет орж
                      ирэхэд түүнийг эсэргүүцэн зайлуулах гэж ялгардаг бодис/
                      ялгаруулдаг цорын ганц мод юм. Ой модонд алхахад хүний бие
                      эрүүлжиж, стресс тайлагдан, тайван болж, байгалийн хүчил
                      төрөгч хүний бие организмыг дотроос нь цэвэрлэж байдаг.
                    </p>
                    <Link
                      href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor"
                      className="edu-btn btn-secondary btn-small"
                    >
                      Дэлгэрэнгүй{" "}
                      <i className="material-icons">arrow_forward</i>
                    </Link>
                  </div>
                </div>
                <div className="course-hover-content">
                  <div className="content">
                    <h6 className="title">
                      <Link href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor">
                        Явган аялалын хөтөлбөр
                      </Link>
                    </h6>
                    <p>
                      Нарс зуслан нь нарс модоор хүрээлэгдсэн ойн төгөлд
                      байрладаг. Нарс мод хүний дархлааг сайжруулдаг
                      интерфероныг /Хүний биед гаднаас вирус гэх мэт биет орж
                      ирэхэд түүнийг эсэргүүцэн зайлуулах гэж ялгардаг бодис/
                      ялгаруулдаг цорын ганц мод юм. Ой модонд алхахад хүний бие
                      эрүүлжиж, стресс тайлагдан, тайван болж, байгалийн хүчил
                      төрөгч хүний бие организмыг дотроос нь цэвэрлэж байдаг.
                    </p>
                    <Link
                      href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor"
                      className="edu-btn btn-secondary btn-small"
                    >
                      Дэлгэрэнгүй{" "}
                      <i className="material-icons">arrow_forward</i>
                    </Link>
                  </div>
                </div>
                <div className="course-hover-content">
                  <div className="content">
                    <h6 className="title">
                      <Link href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor">
                        Явган аялалын хөтөлбөр
                      </Link>
                    </h6>
                    <p>
                      Нарс зуслан нь нарс модоор хүрээлэгдсэн ойн төгөлд
                      байрладаг. Нарс мод хүний дархлааг сайжруулдаг
                      интерфероныг /Хүний биед гаднаас вирус гэх мэт биет орж
                      ирэхэд түүнийг эсэргүүцэн зайлуулах гэж ялгардаг бодис/
                      ялгаруулдаг цорын ганц мод юм. Ой модонд алхахад хүний бие
                      эрүүлжиж, стресс тайлагдан, тайван болж, байгалийн хүчил
                      төрөгч хүний бие организмыг дотроос нь цэвэрлэж байдаг.
                    </p>
                    <Link
                      href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor"
                      className="edu-btn btn-secondary btn-small"
                    >
                      Дэлгэрэнгүй{" "}
                      <i className="material-icons">arrow_forward</i>
                    </Link>
                  </div>
                </div>
                <div className="course-hover-content">
                  <div className="content">
                    <div className="course-hover-content">
                      <div className="content">
                        <h6 className="title">
                          <Link href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor">
                            Явган аялалын хөтөлбөр
                          </Link>
                        </h6>
                        <p>
                          Нарс зуслан нь нарс модоор хүрээлэгдсэн ойн төгөлд
                          байрладаг. Нарс мод хүний дархлааг сайжруулдаг
                          интерфероныг /Хүний биед гаднаас вирус гэх мэт биет
                          орж ирэхэд түүнийг эсэргүүцэн зайлуулах гэж ялгардаг
                          бодис/ ялгаруулдаг цорын ганц мод юм. Ой модонд
                          алхахад хүний бие эрүүлжиж, стресс тайлагдан, тайван
                          болж, байгалийн хүчил төрөгч хүний бие организмыг
                          дотроос нь цэвэрлэж байдаг.
                        </p>
                        <Link
                          href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor"
                          className="edu-btn btn-secondary btn-small"
                        >
                          Дэлгэрэнгүй{" "}
                          <i className="material-icons">arrow_forward</i>
                        </Link>
                      </div>
                    </div>
                    <div className="course-hover-content">
                      <div className="content">
                        <h6 className="title">
                          <Link href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor">
                            Явган аялалын хөтөлбөр
                          </Link>
                        </h6>
                        <p>
                          Нарс зуслан нь нарс модоор хүрээлэгдсэн ойн төгөлд
                          байрладаг. Нарс мод хүний дархлааг сайжруулдаг
                          интерфероныг /Хүний биед гаднаас вирус гэх мэт биет
                          орж ирэхэд түүнийг эсэргүүцэн зайлуулах гэж ялгардаг
                          бодис/ ялгаруулдаг цорын ганц мод юм. Ой модонд
                          алхахад хүний бие эрүүлжиж, стресс тайлагдан, тайван
                          болж, байгалийн хүчил төрөгч хүний бие организмыг
                          дотроос нь цэвэрлэж байдаг.
                        </p>
                        <Link
                          href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor"
                          className="edu-btn btn-secondary btn-small"
                        >
                          Дэлгэрэнгүй{" "}
                          <i className="material-icons">arrow_forward</i>
                        </Link>
                      </div>
                    </div>
                    <div className="course-hover-content">
                      <div className="content">
                        <h6 className="title">
                          <Link href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor">
                            Явган аялалын хөтөлбөр
                          </Link>
                        </h6>
                        <p>
                          Нарс зуслан нь нарс модоор хүрээлэгдсэн ойн төгөлд
                          байрладаг. Нарс мод хүний дархлааг сайжруулдаг
                          интерфероныг /Хүний биед гаднаас вирус гэх мэт биет
                          орж ирэхэд түүнийг эсэргүүцэн зайлуулах гэж ялгардаг
                          бодис/ ялгаруулдаг цорын ганц мод юм. Ой модонд
                          алхахад хүний бие эрүүлжиж, стресс тайлагдан, тайван
                          болж, байгалийн хүчил төрөгч хүний бие организмыг
                          дотроос нь цэвэрлэж байдаг.
                        </p>
                        <Link
                          href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor"
                          className="edu-btn btn-secondary btn-small"
                        >
                          Дэлгэрэнгүй{" "}
                          <i className="material-icons">arrow_forward</i>
                        </Link>
                      </div>
                    </div>
                    <h6 className="title">
                      <Link href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor">
                        Явган аялалын хөтөлбөр
                      </Link>
                    </h6>
                    <p>
                      Нарс зуслан нь нарс модоор хүрээлэгдсэн ойн төгөлд
                      байрладаг. Нарс мод хүний дархлааг сайжруулдаг
                      интерфероныг /Хүний биед гаднаас вирус гэх мэт биет орж
                      ирэхэд түүнийг эсэргүүцэн зайлуулах гэж ялгардаг бодис/
                      ялгаруулдаг цорын ганц мод юм. Ой модонд алхахад хүний бие
                      эрүүлжиж, стресс тайлагдан, тайван болж, байгалийн хүчил
                      төрөгч хүний бие организмыг дотроос нь цэвэрлэж байдаг.
                    </p>
                    <Link
                      href="https://www.canva.com/design/DAFifbQpmbY/E8IG4W6xSYaXrB_jgmrT6Q/view?utm_content=DAFifbQpmbY&amp;utm_campaign=designshare&amp;utm_medium=link&amp;utm_source=editor"
                      className="edu-btn btn-secondary btn-small"
                    >
                      Дэлгэрэнгүй{" "}
                      <i className="material-icons">arrow_forward</i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
              className="col-md-6 col-xl-3 sal-animate"
            >
              <div className="edu-course course-style-1 hover-button-bg-white">
                <div className="inner">
                  <div className="thumbnail">
                    <Link
                      href="https://www.facebook.com/narssummercamp"
                      id="idw5jz"
                    >
                      <img
                        src="https://narscamp.api.erxes.io/api/read-file?key=erxes-saas/B9VLVoNJ4MoQLY6Q9n4Fj2.jpg"
                        alt="Course Meta"
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <h6 className="title">
                      <Link href="https://www.facebook.com/narssummercamp">
                        Хөлөгт тоглоом
                      </Link>
                    </h6>
                  </div>
                </div>
                <div className="course-hover-content-wrapper">
                  <button className="wishlist-btn">
                    <i className="icon-22"></i>
                  </button>
                </div>
                <div className="course-hover-content">
                  <div className="content">
                    <h6 className="title">
                      <Link href="https://www.facebook.com/narssummercamp">
                        Хөлөгт тоглоом
                      </Link>
                    </h6>
                    <p id="if38dh">
                      Хөлөгт тоглоомыг зуслангийн өдөр бүрийн хөтөлбөрүүдэд
                      тохирсон танин мэдэхүйн асуулт, даалгавартайгаар зохион
                      явуулдаг. Эрүүл агаарт хүүхдийн танин мэдэхүйн чадамжийг
                      сорьж, хөгжөөнт даалгавар биелүүлэн багаар ажиллан тоглох
                      юм. Монгол ахуй, танин мэдэхүйн, урлаг, спортын, байгаль
                      экологийн, хөгжилтэй булан зэрэг олон сонирхолтой
                      даалгаврыг биелүүлэн оролцоно.
                    </p>
                    <Link
                      href="https://www.facebook.com/narssummercamp"
                      className="edu-btn btn-secondary btn-small"
                    >
                      Дэлгэрэнгүй{" "}
                      <i className="material-icons">arrow_forward</i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="bdg-sect"></section>
          <div
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="1200"
            className="course-view-all sal-animate"
          >
            <Link
              href="https://www.facebook.com/narssummercamp"
              className="edu-btn"
            >
              Бүх хөтөлбөрүүд<i className="material-icons">arrow_forward</i>
            </Link>
          </div>
        </div>
      </div>

      <div className="edu-blog-area blog-area-1 edu-section-gap">
        <div className="container">
          <div
            data-sal-delay="100"
            data-sal="slide-up"
            data-sal-duration="800"
            className="section-title section-center sal-animate"
          >
            <h2 className="title">Эцэг эхийн булан</h2>
            <span className="shape-line">
              <i className="icon-19"></i>
            </span>
          </div>
          <div className="row g-5">
            <div
              data-sal-delay="100"
              data-sal="slide-up"
              data-sal-duration="800"
              className="col-lg-4 col-md-6 col-12 sal-animate"
            >
              <div className="edu-blog blog-style-1">
                <div className="inner">
                  <div className="thumbnail">
                    <Link href="/parents-detail" id="i9bel2">
                      <img
                        src="https://office.erxes.io/gateway/read-file?key=0.6501165300591836zuslan-2.JPG"
                        alt="Blog Images"
                      />
                    </Link>
                  </div>
                  <div className="content position-top">
                    <div className="read-more-btn">
                      <Link href="/parents-detail" className="btn-icon-round">
                        <i className="material-icons">arrow_forward</i>
                      </Link>
                    </div>
                    <h5 className="title pb-10">
                      <Link href="/parents-detail">
                        Зусланд амрагч хүүхдийн бэлдэх зүйлс :
                      </Link>
                    </h5>
                    <p>
                      Улирлын байдалд тохирсон хувцас
                      <br />
                      Цагаан хэрэглэл, дэрний уут
                      <br />
                      Хувийн ариун цэврийн хэрэглэл /биеийн болон гар нүүрний
                      алчуур, саван, оо, сойз,00 цаас, сальфетка, ариун цэврийн
                      хэрэглэл/
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-sal-delay="200"
              data-sal="slide-up"
              data-sal-duration="800"
              className="col-lg-4 col-md-6 col-12 sal-animate"
            >
              <div className="edu-blog blog-style-1">
                <div className="inner">
                  <div className="thumbnail">
                    <Link href="/parents-detail">
                      <img
                        src="https://office.erxes.io/gateway/read-file?key=0.15770212158312757zuslan-1.JPG"
                        alt="Blog Images"
                      />
                    </Link>
                  </div>
                  <div className="content position-top">
                    <div className="read-more-btn">
                      <Link href="/parents-detail" className="btn-icon-round">
                        <i className="material-icons">arrow_forward</i>
                      </Link>
                    </div>
                    <h5 className="title pb-10">
                      <Link href="/parents-detail">
                        Зусланд амрагч хүүхдийн мөрдөх дүрэм :
                      </Link>
                    </h5>
                    <p>
                      Зусланд амрагсад ”Хүүхдийн зуслангийн үйл ажиллагааны
                      ерөнхий шаардлага MNS-5633:2019”, хүүхдийн зуслангийн
                      ариун цэвэр, эрүүл ахуйн үлгэрчилсэн дүрмийн заалтууд,
                      зусланд дагаж мөрдөх өдрийн дэглэмийг чанд мөрдөнө.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-sal-delay="300"
              data-sal="slide-up"
              data-sal-duration="800"
              className="col-lg-4 col-md-6 col-12 sal-animate"
            >
              <div className="edu-blog blog-style-1">
                <div className="inner">
                  <div className="thumbnail">
                    <Link href="/parents-detail">
                      <img
                        src="https://office.erxes.io/gateway/read-file?key=0.355371414943054zuslan-3.jpg"
                        alt="Blog Images"
                      />
                    </Link>
                  </div>
                  <div className="content position-top">
                    <div className="read-more-btn">
                      <Link href="/parents-detail" className="btn-icon-round">
                        <i className="material-icons">arrow_forward</i>
                      </Link>
                    </div>
                    <h5 className="title pb-10">
                      <Link href="/parents-detail">
                        Зусланд амрагч хүүхэд эцэг эхчүүдийн анхаарах зүйлс :
                      </Link>
                    </h5>
                    <p>
                      Хүүхдээ амраах ээлжийг сонгохдоо уг ээлжийн хөтөлбөрийн
                      үйл ажиллагаатай сайтар танилцах.
                      <br />
                      Амрах ээлжийн хөтөлбөртэй уялдуулан хувийн бэлтгэлээ
                      сайтар хангаж ирэх.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="shape-group">
          <li className="shape-1 scene">
            <img
              data-depth="-1.4"
              src="https://office.erxes.io/gateway/read-file?key=0.17710189431814483shape-02.png"
              alt="Shape"
            />
          </li>
          <li className="shape-2 scene">
            <span data-depth="2.5"></span>
          </li>
          <li className="shape-3 scene">
            <img
              data-depth="-2.3"
              src="https://office.erxes.io/gateway/read-file?key=0.1528567194739321shape-05.png"
              alt="Shape"
            />
          </li>
        </ul>
      </div>
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

      <div id="brand" className="edu-brand-area brand-area-1 gap-top-equal">
        <div className="container">
          <div className="row">
            <div className="brand-section-heading">
              <div
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
                className="section-title section-left sal-animate"
              >
                <h2 className="title text-center">Хамтрагч байгууллагууд</h2>
                <span className="shape-line">
                  <i className="icon-19"></i>
                </span>
              </div>
            </div>
            <div className="brand-grid-wrap">
              <div className="brand-grid">
                <img
                  src="https://office.erxes.io/gateway/read-file?key=0.17527686731723691.png"
                  alt="Brand Logo"
                  id="is4d24"
                />
              </div>
              <div className="brand-grid">
                <img
                  id="i8o1nt"
                  src="https://narscamp.api.erxes.io/api/read-file?key=erxes-saas/iyXfVpU7I1njoESwaKXzpMainLogoWithScrip.png"
                />
              </div>
              <div className="brand-grid">
                <img
                  id="ibalg6"
                  src="https://narscamp.api.erxes.io/api/read-file?key=erxes-saas/TJC5Eq0heYmPzVYJhQA3q8R-Z6JFX8S-CI7RAZE-6WDWW9V-AN.jpg"
                />
              </div>
              <div className="brand-grid">
                <img
                  src="https://office.erxes.io/gateway/read-file?key=0.107145833084815623.jpg"
                  alt="Brand Logo"
                  id="ik7jqt"
                />
              </div>
              <div className="brand-grid">
                <img
                  src="https://office.erxes.io/gateway/read-file?key=0.294162166040878864.jpg"
                  alt="Brand Logo"
                  id="ia3lqx"
                />
              </div>
              <img
                id="ins8px"
                src="https://narscamp.api.erxes.io/api/read-file?key=erxes-saas/Gb1xSYyzIJXd3hu3E8tXmimages.png"
              />
              <div className="brand-grid">
                <img
                  src="https://office.erxes.io/gateway/read-file?key=0.087566212925970442.png"
                  alt="Brand Logo"
                  id="ixbmuu"
                />
              </div>
              <div className="brand-grid">
                <img
                  src="https://office.erxes.io/gateway/read-file?key=0.88911197775169127.png"
                  alt="Brand Logo"
                  id="i7tp0s"
                />
              </div>
              <div className="brand-grid">
                <img
                  src="https://office.erxes.io/gateway/read-file?key=0.173964147534778858.png"
                  alt="Brand Logo"
                  id="id47bt"
                />
              </div>
              <div className="brand-grid" />
              <img
                src="https://office.erxes.io/gateway/read-file?key=0.119550675824645629.jpg"
                alt="Brand Logo"
                id="id47bt-2"
              />
            </div>
            <div className="brand-grid">
              <img
                src="https://office.erxes.io/gateway/read-file?key=0.826485926104954410.png"
                alt="Brand Logo"
                id="id47bt-3"
              />
            </div>
            <div className="brand-grid">
              <img
                src="https://office.erxes.io/gateway/read-file?key=0.3449210527492241311.png"
                alt="Brand Logo"
                id="id47bt-4"
              />
            </div>
            <div className="brand-grid">
              <img
                src="https://office.erxes.io/gateway/read-file?key=0.945780280960394312.png"
                alt="Brand Logo"
                id="id47bt-5"
              />
            </div>
            <div className="brand-grid">
              <img
                id="igyrka"
                src="https://narscamp.api.erxes.io/api/read-file?key=erxes-saas/ZxvVYG6k2oDm6xOqnv2Mr259907-18082020-1597737515-855436432-shineehlel1.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
