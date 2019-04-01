<template>
  <v-app>
    <v-toolbar dark color="primary">
      <v-toolbar-title class="white--text">{{this.ID}}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <router-view></router-view>
  </v-app>
</template>

<!--
layoutでどんな感じでrouter-viewを表示するかを決める
何も他に表示させたくないなら<router-view></route-view>のみを記述すればよき
-->

<script>
  import router from '../router'
  import { mapGetters } from 'vuex'
  export default {
    name: 'app',
    created () {
      this.checkLogin()
    },
    computed: {
      // 下の宣言でthis.IDで値を使えるようになる
      ...mapGetters(['ID']),
    },
    methods: {
      checkLogin() {
        if(window.location.pathname !== '/login') {
          router.push('login')
        }
      },
    }
  }
</script>
