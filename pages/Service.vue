<template>
    <div>
      <!-- <div class="uk-grid-small uk-child-width-1-7 uk-flex uk-margin-medium-top" uk-grid>
        <div>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small color">Landing Page</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small color">Dashboard</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small color">Back-end Development</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small color">Marketplace</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small color">Front-end Development</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small color">Web Design</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small color">Web App</div>
    </div>
      </div> -->

      <!-- <div class="uk-position-bottom-right uk-margin-large-right uk-margin-large-bottom"><img
              uk-img
              src="~/assets/icon/Create.png"
              style="width: 40px; cursor: pointer;"
            /></div> -->
            <div class= "main">
        <div class="uk-margin-medium-top uk-margin-medium-left main" style="font-size: 20px;">
          <b style="color: white; font-size: 40px;">Service Dashboard</b>
          <div class="uk-flex uk-child-width-1-6" uk-grid style="flex-wrap: wrap;">
            <div v-for="(svc,index) in service" :key="index" class="uk-card uk-card-default uk-card-body uk-margin-medium-top uk-padding-small color" style="width: 150px">
                <p>{{ svc.text }}</p>
            </div>
          </div>
        </div>
        <div class="uk-position-bottom-right uk-margin-xlarge-right uk-margin-xlarge-bottom"><img
              uk-img
              src="~/assets/icon/Create.png"
              style="width: 40px; cursor: pointer; position: fixed;"
            /></div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from "../components/Sidebar.vue";
  export default {
    head: {
    title: 'Service Dashboard',
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
      service:[
        {
          text: "Web Design"
        },
        {
          text: "Landing Page"
        },
        {
          text: "Frontend Development"
        },
        {
          text: "Backend Development"
        },
        {
          text: "Marketplace"
        },
        {
          text: "Web App"
        },
        {
          text: "Dashboard"
        },
      ]
    }
  },
    name: "IndexPage",
    layout: "default",
    components: { Sidebar }
  }
  </script>