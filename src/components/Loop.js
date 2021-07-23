import React, { Component } from 'react'

export default class Loop extends Component {

    state = {
        mangSanPham : [
            {maSP: 1, tenSP: 'Iphone X', gia: 1000},
            {maSP: 2, tenSP: 'Samsung ', gia: 2000},
            {maSP: 3, tenSP: 'Nokia', gia: 3000},
        ]
    }
    renderTable = () =>{
        return this.state.mangSanPham.map((product, index)=>{
            return (
            <tr key={index}>
                <td>{product.maSP}</td>
                <td>{product.tenSP}</td>
                <td>{product.gia}</td>
            </tr>
            )
        });
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="bg-dark text-white text-center">
                        <h1>Demo vòng lạp react</h1>           
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Mã sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Giá sản phẩm</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
