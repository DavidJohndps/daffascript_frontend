<template>
  <div>
    <div
      class="uk-margin-medium-top uk-margin-medium-left main"
      style="font-size: 20px"
    >
      <b style="color: white; font-size: 40px">Contact Us</b>
      <ContactUsCard :contact="contact" />
    </div>

    <div
      class="
        uk-position-bottom-right uk-margin-xlarge-right uk-margin-xlarge-bottom
      "
    >
      <img
        uk-img
        src="~/assets/cms/icon/Create.png"
        style="width: 40px; cursor: pointer; position: fixed"
      />
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
        {
          no: '0826312874',
        },
        {
          no: '08762342476',
        },
        {
          no: '08879274293',
        },
        {
          no: '08792348587',
        },
      ],
    }
  },
  name: 'IndexPage',
  layout: 'cms/default',
  components: { ContactUsCard },
  // created() {
  //   this.getData();
  // },
  // methods: {
  //   getData() {
  //     axios.get('/user?ID=12345')
  //       .then(function (response) {
  //         // handle success
  //         console.log(response);
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         console.log(error);
  //       });
  //   }
  // }
}
</script>