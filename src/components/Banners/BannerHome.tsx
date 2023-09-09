import React from "react";

export const BannerHome = () => {
  return (
    <div className="banner-main bg-gris" >
      <div className="banner-main__description">
        <span className="fs-xxs c-gray-title fw-black">¡NUEVO!</span>
        <h1 className="text-title text-title-h1">
          Seguro vehicular <br />
          <span className="c-primary">Tracking</span>
        </h1>
        <p className="text-parrafo font-roboto">
          Cuentanos donde le haras <br /> seguimiento a tu seguro
        </p>
      </div>
      <div className="banner-main__image">
        <picture>
          <source media="(max-width: 992px)" srcSet={`${process.env.PUBLIC_URL}/images/img-mobile.png`} />
          <img src={`${process.env.PUBLIC_URL}/images/img-desktop.png`} alt="Imagen cambiante" />
        </picture>
      </div>
    </div>
  );
};
