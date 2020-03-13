import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super();
        this.state = {
            date: new Date()
        }
        this.tick = this.tick.bind(this)
    }
    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.tick()
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Clock</h1>
                <div className="clockContainer">
                    <p>Date: {this.state.date.toDateString()}</p>
                    <p>Time: {this.state.date.toTimeString()}</p>
                </div>
            </div>
        )
    }
}
export default Clock;