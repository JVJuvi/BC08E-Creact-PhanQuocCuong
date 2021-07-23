import React, { Component } from 'react'

export default class Phim_RCC extends Component {

    // khác function nên nên dùng this.props

    render() {

        const {hinhAnh, tenPhim, moTa} = this.props.phim_input;

        return (
            <div className="card">
            <img className="card-img-top" src={hinhAnh} alt />
            <div className="card-body">
              <h4 className="card-title">{tenPhim}</h4>
              <p className="card-text">{moTa.length > 100 ? moTa.substr(0,100) + '...' : moTa}</p>
            </div>
          </div>
        )
    }
}
