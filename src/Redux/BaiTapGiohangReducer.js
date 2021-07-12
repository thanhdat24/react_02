// setup State giỏ hành trên store

const stateGioHang = {
  gioHang: [],
};

const BaiTapGioHangReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG":
      {
        let index = state.gioHang.findIndex(
          (spGH) => spGH.maSP === action.spGioHang.maSP
        );

        if (index !== -1) {
          state.gioHang[index].soLuong += 1;
        } else {
          state.gioHang.push(action.spGioHang);
        }

        // setState
        state.gioHang = [...state.gioHang];

        return { ...state };
      }
  

    case "XOA_GIO_HANG":
      {
        let gioHangCapNhap = [...state.gioHang];
        let index = gioHangCapNhap.findIndex(
          (spGH) => spGH.maSP === action.maSP
        );
        if (index !== -1) {
          gioHangCapNhap.splice(index, 1);
        }
        state.gioHang = gioHangCapNhap;
        return { ...state };
      }
      
    case "TANG_GIAM_SO_LUONG":
      {
        let gioHangCapNhap = [...state.gioHang];
        let index = gioHangCapNhap.findIndex(
          (spGH) => spGH.maSP === action.maSP
        );
        if (index !== -1) {
          if (action.tangGiam) {
            gioHangCapNhap[index].soLuong += 1;
          } else {
            if (gioHangCapNhap[index].soLuong > 1) {
              gioHangCapNhap[index].soLuong -= 1;
            } else {
              alert("Số lượng tối thiểu là 1!");
            }
          }
        }
        // Lấy giá trị giỏ hàng cập nhật gán vào state.gioHang
        state.gioHang = gioHangCapNhap;
        return { ...state };
      }
     
    default:
      return { ...state };
  }
};

export default BaiTapGioHangReducer;
