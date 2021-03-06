
import Vue from 'vue'
import Vuex from 'vuex'

import {auth} from "src/store/auth.module";

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      auth
    }
  });

  return Store
}
