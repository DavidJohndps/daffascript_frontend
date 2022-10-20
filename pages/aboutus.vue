<template>
    <div>
        <img src="~assets/Group_60.svg" 
        class="uk-position-absolute uk-position-right uk-visible@m "
        style="z-index: -1; width: 750px;" 
        uk-img alt="">
        <div class=
        "uk-text-center 
        uk-margin-large-top
        " >
            <p class=
            "uk-text-large 
            uk-text-bold
            text-white
            heading
            " 
            style="font-size: 40px; line-height: 50px;">
            Who We Are?</p>
            <p class=
            "uk-margin-medium-top font-gilroy-medium text" 
            style="font-size: 28px; color: rgba(225, 225, 225, 0.66); line-height: 33px; ">
               We are team of skilled individuals and we are based in<br>
               Indonesia. We have years of experience in our field of work<br>
               and have been creating countless products and helping<br>
               business all over the world
            </p>
        </div>

        <div class=
        "uk-margin-xlarge-top 
        uk-flex
        -font-gilroy-bold
        aboutus-2
        " >
            <div class="creative">
                <p class=
                "uk-text-large 
                uk-text-bold  
                text-white
                heading
                " 
                style=
                "font-size: 30px; margin-left: 150px; margin-top: 150px">
                Creative</p>
            </div>
            <div class="rock" style="margin-left: 150px">
                <img 
                src="~assets/cuate.svg" 
                class="image"
                uk-img 
                alt="">
            </div>
            <div>
                <p class=
                "uk-text-large 
                uk-text-bold 
                uk-margin-xlarge-left 
                uk-margin-xlarge-top
                text-white
                heading
                trt
                " 
                style=
                "font-size: 30px;">
                Trusted</p>
            </div>
        </div>

        <div class=
        "uk-container 
        uk-margin-xlarge-top">
            <p class=
            "uk-text-center 
            uk-text-large 
            uk-text-bold
            text-white
            heading
            " 
            style="font-size: 32px;">
                Our Team
            </p>
            <div class="uk-child-width-1-2@s uk-child-width-1-3@m card" uk-grid style="margin-left: 16px;">
                <div v-for="(img, index) in images" :key="index"
                    class="uk-card bg-card carditems uk-padding-remove-left uk-visible@m" uk-grid
                    style="width: 360px; height: 490px; margin-left: 20px; margin-top: 20px;" 
                    >
                    <div class="uk-card-body">
                        <p class="font-gilroy-medium titledivisi">{{img.divisi}}</p>
                        <p class="font-gilroy-bold text-white titlename">{{img.name}}</p>
                    </div>
                    <img :src="img.url" class="uk-media-bottom"/>
                </div> 
            </div>
            <div class="uk-child-width-1-2@s uk-child-width-1-3@m card" uk-grid style="margin-left: 16px;">
                <div v-for="(imgm, index) in imagesm" :key="index"
                    class="uk-visible@xs uk-hidden@m uk-card bg-card carditems uk-padding-remove-left" uk-grid
                    style="width: 360px; height: 490px; margin-left: 20px;" 
                    >
                    <div class="uk-card-body">
                        <p class="font-gilroy-medium titledivisi">{{imgm.divisi}}</p>
                        <p class="font-gilroy-bold text-white titlename">{{imgm.name}}</p>
                    </div>
                    <img :src="imgm.url" class="uk-media-bottom" style="width: 260px;"/>
                </div> 
                <button class="b-more text-white uk-visible@xs uk-hidden@m" v-if=!isMore type="button" @click="showMore">More</button>
            </div>
        </div>
        <div class=
        "uk-container
        uk-margin-large-top">
            <p class="uk-text-center uk-text-large uk-text-bold text-white heading" style="font-size:30px;">
                Our Values
            </p>
            <div class="uk-margin-large-top ourvalues">
                <div class="values1 values2 uk-child-width-1-2@s uk-flex" uk-grid>
                    <div class="uk-grid-medium uk-flex uk-margin-remove gridvalues" uk-grid>
                            <div class="uk-width-auto our">
                                <img src="~assets/ourvalues/Frame 18830.svg" 
                                class="imgval"
                                uk-img alt="">
                            </div>
                            <div class="uk-width-expand our">
                            <p 
                            class="font-gilroy-bold text-white textvalues"
                            style="font-size: 30px; line-height: 42px;">
                            Hire & Develop The Best</p>
                            <p
                            class="font-gilroy-medium values"
                            style="color: rgba(225, 255, 255, 0.66); line-height: 23px;"
                            >We choose our team & partners very<br> carefully.Behind us is a talented
                            <br>talent with bright ideas ready to help you.
                            </p>
                            </div>
                    </div>
                    <div class="uk-grid-medium uk-flex uk-margin-remove gridvalues" uk-grid>
                        <div class="uk-width-auto our">
                            <img src="~assets/ourvalues/innovation 1.svg" class="imgval" uk-img alt="">
                        </div>
                        <div class="uk-width-expand our">
                            <p  class="font-gilroy-bold text-white textvalues" style="font-size: 30px; line-height:42px;">Tech Development</p>
                            <p class="font-gilroy-medium values" style="color: rgba(225, 255, 255, 0.66); line-height: 23px;">We are always up-to-date the<br>latest developments in 
                                algorithms & <br>technology to maximize strategies <br> and result
                            </p>
                        </div>
                    </div>
                </div>  
                <div class="values1 values2 uk-child-width-1-2@s uk-flex" uk-grid style="margin-top: 25px;">  
                    <div class="uk-grid-medium uk-flex uk-margin-remove-left gridvalues" uk-grid style="margin-top:30px;">
                        <div class="uk-width-auto our">
                            <img src="~assets/ourvalues/Frame 18876.svg" class="imgval" uk-img alt="">
                        </div>
                        <div class="uk-width-expand our">
                            <p
                            class="font-gilroy-bold text-white textvalues"
                            style="font-size: 30px; line-height: 42px"
                            >Grow Together</p>
                            <p
                            class="font-gilroy-medium values"
                            style="color: rgba(225, 255, 255, 0.66); line-height: 23px;"
                            >We are home to professional<br>
                                freelancer partners, agencies, and<br>
                                crative industries in Indonesia who<br>
                                have a vision to help business<br>
                                maximize their potential through<br>
                                Digital Marketing
                            </p>
                        </div>
                    </div>
                    <div class="uk-grid-medium uk-flex uk-margin-remove-left gridvalues" uk-grid>
                        <div class="uk-width-auto our ourhigh">
                            <img src="~assets/ourvalues/Frame 18841.svg" class="imgval" uk-img alt="">
                        </div>
                        <div class="uk-width-expand our">
                            <p
                            class="font-gilroy-bold text-white textvalues"
                            style="font-size: 30px; line-height: 42px;"
                            >High Experience</p>
                            <p
                            class="font-gilroy-medium values"
                            style="color: rgba(225, 255, 255, 0.66); line-height: 23px;"
                            >We already have several years of<br>
                            experience to help business in<br>
                            Indonesia and abroad
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="uk-margin-large-top uk-child-width-1-2@s ukgrid-match banner" style="background-color: #191949;" uk-grid>
            <div class="banner1-1">
                <h1
                class="uk-margin-large-top uk-margin-large-left banner1 uk-text-bold text-white fontbanner"
                style="font-size: 50px; line-height: 63px;"
                >Got questions? We've<br>
                got answers. Let's talk!
                </h1>
                <button class="uk-margin-large-left uk-margin-medium-top text-white b-contact buttonbanner" >
                    Contact Us
                </button>
            </div>
            <div class="banner2">
                <img src="~assets/vector (4).svg"
                class="uk-position-absolute bannerimg1"
                style="
                width: 610px;
                height: auto;
                z-index: 1;"
                uk-img alt="">
                <img src="~assets/pana.svg" 
                class="uk-position-relative bannerimg2"
                style="
                width: 500px;
                height: auto;
                z-index: 1;" 
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
            title: 'About Us',
            meta: [
                {
                    hid: 'description', 
                    name: 'description',
                    content: 'Daffascript - About Us'
                }
            ]
        }
      },
      data(){
        return {
            images: [
                {
                    divisi: "Co-Founder, CEO & Head Of Design",
                    name: "Daffa F. Prayoga",
                    url: require("../assets/ourteam/daffa.svg")

                },
                {
                    divisi: "Co-Founder, CEO & Head of Designer",
                    name: "Dwiyanto S.",
                    url: require("../assets/ourteam/dwi.svg")
                },
                {
                    divisi: "CO-Founder & Lead UI UX Deisgner",
                    name: "Yosia Enrique",
                    url: require("../assets/ourteam/yosia.svg")
                },
                {
                    divisi: "Project Manager & Business Analayst",
                    name: "Putri Alina",
                    url: require("../assets/ourteam/putri.svg")
                },
                {
                    divisi: "Technical Project Manager & IT Security",
                    name: "Fauzan Amrian",
                    url: require("../assets/ourteam/fauzan.svg")
                },
                {
                    divisi: "Lead Backend Developer",
                    name: "David John",
                    url: require("../assets/ourteam/david.svg")
                },
                {
                    divisi: "Fullstack Developer",
                    name: "Reinandy F.",
                    url: require("../assets/ourteam/rei.svg")
                },
                {
                    divisi: "UI UX Designer & UX Engineer",
                    name: "Anggana Putra",
                    url: require("../assets/ourteam/aga.svg")
                },
                {
                    divisi: "UI UX Designer",
                    name: "Theodosisus D. H.",
                    url: require("../assets/ourteam/theo.svg")
                },
                {
                    divisi: "UI UX Designer",
                    name: "Andre Nathaniel",
                    url: require("../assets/ourteam/ale.svg")
                },
                {
                    divisi: "UI UX Designer",
                    name: "M. Fikri Haryadi",
                    url: require("../assets/ourteam/fikri.svg")
                },
                {
                    divisi: "Frontend Developer",
                    name: "Haris Rachmanto",
                    url: require("../assets/ourteam/haris.svg")
                },
                {
                    divisi: "UI UX Designer",
                    name: "Ardit O.",
                    url: require("../assets/ourteam/ardit.svg")
                },
                {
                    divisi: "Backend Developer",
                    name: "Febiani Aulia S.",
                    url: require("../assets/ourteam/febi.svg")
                },
                {
                    divisi: "UI UX Designer",
                    name: "Maulida",
                    url: require("../assets/ourteam/maul.svg")
                }
            ],
            imagesm: [
                {
                    divisi: "Co-Founder, CEO & Head Of Design",
                    name: "Daffa F. Prayoga",
                    url: require("../assets/ourteam/daffa.svg")

                },
                {
                    divisi: "Co-Founder, CEO & Head of Designer",
                    name: "Dwiyanto S.",
                    url: require("../assets/ourteam/dwi.svg")
                },
                {
                    divisi: "CO-Founder & Lead UI UX Deisgner",
                    name: "Yosia Enrique",
                    url: require("../assets/ourteam/yosia.svg")
                }
            ],
            moreImages: [
            {
                    divisi: "Project Manager & Business Analayst",
                    name: "Putri Alina",
                    url: require("../assets/ourteam/putri.svg")
                },
                {
                    divisi: "Technical Project Manager & IT Security",
                    name: "Fauzan Amrian",
                    url: require("../assets/ourteam/fauzan.svg")
                },
                {
                    divisi: "Lead Backend Developer",
                    name: "David John",
                    url: require("../assets/ourteam/david.svg")
                },
                {
                    divisi: "Fullstack Developer",
                    name: "Reinandy F.",
                    url: require("../assets/ourteam/rei.svg")
                },
                {
                    divisi: "UI UX Designer & UX Engineer",
                    name: "Anggana Putra",
                    url: require("../assets/ourteam/aga.svg")
                },
                {
                    divisi: "UI UX Designer",
                    name: "Theodosisus D. H.",
                    url: require("../assets/ourteam/theo.svg")
                },
                {
                    divisi: "UI UX Designer",
                    name: "Andre Nathaniel",
                    url: require("../assets/ourteam/ale.svg")
                },
                {
                    divisi: "UI UX Designer",
                    name: "M. Fikri Haryadi",
                    url: require("../assets/ourteam/fikri.svg")
                },
                {
                    divisi: "Frontend Developer",
                    name: "Haris Rachmanto",
                    url: require("../assets/ourteam/haris.svg")
                },
                {
                    divisi: "UI UX Designer",
                    name: "Ardit O.",
                    url: require("../assets/ourteam/ardit.svg")
                },
                {
                    divisi: "Backend Developer",
                    name: "Febiani Aulia Saputra",
                    url: require("../assets/ourteam/febi.svg")
                },
                {
                    divisi: "UI UX Designer",
                    name: "Maulida",
                    url: require("../assets/ourteam/maul.svg")
                }
            ]
        }
      },
      methods: {
        showMore() {
            this.imagesm = this.imagesm.concat(this.moreImages);
            this.isMore = true;
        }
      }
    };
</script>
