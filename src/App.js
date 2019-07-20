import React from 'react';
import './App.scss';
import {Navbar} from "./components/navbar/navbar.component";
import {Carousel} from "./components/carousel/carousel.component";
import {Form} from "./components/form/form.component";

export class App extends React.Component {
    render () {
        return (
            <div className="App">
                <Navbar/>
                <Carousel/>
                <Form/>
            </div>
        );
    }
}
