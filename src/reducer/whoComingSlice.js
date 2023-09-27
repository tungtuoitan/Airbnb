import { createSlice, current } from "@reduxjs/toolkit";

const resetWho = (state) => {
  let itemArr = [state.adults, state.children, state.infants, state.pets];
  state.who = "";
  for (let i = 0; i < itemArr.length; i++) {
    if (itemArr[i].amount !== 0) {
      itemArr[i].text = itemArr[i].amount + " " + itemArr[i].type + ", ";


    } else {
      itemArr[i].text = "";
    }

    state.who += itemArr[i].text;
  }
  state.who = state.who.slice(0, state.who.length - 2);
  if (state.who === "") {
    state.who = "Add guests";
  }
};
const whoComingSlice = createSlice({
  name: "whoComingSlice",
  initialState: {
    adults: {
      type: "Adults",
      note: "Age 13 or above",
      limit: 8,
      amount: 1,
      text: "",
    },
    children: {
      type: "Children",
      note: "Age 2-12",
      limit: 6,
      amount: 0,
      text: "",
    },
    infants: {
      type: "Infants",
      note: "Under 2",
      limit: 4,
      amount: 0,
      text: "",
    },
    pets: {
      type: "Pets",
      note: "",
      limit: 2,
      amount: 0,
      text: "",
    },
    who: "Add guests",
  },
  reducers: {
    updateWho: (state) => {
      // if(state.adults)
    },
    resetAllOfWho: (state) => {
      state.adults.amount = 1;
      state.children.amount = 0;
      state.infants.amount = 0;
      state.pets.amount = 0;
      state.who = "Add guests";
    },
    increaseAdults: (state) => {
      if (state.adults.amount >= state.adults.limit) {
        return;
      }
      state.adults.amount += 1;
      resetWho(state);
    },
    decreaseAdults: (state) => {
      if (state.adults.amount <= 1) {
        return;
      }

      state.adults.amount -= 1;
      resetWho(state);
    },
    increaseChildrens: (state) => {
      if (state.children.amount >= state.children.limit) {
        return;
      }
      state.children.amount += 1;
      if (state.adults.amount === 0) {
        state.adults.amount = 1;
      }
      resetWho(state);
    },
    decreaseChildrens: (state) => {
      if (state.children.amount <= 0) {
        return;
      }

      state.children.amount -= 1;
      resetWho(state);
    },

    increaseInfants: (state) => {
      if (state.infants.amount >= state.infants.limit) {
        return;
      }

      state.infants.amount += 1;
      if (state.adults.amount === 0) {
        state.adults.amount = 1;
      }
      resetWho(state);
    },
    decreaseInfants: (state) => {
      if (state.infants.amount <= 0) {
        return;
      }

      state.infants.amount -= 1;
      resetWho(state);
    },
    increasePets: (state) => {
      if (state.pets.amount >= state.pets.limit) {
        return;
      }

      state.pets.amount += 1;
      if (state.adults.amount === 0) {
        state.adults.amount = 1;
      }
      resetWho(state);
    },
    decreasePets: (state) => {
      if (state.pets.amount <= 0) {
        return;
      }

      state.pets.amount -= 1;
      resetWho(state);
    },
  },
});
export const {
  increaseAdults,
  increaseChildrens,
  increaseInfants,
  increasePets,
  decreaseAdults,
  decreaseChildrens,
  decreaseInfants,
  decreasePets,
  resetAllOfWho,
} = whoComingSlice.actions;
const whoComingReducer = whoComingSlice.reducer;
export default whoComingReducer;
