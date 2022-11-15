<template>
  <div class="uk-container">
    <div class="uk-position-top-left uk-margin-medium-top uk-margin-medium-left">
      <nuxt-link to="work">
      <img uk-img src="~/assets/cms/icon/back.png" style="width: 45px">
    </nuxt-link>
    </div>
    <div class="uk-margin-large-top uk-margin-large-left">
    <p class="font-gilroy-bold" style="font-size: 30px; text-align: center;">Create Work</p>
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
        <p class="font-gilroy-medium" for="form-horizontal-text" style="font-size: 30px; width: 300px;">Name Company</p>
        <div class="uk-margin-medium-right">
            <input class="formc r-formt font-gilroy-medium" id="form-horizontal-text" type="text" placeholder="" style="width: 500px">
        </div>
    </div>
  </form>
    <form class="uk-form-horizontal">
    <div class="uk-flex">
        <p class="font-gilroy-medium" for="form-horizontal-text" style="font-size: 30px; width: 300px;">Image</p>
        <div class="uk-margin-medium-right">
          <div class="js-upload" uk-form-custom>
    <input type="file" multiple>
    <button class="uk-button" type="button" tabindex="-1" style="background-color: #191949; border-radius: 10px;"><span uk-icon="icon: cloud-upload"></span> Choose File</button>
</div>
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
    title: 'Create Work',
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