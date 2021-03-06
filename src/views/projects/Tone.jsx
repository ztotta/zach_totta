import React, {Component} from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom';

import tone from '../../../public/tone/toneQuiz.gif';
import toneCode from '../../../public/tone/tone-quiz-code.png';

import FlexContainerCol from '../../components/FlexContainerCol.jsx';
import BottomNavExplore from '../../components/BottomNavExplore.jsx';
import ProjectImg from '../../components/projects/ProjectImg.jsx';
import HorizontalLine from '../../components/HorizontalLine.jsx';
import ExploreHeadline from '../../components/projects/ExploreHeadline.jsx';
import ProjectSubHeadline from '../../components/projects/ProjectSubHeadline.jsx';
import ProjectText from '../../components/projects/ProjectText.jsx';

const styles = {
	wrapper: {
		margin: 'auto',
		padding: '10px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	spacerLine: {
		opacity: '0.5',
		height: '0px', 
		background: 'black', 
		margin: 'auto',
		width: '1px',
	},
	arrowTip: {
  	opacity: '0.6',
		margin: 'auto',
		fontWeight: '100',
		marginTop: '-5px',
		textAlign: 'center',
	},
	img: {
		width: '100%',
		minWidth: '300px',
		maxWidth: '600px',
		margin: 'auto',
	},
	nav: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 'auto',
		marginTop: '20px',
		marginBottom: '20px',
	},
	links: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '20px auto 0 auto',
	},
	linkBtn: {
		margin: '0px 10px',
    border: 'none',
    border: '1px solid black',
    padding: '10px',
    fontSize: 'medium',
    cursor: 'pointer',
		background: 'white',
	},
}

class Tone extends Component {
	componentWillMount() {
//		window.scroll(0,0)
		console.log('componentWillMount')
	}
	
	componentDidUpdate() {
		ReactDOM.findDOMNode(this).scrollTop = 0
		console.log('componentDidUpdate, tone')
	}
	
	componentWillUnmount() {
//		window.scroll(0,0)
		console.log('componentWillUnmount')
	}
	
	componentDidMount() {
		window.scrollTo(0,0)
//		ReactDOM.findDOMNode(this).scrollIntoView(); 
		// Grow-right animation, by windowHeight:
		$(".spacer-line-vertical").animate({ height: window.innerHeight * 0.7 }, 1000);
	}
	
  render() {
    return (
			<div style={styles.wrapper}>
				<div className='spacer-line-vertical' style={styles.spacerLine}></div>
				<div style={styles.arrowTip}>v</div>
				<FlexContainerCol>
					<ExploreHeadline headline='_toneQuiz' />

					<ProjectSubHeadline subHeadline='React | React-Motion | Node' />

					<div style={styles.links}>
						<a href="https://ztotta.github.io/tone-quiz/" target='_blank' className=''><button className='buttonz' style={styles.linkBtn}>live site</button></a>
						<a href="https://github.com/ztotta/tone-quiz" target='_blank' className=''><button className='buttonz' style={styles.linkBtn}>repository</button></a>
					</div>
					
					<HorizontalLine />

					<ProjectText text='This is a single-page React App that lets users test their pitch recognition in a short quiz and then receive their results.' />
					
					<HorizontalLine />
				
					<img style={styles.img} src={tone} alt='tone' />

					<HorizontalLine />

					<ProjectText text='As a pure frontend app, my focus
							 				 was on the User Interaction/Experience, with special attention paid to component responsiveness, React Motion animations, 
							 				 and mobile-first design. I employed React Music to handle the pitch creation.' />

					<HorizontalLine />
					
					<ProjectText text="The biggest challenges here were in setting up the game logic and synchronizing the animations with the user actions. 
							This snippet shows the logic that checks for correctness after a user guess, triggering animations, updating the state
							of the user's quiz, and readying the next question, depending on whether the user guessed correctly or not:" />

					<HorizontalLine />
					
					<ProjectImg source={toneCode} alt='create-station' />

					<HorizontalLine />
					

					<BottomNavExplore prev='loops-with-friends' next='8-bit-beatdown' />	
				</FlexContainerCol>
			</div>
    );
  }
}

export default Tone;