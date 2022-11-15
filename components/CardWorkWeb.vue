<template>
  <div class="uk-flex uk-padding-remove-left res1" uk-grid style="margin-left: -90px">
    <div
      v-for="(value, index) in data"
      :key="index"
      class="uk-card uk-text-center services csw res"
      style="margin-left: 15px; width: auto; padding: 15px 25px 15px 25px"
    >
      <p class="font-gilroy-medium textservices titleservices text-white">
        {{ value.text }}
      </p>
    </div>
  </div>
</template>

<script>
    export default{
        props:['data']
    }
</script>