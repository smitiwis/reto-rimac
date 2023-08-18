import React from "react";

export const BannerHome = () => {
  return (
    <div className="banner-main">
      <div className="container">
        <span className="fs-xxs c-gray-title fw-black">¡NUEVO!</span>
        <h1 className="text-title text-title-h1">
          Seguro vehicular <br />
          <span className="c-primary">Tracking</span>
        </h1>
        <p className="text-parrafo font-roboto">
          Cuentanos donde le haras <br /> seguimiento a tu seguro
        </p>
        <div className="banner-main__image">
          <img src="/images/img_mobile.png" alt="img" />
        </div>
      </div>
    </div>
  );
};
