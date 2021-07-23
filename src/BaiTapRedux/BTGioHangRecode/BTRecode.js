import React, { Component } from 'react'
import DanhSachSanPhamRecode from './DanhSachSanPhamRecode'
import ModalSanPhamRecode from './ModalSanPhamRecode'

export default class BTRecode extends Component {
    render() {
        return (
            <div className="container">
                <h3 className="text-center">BÀI TẬP REDUX RECODE</h3>
                <ModalSanPhamRecode />
                <DanhSachSanPhamRecode />
            </div>
        )
    }
}
