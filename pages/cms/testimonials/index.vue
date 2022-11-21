<template>
  <div>
    <div class="main">
      <div
        class="uk-margin-medium-top uk-margin-medium-left main"
        style="font-size: 20px"
      >
        <b style="color: white; font-size: 40px">Testimonials Dashboard</b>
        <TestimonialsCard :testimonials="testimonials" :deleteData="deleteData" />
      </div>
      <div
        class="
          uk-position-bottom-right
          uk-margin-xlarge-right
          uk-margin-xlarge-bottom
        "
      >
      <nuxt-link to="/cms/testimonials/form">
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
import TestimonialsCard from '~/components/cms/TestimonialsCard.vue'
export default {
  name: 'IndexPage',
  layout: 'cms/default',
  head: {
    title: 'Testimonials Dashboard',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Dashboard description',
      },
    ],
  },
  components: {
    TestimonialsCard,
  },
  data() {
    return {
      testimonials: [
        // {
        //   name: 'Walter White',
        //   name_company: 'Owner of PT. Menthapethamin Suksesindo',
        //   desc: 'Daffascript Artworks has helped me in building my business website and it has since increased my sakes significatly',
        // },
        // {
        //   name: 'Walter White',
        //   name_company: 'Owner of PT. Menthapethamin Suksesindo',
        //   desc: 'Daffascript Artworks has helped me in building my business website and it has since increased my sakes significatly',
        // },
        // {
        //   name: 'Walter White',
        //   name_company: 'Owner of PT. Menthapethamin Suksesindo',
        //   desc: 'Daffascript Artworks has helped me in building my business website and it has since increased my sakes significatly',
        // },
      ],
    }
  },
  created() {
    this.gettestimonial()
  },
  methods: {
    async gettestimonial() {
      const data = await this.$axios.$get('/api/review')
      this.testimonials = data.data
    },
    async deleteData(id = null) {
      const data = await this.$axios.$delete('/api/review/destroy/' + id)
      this.gettestimonial()
    }
  },
}
</script>