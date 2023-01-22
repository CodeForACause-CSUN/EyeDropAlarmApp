import {
  CREATE_DROP,
  UPDATE_DROP,
  DELETE_DROP,
  SET_DROPS,
  GET_DROPS,
  ADD_DROP,
} from "../actions/dropsActions.js";

class Drop {
  constructor(id, name, eye, startDate, days, often, taper, alarms, capColor) {
    this.id = id;
    this.name = name;
    this.eye = eye;
    this.startDate = startDate;
    this.days = days;
    this.often = often;
    this.taper = taper;
    this.alarms = alarms;
    this.capColor = capColor;
  }
}

// Dummy data STARTS
//
const dummyData = [];
dummyData.push(
  new Drop(
    1,
    "Acular LS",
    "Left",
    "Wednesday December 22 2022",
    14,
    1,
    0,
    1,
    "Red"
  )
);
dummyData.push(
  new Drop(
    2,
    "Alcaftadine",
    "Both",
    "Friday December 24 2022",
    7,
    1,
    0,
    1,
    "Blue"
  )
);
dummyData.push(
  new Drop(
    3,
    "Lodoxamide",
    "Left",
    "Monday December 28 2022",
    30,
    1,
    0,
    1,
    "White"
  )
);
dummyData.push(
  new Drop(4, "Natacyn", "Right", "Monday January 3 2023", 5, 1, 0, 1, "Yellow")
);
dummyData.push(
  new Drop(5, "Oxervate", "Left", "Wednesday January 5 2023", 3, 1, 0, 1, "Red")
);
//
// Dummy data ENDS

const initialState = {
  drops: dummyData, //[], // currently using dummy data but will be empty array on release
};

export default function dropsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_DROP:
      return {
        ...state,
        drops: [...state.drops, action.payload.drop],
      };
    case UPDATE_DROP:
      return {
        ...state,
        drops: state.drops.map((drop) => {
          if (drop.id === action.payload.drop.id) {
            // updating the drop based on the id
            return action.payload.drop;
          } else {
            return drop;
          }
        }),
      };
    case DELETE_DROP:
      return {
        ...state,
        drops: state.drops.filter((drop) => drop.id !== action.payload.drop.id), // deleting the drop based on the id
      };
    case SET_DROPS:
      return {
        ...state,
        drops: action.payload.drops,
      };
    case GET_DROPS:
      return {
        ...state,
      };
    case ADD_DROP:
      return {
        ...state,
        drops: [...state.drops, action.payload.drop],
      };
    default:
      return state;
  }
}
