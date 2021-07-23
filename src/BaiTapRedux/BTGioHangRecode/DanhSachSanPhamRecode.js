import React, { Component } from 'react'
import data from '../../data/phoneData.json';
import SanPhamRecode from './SanPhamRecode';

export default class DanhSachSanPhamRecode extends Component {

    renderSanPham = () => {
        return data.map((sp,index) => {
            return (
                <div className="col-4" key={index}>
                    <SanPhamRecode sp={sp}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
