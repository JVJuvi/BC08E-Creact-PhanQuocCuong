import React, { Component } from 'react'
import CuaHangBurger from './CuaHangBurger';
import './BaiTapBurger.css';

export default class BTBuger extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Bài tập burger</h3>
                <CuaHangBurger />
            </div>
        )
    }
}
