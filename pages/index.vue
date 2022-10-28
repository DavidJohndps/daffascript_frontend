<template>
  <div>
      <div class="uk-container uk-flex uk-margin-large-top uk-child-width-1-2@s">
          <div class="uk-margin-medium-left pagehome1">
             <div class="pagehome1-1">
                  <p class="texthome font-gilroy-medium" style="color: rgba(255, 255, 255, 0.8); font-size: 20px; line-height: 25px;">
                      The only partner you need
                  </p>
                  <p class="font-gilroy-bold text-white uk-margin-remove-top texthome1" style="font-size: 50px; line-height: 59px;">
                  We are the <span class="gradient">#1 Partner</span><br>
                  for Your Digital<br>
                  Needs.
                  </p>
                  <p class="font-gilroy-medium texthome2" style="font-size: 20px; line-height: 31px; color: rgba(225, 225, 255, 0.8);">
                      our ambitious team really care about or our<br>
                      products to ensure your satisfaction and we always give our<br>
                      best for your businness
                  </p>
             </div>
              <button class="uk-margin-medium-top text-white b-start uk-visible@m imghome" >
                <nuxt-link to="/Contact" style="text-decoration: none; color: #fff;">
                    Let's start!
                </nuxt-link>
              </button>
              <div class="uk-margin-medium-top uk-card uk-column-1-2@s uk-column-1-3@m uk-text-center cardhome" style="width: 500px; height: 126px; padding: 20px 15px 5px 15px; border-radius: 18px; background-color: #191949;">
                  <div  v-for="(textcard, index) in card" :key="index">
                     <p class="text-white uk-margin-remove-bottom texttotal" style="font-size: 33px; font-weight: 700; line-height:164.5%;">
                          {{textcard.total}}
                      </p>
                     <p class="font-gilroy-bold uk-margin-remove-top textname" style=" color: rgba(255, 255, 255, 0.8); font-size: 14px; line-height: 163.5%; text-transform: capitalize;">
                          {{textcard.name}}
                      </p>
                  </div>
              </div>
          </div>
          <div class="uk-margin-medium-top uk-visible@m imghome">
              <img src="~assets/homepage/Group 2306.svg" uk-img alt="">
          </div>
      </div>
      <div class="uk-container">
          <div class="uk-margin-large-left uk-margin-xlarge-top uk-column-1-2@s uk-column-1-3@m uk-column-1-4@l uk-visible@m imghome">
              <div v-for="(clients, index) in client" :key="index">
                  <img :src="clients.logo" alt="">
              </div>
          </div>
      </div>
     <div class="uk-container">
        <div class=" uk-flex uk-align-center uk-margin-xlarge-top uk-padding-remove-right pagehome2" style="background-color: #191949; border-radius: 56px; width: 1100px; height: 512px;">
          <div class="uk-margin-medium-top uk-margin-medium-left pagehome2-2" style="z-index: 1;">
              <p class="font-gilroy-bold text-white texthome3" style="font-size:40px; line-height: 139%;">
                  The success of your businness<br>
                  starts here, <span class="gradient">With Us.</span>
              </p>
              <p class="font-gilroy-medium texthome2" style="font-size: 24px; line-height: 161%; color: rgba(255, 255, 255, 0.62);">
                  With a leading team of designer and developers, we<br>
                  have created countless of outstanding works and<br>
                  helped many businesses all over the world
              </p>
              <button class="uk-margin-medium-top uk-margin-medium-left text-white b-know buttonknow" >
                  <nuxt-link to="/AboutUs" style="text-decoration: none; z-index: 2; color: #fff">Know our team</nuxt-link>
              </button>
          </div>
          <div class="uk-visible@m">
                <img src="~assets/homepage/image.svg" style="border-radius: 0 56px 56px 0; z-index: -1;" uk-img alt="">
        </div>
          <div class="uk-position-absolute uk-visible@xs uk-hidden@m">
              <img src="~assets/vectorhome.svg" style="margin-right: 10px; z-index: -2; margin-top: 157px; width: 327px;" uk-img>
          </div>
          <div class="uk-position-absolute uk-visible@xs uk-hidden@m">
              <img src="~assets/homepage/image1.svg" style="z-index: 1; margin-top: 157px;">
          </div>
      </div>
     </div>
      <div class="uk-margin-xlarge-top uk-container">
          <p class="text-white font-gilroy-bold uk-text-center texthome4" style="font-size: 50px; line-height: 59px;">
              Our line of expertise
          </p>
          <div class="uk-flex uk-child-column-1-2@s uk-child-column-1-3@m cardhome1" uk-grid>
              <div v-for="(exp, index) in expert" :key="index" class="uk-card uk-align-center uk-text-center cardhome1-1" 
              style="margin-top: 10px; padding: 20px; width: 370px; height: 537px; filter: drop-shadow(0px 4px 77px #0C0C3D); background-color: #191949; border-radius: 20px;">
                  <div class="uk-card-body card-b-r">
                      <img :src="exp.pict" alt="">
                      <p class="text-white cardhome1-a" style="font-size: 28px; line-height: 35px; font-weight: 700">{{exp.name}}</p>
                      <p class="text-white cardhome1-b" style="font-size: 22px; line-height: 28px; font-weight: 400">{{exp.title}}</p>
                  </div>
              </div>
          </div>
      </div>
      <div class="uk-container">
          <div class="uk-margin-xlarge-top">
              <div class="uk-margin-medium-left">
                  <p class="text-white font-gilroy-bold texthome5" style="font-size: 50px; line-height: 59px;">
                      Some of our recent works
                  </p>
              </div>
              <div class="uk-container">
                  <div v-for="(img, index) in images" :key="index" 
                  class="uk-card cardworks uk-margin-medium-left uk-margin-large-top uk-padding-remove-right uk-column-1-2@s uk-flex"  
                  style="width: 1100px; height: 300px; background-color: #191949; border-radius: 56px; overflow: hidden;">
                      <img :src="img.logo" class=" logohpr" style="margin-left: 25px; width:250px;"/>
                      <img :src="img.profile" class="profilehpr uk-position-right" style="border-radius: 0 56px 56px 0; "/>
                  </div>
                  <div class="uk-margin-medium-top uk-flex uk-margin uk-text-center">
                      <button class="b-show uk-text-center uk-margin-auto uk-margin-vertical uk-width-1-2@s">
                        <nuxt-link to="/Works" style="text-decoration: none; color: #fff;">Some More Works</nuxt-link>
                      </button>
                  </div>
              </div>
          </div>
      </div>
     <div class="uk-container">
        <div class=" uk-margin-large-top uk-margin-medium-left homeourpartner">
          <div class="mr-text">
              <p class="text-white font-gilroy-bold texthome5 uk-visible@m " style="font-size: 50px; line-height: 59px;">
                  What does our recent partners<br>
                  say about us?
              </p>
              <p class="text-white font-gilroy-bold texthome5 uk-visible@xs uk-hidden@m">
                  Words from our partners
              </p>
          </div>
          <div class="uk-position-relative uk-visible-toggle uk-light uk-flex tec3" tabindex="-1" uk-slider="side: true">
                <ul class="uk-slider-items" uk-height-viewport="offset-top: true; offset-bottom: 30">
                    <li class="tec2" v-for="(partner, index) in partners" :key="index" >
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
                                {{partner.name}}
                                </p>
                                <p class="font-gilroy-medium uk-margin-medium-left uk-margin-remove-top textcompany" style="font-size: 19px; line-height: 22px; color: rgba(255, 255, 255, 0.62);">
                                    {{partner.company}}
                                </p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="uk-margin-large-top uk-flex uk-visible@m btnhome uk-position-bottom-right">
                    <div class="uk-position-small">
                        <button style="background-color: #191949; border-radius: 50%;  border: 3px solid #FD0091; width: 50px; height: 50px;" uk-slidenav-previous uk-slider-item="previous"></button>
                    </div>
                    <div class="uk-position-small">
                        <button style="background-color: #191949; border-radius: 50%;  border: 3px solid #FD0091; width: 50px; height: 50px;"  uk-slidenav-next uk-slider-item="next"></button>
                    </div>
                </div>
                <div class=" uk-flex uk-visible@xs uk-hidden@m">
                    <div class="uk-position-bottom-left">
                        <button style="background-color: #191949; border-radius: 50%; border: 2px solid #FD0091; width: 30px; height: 30px;" uk-slidenav-previous uk-slider-item="previous"></button>
                    </div>
                    <div class="uk-position-bottom-right">
                        <button style="background-color: #191949; border-radius: 50%; border: 2px solid #FD0091; width: 30px; height: 30px;" uk-slidenav-next uk-slider-item="next"></button>
                    </div>
                </div>
          </div>
      </div>
     </div>
      <div class="uk-container">
        <div class="uk-margin-large-top uk-margin-medium-left re-tec">
          <div class="text-white font-gilroy-bold">
              <p class="re-tec-text" style="font-size: 50px; line-height: 59px;">Technologies we use</p>
          </div>
          <div class="uk-position-relative uk-visible-toggle uk-light uk-flex uk-margin-remove-top tec1" tabindex="-1" uk-slider="side: true"> 
              <ul class="uk-slider-items uk-child-width-1-6@s uk-child-width-1-7@m" uk-height-viewport="offset-top: true; offset-bottom: 30">
                    <li v-for="(tec, index) in tech" :key="index" class="tec" >
                        <img :src="tec.logo" style="width: 100px;" alt="">
                    </li>
            </ul>
            <a class="uk-position-center-left uk-position-small uk-hidden-hover uk-visible@m" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover uk-visible@m" href="#" uk-slidenav-next uk-slider-item="next"></a>
         </div>
      </div>
      </div> 
      <div class="uk-margin-large-top uk-child-width-1-2@s ukgrid-match b-homep" style="background-color: #191949;" uk-grid>
          <div class="uk-margin-large-top">
              <p class="text-white font-gilroy-bold uk-margin-large-left t-b-h" style="font-size: 50px; line-height: 59px;">
                  Have heard enough?<br>
                  Let's Partner Up.
              </p>
              <button class="b-show text-white uk-margin-medium-top uk-margin-large-left b-r-b">
                <nuxt-link to="/Contact" style="text-decoration: none; color: #fff;">
                    Work With Us
                </nuxt-link>
              </button>
          </div>
          <div class="banner2">
              <img src="~assets/Vector (4).svg"
              class="uk-position-absolute p-b"
              style="
              right: 0;"
              uk-img alt="">
              <img src="~assets/homepage/Group_18385.svg"
              class="uk-position-relative p-b-2"
              style="margin-top: 125px;"
              uk-img alt="">
          </div>
      </div>
  </div>
</template>

<script>
  export default {
      layout: "default",
      head() {
          return {
              title: 'Homepage',
              meta: [
                  {
                      hid: 'description', 
                      name: 'description',
                      content: 'Daffascript - About Us'
                  }
              ]
          }
      },
      data() {
          return {
              card: [
                  {
                      total: "50+",
                      name: "Project Completed"
                  },
                  {
                      total: "98%",
                      name: "Approval Rate"
                  },
                  {
                      total: "4+",
                      name: "Years in Business"
                  }
              ],
              client: [
                  {
                      logo: require("../assets/homepage/mandiri.svg")
                  },
                  {
                      logo: require("../assets/homepage/fnbees.svg")
                  },
                  {
                      logo: require("../assets/homepage/apple.svg")
                  },
                  {
                      logo: require("../assets/homepage/petzs.svg")
                  }
              ],
              expert: [
                  {
                      pict: require("../assets/homepage/ui_ux.svg"),
                      name: "UI UX Designing",
                      title: "We will design you an eyeplasing, easy to use and easy to code website/application"
                  },
                  {
                      pict: require("../assets/homepage/webapp.svg"),
                      name: "Web App Development",
                      title: "We will design you an eyeplasing, easy to use and easy to code website/application"
                  },
                  {
                      pict: require("../assets/homepage/mobileap.svg"),
                      name: "Mobile App Development",
                      title: "We will design you an eyeplasing, easy to use and easy to code website/application"
                  }
              ],
              images: [
                  {
                      logo: require("../assets/works/hatam/logo.svg"),
                      profile: require("../assets/homepage/works/pagehatam.svg")
                  },
                  {
                      logo: require("../assets/works/petz.sg/logo.svg"),
                      profile: require("../assets/homepage/works/pagepetz.svg")
                  },
                  {
                      logo: require("../assets/works/fnbees/logo 2.svg"),
                      profile: require("../assets/homepage/works/pagefnbees.svg")
                  }
              ],
              moreImages: [
                  {
                      logo: require("../assets/works/starbucks/logo.svg"),
                      profile: require("../assets/works/starbucks/pagestarbucks.svg")
                  },
                  {
                      logo: require("../assets/works/kediripark/logo.svg"),
                      profile: require("../assets/works/kediripark/pagekediri.svg")
                  },
                  {
                      logo: require("../assets/works/ustadzkita/uk-logoico 1.svg"),
                      profile: require("../assets/works/ustadzkita/pageustadz.svg")
                  },
                  {
                      logo: require("../assets/works/setneg/logo.svg"),
                      profile: require("../assets/works/setneg/pagesetneg.svg")
                  },
                  {
                      logo: require("../assets/works/e-ror/logo.svg"),
                      profile: require("../assets/works/e-ror/pageeror.svg")
                  },
                  {
                      logo: require("../assets/works/ayampenyet/logo.svg"),
                      profile: require("../assets/works/ayampenyet/pageayam.svg")
                  }
              ],
              partners: [
                  {
                      pict: require("../assets/homepage/user/user.svg"),
                      title: "Daffascript Artworks has helped me in building my business' website and it has since increased my sakes significatly",
                      name: "Walter White",
                      company: "Owner of PT. Menthapethamin Suksesindo"
                  },
                  {
                      pict: require("../assets/homepage/user/user.svg"),
                      title: "Company has given flexibility of work from anymore, I have grown so much since I started working with this company.",
                      name: "Febiani Aulia",
                      company: "Owner of PT. Menthapethamin Suksesindo"
                  }
              ],
              tech: [
                  {
                      logo: require("../assets/homepage/techno/Figma.svg")
                  },
                  {
                      logo: require("../assets/homepage/techno/Flutter.svg")
                  },
                  {
                      logo: require("../assets/homepage/techno/Vuejs.svg")
                  },
                  {
                      logo: require("../assets/homepage/techno/nuxtjs.svg")
                  },
                  {
                      logo: require("../assets/homepage/techno/Express_Js.svg")
                  },
                  {
                      logo: require("../assets/homepage/techno/Laravel.svg")
                  },
                  {
                      logo: require("../assets/homepage/techno/Python.svg")
                  },
                  {
                      logo: require("../assets/homepage/techno/Uikit.svg")
                  },
                  {
                      logo: require("../assets/homepage/techno/firebase.svg")
                  },
                  {
                      logo: require("../assets/homepage/techno/React.svg")
                  },
                  {
                      logo: require("../assets/homepage/techno/Kotlin.svg")
                  },
                  {
                      logo: require("../assets/homepage/techno/Swift.svg")
                  }
              ]
          }
      },
      methods: {
      showMoreWorks() {
          this.images = this.images.concat(this.moreImages);
          this.isMoreWorks = true;
      }
    }
  }
</script>