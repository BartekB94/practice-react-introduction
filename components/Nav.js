import React from "react";
import Menu from "./Menu";

class Nav extends React.Component {
    render() {
        const itemsArr = [
            { text: 'Strona główna', url: '/' },
            { text: 'WWW', url: '/www' }
        ]
        return (
            <nav>
                <Menu items={itemsArr} />
            </nav>
        )
    }
}

export default Nav