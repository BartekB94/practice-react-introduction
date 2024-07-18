import React from "react";
import PropTypes from 'prop-types'

class MenuItem extends React.Component {
    render() {
        const {text, url} = this.props
        return (
            <li><a href={url}>{text}</a></li>
        )
    }
}

MenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default MenuItem