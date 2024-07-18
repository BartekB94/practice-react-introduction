import React from "react";
import Menu from "./Menu";

class Nav extends React.Component {
    render() {
        const menuItems = [
            { text: 'Strona główna', url: '/' },
            { text: 'WWW', url: '/www' }
        ];

        return (
            <nav>
                <Menu items={menuItems} />
            </nav>
        )
    }
}


export default Nav