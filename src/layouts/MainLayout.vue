<template>

  <q-layout view="lHh Lpr lFf">
    <q-header id="qh"  >
      <div class="q-px-lg q-mb-md q-ml-sm" id="header" >
        <div class="text-h5 gmarket-sans-b">Survey</div>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
      <q-footer bordered class=" text-primary" style="background-color: #fafafa">
        <q-tabs
          v-model="tab"

          indicator-color="transparent"
          active-color="black"
          style="color: #BEBEBE; margin-bottom: 5px; margin-top: 5px"
          ripple="true"

        >
          <q-tab name="mails" icon="home"/>
          <q-tab name="alarms" icon="star" />
          <q-tab name="movies" icon="search" />
          <q-tab name="settings" icon="settings"/>

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
