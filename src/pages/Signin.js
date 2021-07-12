import React from 'react';

import brokenIcon from './../assets/brokrn.png';

export default function Signin() {
	return (
		<div className="container app-home">
			<div className="flex jc col">
				<div className="snap-icon">
					<img src={brokenIcon} alt="Aw!!" />
				</div>
				<h1>
					Aw!! Snap
					<br /> The page is broken
				</h1>
				<p>
					The User Accounts Controller will be ready soon. Till then the page
					can't be accessed :(
				</p>
			</div>
		</div>
	);
}
