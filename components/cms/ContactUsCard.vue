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
      <p>
        Name : {{ ct.name_customer }} <br>
        Phone Number : {{ ct.no_telp }} <br> 
        Email : {{ ct.email }} <br> 
        Name Company : {{ ct.name_company }}</p>
      <div
        class="
          uk-position-bottom-right uk-margin-small-right uk-margin-small-bottom uk-margin-small-top
        "
      >
      <!-- <nuxt-link to="/cms/contact_us/edit_contact">
        <img
          uk-img
          src="~/assets/cms/icon/Edit.png"
          style="width: 30px; cursor: pointer"
        />
      </nuxt-link> -->
        <img
          uk-img
          src="~/assets/cms/icon/Delete.png"
          style="width: 30px; cursor: pointer"
          @click="deleteData(ct.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['contact', 'deleteData'],
}
</script>