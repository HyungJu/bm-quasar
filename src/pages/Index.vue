<template>
  <q-page class="flex q-ma-lg dd">
    <div v-for="section in this.feed">
      <div class="text-h5 text-bold">
        {{section.title}}
      </div>
      <div style="font-size: 15px; font-weight:lighter ">
        {{section.message}}
      </div>

      <div class="scrolling-wrapper">
        <div class="q-mr-lg q-mb-md" v-for="element in section.data">
          <div style="width: 130px; height: 130px; background-color: #FAFAFA; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-top: 10px" >
            <q-img
              v-bind:src="element.image"
              width="120px"
            />
          </div>
          <h6 style="margin-top: 10px; font-size: 14px;line-height: 16px; max-width: 120px;    text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">{{element.name}}</h6>
          <p style="margin-bottom: 0px">예상 : {{element.predict?element.predict.toFixed(1)+"점":"준비중"}}</p> <p>평균 : {{element.average?element.average.toFixed(1)+"점":"준비중"}}</p>
        </div>

      </div>

    </div>

  </q-page>
</template>
<style>
  .scrolling-wrapper {
    display:flex; flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
  }
  .scrolling-wrapper::-webkit-scrollbar {
     display: none;

  }
</style>
<script>
  import UserService from '../services/user.service'

  export default {
    name: 'PageIndex',
    data(){
      return {
        feed: {

        }
      }
    },

    mounted() {

      UserService.getFeed().then(response => {
        this.feed = response.data;

      });
    }
  }
</script>
