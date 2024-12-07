export const initialState = {
    theme: "light",
    data: [],
    favs: JSON.parse(localStorage.getItem("favs")) || [],
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "TOGGLE_THEME":
        return { ...state, theme: state.theme === "light" ? "dark" : "light" };
      case "GET_DENTISTS":
        return { ...state, data: action.payload };
      case "ADD_FAV":
        const updatedFavs = [...state.favs, action.payload];
        localStorage.setItem("favs", JSON.stringify(updatedFavs));
        return { ...state, favs: updatedFavs };
      case "REMOVE_FAV":
        const filteredFavs = state.favs.filter(fav => fav.id !== action.payload.id);
        localStorage.setItem("favs", JSON.stringify(filteredFavs));
        return { ...state, favs: filteredFavs };
      default:
        return state;
    }
  };
  