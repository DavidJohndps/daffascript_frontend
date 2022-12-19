<template>
    <div
      class="uk-margin-medium-top uk-margin-medium-left main"
      style="font-size: 20px"
    >
      <b style="color: white; font-size: 40px">Team Dashboard</b>
      <!-- <div class="uk-margin-large-top uk-margin-xlarge-right uk-position-top-right">
        <form class="uk-search uk-search-default" style="border-radius: 10px">
          <span class="uk-search-icon-flip" uk-search-icon style="cursor: pointer"></span>
          <input class="uk-search-input" type="search" placeholder="Search" aria-label="Search">
      </form>
      </div> -->
      <div class="uk-flex uk-child-width-1-5" style="flex-wrap: wrap">
        <div
          v-for="(tm, index) in team"
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
          <p>{{ tm.name }}</p>
          <div
            class="
              uk-position-bottom-right
              uk-margin-small-right
              uk-margin-small-bottom
            "
          >
          <nuxt-link :to="'/cms/ateam/' + tm.id">
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
              @click="deleteData(tm.id)"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['team', 'deleteData'],
  }
  </script>