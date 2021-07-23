import React, { Component } from 'react'

export default class Modal extends Component {


    renderTr = () =>{
        let {sanPhamModal} = this.props;
        let arrResult = sanPhamModal.map((sanPham, index)=>{
            return (
                `<tr>
                    <td>${sanPham.maSP}</td>
                    <td>${sanPham.hinhAnh}</td>
                    <td>${sanPham.tenSP}</td>
                    <td>
                        <button className="btn btn-primary">+</button>
                        ${sanPham.maSP}
                        <button className="btn btn-primary">-</button>                      
                    </td>
                    <td>${sanPham.manHinh}</td>
                    <td>${sanPham.heDieuHanh}</td>
                </tr>`
            )
        })
        return arrResult;
    }
    renderTable = () =>{
        let arrHtml = this.renderTr();
        let content = '';
        arrHtml.forEach((sanPhamHTML, index)=>{
            content += sanPhamHTML;
        })
        document.querySelector('#tblSanPham').innerHTML = content;
    }

    render() {
        return (
                            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document" style={{maxWidth: '750px'}}>
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Giỏ hàng</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                       <table className="table">
                           <thead>
                                <tr>
                                    <th>Mã sản phẩm</th>
                                    <th>Hình ảnh</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Số lượng</th>
                                    <th>Đơn giá</th>
                                    <th>Thành tiền</th>
                                </tr>
                           </thead>
                           <tbody id="tblSanPham">
                                
                           </tbody>
                       </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Đóng</button>
                    </div>
                    </div>
                </div>
                </div>

        )
    }
}
