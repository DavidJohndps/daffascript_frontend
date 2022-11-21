<template>
  <div class="uk-container">
    <div class="uk-position-top-left uk-margin-medium-top uk-margin-medium-left">
      <nuxt-link to="/cms/contact_us">
      <img uk-img src="~/assets/cms/icon/back.png" style="width: 45px">
    </nuxt-link>
    </div>
    <div class="uk-margin-large-top uk-margin-large-left">
    <p class="font-gilroy-bold" style="font-size: 30px; text-align: center;">Create Contact Us</p>

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
        <p class="font-gilroy-medium" for="form-horizontal-text" style="font-size: 30px; width: 300px;">Phone Number</p>
        <div class="uk-margin-medium-right">
            <input class="formc r-formt font-gilroy-medium" id="form-horizontal-text" type="number" placeholder="" style="width: 500px">
        </div>
    </div>
  </form>
    <form class="uk-form-horizontal">
    <div class="uk-flex">
        <p class="font-gilroy-medium" for="form-horizontal-text" style="font-size: 30px; width: 300px;">Email Addres</p>
        <div class="uk-margin-medium-right">
            <input class="formc r-formt font-gilroy-medium" id="form-horizontal-text" type="text" placeholder="" style="width: 500px">
        </div>
    </div>
  </form>
    <form class="uk-form-horizontal">
    <div class="uk-flex">
        <p class="font-gilroy-medium" for="form-horizontal-text" style="font-size: 30px; width: 300px;">Company's Name</p>
        <div class="uk-margin-medium-right">
            <input class="formc r-formt font-gilroy-medium" id="form-horizontal-text" type="text" placeholder="" style="width: 500px">
        </div>
    </div>
  </form>
    <form class="uk-form-horizontal">
    <div class="uk-flex">
        <p class="font-gilroy-medium" for="form-horizontal-text" style="font-size: 30px; width: 300px;">Desc</p>
        <div class="uk-margin-medium-right">
          <textarea class="formc1 r-formt1 mr-c font-gilroy-medium" style="outline: none;" placeholder=""></textarea>
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
    title: 'Create Contact Us',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'contact description',
      },
    ],
  },
  name: 'form',
  layout: 'cms/form_layout',
}
</script>