import Image from "next/image";
import FooterItemSmall from "../../atoms/FooterItemSmall";
import FooterItem from "../../molecules/FooterItem";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image src="/icon/logo.svg" width={94} height={70} />
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
                  <FooterItemSmall title="Company" />
                  <ul className="list-unstyled">
                    <FooterItem title="About Us" href="" />
                    <FooterItem title="Press Release" href="" />
                    <FooterItem title="Term of Use" href="" />
                    <FooterItem title="Privacy & Policy" href="" />
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <FooterItemSmall title="Support" />
                  <ul className="list-unstyled">
                    <FooterItem title="Refund Policy" href="" />
                    <FooterItem title="Unlock Rewards" href="" />
                    <FooterItem title="Live Chatting" href="" />
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <FooterItemSmall title="Connect" />
                  <ul className="list-unstyled">
                    <FooterItem
                      title="hi@4play.com"
                      href="mailto: hi@4play.com"
                    />
                    <FooterItem
                      title="team@4play.com"
                      href="mailto: team@4play.com"
                    />
                    <FooterItem
                      title="Pasific 12, Jakarta Selatan"
                      href="http://maps.google.com/?q=Pasific 12"
                      target="_blank"
                    />
                    <FooterItem
                      title="021 - 1122 - 9090"
                      href="tel: 02111229090"
                      target="_blank"
                    />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
