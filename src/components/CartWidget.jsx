const CartWidget = () => {
  const url =
    "https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg";
  const amount = 4;
  return (
    <>
      <div className="wrapper me-2 mt-1 cart">
        <a className="text-decoration-none" href="#">
          <span id="cantidadProductos" className="cart-badge">
            0
          </span>
        </a>
        <img style={{ width: 30 }} src={url} />
      </div>
    </>
  );
};

export default CartWidget;
