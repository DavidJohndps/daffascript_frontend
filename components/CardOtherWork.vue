<template>
  <div>
    <div
      v-for="(work, index) in works"
      :key="index"
      class="uk-card cardworks uk-flex uk-margin-large-top uk-margin-medium-left"
      style="background-color: #191949; border-radius: 60px; width: 1100px"
    >
      <div class="uk-width-3-4 uk-text-center">
        <img
          :src="'http://127.0.0.1:8000/assets/work/img/' + work.img"
          class="profile"
          style="border-radius: 56px 0 0 56px"
        />
      </div>
      <div class="uk-width-1-4 uk-text-center uk-position-center-right">
        <img
          :src="'http://127.0.0.1:8000/assets/work/logo/' + work.logo"
          class="uk-margin-medium-right"
          style="width: 250px"
        />
      </div>
    </div>
  </div>
</template>

<script>
    export default{
        props:['works']
    }
</script>