<template>
    <div
   class="navbar"
    >
        <nav class="uk-navbar
        uk-navbar-container 
        uk-navbar-transparent
        uk-margin-medium-top
        uk-margin-medium-left
        uk-margin-medium-right
        " > 
            <!-- <div class="uk-navbar-left">
                <img 
                src="~assets/Logo.svg" 
                class="logo"
                uk-img
                style=""
                alt="">
            </div> -->
            <div class="uk-logo">
                <nuxt-link to="/" style="text-decoration: none;">
                    <img src="~assets/Logo.svg" class="logo" uk-img alt="">
                </nuxt-link>
            </div>
            <div class="uk-navbar-right " style="font-size: 22px;">
                        <ul class="uk-visible@m" uk-navbar>
                            <li>
                                <nuxt-link to="/" class="active" style="text-decoration: none; letter-spacing:0.12em;">Home</nuxt-link>
                            </li> 
                            <li>
                                <nuxt-link to="/AboutUs" class="active" style="text-decoration: none; letter-spacing:0.12em;">About Us</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/Services" class="active" style="text-decoration: none; letter-spacing:0.12em;">Services</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/Works" class="active" style="text-decoration: none; letter-spacing:0.12em;">Works</nuxt-link>
                            </li>
                            <li>
                                <button class="b-navbar">
                                    <nuxt-link to="/Contact" class="active1" style="text-decoration: none; font-size: 20px; letter-spacing:0.12em;">Work With Us</nuxt-link>
                                </button>
                            </li>
                        </ul>
                        <button class="uk-visible@xs uk-hidden@m uk-navbar-toggle toggle" uk-navbar-toggle-icon uk-toggle="target: #offcanvas-flip" aria-label="Open Menu"></button>
            </div>
        </nav>
                        <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
                            <div class="uk-offcanvas-bar uk-flex uk-flex-column" style="background-color: #000032">
                                <button class="uk-offcanvas-close" type="button" uk-close></button>
                                <ul class="uk-nav uk-margin-auto-vertical">
                                    <li>
                                        <nuxt-link to="/" class="active" style="text-decoration: none; letter-spacing:0.12em;">Home</nuxt-link>
                                    </li> 
                                    <li>
                                        <nuxt-link to="/AboutUs" class="active" style="text-decoration: none; letter-spacing:0.12em;">About Us</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/Services" class="active" style="text-decoration: none; letter-spacing:0.12em;">Services</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/Works" class="active" style="text-decoration: none; letter-spacing:0.12em;">Works</nuxt-link>
                                    </li>
                                    <li>
                                        <button class="uk-button uk-button-default uk-border-pill" style="background: linear-gradient(180deg, #FD0091 0%, #FD0091 0.01%, #FF7732 100%); border: none;">
                                            <nuxt-link to="/Contact" class="active1" style="text-decoration: none; letter-spacing:0.12em;">Work With Us</nuxt-link>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
    }
    .active1{
        color: #FFFFFF;
        padding: 10px;
    }
    .active1:hover{
        color: #FFFFFF;
    }
    .active:hover{
        border-bottom: 2px solid #FD0091;
        color: #FFFFFF;
    }
    

</style>


