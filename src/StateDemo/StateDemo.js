import React, { Component } from 'react'

export default class StateDemo extends Component {


    /**
        thuộc tính state
        + là thuộc tính có sẳn cảu react clas componets, dùng để chứa giá trị thay đổi trên giao diện khi người dùng thao tác
     */

    state ={
        isLogin:false ,
        fSize: 16,
        imgSrc: './img/CarBasic/products/red-car.jpg'
    }

    // isLogin = false;
    userName = 'cường'

    rendarLogin = () =>{
        if(this.state.isLogin){
            return <span className="font-weight-bold text-white">Hello {this.userName}</span>
        }
        return <button className="btn btn-outline-success my-2 my-sm-0" onClick ={()=>{
            this.handelLongin();
        }} type="submit">Đăng nhập</button>
    }

    handelLongin = () => {
        // this.state.isLogin = true // không được gắn giá trị state trực tiếp mà phải thông qua các phương thức setState
        let newState = {
            isLogin:true
        }
        /*this.setState(newState) 
            +phương thức này do react class components cung cấp. dùng để thay đổi cá giá trị state
            +setState được gọi thì giao diện sẽ được rendar lại (hàm rendar sẽ chạy lại)
            +phương thức setState là pt bất đồng bộ
        */
        // thay đổi giá trị state và rendar lại giao diện
        this.setState(newState);
        console.log(this.state.isLogin);
 
    }
        
    handleChangeColor = (color) =>{
        this.setState ({
            imgSrc: `./img/CarBasic/products/${color}-car.jpg`
        })
    }

    // renderTable 

    productList =[
        {id: 1, name: 'Black car', price: 1000, img: './img/CarBasic/products/black-car.jpg'},
        {id: 2, name: 'Red car', price: 2000, img: './img/CarBasic/products/red-car.jpg'},
        {id: 3, name: 'Silver car', price: 3000, img: './img/CarBasic/products/silver-car.jpg'},
        {id: 4, name: 'Steel car', price: 4000, img: './img/CarBasic/products/steel-car.jpg'},
    ]
     renderTable = () =>{
         let arrContent = this.productList.map((product, index)=>{
            return <tr>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td><img src={product.img} width={100} height={50} /></td>
                    </tr>                 
         });
         return arrContent;
     }
     
    render() {

        return (
            <div>
                <div className="container">
                    <nav className="navbar navbar-expand-sm navbar-dark bg-dark" style={{backgroundColor: '#e3f2fd'}}>
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            {/* {this.isLogin ? <span className="font-weight-bold text-white">Hello {this.userName}</span> : <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Đăng nhập</button>} */}
                            {this.rendarLogin()}
                        </form>
                        </div>
                    </nav>

                    <div >
                        <h3>Bài tập tăng giãm phong chữ</h3>
                        <p style={{fontSize: `${this.state.fSize}px`}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus asperiores aperiam eaque velit animi fugiat possimus deleniti excepturi beatae ipsam eos molestias quis corporis optio, autem laborum. Quod, doloribus pariatur.</p>   

                        <button className="btn btn-outline-danger mr-2" onClick={()=>{
                            this.setState({
                                fSize: this.state.fSize +2
                            })
                        }}>+</button> 
                        <button className="btn btn-outline-danger mr-2" onClick={()=>{
                            this.setState ({
                                fSize: this.state.fSize -2
                            })
                        }}>-</button>          
                    </div>               

                    <div className="container">
                        <h3>Bài tập chọn xe</h3>

                        <div className="row">
                            {/* <div className="col-6">
                                <img src={this.state.imgSrc} alt='...' className="w-100"/>
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-3">
                                        <button style={{ background: 'red'}} className="btn text-white" onClick={()=>{
                                            this.handleChangeColor('red');
                                        }}>red</button>
                                    </div>
                                    <div className="col-3">
                                        <button style={{ background: 'silver'}} className="btn text-white" onClick={()=>{
                                            this.handleChangeColor('silver');
                                        }}>silver</button>
                                    </div>
                                    <div className="col-3">
                                        <button style={{ background: 'black'}} className="btn text-white" onClick={()=>{
                                            this.handleChangeColor('black');
                                        }}>black</button>
                                    </div>
                                    <div className="col-3">
                                        <button style={{ background: 'gray'}} className="btn text-white" onClick={()=>{
                                            this.handleChangeColor('steel');
                                        }}>steel</button>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-6">
                                <img src={this.state.imgSrc} className="w-100" />
                            </div>
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-3">
                                        <button style={{background: 'red'}} className="btn text-white" onClick ={()=>{
                                            this.handleChangeColor('red')
                                        }}>Red</button>
                                    </div>
                                    <div className="col-3">
                                        <button style={{background: 'black'}} className="btn text-white" onClick={()=>{
                                            this.handleChangeColor('black')
                                        }}>Black</button>
                                    </div>
                                    <div className="col-3">
                                        <button style={{background: 'silver'}} className="btn text-white">Silver</button>
                                    </div>
                                    <div className="col-3">
                                        <button style={{background: 'gray'}} className="btn text-white">Gray</button>  
                                    </div>                                                                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-center">LIST OF FASHION CARS</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTable()};
                        </tbody>
                    </table>

                </div>             
            </div>
        )
    }
}

