<template>
  <div class="logincard">
    <div class="uk-card uk-card-body uk-width-xlarge">
      <p class="font-gilroy-bold" style="font-size: 30px">Log in</p>
      
      <form class="uk-form-stacked">
        <div class="uk-margin">
          <p class="font-gilroy-medium" style="font-size: 20px">Email</p>
            <input
              class="formc"
              id="form-stacked-text"
              type="text"
              placeholder=""
              style="width: 450px"
            />
        </div>

        <div class="uk-margin">
          <p class="font-gilroy-medium" style="font-size: 20px">Password</p>
            <input
              class="formc"
              id="form-stacked-text"
              type="text"
              placeholder=""
              style="width: 450px"
            />
        </div>
      </form>
      <nuxt-link to="/cms">
        <button class="uk-button button-gra uk-margin-medium-top" style="width:500px; height: 50px; border-radius: 20px; color: white;">Login</button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Login',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Dashboard description',
      },
    ],
  },
  name: 'IndexPage',
  layout: 'layout_login',
}
</script>

<style>
.logincard {
  background-color: #08083c;
}
</style>