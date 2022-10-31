<template>
   <div>
        <div class="uk-container">
            <div class="uk-margin-medium-left posi">
                <img src="~assets/Group_60.svg" 
                class="uk-position-absolute uk-position-right uk-visible@m "
                style="z-index: -1; width: 750px;" 
                uk-img alt="">
                <div class="uk-margin-medium-left uk-margin-large-top uk-container uk-child-width-1-2@s cardt2" uk-grid>
                    <div class="text-white uk-margin-medium-top uk-padding-remove-left uk-visible@m">
                        <p class="font-gilroy-bold"
                        style="font-size: 70px; line-height: 82px;"
                        >Our<br>Service</p>
                        <p class="font-gilroy-medium"
                        style="font-size: 26px; line-height: 30px;"
                        >We offer a wide range of services and<br>provides complete client satisfication</p>
                    </div> 
                    <div class="uk-flex cardt">
                        <div class="uk-margin-small-right uk-card cardt1" style="background: linear-gradient(180deg, rgba(15, 15,62, 0.02) 0%, rgba(15, 15, 62, 0.4383) 100%); box-shadow: 0px 1px 45px rgba(0, 0, 0, 0.17); border-radius: 8px; z-index: -2; width: 250px; height: 300px;">
                        <div class="uk-card-body cardt1-b cardl uk-margin-medium-top">
                            <img src="~assets/services/landingpage.svg" class="uk-align-center" style="width:150px;" uk-img>
                            <p class="font-gilroy-bold text-white textcs" style="font-size: 17px; line-height: 28px;">Landing Page Design</p>
                        </div>
                        </div>
                        <div class="uk-margin-small-left uk-card cardt1" style="background: linear-gradient(180deg, rgba(15, 15,62, 0.02) 0%, rgba(15, 15, 62, 0.4383) 100%); box-shadow: 0px 1px 45px rgba(0, 0, 0, 0.17); border-radius: 8px; z-index: -2; width: 250px; height: 300px; margin-top: 80px;">
                        <div class="cardt1-bn uk-margin-medium-top">
                            <img src="~assets/services/mobiledesign.svg" class="cardt-img uk-align-center uk-margin-remove-bottom" style="width:150px; margin-bottom: 30px;" uk-img>
                            <p class="font-gilroy-bold text-white uk-text-center textcs" style="margin-top: 10px; font-size: 17px; line-height: 28px;">Mobile App Design</p>
                        </div>
                        </div>
                    </div>
                </div>
            <div class="uk-margin-xlarge-top uk-margin-medium-left containerservices uk-flex" uk-grid>
                <p class="font-gilroy-bold text-white headingservices uk-padding-remove-left"
                style="font-size: 50px; line-height: 59px;"
                >Web</p>
                <div class="uk-flex uk-padding-remove-left res1" uk-grid>
                    <div v-for="(web, index) in webs" :key="index" 
                    class="uk-card uk-text-center cardservices services csw res" style="margin-left: 15px; width: auto; padding: 15px 25px 15px 25px; "
                    >
                        <p class="font-gilroy-medium textservices titleservices text-white">
                            {{web.work}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="uk-margin-xlarge-top uk-margin-medium-left containerservices uk-flex" uk-grid>
                <p class="font-gilroy-bold text-white headingservices uk-padding-remove-left"
                style="font-size: 50px; line-height: 59px;"
                >Apps</p>
                <div class="uk-flex uk-padding-remove-left res1" uk-grid>
                    <div v-for="(app, index) in apps" :key="index" 
                    class="uk-card uk-text-center cardservices csw res" style="margin-left: 15px; width: auto; padding: 15px 25px 15px 25px; "
                    >
                        <p class="font-gilroy-medium textservices titleservices text-white" style="font-size: 23px; line-height: 27px;">
                            {{app.work}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="uk-margin-xlarge-top uk-margin-medium-left containerservices uk-flex" uk-grid>
                <p class="font-gilroy-bold text-white headingservices uk-padding-remove-left"
                style="font-size: 50px; line-height: 59px;"
                >Branding & Marketing</p>
                <div class="uk-flex uk-padding-remove-left res1" uk-grid>
                    <div v-for="(brand, index) in brands" :key="index" 
                    class="uk-card uk-text-center cardservices csw res" style="margin-left: 15px; width: auto; padding: 15px 25px 15px 25px; "
                    >
                        <p class="font-gilroy-medium textservices titleservices text-white" style="font-size: 23px; line-height: 27px;">
                            {{brand.work}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="uk-margin-xlarge-top uk-margin-medium-left containerservices uk-flex" uk-grid>
                <p class="font-gilroy-bold text-white headingservices uk-padding-remove-left"
                style="font-size: 50px; line-height: 59px;"
                >Illustrations & Motion</p>
                <div class="uk-flex uk-padding-remove-left res1" uk-grid>
                    <div v-for="(illu, index) in illus" :key="index" 
                    class="uk-card uk-text-center cardservices csw res" style="margin-left: 15px; width: auto; padding: 15px 25px 15px 25px; "
                    >
                        <p class="font-gilroy-medium textservices titleservices text-white" style="font-size: 23px; line-height: 27px;">
                            {{illu.work}}
                        </p>
                    </div>
                </div>
            </div>
            <div class="uk-margin-xlarge-top uk-margin-medium-left containerservices uk-flex" uk-grid>
                <p class="font-gilroy-bold text-white headingservices uk-padding-remove-left"
                style="font-size: 50px; line-height: 59px;"
                >Development</p>
                <div class="uk-flex uk-padding-remove-left res1" uk-grid>
                    <div v-for="(dev, index) in devs" :key="index" 
                    class="uk-card uk-text-center cardservices csw res" style="margin-left: 15px; width: auto; padding: 15px 25px 15px 25px; "
                    >
                        <p class="font-gilroy-medium textservices titleservices text-white" style="font-size: 23px; line-height: 27px;">
                            {{dev.work}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="uk-margin-large-top uk-child-width-1-2@s ukgrid-match banner" style="background-color: #191949;" uk-grid>
            <div class="banner1-1">
                <h1
                class="uk-margin-large-top banner1 font-gilroy-bold text-white fontbanner"
                style="font-size: 45px; line-height: 63px; margin-left: 150px;"
                >Got questions? We've<br>
                got answers. Let's talk!
                </h1>
                <nuxt-link to="/Contact" style="text-decoration: none; color: #fff;">
                    <button class="uk-margin-medium-top text-white b-contact buttonbanner font-gilroy-medium" style="margin-left: 150px;" >
                    Contact Us
                    </button>
                </nuxt-link>
            </div>
            <div class="banner2">
                <img src="~assets/Vector (4).svg"
                class="uk-position-absolute bannerimg1"
                style="
                right: 0;
                width: 610px;
                height: auto;
                z-index: 1;"
                uk-img alt="">
                <img src="~assets/pana.svg" 
                class="uk-position-relative bannerimg2"
                style="
                right: 0px;
                width: 500px;
                height: auto;
                z-index: 1;" 
                uk-img alt="">
            </div>
        </div>
   </div>
</template>

<script>
    export default{
        head() {
            return {
                title: 'Services',
                meta: [
                    {
                        hid: 'description', 
                        name: 'description',
                        content: 'Daffascript - Services'
                    }
                ]
            } 
        },
        data(){
            return {
                webs: [
                    {
                        work: "Landing Page"
                    },
                    {
                        work: "Web App"
                    },
                    {
                        work: "E-Commerce"
                    },
                    {
                        work: "Marketplace"
                    },
                    {
                        work: "Dashboard"
                    },
                    {
                        work: "CRM, CMS"
                    },
                    {
                        work: "Wireframes & User testing"
                    },
                    {
                        work: "Front-end Development"
                    },
                    {
                        work: "Back-end Development"
                    },
                    {
                        work: "Web 3.0 Design"
                    },
                    {
                        work: "Shopify Design & Dev"
                    },
                    {
                        work: "Saas"
                    }
                ],
                apps: [
                    {
                        work: "flutter"
                    },
                    {
                        work: "App Visual Design"
                    },
                    {
                        work: "React"
                    },
                    {
                        work: "App Content Hierarchy"
                    },
                    {
                        work: "WireFrames"
                    },
                    {
                        work: "Prototyping"
                    },
                    {
                        work: "Development"
                    },
                    {
                        work: "Watch OS"
                    },
                    {
                        work: "Windows"
                    },
                    {
                        work: "Custom App"
                    },
                    {
                        work: "Android"
                    },
                    {
                        work: "Mac Os"
                    },
                    {
                        work: "Onboarding"
                    },
                    {
                        work: "Gamification & Retention"
                    },
                    {
                        work: "User flows and journey"
                    },
                    {
                        work: "AppStore & Playstore screens"
                    }
                ],
                brands: [
                    {
                        work: "Logo Design"
                    },
                    {
                        work: "Visual Identity"
                    },
                    {
                        work: " Brand Identity"
                    },
                    {
                        work: "Brand Strategy"
                    },
                    {
                        work: "Brandbook"
                    },
                    {
                        work: "Brand guidelines"
                    },
                    {
                        work: "Voice and tone"
                    },
                    {
                        work: "Market research & positioning"
                    },
                    {
                        work: "Litepapers"
                    },
                    {
                        work: "Investor Deck"
                    },
                    {
                        work: "Pitch Deck"
                    },
                    {
                        work: "Social Media Assets"
                    },
                    {
                        work: "Video Production"
                    },
                    {
                        work: "Product Demo Videos"
                    },
                    {
                        work: "Email Marketing"
                    }
                ],
                illus: [
                    {
                        work: "Lottie animated illustrations"
                    },
                    {
                        work: " Vectorized illustrations"
                    },
                    {
                        work: " Motion and animations"
                    },
                    {
                        work: "3D illustrations"
                    },
                    {
                        work: "NFT Collections"
                    },
                    {
                        work: "Product Demo"
                    },
                    {
                        work: "Interactive UX"
                    }
                ],
                devs: [
                    {
                        work: "Shopify Development"
                    },
                    {
                        work: "Webflow Development"
                    },
                    {
                        work: "Wordpress Development"
                    },
                    {
                        work: "WooCommerce Development"
                    },
                    {
                        work: "Contentful Development"
                    },
                    {
                        work: "Custom Web Development"
                    }
                ],
            }
        }
    }
</script>
