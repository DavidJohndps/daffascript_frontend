<template>
    <div>
      <div
        class="uk-margin-medium-top uk-margin-medium-left main"
        style="font-size: 20px;"
      >
        <b style="color: white; font-size: 40px;">Contact Us</b>
        <!-- <div
          class="uk-card uk-card-default uk-card-body uk-margin-medium-top uk-padding-small color"
        >
          <p>0827432849</p>
        </div> -->

          <div v-for="(ct,index) in contact" :key="index" class="uk-card uk-card-default uk-card-body uk-margin-medium-top uk-padding-small color">
              <p>{{ ct.no }}</p>
          </div>
        </div>

        <div class="uk-position-bottom-right uk-margin-xlarge-right uk-margin-xlarge-bottom"><img
              uk-img
              src="~/assets/icon/Create.png"
              style="width: 40px; cursor: pointer; position: fixed;"
            /></div>
       </div>
  </template>
  
  <script>
  import Sidebar from "../components/Sidebar.vue";
  export default {
    head: {
    title: 'Contact Us Dashboard',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Dashboard description'
      }
    ],
  },
  data(){
  return{
    contact:[
      {
        no: "0826312874"
      },
      {
        no: "08762342476"
      },
      {
        no: "08879274293"
      },
      {
        no: "08792348587"
      },
    ]
  }
},
    name: "IndexPage",
    layout: "default",
    components: { Sidebar }
  }
  </script>