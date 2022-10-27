<template>
    <div class="uk-flex main-template-default" uk-grid>
        <div class="side font-gilroy-medium">
            <Sidebar></Sidebar>
        </div>
        <div class="main-dashboard">
            <Nuxt></Nuxt>
        </div>
    </div>
</template>

<style>
    .main-template-default{
        box-sizing: border-box;
    }

    .side{
        position: fixed;
        background-color: #000032;
        width: 300px;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 1;
    }

    .main-dashboard{
        width: 100%;
        margin-left: 300px;
        background-color: #03033D;
        min-height: 100vh;
    }





</style>