<template>
  <q-page class="flex dd">
    <q-banner class="bg-primary text-white q-ma-md">
      이미지를 눌러 아이템 페이지로 들어갈 수 있습니다.
    </q-banner>
    <q-pull-to-refresh @refresh="refresh">
        <div v-for="item in items"  v-bind:key="item.uuid" class="card_section"  >
          <div class="c" >
            <div style="display:flex; flex-direction: row; justify-content: space-between; ">
              <p class="title">
                {{item.name}}
              </p>
              <img  v-bind:src="item.brand"  width="50px" height="100%" style="object-fit: cover; margin-bottom: 10px"/>
            </div>
            <div class="card_container">
              <q-img  @click="$router.push({ name: 'Detail', params: {item: item}})"  v-bind:src="item.image" class="img"  style="border-radius: 10px"/>
              <div class="rating_container">
                <q-rating
                  @input="point => click(item, point)"
                  v-model="item.rating"
                  size="2rem"
                  icon="star"
                  color="grey-4"
                  color-selected="yellow-5"
                  class="no-shadow"
                  value="1"
                />
                <p style="margin-bottom: 0px">예상 : {{item.predict?item.predict.toFixed(1)+"점":"준비중"}}</p> <p>평균 : {{item.average?item.average.toFixed(1)+"점":"준비중"}}</p>
              </div>
            </div>
          </div>
          <q-separator />
        </div>
        <mugen-scroll :handler="fetchData" :should-handle="!loading">
          <div class="row justify-center q-my-md">
            <q-spinner-dots color="primary" size="40px" />
          </div>
        </mugen-scroll>
    </q-pull-to-refresh>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="refresh" color="primary" @click="refresh()"/>
    </q-page-sticky>
  </q-page>

</template>
<style scoped>
  .card_section{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1rem;
  }

  .title {
    margin: 0;
    font-weight: bold;
  }

  .brand{
    margin: 0;
    font-weight: bold;
    color: #888888;
    margin-top: -2px;
    margin-bottom: 10px;
  }
  .c{
    padding-left: 2rem;
    padding-right: 2rem;
    width: 100%;
  }

  .card_container{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;

  }

  .card_container .img{
    width: 30vw;
    margin-bottom: 13px;
  }

  .rating_container{
    display: flex;
    flex-direction: column;
  }

  .rating_container p{
    text-align: center;
    margin-bottom: 0;
    margin-top: 3px;
    color: #838383;
    font-size: 10px;
    margin-bottom: 20px;
  }

  .item-list{
    margin: 3rem;
  }

</style>
<script>
  import UserService from '../services/user.service'
  import MugenScroll from 'vue-mugen-scroll'

  function objToArr(objects){
    console.log("From ojbtoarr")
    console.log(objects.length)
    var arr = [];
    for (var i = 0; i < objects.length; i++) {
      console.log(objects[i])
      arr.push(objects[i]);
    }

    return arr
  }

  export default {
    name: 'PageIndex',
    components: {
      MugenScroll
    },
    data(){
      return {
        survey: [],
        loaded: false,
        loading: false
      }
    },
    computed: {
      items : function () {
        return this.survey
      }
    },

    methods: {
      logout()  {
        this.$store.dispatch('auth/logout')
        this.$router.push("/")
      },
      click(item, point){
        e.preventDefault();
        UserService.makeSurvey(item, point)
      },

      fetchData() {
        this.loading = true

        UserService.getUser().then(
          response => {

            this.survey = this.survey.concat(Object.values(response.data))

          }
        );

        this.loading = false
      },

      refresh(callback = null) {
        UserService.getUser().then(
          response => {

            this.survey = Object.values(response.data);

            this.loaded = true;

            if(callback){
              callback()
            }
          }
        );
      }

    }
  }
</script>
