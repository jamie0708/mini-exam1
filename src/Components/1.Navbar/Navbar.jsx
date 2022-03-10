import './Navbar.scss';
import languages from '../../Localization/Languages';
import logo from '../../Assets/Images/logo_ytit.png'
import { BsFillTelephoneFill, BsSearch, BsList} from "react-icons/bs";

function Navbar({ lang, setLang }) {
console.log(lang);
return (
<div className='fixed-top'>
  <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navbar_menubox" id="navbarSupportedContent">
        <ul className="navbar-nav navbar_menubox-menu me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown navbar_menubox-menu-item">
            <a className="nav-link navbar_menubox-menu-item-link dropdown-toggle" href="#" id="navbarDropdown"
              role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {languages[lang].header.nav.navItem1}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Academics</a></li>
              <li><a className="dropdown-item" href="#">Admissions</a></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item navbar_menubox-menu-item">
            <a className="nav-link navbar_menubox-menu-item-link active" aria-current="page" href="#">{languages[lang].header.nav.navItem2}</a>
          </li>
          <li className="nav-item navbar_menubox-menu-item">
            <a className="nav-link navbar_menubox-menu-item-link" href="#">{languages[lang].header.nav.navItem3}</a>
          </li>
          <li className="nav-item navbar_menubox-menu-item">
            <a className="nav-link navbar_menubox-menu-item-link" href="#">{languages[lang].header.nav.navItem4}</a>
          </li>
          <li className="nav-item navbar_menubox-menu-item">
            <a className="nav-link navbar_menubox-menu-item-link" href="#">{languages[lang].header.nav.navItem5}</a>
          </li>
        </ul>
        <div className="navbar_logobox">
          <a className="navbar-brand" href="#">
            <img className="navbar_logobox-logo" src={logo} alt="logo-img" /></a>
        </div>
        <div className="navbar_settingsbox">
          <ul className="navbar_settingsbox-menu">
            <li className="navbar_settingsbox-menu-item">
              <button className="navbar_settingsbox-menu-item-searchBtn">
                <BsSearch />
              </button>
            </li>
            <li className="navbar_settingsbox-menu-item">
              <a href="#" className="navbar_settingsbox-menu-item-phoneNumber">
                <BsFillTelephoneFill />+998 78 129 40 40
              </a>
            </li>
            <li className="navbar_settingsbox-menu-item nav-item dropdown">
              <select value={lang} onChange={(evt) => setLang(evt.target.value)} className="navbar_settingsbox-menu-item-language">
                <option value='uz'>UZ</option>
                <option value='ru'>RU</option>
                <option value='en'>EN</option>
              </select>
            </li>
            <li className="navbar_settingsbox-menu-item border-0">
              <BsList />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</div>
);
}

export default Navbar;