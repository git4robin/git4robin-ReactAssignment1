import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLinkedin,
	faFacebook,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Icons = {
	facebook: { icon: faFacebook, link: 'https://fb.com' },
	twitter: { icon: faTwitter, link: 'https://fb.com' },
	instagram: { icon: faInstagram, link: 'https://instagram.com/_.rawbin' },
	linkedin: { icon: faLinkedin, link: 'https://fb.com' },
};

export default function Social() {
	return (
		<div className="container app-home">
			<div className="flex jc col">
				<h1>
					Let's get connected
					<br /> Follow me on social media
				</h1>
				<div className="flex ac social">
					{Object.keys(Icons).map((s, i) => (
						<a
							href={Icons[s].link}
							key={i}
							target="_blank"
							rel="noreferrer"
							title={s}
						>
							<FontAwesomeIcon icon={Icons[s].icon} size="3x" />
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
