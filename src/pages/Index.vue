<template>
  <q-page class="flex q-ma-lg dd">
    <div class="text-h5 text-bold">
      당신을 위한 추천
    </div>

    <q-scroll-area horizontal style="height: 200px; overflow-x: hidden; overflow-y: ">
      <div style="display:flex; flex-direction: row">
        <div class="q-mr-lg">
          <div style="width: 130px; height: 130px; background-color: #FAFAFA; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-top: 10px" >
            <q-img
              src="https://d1cetv28vf13tu.cloudfront.net/%ED%95%A0%EB%9D%BC%ED%94%BC%EB%87%A8%EC%99%80%ED%8D%BC%EC%A3%BC%EB%8B%88%EC%96%B4+%EC%84%B8%ED%8A%B8_497.jpg"
              width="120px"
            />
          </div>
          <h6 style="margin-top: 7px; font-size: 14px;line-height: 16px; max-width: 130px; word-break: keep-all">통새우 와퍼 주니어 세트</h6>
          <h6 style="margin-top: -27px; font-size: 14px;line-height: 16px; max-width: 130px; word-break: keep-all; font-weight: bold">5,000원</h6>

        </div>
        <div class="q-mr-lg">
          <div style="width: 130px; height: 130px; background-color: #FAFAFA; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-top: 10px" >
            <q-img
              src="https://d1cetv28vf13tu.cloudfront.net/%ED%95%A0%EB%9D%BC%ED%94%BC%EB%87%A8%EC%99%80%ED%8D%BC%EC%A3%BC%EB%8B%88%EC%96%B4+%EC%84%B8%ED%8A%B8_497.jpg"
              width="120px"
            />
          </div>
          <h6 style="margin-top: 7px; font-size: 14px;line-height: 16px; max-width: 130px; word-break: keep-all">통새우 와퍼 주니어 세트</h6>
          <h6 style="margin-top: -27px; font-size: 14px;line-height: 16px; max-width: 130px; word-break: keep-all; font-weight: bold">5,000원</h6>
        </div>
        <div>
          <div style="width: 130px; height: 130px; background-color: #FAFAFA; border-radius: 10px; display: flex; align-items: center; justify-content: center; margin-top: 10px" >
            <q-img
              src="https://d1cetv28vf13tu.cloudfront.net/%ED%95%A0%EB%9D%BC%ED%94%BC%EB%87%A8%EC%99%80%ED%8D%BC%EC%A3%BC%EB%8B%88%EC%96%B4+%EC%84%B8%ED%8A%B8_497.jpg"
              width="120px"
            />
          </div>
          <h6 style="margin-top: 7px; font-size: 14px;line-height: 16px; max-width: 130px; word-break: keep-all">통새우 와퍼 주니어 세트</h6>
          <h6 style="margin-top: -27px; font-size: 14px;line-height: 16px; max-width: 130px; word-break: keep-all; font-weight: bold">5,000원</h6>
        </div>
      </div>
    </q-scroll-area>


  </q-page>
</template>
<style>
-webkit-scrollbar {
    display: none;
  }
</style>
<script>
  import UserService from '../services/user.service'

  export default {
    name: 'PageIndex',
    data(){
      return {
        survey: {

        }
      }
    },

    created() {
      UserService.getUser().then(
        response => {
          this.survey = response.data;
        },
        error => {
          this.survey =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    }
  }
</script>
