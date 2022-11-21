<template>
  <div class="uk-flex uk-child-width-1-3" style="flex-wrap: wrap">
    <div
      v-for="(testi, index) in testimonials"
      :key="index"
      class="
        uk-card
        uk-card-default
        uk-card-body
        uk-margin-medium-top
        uk-padding-small
        color
      "
      style="width: 320px"
    >
      <p>{{ testi.name }}</p>
      <div
        class="
          uk-position-bottom-right uk-margin-small-right uk-margin-small-bottom
        "
      >
      <nuxt-link :to="'/cms/testimonials/' + testi.id">
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
            @click="deleteData(testi.id)"
          />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['testimonials','deleteData'],
}
</script>