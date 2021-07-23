import React, { Component } from 'react'

export default class ChiTietSanPham extends Component {
    render() {
        let{sanPhamChiTiet} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h3>{sanPhamChiTiet.tenSP}</h3>
                        <img src={sanPhamChiTiet.hinhAnh} width={350} height={350} />
                    </div>
                    <div className="col-8">
                        <h3 className="text-center">Chi tiết sản phẩm</h3>
                        <table className="table">
                            <tr>
                                <th>Màn hình</th>
                                <th>{sanPhamChiTiet.manHinh}</th>
                            </tr>
                            <tr>
                                <th>Hệ điều hành</th>
                                <th>{sanPhamChiTiet.heDieuHanh}</th>
                            </tr>
                            <tr>
                                <th>Camera trước</th>
                                <th>{sanPhamChiTiet.cameraTruoc}</th>
                            </tr>
                            <tr>
                                <th>Camera sau</th>
                                <th>{sanPhamChiTiet.cameraSau}</th>
                            </tr>
                            <tr>
                                <th>RAM</th>
                                <th>{sanPhamChiTiet.ram}</th>
                            </tr>
                            <tr>
                                <th>ROM</th>
                                <th>{sanPhamChiTiet.rom}</th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
