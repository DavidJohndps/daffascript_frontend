<template>
    <div>
        <img src="~assets/Group_60.svg" 
        class="uk-position-absolute uk-position-right  uk-visible@m"
        style="z-index: -1; width: 750px;"
        uk-img alt="">
        <div class="uk-container" >
            <div class="uk-card cardworks uk-margin-medium-left uk-margin-large-top uk-flex" 
            style="width: 1100px; background-color: #191949; border-radius: 56px;"
            uk-grid>
                <div>
                <p class="font-gilroy-bold textworks text-white uk-margin-medium-left uk-margin-large-top"
                style="font-size: 40px"
                >
                    Check out some<br>
                    of our creations 
                </p>
                </div>
                <div class="card-1">
                    <img src="~assets/amico.svg" 
                    class="imgworks1"
                    style="border-radius: 0px 56px 56px 0px; margin-left: 99px;"
                    uk-img
                    alt="">
                </div>
            </div>
        </div>
        <div class="uk-container">
            <div v-for="(work, index) in works" :key="index" class="uk-card cardworks uk-margin-medium-left uk-margin-large-top uk-flex"  
            style="width: 1100px; height: 300px; background-color: #191949; border-radius: 56px;">
                <img :src="work.profile" class="profile" style="border-radius: 56px 0 0 56px;"/>
                <img :src="work.logo" class="logoworks" style="width:250px"/>
            </div>
            <div class="uk-margin-xlarge-bottom"></div>
        </div>
    </div>
</template>

<script>
    export default{
        layout: "default",
        head() {
            return {
                title: 'Works',
                meta: [
                    {
                        hid: 'description', 
                        name: 'description',
                        content: 'Daffascript - Works'
                    }
                ]
            }
        },
        data(){
            return{
                works: [
                    {
                        profile: require("../assets/works/kediripark/pagekediri.svg"),
                        logo: require("../assets/works/kediripark/logo.svg")
                    },
                    {
                        profile: require("../assets/works/e-ror/pageeror.svg"),
                        logo: require("../assets/works/e-ror/logo.svg")
                    },
                    {
                        profile: require("../assets/works/hatam/pagehatam.svg"),
                        logo: require("../assets/works/hatam/logo.svg")
                    },
                    {
                        profile: require("../assets/works/starbucks/pagestarbucks.svg"),
                        logo: require("../assets/works/starbucks/logo.svg")
                    },
                    {
                        profile: require("../assets/works/ayampenyet/pageayam.svg"),
                        logo: require("../assets/works/ayampenyet/logo.svg")
                    },
                    {
                        profile: require("../assets/works/petz.sg/pagepetz.svg"),
                        logo: require("../assets/works/petz.sg/logo.svg")
                    },
                    {
                        profile: require("../assets/works/setneg/pagesetneg.svg"),
                        logo: require("../assets/works/setneg/logo.svg")
                    },
                    {
                        profile: require("../assets/works/ustadzkita/pageustadz.svg"),
                        logo: require("../assets/works/ustadzkita/uk-logoico 1.svg")
                    },
                    {
                        profile: require("../assets/works/fnbees/pagefnbees.svg"),
                        logo: require("../assets/works/fnbees/logo 2.svg")
                    }
                ],
            }
        }
    };
</script>