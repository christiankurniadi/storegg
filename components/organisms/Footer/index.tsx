import Image from "next/image"
import FooterLink from "./FooterLink"

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image
                  priority
                  src="/icon/logo.svg"
                  width={60}
                  height={60}
                  alt="logo"
                />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
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
                    <FooterLink title="About Us" href="/" />
                    <FooterLink title="Press Release" href="/" />
                    <FooterLink title="Terms of Use" href="/" />
                    <FooterLink title="Privacy & Policy" href="/" />
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Support
                  </p>
                  <ul className="list-unstyled">
                    <FooterLink title="Refund Policy" href="/" />
                    <FooterLink title="Unlock Rewards" href="/" />
                    <FooterLink title="Live Chatting" href="/" />
                  </ul>
                </div>
                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                  <p className="text-lg fw-semibold color-palette-1 mb-12">
                    Connect
                  </p>
                  <ul className="list-unstyled">
                    <FooterLink title="hi@store.gg" href="/" />
                    <FooterLink title="team@store.gg" href="/" />
                    <FooterLink title="Pasific 12, Jakarta Selatan" href="/" />
                    <FooterLink title="021 - 1122 - 9090" href="/" />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
