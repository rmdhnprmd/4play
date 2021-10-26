import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/organisms/Navbar";
import MainBanner from "../components/organisms/MainBanner";
import TransactionStep from "../components/organisms/TransactionStep";
import FeaturedGame from "../components/organisms/FeaturedGame";
import Reached from "../components/organisms/Reached";
import Story from "../components/organisms/Story";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />

      <section className="footer pt-50">
        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 text-lg-start text-center">
                <a href="" className="mb-30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="94"
                    height="70"
                    fill="none"
                    viewBox="0 0 94 70"
                  >
                    <path
                      fill="#C4C4C4"
                      fillRule="evenodd"
                      d="M65.5 40.124c4-2.31 4-8.083 0-10.393L47 19.051v-4.042c0-4.619 5-7.506 9-5.196L90.5 29.73c4 2.31 4 8.083 0 10.393L56 60.042c-4 2.31-9-.577-9-5.196v-4.041l18.5-10.681z"
                      clipRule="evenodd"
                    />
                    <path
                      fill="#2B2467"
                      d="M61 29.804c4 2.31 4 8.083 0 10.392L26.5 60.115c-4 2.31-9-.578-9-5.196V15.08c0-4.618 5-7.505 9-5.196L61 29.804z"
                    />
                  </svg>
                </a>
                <p className="mt-30 text-lg color-palette-1 mb-30">
                  4play membantu gamers
                  <br /> untuk menjadi pemenang sejati
                </p>
                <p className="mt-30 text-lg color-palette-1 mb-30">
                  Copyright 2021. All Rights Reserved.
                </p>
              </div>
              <div className="col-lg-8 mt-lg-0 mt-20">
                <div className="row gap-sm-0">
                  <div className="col-md-4 col-6 mb-lg-0 mb-25">
                    <p className="text-lg fw-semibold color-palette-1 mb-12">
                      Company
                    </p>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <a
                          href=""
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          About Us
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href=""
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Press Release
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href=""
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Terms of Use
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href=""
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Privacy & Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-6 mb-lg-0 mb-25">
                    <p className="text-lg fw-semibold color-palette-1 mb-12">
                      Support
                    </p>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <a
                          href=""
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Refund Policy
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href=""
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Unlock Rewards
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href=""
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Live Chatting
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                    <p className="text-lg fw-semibold color-palette-1 mb-12">
                      Connect
                    </p>
                    <ul className="list-unstyled">
                      <li className="mb-6">
                        <a
                          href="mailto: hi@store.gg"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          hi@4play.com
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href="mailto: team@store.gg"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          team@4play.com
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href="http://maps.google.com/?q=Pasific 12,
                                          Jakarta Selatan"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          Pasific 12, Jakarta Selatan
                        </a>
                      </li>
                      <li className="mb-6">
                        <a
                          href="tel: 02111229090"
                          className="text-lg color-palette-1 text-decoration-none"
                        >
                          021 - 1122 - 9090
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
