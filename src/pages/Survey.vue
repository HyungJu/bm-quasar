<template>
  <q-page class="flex dd">

      <div v-for="item in items"  v-bind:key="item.uuid" class="card_section">
        <div class="c">
          <div style="display:flex; flex-direction: row; justify-content: space-between; ">
            <p class="title">
              {{item.name}}
            </p>
            <img src="https://burger-master.xyz/uploads/images/584dbfdffbf49cc87bebbd47ff77ad60.jpeg"  width="50px" height="100%" style="object-fit: cover; margin-bottom: 10px"/>
          </div>
          <div class="card_container">
            <q-img v-bind:src="item.image" class="img"  style="border-radius: 10px"/>
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
              <p>예상 : 3.4 평균 : 4.1</p>
            </div>
          </div>
        </div>
        <q-separator />
      </div>
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
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
  import Notify from "quasar/src/plugins/Notify";
  import InfiniteLoading from 'vue-infinite-loading';

  export default {
    name: 'PageIndex',
    components: {
      InfiniteLoading
    },
    data(){
      return {
        survey: [],
        loaded: false,
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
        UserService.makeSurvey(item, point)
      },

      infiniteHandler ($state) {
        if(this.loaded){
          UserService.getUser().then(
            response => {

              this.survey = this.survey.concat(Array.from(response.data))
              $state.loaded();

            }
          );
        }else {
          $state.loaded();
        }
      },
      refresh() {

        UserService.getUser().then(
          response => {
            this.survey = Array.from(response.data)
          }
        );
      }
    },
    created() {
      alert("I ve been created")
      UserService.getUser().then(
        response => {
          console.log( response.data )
          this.survey = Array.from(response.data)
          this.loaded = true;
        }
      );
    }
  }
</script>
