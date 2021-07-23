import React, { Component } from 'react'
import {connect} from 'react-redux';

class ChonBurger extends Component {


    renderTable = () => {
        let {burger, menu} = this.props;
        return Object.entries(menu).map(([name,value],index) => {
            return (
                <tr>
                    <td>{name}</td>
                    <td>
                        <button className="btn btn-success" onClick={()=>this.props.tangGiam(name,1)}>+</button>
                        {burger[name]}
                        <button className="btn btn-danger" onClick={()=>this.props.tangGiam(name,-1)}>-</button>
                    </td>
                    <td>{value}</td>
                    <td>{burger[name] * value}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h3>Chọn thức ăn</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Tên món</th>
                            <th></th>
                            <th>Giá món</th>
                            <th>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        burger: state.BurgerReducer.burger,
        menu: state.BurgerReducer.menu,
        total: state.BurgerReducer.total
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        tangGiam: (name,tangGiam) => {
            const action = {
                type: 'TĂNG_GIAM',
                name,
                tangGiam
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ChonBurger)
