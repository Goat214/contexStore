import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();

// Sizning reducer funksiyangiz
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, payload] };
    case "DELETE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload),
      };
    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload ? { ...item, amount: item.amount + 1 } : item
        ),
      };
    case "DECREASE":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload ? { ...item, amount: item.amount - 1 } : item
        ),
      };
    case "TOTAL":
      const { totalAmount, totalPrice } = state.cart.reduce(
        (acc, curVel) => {
          const { amount, price } = curVel;
          acc.totalPrice += amount * price;
          acc.totalAmount += amount;
          return acc;
        },
        {
          totalPrice: 0,
          totalAmount: 0,
        }
      );
      return { ...state, totalAmount, totalPrice };
    case "CLEAR":
      return { ...state, cart: [], totalPrice: 0, totalAmount: 0 };
    case "LOGIN":
      return {
        ...state,
        user: state.userData,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
      case "ADD_USER":
        return {
          ...state,
          userData: [...state.userData, payload],
        };
    default:
      return state;
  }
};

// Sizning boshlang‘ich state obyektingizni 'basket' emas 'cart' deb nomladim
const initialState2 = {
  cart: [],
  user: null,
  userData: JSON.parse(localStorage.getItem("users")) || [
    {
      displayNickName: "Goat",
      displayName: "Abdulatif Kimsanaliyev",
      email: "goat52811@gmail.com",
      password: "123123",
      photoURL:
        "https://storage.live.com/users/0x2c69a9ad975356c0/myprofile/expressionprofile/profilephoto:UserTileStatic/p?ck=1&ex=720&sid=160DC2073DD064D72AC3D42F3CD66553&fofoff=1",
    },
  ],
};


export const GlobalContextProvider = ({ children }) => {
  // useReducer uchun initialState2 obyektini to‘g‘ri uzatdim
  const [state, dispatch] = useReducer(reducer, initialState2);

  useEffect(() => {
    dispatch({ type: "TOTAL" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
