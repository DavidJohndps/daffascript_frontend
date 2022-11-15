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
      <p>{{ ct.no }} <br> {{ ct.name }} <br> {{ ct.email }} <br> {{ ct.name_company }} <br> {{ ct.desc }}</p>
      <div
        class="
          uk-position-bottom-right uk-margin-small-right uk-margin-small-bottom uk-margin-small-top
        "
      >
      <nuxt-link to="edit_contact">
        <img
          uk-img
          src="~/assets/cms/icon/Edit.png"
          style="width: 30px; cursor: pointer"
        />
      </nuxt-link>
        <img
          uk-img
          src="~/assets/cms/icon/Delete.png"
          style="width: 30px; cursor: pointer"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['contact']
}
</script>