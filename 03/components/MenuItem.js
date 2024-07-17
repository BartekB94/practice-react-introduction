import React from "react";

export default class MenuItem extends React.Component {
    render() {
        const {text, url} = this.props
        return (
            <li><a href={url}>{text}</a></li>
        )
    }
}