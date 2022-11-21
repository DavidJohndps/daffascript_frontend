<template>
  <div>
    <div class="main">
      <div
        class="uk-margin-medium-top uk-margin-medium-left main"
        style="font-size: 20px"
      >
        <b style="color: white; font-size: 40px">Service Dashboard</b>
        <ServiceCard :service="services" :deleteData="deleteData" />
      </div>
      <div
        class="
          uk-position-bottom-right
          uk-margin-xlarge-right
          uk-margin-xlarge-bottom
        "
      >
      <nuxt-link to="/cms/servicee/form">
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
import ServiceCard from '~/components/cms/ServiceCard.vue'
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
      services: [
      ],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const data = await this.$axios.$get('/api/service')
      this.services = data.data
    },
    async deleteData(id = null) {
      const data = await this.$axios.$delete('/api/service/destroy/' + id)
      this.getData()
    }
  },
}
</script>