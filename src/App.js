import "./App.css";

import DanhSachSanPham from "./Props/DanhSachSanPham";
// import ProductList from "./Props/ProductList";
// import DemoProps from "./Props/DemoProps";
import React from "react";

// import dataJson from "./Data/data.json";

function App() {
  return (
    <div>
      <DanhSachSanPham/>
    </div>
    // <div className="container-fluid">
    //   {/* <DemoProps/> */}
    //   <div className="row">
    //     <div className="col-4">
    //       <div className="d-flex align-items-start">
    //         <div
    //           style={{ minHeight: 800 }}
    //           className="nav flex-column nav-pills me-3 justify-content-center"
    //           id="v-pills-tab"
    //           role="tablist"
    //           aria-orientation="vertical"
    //         >
    //           <button
    //             className="nav-link active"
    //             id="v-pills-home-tab"
    //             data-bs-toggle="pill"
    //             data-bs-target="#home"
    //             type="button"
    //             role="tab"
    //             aria-controls="v-pills-home"
    //             aria-selected="true"
    //           >
    //             Home
    //           </button>
    //           <button
    //             className="nav-link"
    //             id="v-pills-profile-tab"
    //             data-bs-toggle="pill"
    //             data-bs-target="#shop"
    //             type="button"
    //             role="tab"
    //             aria-controls="v-pills-profile"
    //             aria-selected="false"
    //           >
    //             Shop
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="productList col-8">
    //       <div className="tab-content" id="v-pills-tabContent">
    //         <div
    //           className="tab-pane fade show active"
    //           id="home"
    //           role="tabpanel"
    //           aria-labelledby="v-pills-home-tab"
    //         >
    //           <ProductList arrProduct={dataJson} />
    //         </div>
    //         <div
    //           className="tab-pane fade"
    //           id="shop"
    //           role="tabpanel"
    //           aria-labelledby="v-pills-profile-tab"
    //         >
    //           shop
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
