<template>
  <div>
    <div
      class="uk-position-center font-gilroy-medium"
      style="margin-left: 150px"
    >
      <center>
        <p style="font-size: 50px">
          <img
            uk-img
            src="~/assets/cms/icon/hi.png"
            style="margin-right: -10px"
          />
          Welcome!
        </p>
        <p style="font-size: 15px; margin-top: -20px; opacity: 50%">
          to dashboard
        </p>
      </center>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'index',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Dashboard description',
      },
    ],
  },
  name: 'IndexPage',
  layout: 'cms/default',
  created(){
    this.$router.push('/cms/dashboard')
  }
}
</script>
