import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.jsx';
import Tabs from './tabs'

const myTab = [{ title: 'One', content: 'I am the first' },
{ title: 'Two', content: 'Second pane here' },
{ title: 'Three', content: 'Third pane here' }]

class Root extends React.Component {
    render() {
        return (
            <div>
                <Clock />
                <Tabs tab={myTab} />
            </div>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));