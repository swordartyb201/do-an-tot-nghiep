import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  location: undefined, // Địa điểm
  roomType: undefined, // Loại phòng
  numberOfPeople: undefined, // Số lượng người
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_LOCATION":
      return { ...state, location: action.payload };
    case "UPDATE_ROOM_TYPE":
      return { ...state, roomType: action.payload };
    case "UPDATE_NUMBER_OF_PEOPLE":
      return { ...state, numberOfPeople: action.payload };
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};
