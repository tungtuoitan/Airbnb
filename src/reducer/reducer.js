const initState = {
  isSearchPopUpOpen: false,
  isWhereToOpen: true,
  where: "I'm flexible",
  isWhenYourTripOpen: false,
  when: "Add dates",
  isWhosComingOpen: false,
  who: "Add guests",

  fiveCitiesArr: [],

  whereToInput: "",
  isTypingSearchPopUpOpen: false,
  placeholderOnSearchInput: "Search destinations",
};

export default function rootReducer(state = initState, action) {
  switch (action.type) {
    case "TOGGLE_SEARCH_POPUP":
      return { ...state, isSearchPopUpOpen: !state.isSearchPopUpOpen };
    case "WHERE_TO_INPUT_CHANGE":
      return { ...state, whereToInput: action.payload };
    case "CLICK_WHERE":
      return {
        ...state,
        isWhereToOpen: true,
        isWhenYourTripOpen: false,
        isWhosComingOpen: false,
      };
    case "CLICK_WHEN":
      return {
        ...state,
        isWhereToOpen: false,
        isWhenYourTripOpen: true,
        isWhosComingOpen: false,
      };
    case "CLICK_WHO":
      return {
        ...state,
        isWhereToOpen: false,
        isWhenYourTripOpen: false,
        isWhosComingOpen: true,
      };
    case "FIVE_CITIES_ARR":
      return {
        ...state,
        fiveCitiesArr: action.payload,
      };
    case "PICK_LOCATION":
      return {
        ...state,
        where: action.payload,
        isTypingSearchPopUpOpen: false,
        isWhereToOpen:false,
        isWhenYourTripOpen:true,
        placeholderOnSearchInput: action.payload,

      };
    case "CLICK_SEARCH_POPUP":
      return {
        ...state,
        isTypingSearchPopUpOpen: true,
      };
      case "CLOSE_TYPING_SEARCH_POPUP":
      return {
        ...state,
        isTypingSearchPopUpOpen: false,
      };

    default:
      return state;
  }
}
