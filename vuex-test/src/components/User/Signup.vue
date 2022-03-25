<template>
  <div>
    <hr />
    <h2>Signup</h2>
    <ul>
      <li>이름: <input type="text" placeholder="이름" v-model="name" /></li>
      <li>아이디: <input type="text" placeholder="아이디" v-model="id" /></li>
      <li>주소: <input type="text" placeholder="주소" v-model="address" /></li>
    </ul>
    <button @click="signUp">회원가입</button>

    <hr />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      name: null,
      id: null,
      address: null,
    };
  },
  methods: {
    ...mapActions(['addUsers']),
    signUp() {
      const userInfo = {
        userId: this.id,
        name: this.name,
        address: this.address,
      };
      this.addUsers(userInfo);
      this.clearForm();

    },
    clearForm(){
      this.name = null,
        this.id = null,
        this.address = null
    }
  },
};
</script>
