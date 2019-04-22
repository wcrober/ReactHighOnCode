import React, {Component} from 'react';
import '../Styles/Header.css';

export class Header extends Component {
    render () {
        let headItems = this.props.headItems
        let newheadItems = headItems.map((newitems) => {
            return <li>{newitems}</li>
        })
        return (
            <ul className="header">
            <li>{newheadItems}</li>
            </ul>
        )
    }
}

