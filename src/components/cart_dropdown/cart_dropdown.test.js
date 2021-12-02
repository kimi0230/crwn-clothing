import React from "react";
import { shallow } from "enzyme";

import CartDropdown from "./cart_dropdown.component";
import CartItem from "../cart_item/cart_item.component";
import CustomButton from "../custom_button/custom_button.component";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("CartDropdown component", () => {
  const initialState = {};
  let wrapper;
  let mockHistory;
  let mockDispatch;
  const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    mockHistory = {
      push: jest.fn(),
    };

    mockDispatch = jest.fn();

    const mockProps = {
      cartItems: mockCartItems,
      history: mockHistory,
      dispatch: mockDispatch,
    };

    wrapper = shallow(
      <Provider store={store}>
        <CartDropdown {...mockProps} />
      </Provider>
    );
  });

  it("should render CartDropdown component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it("should call history.push when button is clicked", () => {
  //   wrapper.find(".cart-items").simulate("click");
  //   expect(mockHistory.push).toHaveBeenCalled();
  //   expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
  // });

  // it("should render an equal number of CartItem components as the cartItems prop", () => {
  //   expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length);
  // });

  // it("should render EmptyMessageContainer if cartItems is empty", () => {
  //   const mockProps = {
  //     cartItems: [],
  //     history: mockHistory,
  //     dispatch: mockDispatch,
  //   };

  //   const newWrapper = shallow(<CartDropdown {...mockProps} />);
  //   expect(newWrapper.exists("EmptyMessageContainer")).toBe(true);
  // });
});
