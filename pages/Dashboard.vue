<template>
  <div>
    <div class="uk-width-large">
      <div
        class="uk-card uk-card-default uk-card-body main"
        style="font-size: 20px"
      >
        <b style="color: black; font-size: 40px;">Dashboard</b><br />
        <div
          class="uk-card uk-padding-small"
          style="
            height: 30%;
            color: black;
            margin-top: 40px;
            background-color: #B1D4E0;
            border-radius: 10px;
          "
        >
          <p>Contact Us</p>
        </div>

        <div class="uk-flex uk-grid-small uk-grid-match" uk-grid style="margin-top:40px;">
    <div class="uk-width-expand@m" uk-grid>
        <div class="uk-card uk-padding-small uk-card-default uk-card-body color uk-height-small">
          <p>Work</p>
        </div>
    </div>
    <div class="uk-width-expand@m" uk-grid>
        <div class="uk-card uk-padding-small uk-card-default uk-card-body color">
          <p>Service</p>
        </div>
    </div>
    <div class="uk-width-expand@m" uk-grid>
        <div class="uk-card uk-padding-small uk-card-default uk-card-body color">
          <p>Testimonials</p>
        </div>
    </div>
</div>

      </div>
    </div>
  </div>
</template>
  
  <script>
import Sidebar from '../components/Sidebar.vue'
export default {
  head: {
    title: 'Dashboard',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Dashboard description',
      },
    ],
  },
  name: 'IndexPage',
  layout: 'default',
  components: { Sidebar },
}
</script>

<style>
  .color{
    color: black;
    margin-right: 30px;
    background-color: #B1D4E0;
    border-radius: 10px;
  }

</style>
