import React, {Component} from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

const styles = {
	wrapper: {
		opacity: '1',
		display: 'flex',
		alignItems: 'center',
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		flexDirection: 'column',
	},
	container: {
		opacity: '1',
		textAlign: 'left',
		width: '90%',
		maxWidth: '900px',
		borderCollapse: 'collapse',
		marginTop: '20px',
	},
	header: {
		fontSize: '2em',
		marginBottom: '30px',
	},
	subHeaderBar: {
		fontSize: '1.2em',
	},
	subHeader: {
		textDecoration: 'underline',
		cursor: 'pointer',
		marginLeft: '10px',
		marginRight: '10px',
	},
	emptyTD: {
		height: '60px',
	},
	navbar: {
		position: 'absolute',
		bottom: '20px',
	},
	navItem: {
		marginLeft: '10px',
		marginRight: '10px',
	},
	arrow: {
		color: '#e0f7fa',
		width: '60px',
		textAlign: 'center',
	},
	tr: {
		verticalAlign: 'top',
		border: '15px solid white',
	},
}

class Skills extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			showContent: true,
			content: null,
		}
	}
	
	componentDidMount() {
		$('#skills-header').css({"animation":"fall 1s"});
		$('.skills-subHeader').css({"animation":"slide-fade 1.25s"});
		$('#skill-nav').css({"animation":"rise 1.5s"});
	}
	
	animateContent() {
		$('.skill-2').css({"animation":"slide-fade 1.1s"});
			setTimeout(() => {$('.skill-2').css({"animation":""})}, 1200)
		$('.skill-2-5').css({"animation":"slide-fade 1.3s"});
			setTimeout(() => {$('.skill-2-5').css({"animation":""})}, 1400)
		$('.skill-2-6').css({"animation":"slide-fade 1.5s"});
			setTimeout(() => {$('.skill-2-6').css({"animation":""})}, 1600)
	}
	
	showContent(tab) {
		if (tab === 'sites') { 
			this.setState({
				content: 
					<tbody>
						<tr className='skill-2' style={styles.tr}>
							<td>
								I build clean, modern websites that present your brand with professionalism and class.
							</td>
						</tr>	
						<tr className='skill-2-5' style={styles.tr}>
							<td>
								I use JavaScript + CSS + HTML & the most current frameworks available to deliver the experiences 
								that today's users have come to expect.
							</td>
						</tr>	
						<tr className='skill-2-6' style={styles.tr}>
							<td>
								I use WordPress as a Content Management System so that you can easily update and tweak 
								your site's content without relying on me or any other developer to help you out in the future.
							</td>
						</tr>
				</tbody>
			}, () => {
				this.animateContent();
			})
		} else if (tab === 'apps') {
			this.setState({
				content: 
					<tbody>
						<tr className='skill-2' style={styles.tr}>
							<td>
								I build custom full-stack apps for Web, iOS, and Android to fit your business' needs.
							</td>
						</tr>
						<tr className='skill-2-5' style={styles.tr}>
							<td>
								I can build & deploy fully-realized apps, or whip up prototypes to bring to investors. 
							</td>
						</tr>
						<tr className='skill-2-6' style={styles.tr}>
							<td>
								I can also consult on your app: discussing ideas and feasability, working through roadblocks, 
								coding features, fixing bugs, etc.
							</td>
						</tr>
					</tbody>
			}, () => {
				this.animateContent();
			})
		} else {
			this.setState({
				content:
					<tbody>
						<tr className='skill-2' style={styles.tr}>
							<td>
								I work for <em>you</em>, and communication is my highest priority. From the very start, 
								I work with you to make sure we are on the same page and we never waste each other's time
								on false starts or dead ends. 
							</td>
						</tr>	
					</tbody>
			}, () => {
				this.animateContent();
			})
		}	
	}
	
  render() {
    return (
			<div id='skills-wrapper' style={styles.wrapper}>
				<div id='skills-header' style={styles.header}>skills</div>
				<div className='skills-subHeader' style={styles.subHeaderBar}>
					<span className='skills-subHeader' 
								style={styles.subHeader}
								onClick={this.showContent.bind(this, 'sites')}>
						sites 
					</span>
					<span className='skills-subHeader' 
								style={styles.subHeader}
								onClick={this.showContent.bind(this, 'apps')}> 
							 apps 
					</span>
					<span className='skills-subHeader' 
								style={styles.subHeader}
								onClick={this.showContent.bind(this, 'communication')}> 
							 communication 
					</span>
				</div>
				
				<table id='skills-container' style={styles.container}>
						{this.state.content}
				</table>
				
				<div id='skill-nav' style={styles.navbar}>
					<Link to='/' style={styles.navItem}>home</Link>
					<Link to='projects' style={styles.navItem}>projects</Link>
					<Link to='about' style={styles.navItem}>about</Link>
					<Link to='contact' style={styles.navItem}>contact</Link>
				</div>
			</div>
    );
  }
}

export default Skills;