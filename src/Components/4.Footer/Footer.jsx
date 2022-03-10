import './Footer.scss';
import footer from '../../Assets/Images/logonav_icon.png'
import { BsFacebook, BsInstagram, BsTelegram, BsTwitch, BsTwitter, BsYoutube } from 'react-icons/bs';

function Footer() {
return (
<footer className="footer text-white p-5">
  <div className="container">
    <div className="row ">
      <div className="col-12 d-flex align-items-center justify-content-center">
        <div className="footer_top">
          <div className="row">
            <div className="col-12 col-lg-3">
              <div className="footer_top-left">
                <div className="footer_top-left-logobox">
                  <img src={footer} alt="logo-img"
                    className="footer_top-left-logobox-logo img-fluid" />
                </div>
                <div className="footer_top-left-textbox">
                  <h3 className="footer_top-left-textbox-name">
                    Yeoju <br />
                    <span className="footer_top-left-textbox-name-span">
                      Technical
                    </span> <br />
                    <span className="footer_top-left-textbox-name-span">
                      Institute
                    </span> <br />
                    <span className="footer_top-left-textbox-name-span">
                      Iin Tashkent
                    </span> <br />
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="footer_top-mid">
                <ul className="footer_top-mid-menu d-block me-5">
                  <li className="footer_top-mid-menu-item">
                    <a href="#" className="footer_top-mid-menu-item-link">About Us</a>
                  </li>
                  <li className="footer_top-mid-menu-item">
                    <a href="#" className="footer_top-mid-menu-item-link">Admissions</a>
                  </li>
                  <li className="footer_top-mid-menu-item">
                    <a href="#" className="footer_top-mid-menu-item-link">Study in Korea</a>
                  </li>
                  <li className="footer_top-mid-menu-item">
                    <a href="#" className="footer_top-mid-menu-item-link">Programmes</a>
                  </li>
                  <li className="footer_top-mid-menu-item">
                    <a href="#" className="footer_top-mid-menu-item-link">Quick Links</a>
                  </li>
                </ul>
                <ul className="footer_top-mid-menu d-block">
                  <li className="footer_top-mid-menu-item">
                    <a href="#" className="footer_top-mid-menu-item-link">News & Events</a>
                  </li>
                  <li className="footer_top-mid-menu-item">
                    <a href="#" className="footer_top-mid-menu-item-link">Gallery</a>
                  </li>
                  <li className="footer_top-mid-menu-item">
                    <a href="#" className="footer_top-mid-menu-item-link">Career</a>
                  </li>
                  <li className="footer_top-mid-menu-item">
                    <a href="#" className="footer_top-mid-menu-item-link">Teachers' KPI</a>
                  </li>
                  <li className="footer_top-mid-menu-item">
                    <a href="#" className="footer_top-mid-menu-item-link">Contct Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <div className="footer_top-right">
                <div className="footer_top-right-smbox">
                  <h3 className="footer_top-right-smbox-title">
                    Adress
                  </h3>
                  <p className="footer_top-right-smbox-txt">
                    Usman Nasyr Street, 156, 100121 Tashkent
                  </p>
                </div>
                <div className="footer_top-right-smbox">
                  <h3 className="footer_top-right-smbox-title">
                    Phone
                  </h3>
                  <p className="footer_top-right-smbox-txt">
                    +998 78 129 40 40
                  </p>
                </div>
                <div className="footer_top-right-smbox">
                  <h3 className="footer_top-right-smbox-title">
                    Email
                  </h3>
                  <p className="footer_top-right-smbox-txt">
                    info@ytit.uz
                  </p>
                </div>
                <div className="footer_top-right-smbox">
                  <h3 className="footer_top-right-smbox-title">
                    Follow us
                  </h3>
                  <div className="footer_top-right-smbox-iconbox">
                    <a href="" className="footer_top-right-smbox-iconbox-link">
                      <BsFacebook />
                    </a>
                    <a href="" className="footer_top-right-smbox-iconbox-link">
                    <BsInstagram />
                    </a>
                    <a href="" className="footer_top-right-smbox-iconbox-link">
                    <BsTwitch />
                    </a>
                    <a href="" className="footer_top-right-smbox-iconbox-link">
                    <BsTwitter />
                    </a>
                    <a href="" className="footer_top-right-smbox-iconbox-link">
                      <BsTelegram />
                    </a>
                    <a href="" className="footer_top-right-smbox-iconbox-link">
                      <BsYoutube />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center">
              <div className="footer_top-license">
                <p className="footer_top-license-txt">
                  Design and performance of higher educational activities including licensing, scientific activities
                  and innovative project management in conformity with the law and with the institute profile. Thus,
                  the institute fulfills the requirements of
                  ISO 9001:2015
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-3">
        <div className="footer_bottom">
          <p className="footer_bottom-txt">
            Copyright © 2022 YTIT
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>
);
}

export default Footer;