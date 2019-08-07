import  Name from './name';
import './counter'
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<Name/>,document.getElementById('name'));

/*
import {LitElement, html, property} from 'lit-element';

class CustomElement extends LitElement {
    constructor(){
        super();
        this.name = "milia";
    }

    render() {
        return html`
        <h1>Hello From ${this.name}</h1>
        `
    }
}

customElements.define('my-header', CustomElement);*/


