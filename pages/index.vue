<template>
  <div>
    <div class="uk-container uk-flex uk-margin-large-top uk-child-width-1-2@s">
      <div class="uk-margin-medium-left pagehome1">
        <div class="pagehome1-1">
          <p
            class="texthome font-gilroy-medium"
            style="
              color: rgba(255, 255, 255, 0.8);
              font-size: 20px;
              line-height: 25px;
            "
          >
            The only partner you need
          </p>
          <p
            class="font-gilroy-bold text-white uk-margin-remove-top texthome1"
            style="font-size: 50px; line-height: 59px"
          >
            We are the <span class="gradient">#1 Partner</span><br />
            for Your Digital<br />
            Needs.
          </p>
          <p
            class="font-gilroy-medium texthome2"
            style="
              font-size: 20px;
              line-height: 31px;
              color: rgba(225, 225, 255, 0.8);
            "
          >
            our ambitious team really care about or our<br />
            products to ensure your satisfaction and we always give our<br />
            best for your businness
          </p>
        </div>
        <nuxt-link to="/Contact" style="text-decoration: none; color: #fff">
          <button
            class="
              uk-margin-medium-top
              text-white
              b-start
              button-gra
              uk-visible@m
              imghome
              font-gilroy-medium
            "
          >
            Let's start!
          </button>
        </nuxt-link>
        <div class="card">
          <CardPersentase :card="card" />
        </div>
      </div>
      <div class="uk-margin-medium-top uk-visible@m imghome">
        <img src="~assets/homepage/Group 2306.svg" uk-img alt="" />
      </div>
    </div>

    <div class="uk-container">
      <div
        class="
          uk-margin-large-left
          uk-margin-xlarge-top
          uk-column-1-2@s
          uk-column-1-3@m
          uk-column-1-4@l
          uk-visible@m
          imghome
        "
      >
        <CardClients :client="client" />
      </div>
    </div>

    <div class="uk-container">
      <div
        class="
          uk-flex uk-align-center uk-margin-xlarge-top uk-padding-remove-right
          pagehome2
        "
        style="
          background-color: #191949;
          border-radius: 56px;
          width: 1119.9px;
          height: 511px;
        "
      >
        <div
          class="pagehome2-2"
          style="z-index: 1; margin-top: 47px; margin-left: 40px"
        >
          <p
            class="font-gilroy-bold text-white texthome3"
            style="font-size: 39.7px; line-height: 139%; padding-left: 24px"
          >
            The success of your businness<br />
            starts here, <span class="gradient">With Us.</span>
          </p>
          <p
            class="font-gilroy-medium texthome2"
            style="
              font-size: 24px;
              line-height: 161%;
              color: rgba(255, 255, 255, 0.62);
              padding-left: 25px;
            "
          >
            With a leading team of designer and developers,
            <br />we have created countless of outstanding works<br />and helped
            many businesses all over the world
          </p>
          <nuxt-link
            to="/AboutUs"
            style="text-decoration: none; z-index: 2; color: #fff"
          >
            <button
              class="
                uk-margin-medium-top
                button-gra
                text-white
                b-know
                buttonknow
                font-gilroy-medium
              "
              style="margin-left: 25px"
            >
              Know our team
            </button>
          </nuxt-link>
        </div>
        <div class="uk-visible@m" style="margin-left: 24px">
          <img
            src="~assets/homepage/image.svg"
            style="border-radius: 0 56px 56px 0; z-index: -1"
            uk-img
            alt=""
          />
        </div>
        <div class="uk-position-absolute uk-visible@xs uk-hidden@m">
          <img
            src="~assets/vectorhome.svg"
            style="
              margin-right: 10px;
              z-index: -2;
              margin-top: 157px;
              width: 327px;
              border-radius: 0 0 15px 15px;
            "
            uk-img
          />
        </div>
        <div class="uk-position-absolute uk-visible@xs uk-hidden@m">
          <img
            src="~assets/homepage/image1.svg"
            style="z-index: 1; margin-top: 157px"
          />
        </div>
      </div>
    </div>

    <div class="uk-container">
      <div class="uk-margin-xlarge-top">
        <div>
          <p
            class="font-gilroy-bold uk-text-center texthome4"
            style="font-size: 50px; line-height: 59px; color: white"
          >
            Our line of expertise
          </p>
        </div>
        <div class="uk-container uk-margin-large-top">
          <cardOurLine :expert="expert" />
        </div>
      </div>
    </div>

    <div class="uk-container">
      <div class="uk-margin-xlarge-top">
        <div class="uk-margin-medium-left">
          <p
            class="text-white font-gilroy-bold texthome5"
            style="font-size: 50px; line-height: 59px"
          >
            Some of our recent works
          </p>
        </div>
        <div class="uk-container">
          <CardWorks :images="images" />
          <div class="uk-margin-medium-top uk-flex uk-margin uk-text-center">
            <nuxt-link
              to="/Works"
              style="text-decoration: none; color: #fff"
              class="
                uk-text-center uk-margin-auto uk-margin-vertical uk-width-1-2@s
              "
            >
              <button class="b-show button-gra text-white font-gilroy-medium">
                Some More Works
              </button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="uk-container">
      <div class="uk-margin-xlarge-top uk-margin-medium-left homeourpartner">
        <div class="mr-text">
          <p
            class="text-white font-gilroy-bold texthome5 uk-visible@m"
            style="font-size: 50px; line-height: 59px"
          >
            What does our recent partners<br />
            say about us?
          </p>
          <p
            class="
              text-white
              font-gilroy-bold
              texthome5
              uk-visible@xs uk-hidden@m
            "
          >
            Words from our partners
          </p>
        </div>

        <!-- <ul class="uk-slider-items" uk-height-viewport="offset-top: true; offset-bottom: 30">
            <li class="tec2" v-for="(partner, index) in partners" :key="index" style="max-height: 320px;">
                <div class="uk-margin-large-top mr-user">
                    <img :src="partner.pict" class="imguser" style="width: 300px;" uk-img alt="">
                </div>
                <div class="uk-margin-medium-left homeourpartner">
                    <img src="~assets/homepage/quote.svg" class="uk-position-absolute uk-visible@m" style="margin-right: 20px; margin-top: 20px;" uk-img alt="">
                    <p class="font-gilroy-medium uk-margin-large-top uk-margin-medium-left texttittlehome mr-tittle" style="font-size: 35px; line-height: 41px; color: rgba(255, 255, 255, 0.8);">
                        "{{ partner.title }}"
                    </p>
                    <div class="uk-flex">
                        <div>
                        <p class="text-white uk-margin-medium-top uk-margin-medium-left uk-margin-remove-bottom textnamehome mr-name" style="font-size: 32px; line-height: 164%; font-weight: 700;">
                        {{ partner.name }}
                        </p>
                        <p class="font-gilroy-medium uk-margin-medium-left uk-margin-remove-top textcompany" style="font-size: 19px; line-height: 22px; color: rgba(255, 255, 255, 0.62);">
                            {{ partner.company }}
                        </p>
                        </div>
                    </div>
                </div>
            </li>
        </ul> -->

        <div class="partners">
            <CardPartners :partners="partners"/>
        </div>

        
      </div>
    </div>
    <div class="uk-container">
      <div class="uk-margin-xlarge-top uk-margin-medium-left re-tec">
        <div class="text-white font-gilroy-bold">
          <p class="re-tec-text" style="font-size: 50px; line-height: 59px">
            Technologies we use
          </p>
        </div>
        <div class="techno">
          <CardTechnologies :tech="tech" />
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
            uk-margin-large-top uk-margin-xlarge-left
            banner1
            font-gilroy-bold
            text-white
            fontbanner
          "
          style="font-size: 50px; line-height: 63px"
        >
          Have heard enough?<br />
          Let's Partner Up.
        </h1>
        <nuxt-link to="/Contact" style="text-decoration: none; color: #fff">
          <button
            class="
              uk-margin-xlarge-left uk-margin-small-top
              text-white
              btn-r-b
              button-gra
              font-gilroy-medium
            "
          >
            Works with us
          </button>
        </nuxt-link>
      </div>
      <div class="banner2">
        <img
          src="~assets/Vector (4).svg"
          class="uk-position-absolute bannerimg1"
          style="right: 0; width: 565px; height: auto; z-index: 1"
          uk-img
          alt=""
        />
        <img
          src="~assets/homepage/Group_18385.svg"
          class="uk-position-relative p-b"
          style="
            right: 0;
            margin-top: 100px;
            width: 600px;
            height: auto;
            z-index: 1;
          "
          uk-img
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardPersentase from '~/components/CardPersentase'
import CardClients from '~/components/CardPersentase.vue'
import CardTechnologies from '~/components/CardTechnologies.vue'
export default {
  layout: 'default',
  head() {
    return {
      title: 'Homepage',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Daffascript - About Us',
        },
      ],
    }
  },
  components: {
    CardPersentase,
    CardTechnologies,
  },
  data() {
    return {
      card: [
        {
          total: '50+',
          name: 'Project Completed',
        },
        {
          total: '98%',
          name: 'Approval Rate',
        },
        {
          total: '4+',
          name: 'Years in Business',
        },
      ],
      client: [
        {
          logo: require('../assets/homepage/mandiri.svg'),
        },
        {
          logo: require('../assets/homepage/fnbees.svg'),
        },
        {
          logo: require('../assets/homepage/apple.svg'),
        },
        {
          logo: require('../assets/homepage/petzs.svg'),
        },
      ],
      expert: [
        {
          pict: require('../assets/homepage/ui_ux.svg'),
          name: 'UI UX Designing',
          title:
            'We will design you an eyeplasing, easy to use and easy to code website/application',
        },
        {
          pict: require('../assets/homepage/webapp.svg'),
          name: 'Web App Development',
          title:
            'We will design you an eyeplasing, easy to use and easy to code website/application',
        },
        {
          pict: require('../assets/homepage/mobileap.svg'),
          name: 'Mobile App Development',
          title:
            'We will design you an eyeplasing, easy to use and easy to code website/application',
        },
      ],
      images: [
        {
          logo: require('../assets/works/hatam/logo.svg'),
          profile: require('../assets/homepage/works/pagehatam.svg'),
        },
        {
          logo: require('../assets/works/petz.sg/logo.svg'),
          profile: require('../assets/homepage/works/pagepetz.svg'),
        },
        {
          logo: require('../assets/works/fnbees/logo 2.svg'),
          profile: require('../assets/homepage/works/pagefnbees.svg'),
        },
      ],
      moreImages: [
        {
          logo: require('../assets/works/starbucks/logo.svg'),
          profile: require('../assets/works/starbucks/pagestarbucks.svg'),
        },
        {
          logo: require('../assets/works/kediripark/logo.svg'),
          profile: require('../assets/works/kediripark/pagekediri.svg'),
        },
        {
          logo: require('../assets/works/ustadzkita/uk-logoico 1.svg'),
          profile: require('../assets/works/ustadzkita/pageustadz.svg'),
        },
        {
          logo: require('../assets/works/setneg/logo.svg'),
          profile: require('../assets/works/setneg/pagesetneg.svg'),
        },
        {
          logo: require('../assets/works/e-ror/logo.svg'),
          profile: require('../assets/works/e-ror/pageeror.svg'),
        },
        {
          logo: require('../assets/works/ayampenyet/logo.svg'),
          profile: require('../assets/works/ayampenyet/pageayam.svg'),
        },
      ],
      partners: [
        {
          pict: require('../assets/homepage/user/user.svg'),
          title:
            "Daffascript Artworks has helped me in building my business' website and it has since increased my sakes significatly",
          name: 'Walter White',
          company: 'Owner of PT. Menthapethamin Suksesindo',
        },
        {
          pict: require('../assets/homepage/user/user.svg'),
          title:
            'Company has given flexibility of work from anymore, I have grown so much since I started working with this company.',
          name: 'Febiani Aulia',
          company: 'Owner of PT. Menthapethamin Suksesindo',
        },
      ],
      tech: [
        {
          logo: require('../assets/homepage/techno/Figma.svg'),
        },
        {
          logo: require('../assets/homepage/techno/Flutter.svg'),
        },
        {
          logo: require('../assets/homepage/techno/Vuejs.svg'),
        },
        {
          logo: require('../assets/homepage/techno/nuxtjs.svg'),
        },
        {
          logo: require('../assets/homepage/techno/Express_Js.svg'),
        },
        {
          logo: require('../assets/homepage/techno/Laravel.svg'),
        },
        {
          logo: require('../assets/homepage/techno/Python.svg'),
        },
        {
          logo: require('../assets/homepage/techno/Uikit.svg'),
        },
        {
          logo: require('../assets/homepage/techno/firebase.svg'),
        },
        {
          logo: require('../assets/homepage/techno/React.svg'),
        },
        {
          logo: require('../assets/homepage/techno/Kotlin.svg'),
        },
        {
          logo: require('../assets/homepage/techno/Swift.svg'),
        },
      ],
    }
  },
  methods: {
    showMoreWorks() {
      this.images = this.images.concat(this.moreImages)
      this.isMoreWorks = true
    },
  },
}
</script>