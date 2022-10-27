<template>
    <div>
      <!-- <div class="uk-card uk-card-default uk-card-body main" style="font-size: 20px;"><b style="color: white; font-size: 40px;">Testimonials Dashboard</b><br> -->
        
        <!-- <div class="uk-flex uk-grid-small uk-grid-match uk-margin-medium-top" uk-grid>
    <div class="uk-width-expand@m" uk-grid>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small uk-height-small color">
          <p>Cek</p>
          <div class="uk-position-bottom-right uk-margin-small-right uk-margin-small-bottom">
            <img
              uk-img
              src="~/assets/icon/Edit.png"
              style="width: 30px; cursor: pointer;"
            />
            <img
              uk-img
              src="~/assets/icon/Delete.png"
              style="width: 30px; cursor: pointer;"
            />
          </div>
        </div> -->
    <!-- </div>
    <div class="uk-width-expand@m" uk-grid>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small uk-height-small color">
          <p>Cek</p>
          <div class="uk-position-bottom-right uk-margin-small-right uk-margin-small-bottom">
            <img
              uk-img
              src="~/assets/icon/Edit.png"
              style="width: 30px; cursor: pointer;"
            />
            <img
              uk-img
              src="~/assets/icon/Delete.png"
              style="width: 30px; cursor: pointer;"
            />
          </div>
        </div>
    </div>
    <div class="uk-width-expand@m" uk-grid>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small uk-height-small color">
          <p>Cek</p>
          <div class="uk-position-bottom-right uk-margin-small-right uk-margin-small-bottom">
            <img
              uk-img
              src="~/assets/icon/Edit.png"
              style="width: 30px; cursor: pointer;"
            />
            <img
              uk-img
              src="~/assets/icon/Delete.png"
              style="width: 30px; cursor: pointer;"
            />
          </div>
        </div>
    </div>
</div> -->


    <!-- <div class="uk-flex uk-grid-small uk-grid-match" uk-grid style="margin-top:40px; "> -->
    <!-- <div class="uk-width-expand@m" uk-grid>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small uk-height-small color">
          <p>Cek</p>
          <div class="uk-position-bottom-right uk-margin-small-right uk-margin-small-bottom">
            <img
              uk-img
              src="~/assets/icon/Edit.png"
              style="width: 30px; cursor: pointer;"
            />
            <img
              uk-img
              src="~/assets/icon/Delete.png"
              style="width: 30px; cursor: pointer;"
            />
          </div>
        </div>
    </div> -->
    <!-- <div class="uk-width-expand@m" uk-grid>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small uk-height-small color">
          <p>Cek</p>
          <div class="uk-position-bottom-right uk-margin-small-right uk-margin-small-bottom">
            <img
              uk-img
              src="~/assets/icon/Edit.png"
              style="width: 30px; cursor: pointer;"
            />
            <img
              uk-img
              src="~/assets/icon/Delete.png"
              style="width: 30px; cursor: pointer;"
            />
          </div>
        </div>
    </div> -->
    <!-- <div class="uk-width-expand@m" uk-grid>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small uk-height-small color">
          <p>Cek</p>
          <div class="uk-position-bottom-right uk-margin-small-right uk-margin-small-bottom">
            <img
              uk-img
              src="~/assets/icon/Edit.png"
              style="width: 30px; cursor: pointer;"
            />
            <img
              uk-img
              src="~/assets/icon/Delete.png"
              style="width: 30px; cursor: pointer;"
            />
          </div>
        </div>
    </div>
</div>
      </div> -->

      <!-- <div class="uk-position-bottom-right uk-margin-large-right uk-margin-large-bottom"><img
              uk-img
              src="~/assets/icon/Create.png"
              style="width: 40px; cursor: pointer;"
            /></div> -->

      <div class= "main">
        <div class="uk-margin-medium-top uk-margin-medium-left main" style="font-size: 20px;">
          <b style="color: white; font-size: 40px;">Testimonials Dashboard</b>
          <div class="uk-flex uk-child-width-1-3" uk-grid style="flex-wrap: wrap;">
            <div v-for="(testi,index) in testimonials" :key="index" class="uk-card uk-card-default uk-card-body uk-margin-medium-top uk-padding-small color" style="width: 320px">
                <p>testi</p>
                <p>{{ testi.text }}</p>
                <div class="uk-position-bottom-right uk-margin-small-right uk-margin-small-bottom">
              <img
                uk-img
                src="~/assets/icon/Edit.png"
                style="width: 30px; cursor: pointer;"
              />
              <img
                uk-img
                src="~/assets/icon/Delete.png"
                style="width: 30px; cursor: pointer;"
              />
            </div>
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
    title: 'Testimonials Dashboard',
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
      testimonials: [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, modi!"
        },
        {
          text: "ipsum"
        },
        {
          text: "Dolor"
        }
      ]
    }
  },
    name: "IndexPage",
    layout: "default",
    components: { Sidebar }
  }
  </script>