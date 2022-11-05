<template>
    <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-margin-large-top uk-flex">
    <div v-for="(img,index) in images" :key="index">
      <div class="uk-card img-empat">
      <img :src="img.url">
    </div>
    </div>
  </div>
</template>

<script>
    export default{
        props: ['images']
    }
</script>