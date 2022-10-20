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
            <div class="uk-navbar-left">
                <img 
                src="~assets/logo.svg" 
                class="logo"
                uk-img
                style=""
                alt="">
            </div>
            <div class="uk-navbar-right">
                        <ul class="uk-visible@m" uk-navbar>
                            <li>
                                <nuxt-link to="/Home" class="active" style="text-decoration: none;">Home</nuxt-link>
                            </li> 
                            <li>
                                <nuxt-link to="/AboutUs" class="active" style="text-decoration: none;">About Us</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/Services" class="active" style="text-decoration: none;">Services</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/Works" class="active" style="text-decoration: none;">Works</nuxt-link>
                            </li>
                            <li>
                                <button class="b-navbar">
                                    <nuxt-link to="/WorkWithUs" class="active1" style="text-decoration: none;">Work With Us</nuxt-link>
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
                                        <nuxt-link to="/Home" class="active" style="text-decoration: none;">Home</nuxt-link>
                                    </li> 
                                    <li>
                                        <nuxt-link to="/AboutUs" class="active" style="text-decoration: none;">About Us</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/Services" class="active" style="text-decoration: none;">Services</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/Works" class="active" style="text-decoration: none;">Works</nuxt-link>
                                    </li>
                                    <li>
                                        <button class="uk-button uk-button-default uk-border-pill" style="background: linear-gradient(180deg, #FD0091 0%, #FD0091 0.01%, #FF7732 100%); border: none;">
                                            <nuxt-link to="/WorkWithUs" class="active1" style="text-decoration: none;">Work With Us</nuxt-link>
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


