import React, { Component } from 'react'

export default class ModalGioHang extends Component {
    rendarTable = () =>{
        let{gioHang,xoaSanPham,tangGiamSoLuong} = this.props;
        return gioHang.map((sp,index)=>{
            return (
                <tr key={index}>
                    <td>{sp.maSP}</td>
                    <td><img src={sp.hinhAnh} width={50} height={50} /></td>
                    <td>{sp.tenSP}</td>
                    <td>
                        <button className="btn btn-primary" onClick={()=>tangGiamSoLuong(sp.maSP, true)}>+</button>
                        {(sp.soLuong).toLocaleString()}
                        <button className="btn btn-primary" onClick={()=>tangGiamSoLuong(sp.maSP, false)}>-</button>
                    </td>
                    <td>{sp.giaBan}</td>
                    <td>{(sp.giaBan * sp.soLuong).toLocaleString()}</td>
                    <td><button className="btn btn-danger" onClick={()=>xoaSanPham(sp.maSP)}>Xoá</button></td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document" style={{maxWidth:'900px'}}>
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Giỏ hàng của bạn</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td>Mã SP</td>
                                    <td>Hình ảnh</td>
                                    <td>Tên SP</td>
                                    <td>Số lượng</td>
                                    <td>Đơn giá </td>
                                    <td>Thành tiền</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.rendarTable()}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="5"></td>
                                    <td>Tổng tiền</td>
                                    <td>{this.props.gioHang.reduce((tongTien,sp,index)=>{
                                        return tongTien += sp.giaBan *sp.soLuong;
                                    },0).toLocaleString()}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
