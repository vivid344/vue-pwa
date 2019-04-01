<template>
    <v-flex>
    <v-container>
        <v-card class="mt-4">
          <v-card-title class="font-weight-bold">ログイン</v-card-title>
          <v-form class="pl-3 pr-3 pb-1">
              <v-text-field prepend-icon="person" name="ID" label="チャットに参加するID" v-model="ID"></v-text-field>
              <v-card-actions>
                  <v-btn primary large block @click="login">Login</v-btn>
              </v-card-actions>
          </v-form>
          <v-snackbar
            v-model="snackbar"
            :color="color"
            :multi-line="mode === 'multi-line'"
            :timeout="timeout"
            :vertical="mode === 'vertical'"
          >
            正しい値を入力してください
          </v-snackbar>
        </v-card>
    </v-container>
    </v-flex>
</template>

<script>
import router from '../router'
import { mapActions } from 'vuex'
import { LOGIN } from '../store/store'
export default {
  name: 'login',
  data() {
    return {
      ID: '',
      snackbar: false,
      timeout: 5000,
      color: '',
      mode: '',
    }
  },
  methods: {
    // 下の宣言でmethodsの中でthis.LOGINでactionを使えるようになる
    ...mapActions([
      LOGIN
    ]),
    login() {
      this.LOGIN(this.ID);
      if(this.ID) {
        router.push('/')
      } else {
        this.snackbar = true;
      }
    },
  }
}
</script>

<style scoped>
</style>
