import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const Footer = () => {
		return (
			<div className="footer">
				<ul>
					<li><a href="https://www.facebook.com/jilliansomeramusic/"><FontAwesomeIcon icon={["fab", "facebook"]} /></a></li>
					<li><a href="https://www.instagram.com/jsbetaoption"><FontAwesomeIcon icon={["fab", "instagram"]}/></a></li>
					<li><a href="https://open.spotify.com/album/76UmyyHrUavg49MOzx77wE?si=abq_xRcXSiS_V5EubARiJg"><FontAwesomeIcon icon={["fab", "spotify"]}/></a></li>
					<li><a href="https://www.youtube.com/watch?v=-VtJDn4VXlc&list=PLzhsZ7gBote-41rL9qQU7bdAZo_Q6bPTd"><FontAwesomeIcon icon={["fab", "youtube"]} /></a></li>
				</ul>
				<p className="copyright">&#169;2019 Jillian Somera</p>
			</div>
		);
};

export default Footer;