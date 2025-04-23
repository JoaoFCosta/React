import React from "react";

const Header = (props) => {
  return (
    <header className="w-100 navbar navbar-dark bg-dark justify-content-around">
      <div id="info" className="d-flex gap-5 w-50 justify-content-between">
        <div id="logo" role="button" className="d-flex justify-content-center">
          <i className="bi bi-controller fs-1 text-light me-3"></i>
          <span className="navbar-brand fw-bold fs-3">DevSteam</span>
        </div>
        <input
          type="text"
          className="buscar w-100 d-none d-md-block border-0 rounded-1 search-input px-4 my-2"
          placeholder="Buscar..."
        />
      </div>

      <div
        id="carrinho"
        role="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#carrinhoOffCanvas"
        className="position-relative d-flex align-items-center gap-3"
      >
        <i className="bi bi-cart4 fs-2 text-light"></i>

        {props.contadorJogos > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {props.contadorJogos}
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
