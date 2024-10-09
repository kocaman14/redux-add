import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
   price:0,
names:"",
cars:[],
warning:""
  },
  reducers: {
    rename: (state,actions) => {
      state.names=actions.payload
    },
    prices:(state,actions)=>{
      state.price=actions.payload
    },
  catalog:(state)=>{
    if(!state.cars.find((cars)=>cars.name === state.names)){
      console.log("burda")
     state.warning=""
      const newCar = {
        name: state.names,
        price: state.price,
        id: crypto.randomUUID(),
      };
      state.cars = [...state.cars, newCar];
      console.log(state.cars);
    }else{
       state.warning="Aynı arabadan 2 tane olamaz"
    }
  },
    clearcar:(state,actions)=>{
      let buttonId = actions.payload
state.cars=state.cars.filter((car)=>car.id !== buttonId)
    }
  },
})

export const { rename,prices,catalog,clearcar} = counterSlice.actions

export default counterSlice.reducer
