<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>원본 메시지 : "{{ message }}</p>
    <p>역순으로 표시한 메시지 : "{{ reverseMessage() }}</p>
    <p id="demo">{{fullName}}</p>
    <div id="watch-example">
      <p>
        yes/no 질문을 물어보세요:
        <input v-model="question">
      </p>
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      message: "가나다라바마사",
      firstName :'Foo',
      lastName:'Bar',
      fullName:'Foo Bar'
    };
  },
  watch:{
    firstName(val){
      this.fullName = val + ' ' + this.lastName},
    lastName(val){
      this.fullName = this.firstName + ' ' + val
    }
  },
  methods:{
    reverseMessage() {
      return this.message.split("").reverse().join("");
    },
  },
  computed: {
    // reverseMessage() {
    //   return this.message.split("").reverse().join("");
    // },
  },
};
</script>
