import React from 'react'
import '/Users/pernilla/Documents/portfolio/portfolio/src/App.css';
import useStyles from "./styles";
import Typical from 'react-typical';


function Construction() {

    const classes = useStyles();

    return (
        <div className="App">
            <header className="App-header">
                <p className={classes.coming}>
                    <Typical
                        loop={1}
                        steps={['Pernilla Sjöberg', 2000, 'Pernilla Sjöberg', 10000]}>
                    </Typical>
                </p>
            </header>
        </div>
    );
}

export default Construction;
