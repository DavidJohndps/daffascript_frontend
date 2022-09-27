<template>
    <div
    class="
        uk-navbar-container 
        uk-navbar-transparent
        uk-margin-medium-top
        uk-margin-medium-left
        uk-margin-medium-right
        "
    >
        <nav 
        uk-navbar
        >
            <div class="uk-navbar-left">
                <img 
                src="~assets/logo.svg" 
                uk-img
                style=""
                alt="">
            </div>
            <div class="uk-navbar-right">
                        <ul class="uk-navbar">
                            <li>
                                <nuxt-link to="/Home" class="active">Home</nuxt-link>
                            </li> 
                            <li>
                                <nuxt-link to="/AboutUs" class="active">About Us</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/Services" class="active">Services</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/Works" class="active">Works</nuxt-link>
                            </li>
                            <li>
                                <button class="uk-button uk-button-default uk-border-pill" style="background: linear-gradient(180deg, #FD0091 0%, #FD0091 0.01%, #FF7732 100%); border: none;">
                                    <nuxt-link to="/WorkWithUs" class="active1">Work With Us</nuxt-link>
                                </button>
                            </li>
                        </ul>
                </div>
        </nav>
    </div>
</template>

<style>
    li{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 15px;
    }
    .active{
        color: #ACB5BD;
        font-family: 'Plus Jakarta Sans';
        font-style: normal;
    }
    .active1{
        color: #FFFFFF;
    }
    .active1:hover{
        color: #FFFFFF;
    }
    .active:hover{
        border-bottom: 2px solid #FD0091;
        color: #FFFFFF;
    }
    

</style>


