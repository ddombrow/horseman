const React = require('react');

const bodyStyle = {
	padding: "20px"
};

class HelloMessage extends React.Component {
	
	render() {
		return <html>
			<head>
				<title>{this.props.title}</title>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.1/css/bulma.min.css"/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>
			<body style={bodyStyle}>
				<div className="box">
					<article className="media">
						<div className="media-content">
							<div className="content">
								<p>
								<strong>Hello {this.props.name}</strong>
								<br/>
								Data: {JSON.stringify(this.props.data)}
								</p>
							</div>
						</div>
					</article>
				</div>
			</body>
		</html>;
	}
}

module.exports = HelloMessage;