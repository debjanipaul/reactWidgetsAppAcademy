import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
        this.changeIndex = this.changeIndex.bind(this);
        this.createList = this.createList.bind(this);
    }

    changeIndex(idx) {
        return () => this.setState({
            index: idx
        })
    }

    createList() {
        return this.props.tab.map((tab, idx) => {
            return <li key={idx} onClick={this.changeIndex(idx)}><h1>{tab.title}</h1></li>
        })
    }

    render() {
        return (
            <div className="tab">
                <ul>
                    {this.createList()}
                </ul>
                <article>{this.props.tab[this.state.index].content}</article>
            </div>
        )
    }
}
export default Tabs;