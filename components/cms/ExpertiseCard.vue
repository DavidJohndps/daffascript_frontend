<template>
    <div
      class="uk-margin-medium-top uk-margin-medium-left main"
      style="font-size: 20px"
    >
      <b style="color: white; font-size: 40px">Expertise Dashboard</b>
      <div class="uk-margin-large-top uk-margin-xlarge-right uk-position-top-right">
      </div>
      <div class="uk-flex uk-child-width-1-5" style="flex-wrap: wrap">
        <div
          v-for="(ex, index) in expertise"
          :key="index"
          class="
            uk-card
            uk-card-default
            uk-card-body
            uk-margin-medium-top
            uk-padding-small
            color
          "
          style="width: 180px"
        >
          <p>{{ ex.name }}</p>
          <div
            class="
              uk-position-bottom-right
              uk-margin-small-right
              uk-margin-small-bottom
            "
          >
            <nuxt-link :to="'/cms/expertise/' + ex.id">
              <img
                uk-img
                src="~/assets/cms/icon/Edit.png"
                style="width: 20px; cursor: pointer"
              />
            </nuxt-link>
            <img
              uk-img
              src="~/assets/cms/icon/Delete.png"
              style="width: 20px; cursor: pointer"
              @click="deleteData(ex.id)"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['expertise', 'deleteData'],
  }
  </script>