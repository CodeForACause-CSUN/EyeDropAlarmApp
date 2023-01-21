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

const dummyData = [];
dummyData.push(new Drop(1, "Drop 1", "Left", "2020-01-01", 30, 1, 0, 1, "red"));
dummyData.push(
  new Drop(2, "Drop 2", "Right", "2020-01-01", 30, 1, 0, 1, "blue")
);
dummyData.push(
  new Drop(3, "Drop 3", "Left", "2020-01-01", 30, 1, 0, 1, "green")
);
dummyData.push(
  new Drop(4, "Drop 4", "Right", "2020-01-01", 30, 1, 0, 1, "yellow")
);
dummyData.push(new Drop(5, "Drop 5", "Left", "2020-01-01", 30, 1, 0, 1, "red"));

const initialState = {
  drops: dummyData, //[],
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
            return action.payload.drop;
          } else {
            return drop;
          }
        }),
      };
    case DELETE_DROP:
      return {
        ...state,
        drops: state.drops.filter((drop) => drop.id !== action.payload.drop.id),
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
