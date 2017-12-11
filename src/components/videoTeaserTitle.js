import React from 'react'
import Transition from 'react-transition-group/Transition'

const duration = 1000

const defaultStyle = {
	transition: `background ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`,
	opacity: 0,
	padding: '10px'
}

const transitionStyles = {
	entering: { opacity: 1, background: 'lightgreen'},
	entered: { opacity: 1 }
}

const VideoTeaserTitle = () =>
	<Transition in={true} timeout={duration}>
		{(transitionState => {
			return (
				<span style={{
					...defaultStyle,
					...transitionStyles[transitionState]
				}}>
					Jillian Somera and the Beta Option
					The Making of Highs and Lows
				</span>
			)
		})}
	</Transition>

export default VideoTeaserTitle