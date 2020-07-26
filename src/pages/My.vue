<template>

  <q-page class="flex dd  " >
    <q-btn
      @click="logout()"
      color="primary"
      label="로그아웃"
      class="q-mb-md q-ma-sm q-btn--outline"
    />

    <div v-for="item in items"  v-bind:key="item.uuid" class="card_section" @click="$router.push({ name: 'Detail', params: {item: item.item, point: item.point}})" >
      <div class="c">
        <div style="display:flex; flex-direction: row; justify-content: space-between; ">
          <p class="title">
            {{item.item.name}}
          </p>
          <img v-bind:src="item.item.brand"  width="50px" height="100%" style="object-fit: cover; margin-bottom: 10px"/>
        </div>
        <div class="card_container">
          <q-img v-bind:src="item.item.image" class="img"  style="border-radius: 10px"/>

        </div>
      </div>
      <q-separator />
    </div>
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
    flex-direction: column;
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


  export default {
    name: 'PageIndex',
    props: ['item'],
    data(){
      return {
        items: []
      }
    },
    methods: {
      click(item, point){
        UserService.makeSurvey(item, point)
      },
      logout()  {
        this.$store.dispatch('auth/logout')
        this.$router.push("/")
      },
    },
    mounted() {
      UserService.getMy().then(response => {
        this.items = response.data;
      })
    }
  }
</script>
