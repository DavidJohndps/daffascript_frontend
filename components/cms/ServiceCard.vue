<template>
  <div class="uk-flex uk-child-width-1-6" style="flex-wrap: wrap">
    <div
      v-for="(data, index) in service"
      :key="index"
      class="
        uk-card
        uk-card-default
        uk-card-body
        uk-margin-medium-top
        uk-padding-small
        color
      "
      style="width: 150px"
    >
      <p>{{ data.name }}</p>
      <div
          class="
            uk-position-bottom-right
            uk-margin-small-right
            uk-margin-small-bottom
          "
        >
          <nuxt-link :to="'/cms/servicee/' + data.id">
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
            @click="deleteData(data.id)"
          />
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['service', 'deleteData'],
}
</script>