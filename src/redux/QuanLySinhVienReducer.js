const stateSinhVien = {
    mangSinhVien : []
}

export const QuanLySinhVienReducer = (state = stateSinhVien , action) => {

    switch(action.type){
        case 'THEM_NHAN_VIEN': {
            let mangCapNhat = [...state.mangSinhVien,action.nhanVien];
            state.mangSinhVien = mangCapNhat;
            return {...state}
        };break;
        default: {
            return {...state}
        };break;
    }
}


// switch(action.type){
//     case 'THEM_SINH_VIEN' : {
//         console.log(action)
//         let mangSVCapNhat = [...state.mangSinhVien, action.sv];
//         state.mangSinhVien = mangSVCapNhat
//         return {...state}
//     };break;
//     default: {
//         return {...state};
//     };break;
// }