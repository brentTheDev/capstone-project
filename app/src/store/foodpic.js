import { createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../utils/http-config"
const slice = createSlice({
  name: "foodpic",
  initialState: [],
  reducers: {
    getAllFoodpics : (posts, action) => {
      return action.payload
    },
    getTopFiveFoodpics : (posts, action) =>{
      return action.payload
    }
  }
})
export const {getAllFoodpics, getTopFiveFoodpics} = slice.actions
export const fetchAllFoodpic = () => async (dispatch) => {
  const {data} = await httpConfig(`/apis/foodpic`)
  dispatch(getAllFoodpics(data))
}

export const fetchTopFiveFoodpic = () => async (dispatch) => {
  const {data} = await httpConfig(`/apis/foodpic/topFive`)
  dispatch(getTopFiveFoodpics(data))
}


export default slice.reducer
