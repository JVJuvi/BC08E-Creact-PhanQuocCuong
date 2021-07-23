//khởi tạo giá trị ban đâù của store
const stategioHang = {
    gioHang: [],
}

export const GioHangReducer = (state = stategioHang, action) =>{
    switch(action.type){
        case 'THEM_GIO_HANG': {
            //xử lý logic thêm giỏ hàng
            let gioHangCapNhat = [...state.gioHang];
            let index = gioHangCapNhat.findIndex((sp)=>sp.maSP === action.spGioHang.maSP);
            if(index !== -1){
                gioHangCapNhat[index].soLuong +=1;
            }else{
                gioHangCapNhat.push(action.spGioHang);
            }
            state.gioHang = gioHangCapNhat;
            return {...state};
        }
        case 'XOA GIO HANG': {
            let gioHangCapNhat = [...state.gioHang];
            gioHangCapNhat.splice(action.index, 1);
            state.gioHang = gioHangCapNhat;
            return{...state};
        }
        case 'XOA GIO HANG MANGSP': {
            let gioHangCapNhat = [...state.gioHang];
            let index = gioHangCapNhat.findIndex(sp => sp.maSP === action.maSP);
            if(index !== -1){
                gioHangCapNhat.splice(index,1)
            }
            state.gioHang = gioHangCapNhat;
            return{...state};
        }
    }




    return {...state};
}