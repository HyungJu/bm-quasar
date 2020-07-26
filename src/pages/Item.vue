<template>

  <q-page class="flex dd q-ma-lg " >
    <q-btn
      v-go-back=" '/' "
      color="primary"
      label="이전"
      class="q-mb-md q-btn--outline"
    />

    <q-card flat bordered class="my-card">
      <q-card-section style="display: flex; flex-direction: column; align-items: center">
        <img v-bind:src="item.brand"  style="border-radius: 10px; width: 20vw; margin-bottom: 10px"/>
        <img v-bind:src="item.image"   style="border-radius: 10px; width: 60vw; margin-bottom: 10px"/>
        <q-rating
          v-model="point"
          @input="point => click(item, point)"
          size="2rem"
          icon="star"
          color="grey-4"
          color-selected="yellow-5"
          class="no-shadow"
        />
        <div v-if="!point">
          <p style="margin-bottom: 3px; margin-top: 5px; color: #838383; font-weight: normal; font-size: 13px">예상 : {{item.predict?item.predict.toFixed(1)+"점":"준비중"}}</p>
          <p style="margin-bottom: 0px; color: #838383; font-weight: normal;font-size: 13px">평균 : {{item.average?item.average.toFixed(1)+"점":"준비중"}}</p>
        </div>
      </q-card-section>
    </q-card>
    <h5 class="q-mt-lg q-mb-sm" style="font-weight: bold;">태그</h5>
    <div class="q-mb-md">
      <q-chip v-for="(tag, $index) in JSON.parse(item.tag)" :key="$index">
        {{tag}}
      </q-chip>
      <p v-if="item.tag == null" style="margin-bottom: 3px">태그가 없습니다</p>
    </div>
    <q-separator class="q-mb-md"/>
    <div style="display: flex; flex-direction: row" v-for="item in comment">
      <p class="q-mr-md text-bold">{{item.comment}}</p>
      <p class="text-grey-8">{{item.comment}}</p>
    </div>
  </q-page>

</template>
<script>
  import UserService from '../services/user.service'


  export default {
    name: 'PageIndex',
    props: ['item', 'point'],
    data(){
      return {
        survey: [],
        loaded: false,
        loading: false,
        comment : [],
        text: ""
      }
    },
    methods: {
      click(item, point){
        UserService.makeSurvey(item, point)
      },

    },
    mounted() {
      UserService.getComment(this.item.id).then(response => {
        this.comment = response.data
      })
    }
  }
</script>
