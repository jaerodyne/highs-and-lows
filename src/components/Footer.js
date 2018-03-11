import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const Footer = () => {
		return (
			<div className="footer">
				<ul>
					<li><a href="https://www.facebook.com/jilliansomeramusic/"><FontAwesomeIcon icon={["fab", "facebook"]} /></a></li>
					<li><a href="https://www.youtube.com/watch?v=-VtJDn4VXlc&list=PLzhsZ7gBote-41rL9qQU7bdAZo_Q6bPTd"><FontAwesomeIcon icon={["fab", "youtube"]} /></a></li>
					<li><a href="https://open.spotify.com/artist/5sVYv8ruRxtVYloIOvcWqe"><FontAwesomeIcon icon={["fab", "spotify"]}/></a></li>
					<li><a href="http://jilliansomera.com"><FontAwesomeIcon icon="globe"/></a></li>
				</ul>
				<p className="copyright">&#169;2018 Jillian Somera</p>
			</div>
		);
};

export default Footer;