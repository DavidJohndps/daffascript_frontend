<template>
    <div class="uk-container uk-navbar uk-padding-small" style="z-index: 10;">
        <div class="uk-navbar-left">
            <img
              class="logo"
              uk-img
              src="~/assets/Logo.svg"
            />
        </div>
        <div class="uk-navbar-right uk-visible@m">
            <ul class="uk-navbar-nav uk-flex navbar" style="color: white;">
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Works</li>
                <li><button class="uk-button uk-button-default" style="border-radius: 50px; margin-top: -5px; border-color: #FD0091; color: white; text-transform: capitalize;"><b>Work With Us</b></button></li>
            </ul>
        </div>
    </div>
</template>


<script></script>

<style>
    ul li{
        cursor: pointer;
        margin-right: 30px;
    }

    .logo{
        margin: 0;
    }

    @media only screen and (max-width: 433px){
        .logo{
            width: 100px;
            height: 30px;
        }
    }
    
    @media only screen and (max-width: 375px){
        .logo{
            width: 81px;
            height: 20px;
    }
    }
</style>