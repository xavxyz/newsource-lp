import React from 'react';

export default class Details extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="section section__more-grid">
					<div className="row">
						<h1 className="center text-secondary-color">Notre méthode</h1>
						<h3 className="center">Tu remplis le formulaire</h3>
						<div className="col s12 m3 offset-m2">
							<div className="icon-block">
								<img className="icon icons8-Weightlifting" src="data:image/png;base64,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" width="96" height="96"/>
								<h5 className="center flow-text">Entrepreneur déterminé</h5>
							</div>
						</div>
						<div className="col s12 m2">
							<div className="icon-block">
								<img src="/img/plus.png" width="96" height="96"/>
							</div>
						</div>
						<div className="col s12 m3">
							<div className="icon-block">
								<img className="icon icons8-Sail-Boat" src="data:image/png;base64,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" width="100" height="100"/>
								<h5 className="center flow-text">Projet passionnant</h5>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col s12 m4 offset-m4">
							<div className="icon-block">
								<img src="/img/down.png" className="down" width="96" height="96"/>
							</div>
						</div>
					</div>
					<div className="row">
						<h3 className="center">Tu reçois des solutions d'action</h3>
						<div className="col s12 m2 offset-m1">
							<div className="icon-block">
								<img className="icon icons8-Center-Direction" src="data:image/png;base64,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" width="96" height="96"/>
								<h5 className="center flow-text">Focus à la semaine</h5>
							</div>
						</div>
						<div className="col s12 m2">
							<div className="icon-block">
								<img src="/img/plus.png" width="96" height="96"/>
							</div>
						</div>
						<div className="col s12 m2">
							<div className="icon-block">
								<img className="icon icons8-Telescope" src="data:image/png;base64,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" width="96" height="96"/>
								<h5 className="center flow-text">Prise de recul</h5>
							</div>
						</div>
						<div className="col s12 m2">
							<div className="icon-block">
								<img src="/img/plus.png" width="96" height="96"/>
							</div>
						</div>
						<div className="col s12 m2">
							<div className="icon-block">
								<img className="icon icons8-Action" src="data:image/png;base64,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" width="96" height="96"/>
								<h5 className="center flow-text">Actions concrètes</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}