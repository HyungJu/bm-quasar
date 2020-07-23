<template>
  <q-layout class="fullscreen" style="display: flex; flex-direction: column; justify-content: space-between; align-items: center" @click="this.hideKeyboard()">
    <h5 class="gmarket-sans-b text-black q-pt-xl" align="center">Burger Master</h5>
    <div>
      <q-input
        filled
        type="email"
        v-model="email"
        label="Email"
        class="q-mb-md"
        style="width: 80vw"
      />
      <q-input
        filled
        type="password"
        v-model="password"
        label="Password"
        class="q-mb-md"
        style="width: 80vw"
      />
    </div>
    <div style="width: 80vw" >
      <q-btn :loading="progress"  color="primary" class="full-width q-pa-sm q-mt-lg"  @click="progress = true;login()" unelevated rounded >
        로그인
        <template v-slot:loading>
          <q-spinner class="on-left" />
          처리중
        </template>
      </q-btn>
      <p align="center" class="q-ma-md q-pb-md">계정이 없으신가요?</p>
    </div>
  </q-layout>
</template>

<script>
  import EssentialLink from 'components/EssentialLink.vue'

  import {
    Plugins,
    StatusBarStyle,
  } from '@capacitor/core';
  import User from "src/models/user";
  const { StatusBar, Keyboard } = Plugins

  export default {
    name: 'MainLayout',
    components: { EssentialLink },
    data () {
      return {
        email: '',
        password: '',
        progress: false
      }
    },
    computed: {
      loggedIn() {
        return this.$store.state.auth.status.loggedIn;
      }
    },
    created() {
      StatusBar.setStyle({
        style: StatusBarStyle.Light
      });

      StatusBar.setOverlaysWebView({
        overlay: true
      });

      if (this.loggedIn) {
        this.$router.push('/home');
      }
    },
    methods: {
      hideKeyboard() {
        Keyboard.hide()
      },
      login: function () {
        var user = new User()
        user.email = this.email
        user.password   = this.password

        this.$store.dispatch('auth/login', user).then(
          () => {
            this.progress = false;
            this.$router.push('/home')
          },
          error => {
            alert("이메일 또는 비밀번호가 올바르지 않습니다 ")
            this.progress = false;
          }
        );
      },
    }
  }
</script>
