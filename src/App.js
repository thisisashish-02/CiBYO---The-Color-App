import React, { Component } from 'react';
import Palette from './Palette';
import { Switch, Route } from 'react-router-dom';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => <h1>PALETTE LIST GOES HERE</h1>} />
                <Route
                    exact
                    path="/palette/:id"
                    render={() => <h1>INDIVIDUAL PALETTE</h1>}
                />
            </Switch>
            // <div>
            //     <Palette palette={generatePalette(seedColors[3])} />
            // </div>
        )
    }
}

export default App;
