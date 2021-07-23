import React, { Component } from 'react'
import {connect} from 'react-redux';

class TableSinhVien extends Component {

    renderTable = () => {
        let {mangSinhVien} = this.props;
        return mangSinhVien.map((sv,index) => {
            return (
                <tr key = {index}>
                    <td>{sv.maSV}</td>
                    <td>{sv.tenSV}</td>
                    <td>{sv.sdt}</td>
                    <td>{sv.email}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <table className="table">
                <thead className="text-white bg-dark">
                    <tr>
                        <th>Mã sinh viên</th>
                        <th>Tên sinh viên</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTable()}
                </tbody>
            </table>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien
    }
}

export default connect(mapStateToProps,null)(TableSinhVien)
