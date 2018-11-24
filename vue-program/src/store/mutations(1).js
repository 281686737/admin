import * as types from './type';
export default {
  // 'VIEW_NAV':(state,payload)=>{
  [types.VIEW_NAV]:(state,payload)=>{
    state.bNav=payload;
  },
  [types.VIEW_FOOT]:(state,payload)=>{
    state.bFoot=payload;
  },
  [types.VIEW_LOADING]:(state,payload)=>{
    state.bLoading=payload;
  }
}