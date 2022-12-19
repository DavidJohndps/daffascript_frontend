<template>
  <div class="logincard">
    <div class="uk-card uk-card-body uk-width-xlarge">
      <p class="font-gilroy-bold" style="font-size: 30px">Log in</p>
      
      <form class="uk-form-stacked" method="post" @submit.prevent="login">
        <div class="uk-margin">
          <p class="font-gilroy-medium" style="font-size: 20px">Email</p>
            <input
              class="formc"
              id="form-stacked-text"
              type="email"
              v-model="email"
              required
              placeholder=""
              style="width: 450px"
            />
        </div>

        <div class="uk-margin">
          <p class="font-gilroy-medium" style="font-size: 20px">Password</p>
            <input
              class="formc"
              id="form-stacked-text"
              type="password"
              v-model="password"
              password-reveal
              required
              placeholder=""
              style="width: 450px"
            />
          </div>
          <button class="uk-button button-gra uk-margin-medium-top" type="submit" style="width:500px; height: 50px; border-radius: 20px; color: white;">Login</button>
      </form>
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
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      await this.$auth.loginWith('laravelSanctum', {
        data: {
          email: this.email,
          password: this.password,
        },
      })

     this.$router.push('/cms')
    },
  },
  
}
</script>

<style>
.logincard {
  background-color: #08083c;
}
</style>