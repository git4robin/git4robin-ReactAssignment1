import React from 'react';

export default function Home() {
	return (
		<div className="container app-home">
			<div className="flex jc col">
				<h1>
					Hi, my name is <br /> Robin Ranjan
				</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
					convallis quis nibh quis faucibus. Cras fermentum sed purus ac luctus.
					Maecenas eget ante ipsum. Nulla facilisi. Nulla vel lorem sit amet
					arcu maximus ultricies iaculis et velit. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Aliquam non elementum nisi. Vivamus
					convallis iaculis condimentum. Mauris in porta est. Phasellus sed
					accumsan nibh, nec elementum mauris. Curabitur elit lorem, vehicula
					non dictum sed, elementum a nibh. Morbi a tortor non magna porta
					imperdiet. Proin at libero condimentum, finibus ipsum id, posuere
					nibh. Ut hendrerit, ipsum et auctor porta, erat purus tempor nisl, ac
					egestas ante felis vestibulum orci. Nunc euismod est non volutpat
					accumsan.
				</p>
				<a className="btn btn-purple" href="/contact">
					Talk To Me
				</a>
			</div>
		</div>
	);
}
