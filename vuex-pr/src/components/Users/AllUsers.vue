<template>
  <div>
    <h1>All Users({{count}})</h1>
      <h3>Seoul Users:{{seouls}}({{percent}})%</h3>
    <v-list two-line>
      <v-list-tile
        v-for="(user, index) in allUsers"
        :key="index"
        avatar
      >
        <v-list-tile-avatar color="grey lighten-3">
          <img :src="user.src">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title v-html="user.name"></v-list-tile-title>
          <v-list-tile-sub-title>id:#{{index}} / {{user.address}} 거주</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

  </div>
</template>

<script>
import { EventBus } from '@/main.js'
import {mapState,mapGetters} from 'vuex'

  export default {
    data() {
      return {

      }
    },
      computed:{
        //불러올 getterse들의 이름을 지정할수 있다.
        ...mapGetters({
            count:'allUsersCount',
            seouls : 'countOfSeoul',
            percent:'percentOfSeoul',
        }),
          ...mapState(['allUsers'])
      //mapgetter를 통해 store에 있는 getter를 간단하게 불러올 수 있다.
          // ...mapGetters(['allUsersCount', 'countOfSeoul', 'percentOfSeoul'])
      },
    mounted() {
      EventBus.$on('signUp', users => {
        this.$store.state.allUsers.push(users)
      })
    }
  }
</script>
