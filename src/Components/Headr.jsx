import { FaShoppingCart, FaTrash } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContex";

function Navbar() {
  const { cart, totalAmount, dispatch, user } = useGlobalContext();
  console.log(user[0].displayNickName); 
  console.log(user[0].photoURL);   

  return (
    <header>
      <div className="container">
        <h2>
          <Link to="/">ContextStore</Link>
        </h2>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          {user && (
            <div className="flex items-center gap-2 text-center">
           
              <img
                src={user[user.length-1].photoURL}
                
                alt={user[0].displayNickName}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-semibold text-sm text-gray-800">
                {user[user.length-1].displayNickName}
              </span>
            </div>
          )}

          {user && (
            <button
              onClick={() => dispatch({ type: "LOGOUT" })}
              className="btn2"
            >
              logout
            </button>
          )}

          <div className="header__card">
            <span className="header__card__indicator">{totalAmount}</span>
            <FaShoppingCart />
            <div className="hidden-card">
              {cart.length > 0 ? (
                cart.map((item) => {
                  const { id, title, price, amount, image } = item;
                  return (
                    <div key={id} className="hidden-cart__item">
                      <img
                        src={image}
                        alt={title}
                        width={30}
                        className="hidden-cart__item-img"
                      />
                      <div className="hidden-cart__item-info">
                        <h4 className="hidden-card__title">{title}</h4>
                        <h3 className="hidden-card__price">
                          Price: ${price}
                        </h3>
                        <p className="hidden-card__price">
                          {amount}x ${price * amount}
                        </p>
                      </div>
                      <button
                        className="btn hidden-card__remove-btn"
                        onClick={() =>
                          dispatch({ type: "DELETE", payload: id })
                        }
                      >
                        <FaTrash />
                      </button>
                    </div>
                  );
                })
              ) : (
                <p className="hidden__card__info">Cart is empty</p>
              )}
              {cart.length > 0 && (
                <div className="hidden-card__card-footer">
                  <button
                    className="hidden-card__clear-btn"
                    onClick={() => dispatch({ type: "CLEAR" })}
                  >
                    clear cart
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
