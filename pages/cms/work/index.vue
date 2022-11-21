<template>
  <div>
    <div class="main">
      <WorkCard :work="works" :deleteData="deleteData" />
      <div
        class="
          uk-position-bottom-right
          uk-margin-xlarge-right
          uk-margin-xlarge-bottom
        "
      >
        <nuxt-link to="/cms/work/form">
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
import WorkCard from '../../../components/cms/WorkCard.vue'
export default {
  head: {
    title: 'Work Dashboard',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Dashboard description',
      },
    ],
  },
  components: {
    WorkCard,
  },
  data() {
    return {
      works: [
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
    this.getwork()
  },
  methods: {
    async getwork() {
      const data = await this.$axios.$get('/api/work')
      this.works = data.data
    },
    async deleteData(id = null) {
      const data = await this.$axios.$delete('/api/work/destroy/' + id)
      this.getwork()
    }
  },
  name: 'IndexPage',
  layout: 'cms/default',
}
</script>