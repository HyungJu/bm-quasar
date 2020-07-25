<template>
  <q-page class="flex dd">

  </q-page>

</template>
<script>
  import UserService from '../services/user.service'
  import MugenScroll from 'vue-mugen-scroll'


  export default {
    name: 'PageIndex',
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


    }
  }
</script>
