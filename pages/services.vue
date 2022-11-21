<template>
  <div>
    <div class="uk-container">
      <div class="uk-margin-medium-left posi">
        <img
          src="~assets/Group_60.svg"
          class="uk-position-absolute uk-position-right uk-visible@m"
          style="z-index: -1; width: 750px"
          uk-img
          alt=""
        />
        <div
          class="
            uk-margin-medium-left
            uk-margin-large-top
            uk-container
            uk-child-width-1-2@s
            cardt2
          "
          uk-grid
        >
          <div
            class="
              text-white
              uk-margin-medium-top uk-padding-remove-left uk-visible@m
            "
          >
            <p
              class="font-gilroy-bold"
              style="font-size: 70px; line-height: 82px"
            >
              Our<br />Service
            </p>
            <p
              class="font-gilroy-medium"
              style="font-size: 26px; line-height: 46px"
            >
              We offer a wide range of services and<br />provides complete
              client satisfication
            </p>
          </div>
          <div class="uk-flex cardt">
            <div
              class="uk-margin-small-right uk-card cardt1"
              style="
                background: linear-gradient(
                  180deg,
                  rgba(15, 15, 62, 0.02) 0%,
                  rgba(15, 15, 62, 0.4383) 100%
                );
                box-shadow: 0px 1px 45px rgba(0, 0, 0, 0.17);
                border-radius: 8px;
                z-index: -2;
                width: 250px;
                height: 300px;
              "
            >
              <div class="uk-card-body cardt1-b cardl uk-margin-medium-top">
                <img
                  src="~assets/services/landingpage.svg"
                  class="uk-align-center"
                  style="width: 150px"
                  uk-img
                />
                <p
                  class="font-gilroy-bold text-white textcs"
                  style="font-size: 17px; line-height: 28px"
                >
                  Landing Page Design
                </p>
              </div>
            </div>
            <div
              class="uk-margin-small-left uk-card cardt1"
              style="
                background: linear-gradient(
                  180deg,
                  rgba(15, 15, 62, 0.02) 0%,
                  rgba(15, 15, 62, 0.4383) 100%
                );
                box-shadow: 0px 1px 45px rgba(0, 0, 0, 0.17);
                border-radius: 8px;
                z-index: -2;
                width: 250px;
                height: 300px;
                margin-top: 80px;
              "
            >
              <div class="cardt1-bn uk-margin-medium-top">
                <img
                  src="~assets/services/mobiledesign.svg"
                  class="cardt-img uk-align-center uk-margin-remove-bottom"
                  style="width: 150px; margin-bottom: 30px"
                  uk-img
                />
                <p
                  class="font-gilroy-bold text-white uk-text-center textcs"
                  style="margin-top: 10px; font-size: 17px; line-height: 28px"
                >
                  Mobile App Design
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            uk-margin-xlarge-top uk-margin-medium-left
            containerservices
            uk-flex
          "
          uk-grid
          v-for="(service, i) in services"
          :key="i"
        >
          <p
            class="
              font-gilroy-bold
              text-white
              headingservices
              uk-padding-remove-left
            "
            style="font-size: 50px; line-height: 59px"
          >
            {{ service.name }}
          </p>
          <div>
            <CardWorkWeb :data="JSON.parse(service.desc)" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="uk-margin-large-top uk-child-width-1-2@s ukgrid-match banner"
      style="background-color: #191949"
      uk-grid
    >
      <div class="banner1-1">
        <h1
          class="
            uk-margin-large-top
            banner1
            font-gilroy-bold
            text-white
            fontbanner
          "
          style="font-size: 45px; line-height: 63px; margin-left: 150px"
        >
          Got questions? We've<br />
          got answers. Let's talk!
        </h1>
        <nuxt-link to="/Contact" style="text-decoration: none; color: #fff">
          <button
            class="
              uk-margin-medium-top
              text-white
              b-contact
              buttonbanner
              button-gra
              font-gilroy-medium
            "
            style="margin-left: 150px"
          >
            Contact Us
          </button>
        </nuxt-link>
      </div>
      <div class="banner2">
        <img
          src="~assets/Vector (4).svg"
          class="uk-position-absolute bannerimg1"
          style="right: 0; width: 610px; height: auto; z-index: 1"
          uk-img
          alt=""
        />
        <img
          src="~assets/pana.svg"
          class="uk-position-relative bannerimg2"
          style="right: 0px; width: 500px; height: auto; z-index: 1"
          uk-img
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardWorkWeb from '~/components/CardWorkWeb.vue'
export default {
  head() {
    return {
      title: 'Services',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Daffascript - Services',
        },
      ],
    }
  },
  components: {
    CardWorkWeb,
  },
  data() {
    return {
      services: [],
    }
  },
  created() {
    this.getservice()
  },
  methods: {
    async getservice() {
      const data = await this.$axios.$get('/api/service')
      this.services = data.data
    },
  },
}
</script>
