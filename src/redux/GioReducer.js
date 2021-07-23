const stateGio = {
    gioHang: [],
}
 export const GioReducer = (state = stateGio, action) => {
     switch(action.type){
         case 'THEM_SAN_PHAM': {
             let gioHangCapNhat = [...state.gioHang];
             let index = gioHangCapNhat.findIndex(sp => sp.maSP === action.spGioHang.maSP);
             if(index !== -1){
                 gioHangCapNhat[index].soLuong += 1;
             }else{
                 gioHangCapNhat.push(action.spGioHang);
             }
             state.gioHang = gioHangCapNhat;
             return {...state}
         }
         case 'XOA_SAN_PHAM': {
            let gioHangCapNhat = [...state.gioHang];
            gioHangCapNhat.splice(action.index, 1);
            state.gioHang = gioHangCapNhat;
            return{...state}
         }
         case 'TANG_GIAM': {
            let {index,tangGiam} = action;
            let gioHangCapNhat = [...state.gioHang];
            if(tangGiam){
                gioHangCapNhat[index].soLuong += 1;
            }else{
                if(gioHangCapNhat[index].soLuong >= 1){
                    gioHangCapNhat[index].soLuong -= 1;
                }
            }
            state.gioHang = gioHangCapNhat;
            return {...state};
         }
     }
     return {...state}
 }