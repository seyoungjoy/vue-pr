import { createStore } from "vuex";

export default createStore({
  state: {
    allUsers: [
      {userId : 'hoza123', name:'Hoza1', address:'Seoul'},
      {userId : 'hoza456', name:'Hoza2', address:'Seoul'},
      {userId : 'hoza789', name:'Hoza3', address:'busan'},
    ],
  },
  getters:{
    //this로 사용할순없고 state의 값을 들고오기위해선 매개변수로 들고와줘야한다.
    allUsersCount(state){
      return state.allUsers.length;
    },
    countOfSeoul: state =>{
      let count=0;
      state.allUsers.forEach(user => {
        if(user.address === 'Seoul') count++;
      })
      return count;
    },
    //
    percentOfSeoul: (state, getters) => {
      return Math.round(getters.countOfSeoul / getters.allUsersCount * 100);
    }
  },
  mutations: {
    //넘겨온 값을 담을 payload 생성
    addUsers:(state, payload) => {
      state.allUsers.push(payload)

    }
  },
  actions: {
    addUsers:({commit}, payload) => {
      commit('addUsers', payload)
    }
  },
  modules: {},
});
