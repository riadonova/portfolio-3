import React from 'react';
import './App.scss';
import {Navbar} from "./components/navbar/navbar.component";
import {Carousel} from "./components/carousel/carousel.component";
import {Form} from "./components/form/form.component";
import {Content} from "./components/content/content.component";
import {TapeComponent} from "./components/tape/tape.component";
import {Footer} from "./components/footer/footer.component";

export class App extends React.Component {
    render () {
        return (
            <div className="App pt-5">
                <Navbar/>
                <Carousel/>
                <Form/>
                <Content/>
                <TapeComponent/>
                <Footer/>
            </div>
        );
    }
}
