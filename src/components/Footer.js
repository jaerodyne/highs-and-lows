import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const Footer = () => {
		return (
			<div className="footer">
				<ul className="social-links">
					<li><FontAwesomeIcon icon={["fab", "facebook"]} /></li>
					<li><FontAwesomeIcon icon={["fab", "youtube"]} /></li>
					<li><FontAwesomeIcon icon={["fab", "spotify"]}/></li>
					<li><FontAwesomeIcon icon="globe"/></li>

				</ul>
				<p className="copyright">&#169;2017 Jillian Somera</p>
			</div>
		);
};

export default Footer;