import axios from 'axios';
import {
  VIEW_FOOT,VIEW_NAV,VIEW_LOADING
} from './type';

export default {
  [VIEW_FOOT]:({commit,state},payload)=>{
    commit(VIEW_FOOT,payload)
  },
  [VIEW_NAV]:({commit,state},payload)=>{
    commit(VIEW_NAV,payload)
  },
  [VIEW_LOADING]:({commit,state},payload)=>{
    commit(VIEW_LOADING,payload)
  },
}