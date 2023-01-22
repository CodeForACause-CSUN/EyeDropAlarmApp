// Description: This file contains all the actions related to the drops

// exporting all the actions names
export const CREATE_DROP = "create_drop";
export const UPDATE_DROP = "update_drop";
export const DELETE_DROP = "delete_drop";
export const SET_DROPS = "set_drops";
export const GET_DROPS = "get_drops";
export const ADD_DROP = "add_drop";

// exporting all the actions
export const createDrop = (drop) => (dispatch) => {
  dispatch({
    type: CREATE_DROP,
    payload: { drop },
  });
};

export const updateDrop = (drop) => (dispatch) => {
  dispatch({
    type: UPDATE_DROP,
    payload: { drop },
  });
};

export const deleteDrop = (drop) => (dispatch) => {
  dispatch({
    type: DELETE_DROP,
    payload: { drop },
  });
};

export const setDrops = (drops) => (dispatch) => {
  saveData(JSON.stringify({ drops: drops }), "@eye-app-drops");
  dispatch({
    type: SET_DROPS,
    payload: { drops },
  });
};

export const getDrops = () => (dispatch) => {
  dispatch({
    type: GET_DROPS,
  });
};

export const addDrop = (drop) => (dispatch) => {
  dispatch({
    type: ADD_DROP,
    payload: { drop },
  });
};
