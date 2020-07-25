<template>

  <q-layout view="lHh Lpr lFf" >
    <q-header  id="qh"  class="bg-primary">
      <div class="q-px-lg q-mb-md q-pt-sm" id="header"  style="display: flex; flex-direction: row; justify-content: space-between">
        <div class="text-h5 gmarket-sans-b" v-if="$router.currentRoute.name == 'Detail' ">{{$router.currentRoute.params.item.name}}</div>
        <div class="text-h5 gmarket-sans-b" v-else>{{$router.currentRoute.name}}</div>
      </div>
    </q-header>

    <q-page-container>

      <router-view />

      <q-footer bordered class=" text-primary" style="background-color: #fafafa">
        <q-tabs

          indicator-color="transparent"
          active-color="black"
          style="color: #BEBEBE; "
          ripple="true"
          class=""
        >

          <q-route-tab name="mails" icon="home" to="/feed" />
          <q-route-tab name="alarms" icon="star" to="/home"/>
          <q-route-tab name="movies" icon="search" to="/detail"/>
          <q-route-tab name="settings" icon="settings" to="/home"/>

        </q-tabs>
      </q-footer>
    </q-page-container>

  </q-layout>
</template>

<script>
  import EssentialLink from 'components/EssentialLink.vue'

  import {
    Plugins,
    StatusBarStyle,
  } from '@capacitor/core';
  const { StatusBar } = Plugins

  export default {
    name: 'MainLayout',
    components: { EssentialLink },
    data () {
      return {
        tab: {

        }
      }
    },
    created() {
      StatusBar.setStyle({
        style: StatusBarStyle.Dark
      });

      StatusBar.setOverlaysWebView({
        overlay: true
      });
    }
  }
</script>
