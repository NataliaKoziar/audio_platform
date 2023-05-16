import { Context, MakeStore, createWrapper } from "next-redux-wrapper";
import {  RootState, reducer } from "./reducers";
import {  Store, createStore } from "redux";



const makeStore:MakeStore<Store<RootState>> = (context:Context)=>createStore(reducer);

export const wrapper = createWrapper<Store<RootState>>(makeStore,{debug:true})