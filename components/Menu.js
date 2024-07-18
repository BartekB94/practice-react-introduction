import React from "react";
import MenuItem from '../03/components/MenuItem'
import PropTypes from 'prop-types'

class Menu extends React.Component {
    render() {
        const list = this.props.items.map(item => {
            return <MenuItem text={item.text} url={item.url}/>
        })
        return (
            <ul>
                {list}
            </ul>
        );
    }
}

Menu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Menu