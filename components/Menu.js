import React from "react";
import PropTypes from 'prop-types'

class Menu extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map((item, index) => (
                    <li key={index}>
                        <a href={item.url}>{item.text}</a>
                    </li>
                ))}
            </ul>
        );
    }
}

Menu.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired
}

export default Menu