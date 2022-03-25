<template>
  <div>
    <hr />
    <h2>AllUsers({{allUsersCount}})</h2>
    <h3>SeoulUsers({{countOfSeoul}})({{percentOfSeoul}}%)</h3>
    <ul>
      <li v-for="(user, index) in allUsers" :key="index">
        <p>name:{{user.name}}</p>
        <p>id:{{user.userId}}</p>
        <p>address:{{user.address}}</p>
      </li>
    </ul>
    <hr />
  </div>
</template>
<script>
import {mapGetters, mapState} from 'vuex'
export default {
  data() {
    return {


    };
  },
  computed:{
    ...mapGetters(['allUsersCount', 'countOfSeoul', 'percentOfSeoul']),
    ...mapState({
      allUsers : 'allUsers'
    })
  }
};
</script>
<style>
ul {
  text-align: left;
}
</style>
