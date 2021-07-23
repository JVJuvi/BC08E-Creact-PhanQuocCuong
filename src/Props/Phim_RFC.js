import React from 'react'

export default function Phim_RFC({phim_input,...restParam}) {
    // khai báo ngay trên function
    // let phim = props.phim_input;
    return (
      <div className="card">
        <img className="card-img-top" src={phim_input.hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{phim_input.tenPhim}</h4>
          <p className="card-text">Text</p>
        </div>
      </div>
    )
}
