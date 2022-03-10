import React from 'react';
import './Header.scss';
import languages from '../../Localization/Languages';


function Header({lang}) {
return (
<header className='header' style={{ backgroundColor: 'dimgray' }}>
	<div className='container'>
		<div className="row">
			<div className="col-12 col-lg-8">
				<div className="header_textbox">
					<h1 className="header_textbox-title">{languages[lang].header.title1}</h1>
					<p className="header_textbox-span">{languages[lang].header.title2}</p>
					<div className="header_textbox-underline"></div>
				</div>
				<button className="header_button btn">
					YTIT life
				</button>
			</div>
		</div>
	</div>
</header>
);
}

export default Header;