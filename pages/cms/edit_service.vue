<template>
  <div class="uk-container">
    <div class="uk-position-top-left uk-margin-medium-top uk-margin-medium-left">
      <nuxt-link to="service">
      <img uk-img src="~/assets/cms/icon/back.png" style="width: 45px">
    </nuxt-link>
    </div>
    <div class="uk-margin-large-top uk-margin-large-left">
    <p class="font-gilroy-bold" style="font-size: 30px; text-align: center;">Edit Service</p>
    <!-- <div class="uk-width-1-2@s uk-flex">
        <p class="uk-margin-medium-right" style="font-size:30px; text-align: center;">Name: </p>
            <input class="formc r-formt font-gilroy-medium" type="text" placeholder="">
    </div>
    <div class="uk-width-1-2@s uk-flex">
        <p class="uk-margin-medium-right" style="font-size:30px; text-align: center;">Name: </p>
            <input class="formc r-formt font-gilroy-medium" type="text" placeholder="">
    </div>
    <div class="uk-width-1-2@s uk-flex">
        <p class="uk-margin-medium-right" style="font-size:30px; text-align: center;">Name: </p>
            <input class="formc r-formt font-gilroy-medium" type="text" placeholder="">
    </div> -->

    <form class="uk-form-horizontal uk-margin-top-m">
    <div class="uk-flex">
        <p class="font-gilroy-medium" for="form-horizontal-text" style="font-size: 30px; width: 300px;">Service Name</p>
        <div class="uk-margin-medium-right">
            <input class="formc r-formt font-gilroy-medium" id="form-horizontal-text" type="text" placeholder="" style="width: 500px">
        </div>
    </div>
  </form>
    <form class="uk-form-horizontal">
    <div class="uk-flex">
        <p class="font-gilroy-medium" for="form-horizontal-text" style="font-size: 30px; width: 300px;"></p>
        <div class="uk-margin-medium-right">
          <button class="uk-button button-gra">Submit</button>
        </div>
    </div>
  </form>
</div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Edit Service',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'form description',
      },
    ],
  },
  name: 'form',
  layout: 'cms/form_layout',
}
</script>