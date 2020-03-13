import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.jsx'

class Root extends React.Component {
    render() {
        return (
            <div>
                <Clock />
            </div>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));