<template>
  <div>
      <div
        class="uk-margin-medium-top uk-margin-medium-left main"
        style="font-size: 20px;"
      >
        <b style="color: white; font-size: 40px;">Dashboard</b><br />
        <div
          class="uk-card uk-card-default uk-card-body uk-margin-medium-top uk-padding-small uk-height-small color"
        >
          <p>Contact Us</p>
        </div>

        <!-- <div class="uk-flex uk-grid-small uk-grid-match" uk-grid style="margin-top:40px;">
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
</div> -->
    <div class="uk-flex uk-child-width-expand@m uk-margin-medium-top" uk-grid>
      <div>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small uk-height-small uk-margin-medium-right color">
          <p>Work</p>
        </div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small uk-height-small color">
          <p>Service</p>
        </div>
    </div>
    <div>
      <div class="uk-card uk-card-default uk-card-body uk-padding-small uk-height-small color">
        <p>Testimonials</p>
      </div>
    </div>
    </div>

      </div>

    <!-- {{ Products }} -->
    
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
  components: { Sidebar }
  // computed: {
  //   Products(){
  //     return this.products.filter(product=>{
  //       if(product.id==2) return product 
  //     })
  //   }
  // },
  // data() {
  //   return {
  //     products: [
  //       {
  //           id: 1,
  //           name: 'mamat',
  //           umur: 10
  //       },
  //       {
  //           id: 2,
  //           name: 'memet',
  //           umur: 11
  //       }
  //     ]
  //   }
  // }
}
</script>

<style>
  .color{
    color: white;
    margin-right: 30px;
    background-color: #101044;
    border-radius: 10px;
  }
  .main{
    color: white;
}

</style>
