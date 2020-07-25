<template>
  <q-page class="flex dd q-ma-lg" >
    <q-card flat bordered class="my-card">
      <q-card-section style="display: flex; flex-direction: column; align-items: center">
        <img v-bind:src="item.image"   style="border-radius: 10px; width: 60vw; margin-bottom: 10px"/>
        <q-rating
          v-model="item.point"
          @input="point => click(item, point)"
          size="2rem"
          icon="star"
          color="grey-4"
          color-selected="yellow-5"
          class="no-shadow"
        />
        <p style="margin-bottom: 3px; margin-top: 5px; color: #838383; font-weight: normal; font-size: 13px">예상 : {{item.predict}}</p>
        <p style="margin-bottom: 0px; color: #838383; font-weight: normal;font-size: 13px">평균 : {{item.average}}</p>
      </q-card-section>
    </q-card>
    <h5 class="q-mt-lg q-mb-sm" style="font-weight: bold;">태그</h5>
    <div class="q-mb-md">
      <q-chip color="deep-orange" text-color="white">
        고기 패티
      </q-chip>
      <q-chip color="primary" text-color="white" >
        양파
      </q-chip>
    </div>
    <q-separator class="q-mb-md"/>
    <div style="display: flex; flex-direction: row">
      <p class="q-mr-md text-bold">@samdasu._.evian</p>
      <p class="text-grey-8">조와요 ㅎㅎ</p>
    </div>
    <div style="display: flex; flex-direction: row">
      <p class="q-mr-md text-bold">@samdasu._.evian</p>
      <p class="text-grey-8">안조와요 ㅎㅎ</p>
    </div>
    <div style="display: flex; flex-direction: row">
      <p class="q-mr-md text-bold">@samdasu._.evian</p>
      <p class="text-grey-8">조와요 ㅎㅎ</p>
    </div>
  </q-page>

</template>
<script>
  import UserService from '../services/user.service'


  export default {
    name: 'PageIndex',
    props: ['item'],
    data(){
      return {
        survey: [],
        loaded: false,
        loading: false
      }
    },
    methods: {
      click(item, point){
        UserService.makeSurvey(item, point)
      },

    },
    mounted() {

    }
  }
</script>
