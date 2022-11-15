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
    <div class="main">
      <div
        class="uk-margin-medium-top uk-margin-medium-left main"
        style="font-size: 20px"
      >
        <b style="color: white; font-size: 40px">Service Dashboard</b>
        <ServiceCard :service="service" />
      </div>
      <div
        class="
          uk-position-bottom-right
          uk-margin-xlarge-right
          uk-margin-xlarge-bottom
        "
      >
      <nuxt-link to="create_service">
        <img
          uk-img
          src="~/assets/cms/icon/Create.png"
          style="width: 40px; cursor: pointer; position: fixed"
        />
      </nuxt-link>
      </div>
    </div>
  </div>
</template>
  
  <script>
// import Sidebar from "../components/Sidebar.vue";
import ServiceCard from '../../components/cms/ServiceCard.vue'
export default {
  name: 'IndexPage',
  layout: 'cms/default',
  head: {
    title: 'Service Dashboard',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Dashboard description',
      },
    ],
  },
  components: {
    ServiceCard,
  },
  // components: { Sidebar }
  data() {
    return {
      service: [
        {
          text: 'Web Design',
        },
        {
          text: 'Landing Page',
        },
        {
          text: 'Frontend Development',
        },
        {
          text: 'Backend Development',
        },
        {
          text: 'Marketplace',
        },
        {
          text: 'Web App',
        },
        {
          text: 'Dashboard',
        },
      ],
    }
  },
}
</script>