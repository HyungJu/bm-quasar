<template>
  <q-page class="flex dd">
    <q-pull-to-refresh @refresh="refresh" style="width: 100%">
    <q-list  dense separator>

        <q-item clickable={false} v-for="item in items"  v-bind:key="item.uuid">

            <q-item-section class="card_section">
              <p>
                <strong>{{item.brand}}</strong>
                {{item.name}}
              </p>
              <div class="card_container">
                <q-img v-bind:src="item.image" class="img" />
                <div class="rating_container">
                  <div>
                    <q-rating
                      @input="point => click(item, point)"
                      v-model="item.rating"
                      size="2rem"
                      icon="star"
                      color="grey-4"
                      color-selected="yellow-5"
                      class="no-shadow"
                    />
                  </div>
                  </div>

                </div>

            </q-item-section>

        </q-item>

    </q-list>
    </q-pull-to-refresh>
  </q-page>
</template>
<style scoped>
  .card_section{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
    margin-right: 10px;
    margin-left: 10px;
  }

  .card_section > p {
    font-size: 13px;
    font-weight: 300;
    margin-bottom: 5px;
    margin-top: 0px;
    padding-top: 0
  }

  .card_container{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px
  }

  .card_container .img{
    width: 30vw;
  }

  .rating_container{
    display: flex;
    flex-direction: column
  }

  .rating_message{
    margin: 0;
    color: grey;
    font-size: 12px;
  }

  .star{
    font-size:  2rem;
    color:#F2F2F2
  }

  .clicked{
    color:#9B9BF8
  }

.q-rating__icon{
    text-shadow: none!important;
  }

</style>
<script>
  import UserService from '../services/user.service'
  import Notify from "quasar/src/plugins/Notify";

  export default {
    name: 'PageIndex',
    data(){
      return {
        survey: {

        },

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
      refresh(func) {
        UserService.getUser().then(
          response => {
            this.survey = response.data;
            func()
          }
        );

      }
    },
    created() {
      UserService.getUser().then(
        response => {
          this.survey = response.data;
        }
      );
    }
  }
</script>
