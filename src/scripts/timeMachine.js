import React from 'react'

const TimeMachine = React.createClass({
	render: function() {
		return (
			<div className='time-machine' >
	 			<h1>TimeMachine</h1>
	 			<Console />
	 		</div>
			)
	}
})


const Console = React.createClass({
	_moveBackward: function() {
		this.setState({
			progress: 'backward',
			acceleration: .9
		})
	},

	_moveForward: function() {
		this.setState({
			progress: 'forward',
			acceleration: .9
		})
	},

	_pause: function() {
		this.setState({
			progress: 'paused',
			tickRate: 1000
		})
	},

	_tick: function() {
		var change = 0
		if (this.state.progress === 'backward') {
			change = -1
		}
		else if (this.state.progress === 'forward') {
			change = 1
		}
		this.setState({
			year: this.state.year + change,
			tickRate: this.state.tickRate * this.state.acceleration
		})
		setTimeout(this._tick, this.state.tickRate)
	},

	componentDidMount: function() {
		this._tick()
	},

	getInitialState: function() {
		return {
			year: 2017,
			progress: 'paused',
			tickRate: 1000,
			acceleration: 1
		}
	},

	 render: function() {

	 	return (
	 		<div className='control-panel' >
	 			<h2>{this.state.year}</h2>
	 			<div className='buttons'>
	 				<button 
	 					className={this.state.progress === 'backward' ? 'active' : ''} 
	 					onClick={this._moveBackward} 
	 					value='backward'>backward
	 					</button>
	 				<button 
	 					className={this.state.progress === 'paused' ? 'active' : ''} 
	 					onClick={this._pause} 
	 					value='stop'>stop
	 					</button>
	 				<button 
	 					className={this.state.progress === 'forward' ? 'active' : ''} 
	 					onClick={this._moveForward} 
	 					value='forward'>forward
	 					</button>
	 			</div>
	 		</div>
	 	)
 	}
})

export default TimeMachine