import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector('#root'))

const myUglyStyles = {
    border: '3px solid green',
    backgroundColor: 'yellow',
    color: 'red',
}

const HeaderFn = () => <header style={myUglyStyles}>Moja pierwsza strona w React Fn</header>

class HeaderCl extends React.Component {
    render() {
        return <header style={myUglyStyles}>Moja pierwsza strona w React Cl</header>
    }
}

const App = () => (
    <>
        <HeaderCl/> 
        <HeaderFn/>
    </>
)

root.render(<App/>)