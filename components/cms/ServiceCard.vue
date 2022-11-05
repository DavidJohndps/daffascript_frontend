<template>
  <div class="uk-flex uk-child-width-1-6" style="flex-wrap: wrap">
    <div
      v-for="(svc, index) in service"
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
      <p>{{ svc.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['service'],
}
</script>