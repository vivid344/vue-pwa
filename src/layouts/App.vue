<template>
  <v-app>
    <v-toolbar dark color="primary">
      <v-toolbar-title class="white--text">Test</v-toolbar-title>
      <v-spacer></v-spacer>

      <router-link to="/">
        <v-btn icon>
          <v-icon>home</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/About">
        <v-btn icon>
          <v-icon>info</v-icon>
        </v-btn>
      </router-link>
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
  export default {
    created () {
      this.checkLogin()
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
