import Vue from 'vue'
import Vuex from 'vuex'
//저장소
//
Vue.use(Vuex)

export default new Vuex.Store({
  state: {//data
    allUsers:[
      {userId: 'hoza123', password: '123', name: 'Hoza', address: 'Seoul', src:'https://goo.gl/oqLfJR'},
      {userId: 'max123', password: '456', name: 'Max', address: 'Berlin', src:'https://goo.gl/Ksk9B9'},
      {userId: 'lego123', password: '789', name: 'Lego', address: 'Busan', src:'https://goo.gl/x7SpCD'}
    ]
  },
  getters:{//computed :state를 쓸거란걸 매개변수로 넣어줘야한다.
    allUsersCount: function(state){
      return state.allUsers.length
    },
    countOfSeoul : state => {
      let count = 0;
      state.allUsers.forEach(user => {
        if(user.address === 'Seoul') count++
      })
      return count;
    },
    //state와 getter 두개에 있는 값을 사용하고 싶을때는 매개변수로 state, getter를 모두 들고온다.
    percentOfSeoul: (state, getters) => {
      return Math.round(getters.countOfSeoul / getters.allUsersCount * 100);
    }
  },
  //mutation에서는 모든 기능이 동기로 작동한다.
  //state를 변화시키는 것은 mutation에 넣는다.
  //mutation을 동작시키는 비지니스 로직은 action에 넣는다.
  //state를 변하시키는건 mutation
  mutations: {
    addUsers:(state, payload) => {
      state.allUsers.push(payload)
    },
  },
  //mutaion에 있는 메소드를 동작시키는 비지니스 로직을 action에 넣는다.
  actions: {
    //addusers를 커밋해서 실행시키겠다라는 의미
    //context commit
    addUsers: ({ commit }, payload) => {
      commit('addUsers', payload)
    }
  }
})
