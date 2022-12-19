<template>
  <div>
    <div class="main">
      <ExpertiseCard :expertise="expertises" :deleteData="deleteData" />
      <div
        class="
          uk-position-bottom-right
          uk-margin-xlarge-right
          uk-margin-xlarge-bottom
        "
      >
        <nuxt-link to="/cms/expertise/form">
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
import ExpertiseCard from '~/components/cms/ExpertiseCard.vue'
export default {
  head: {
    title: 'Expertise Dashboard',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Dashboard description',
      },
    ],
  },
  components: {
    ExpertiseCard,
  },
  data() {
    return {
      expertises: [
        // {
        //   text: 'Item',
        // },
        // {
        //   text: 'Item',
        // },
        // {
        //   text: 'Item',
        // },
        // {
        //   text: 'Item',
        // },
        // {
        //   text: 'Item',
        // },
        // {
        //   text: 'Item',
        // },
        // {
        //   text: 'Item',
        // },
      ],
    }
  },
  created() {
    this.getexpertise()
  },
  methods: {
    async getexpertise() {
      const data = await this.$axios.$get('/api/expertise')
      this.expertises = data.data
    },
    async deleteData(id = null) {
      const data = await this.$axios.$delete('/api/expertise/destroy/' + id)
      this.getexpertise()
    },
  },
  name: 'IndexPage',
  layout: 'cms/default',
}
</script>