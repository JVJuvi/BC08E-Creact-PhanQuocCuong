import React, { Component } from 'react'
import Header from './Header';
import Products from './Products';

export default class Glasses extends Component {
   
    render() {
        return (
            <div>
                <Header />
                <Products />
            </div>
        )
    }
}
