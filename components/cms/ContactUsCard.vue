<template>
  <div>
    <div
      v-for="(ct, index) in contact"
      :key="index"
      class="
        uk-card
        uk-card-default
        uk-card-body
        uk-margin-medium-top
        uk-padding-small
        color
      "
    >
      <p>{{ ct.no }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['contact']
}
</script>