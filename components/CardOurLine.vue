<template>
    <div class="uk-flex uk-child-width-1-2@s uk-child-width-1-3@m uk-align-center cardhome1" uk-grid style="margin-left: 11px;">
                        <div v-for="(exp, index) in expert" :key="index" class="uk-card uk-align-center uk-text-center cardhome1-1" 
                        style="margin-top: 10px; margin-left: 35px; margin-right:0; padding: 20px; width: 340px; height: 537px; filter: drop-shadow(0px 4px 50px #0C0C3D); background-color: #191949; border-radius: 50px;">
                            <div class="uk-card-body card-b-r cardourline" style="padding-left: 0; padding-right: 0;">
                                <img :src="exp.pict" alt="">
                                <p class="text-white cardhome1-a" style="font-size: 25px; line-height: 35px; font-weight: 700">{{exp.name}}</p>
                                <p class="cardhome1-b" style="font-size: 22px; line-height: 28px; font-weight: 400; color: rgba(255, 255, 255, 0.62);">{{exp.title}}</p>
                            </div>
                        </div>
                    </div>
</template>
<script>
    export default{
        props : ['expert']
    }
</script>