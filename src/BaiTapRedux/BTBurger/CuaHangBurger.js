import React, { Component } from 'react'
import HienThiBurger from './HienThiBurger';
import ChonBurger from './ChonBurger';

export default class CuaHangBurger extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <HienThiBurger />
                    </div>
                    <div className="col-5">
                        <ChonBurger />
                    </div>
                </div>
            </div>
        )
    }
}
