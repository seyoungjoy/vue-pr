<template>
  <div>
    <h1>This is User Page</h1>
    <AllUsers></AllUsers>
    <Signup></Signup>
  </div>
</template>

<script>
import AllUsers from "@/components/User/AllUsers.vue";
import Signup from "@/components/User/Signup.vue";

export default {
  name: "User",
  components: {
    AllUsers,
    Signup
  },
};

</script>
