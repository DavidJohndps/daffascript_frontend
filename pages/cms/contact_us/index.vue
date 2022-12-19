<template>
  <div>
    <div
      class="uk-margin-medium-top uk-margin-medium-left main"
      style="font-size: 20px"
    >
      <b style="color: white; font-size: 40px">Contact Us</b>
      <ContactUsCard :contact="contact" :deleteData="deleteData"/>
    </div>

    <div
      class="
        uk-position-bottom-right uk-margin-xlarge-right uk-margin-xlarge-bottom
      "
    >
    <!-- <nuxt-link to="/cms/contact_us/create_contact">
      <img
        uk-img
        src="~/assets/cms/icon/Create.png"
        style="width: 40px; cursor: pointer; position: fixed"
      />
    </nuxt-link> -->
    </div>
  </div>
</template>
  
  <script>
import ContactUsCard from '~/components/cms/ContactUsCard.vue'
export default {
  head: {
    title: 'Contact Us Dashboard',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Dashboard description',
      },
    ],
  },
  data() {
    return {
      contact: [
        // {
        //   name: 'hamba Allah',
        //   no: '0826312874',
        //   email: 'hambaallah@gmail.com',
        //   name_company: 'lorem',
        //   // desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, ipsa?',
        // }
      ],
    }
  },
  name: 'IndexPage',
  layout: 'cms/default',
  components: { ContactUsCard },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const data = await this.$axios.$get('/api/contact-us')
      this.contact = data.data
    },
    async deleteData(id = null) {
      const data = await this.$axios.$delete('/api/contact-us/destroy/' + id)
      this.getData()
    }
  }
}
</script>