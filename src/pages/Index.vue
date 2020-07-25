<template>
  <q-page class="flex q-ma-lg dd">
    <q-pull-to-refresh @refresh="refresh">
    <div v-if="load">
      <div class="text-h5 text-bold">
        <q-skeleton type="text" />
      </div>
      <div style="font-size: 15px; font-weight:lighter; width: 50vw">
        <q-skeleton type="text" />
      </div>

      <div class="scrolling-wrapper">
        <div class="q-mr-lg q-mb-md" >
          <div style="width: 130px; height: 130px; background-color: #FAFAFA; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-top: 10px" >
            <q-skeleton type="QImage" width="130px" height="130px"/>
          </div>
          <q-skeleton type="text" />
          <q-skeleton type="text" width="20vw"/>
        </div>
        <div class="q-mr-lg q-mb-md" >
          <div style="width: 130px; height: 130px; background-color: #FAFAFA; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-top: 10px" >
            <q-skeleton type="QImage" width="130px" height="130px"/>
          </div>
          <q-skeleton type="text" />
          <q-skeleton type="text" width="20vw"/>
        </div>
        <div class="q-mr-lg q-mb-md" >
          <div style="width: 130px; height: 130px; background-color: #FAFAFA; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-top: 10px" >
            <q-skeleton type="QImage" width="130px" height="130px"/>
          </div>
          <q-skeleton type="text" />
          <q-skeleton type="text" width="20vw"/>
        </div>
      </div>

    </div>
    <div v-if="load">
      <div class="text-h5 text-bold">
        <q-skeleton type="text" />
      </div>
      <div style="font-size: 15px; font-weight:lighter; width: 50vw">
        <q-skeleton type="text" />
      </div>

      <div class="scrolling-wrapper">
        <div class="q-mr-lg q-mb-md" >
          <div style="width: 130px; height: 130px; background-color: #FAFAFA; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-top: 10px" >
            <q-skeleton type="QImage" width="130px" height="130px"/>
          </div>
          <q-skeleton type="text" />
          <q-skeleton type="text" width="20vw"/>
        </div>
        <div class="q-mr-lg q-mb-md" >
          <div style="width: 130px; height: 130px; background-color: #FAFAFA; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-top: 10px" >
            <q-skeleton type="QImage" width="130px" height="130px"/>
          </div>
          <q-skeleton type="text" />
          <q-skeleton type="text" width="20vw"/>
        </div>
        <div class="q-mr-lg q-mb-md" >
          <div style="width: 130px; height: 130px; background-color: #FAFAFA; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-top: 10px" >
            <q-skeleton type="QImage" width="130px" height="130px"/>
          </div>
          <q-skeleton type="text" />
          <q-skeleton type="text" width="20vw"/>
        </div>
      </div>

    </div>

    <div v-for="section in this.feed">
      <div class="text-h5 text-bold">
        {{section.title}}
      </div>
      <div style="font-size: 15px; font-weight:lighter ">
        {{section.message}}
      </div>

      <div class="scrolling-wrapper">
        <div class="q-mr-lg q-mb-md" v-for="element in section.data" @click="$router.push({ name: 'Detail', params: {item: element}})">
          <div style="width: 130px; height: 130px; background-color: #FAFAFA; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-top: 10px" >
            <q-img
              v-bind:src="element.image"
              width="120px"
            />
          </div>
          <h6 style="margin-top: 10px; margin-bottom: 3px;font-size: 14px;line-height: 16px; max-width: 120px;    text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">{{element.name}}</h6>
          <p style="margin-bottom: 0px; color: #838383">예상 : {{element.predict?element.predict.toFixed(1)+"점":"준비중"}}</p> <p style="color: #838383">평균 : {{element.average?element.average.toFixed(1)+"점":"준비중"}}</p>
        </div>

      </div>

    </div>



    <div class=" q-mb-md" v-for="item in items" style="display:flex; justify-content: flex-start; align-items: center;" @click="$router.push({ name: 'Detail', params: {item: item}})">
      <div style="width: 130px; height: 130px; background-color: #FAFAFA; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-top: 10px; margin-right: 20px" >
        <q-img
          v-bind:src="item.image"
          width="120px"
          style="display: inline;"
        />
      </div>
      <div>
        <h6 style="margin-top: 10px; margin-bottom: 3px;font-size: 14px;line-height: 16px; max-width: 120px;    text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">
          {{item.name}}</h6>
        <p style="margin-bottom: 0px; color: #838383">예상 : {{item.predict?item.predict.toFixed(1)+"점":"준비중"}}</p> <p style="color: #838383">평균 : {{item.average?item.average.toFixed(1)+"점":"준비중"}}</p>


      </div>

    </div>
    <mugen-scroll :handler="fetchData" :should-handle="!loadingItem">
      <div class="row justify-center q-my-md">
        <q-spinner-dots color="primary" size="40px" />
      </div>
    </mugen-scroll>

    </q-pull-to-refresh>




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
  import MugenScroll from 'vue-mugen-scroll'

  export default {
    name: 'PageIndex',
    components: {
      MugenScroll
    },
    data(){
      return {
        feed: {

        },
        load : false,
        loadingItem : false,
        items : []
      }
    },
    methods: {

        refresh(callback) {
          this.load = true;
          UserService.getFeed().then(response => {
            this.feed = response.data;
            this.items = []

            this.load = false;
            callback();
          });
        },
        fetchData() {
          this.loadingItem = true

          UserService.getUser().then(
            response => {

              this.items = this.items.concat(Object.values(response.data))

            }
          );

          this.loadingItem = false
        },

    },
    mounted() {
      this.load = true;
      UserService.getFeed().then(response => {
        this.feed = response.data;
        this.load = false;

      });
    }
  }
</script>
