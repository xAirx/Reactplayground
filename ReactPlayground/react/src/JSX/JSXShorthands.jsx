// Make use of JSX shorthands

import { Component } from "react"

/* In this example we are using the prop showTitle to display the title of our app within a navbar Component.
 */

// src/app.js


// WRONG

export default function App() {
    return (
        <main>
           {/*  // We do not need to set our prop to true as the default value is TRUE. */}
            <Navbar showTitle={true} title="Navbar" />
        </main>
    )
}

const navbar = (showTitle, title) => {
    <>
        <div className="Navbar">
            {showTitle ? <h1>{title}</h1>: ""}
        </div>
    </>
}


//RIGHT

const ButtonComponent = ({ type, text, onChange }) => {
    <Button type={type} onChange={onChange}>
        {text}
    </Button>
}


export default function App () {
    const [state, setState] = useState(true)


    // set state to the reverse using a callback function
    const lightSwitch = () => setState(state => !state);

    return (
        <main>
            <NavbarComponent showTitle title="Navbar">
                {children}
                <ButtonComponent type="button" text="button" onChange={lightSwitch}/>
            </NavbarComponent>
        </main>
    )
}

const NavbarComponent = (showTitle, title, children) => {
    return (
        <div>
           {/*   // If showtitle and title */}
            {showTitle && <h1>{title}</h1>}
            {/*  // Button component is rendered here */}
            {children}
        </div>
    )

}
