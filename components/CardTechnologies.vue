<template>
    <div class="uk-position-relative uk-visible-toggle uk-light uk-flex uk-margin-remove-top tec1" tabindex="-1" uk-slider="side: true" style="max-height: 180px;"> 
              <ul class="uk-slider-items uk-child-width-1-6@s uk-child-width-1-7@m" uk-height-viewport="offset-top: true; offset-bottom: 30">
                    <li v-for="(tec, index) in tech" :key="index" class="tec" style="max-height: 180px;">
                        <img :src="tec.logo" style="width: 100px;" alt="">
                    </li>
            </ul>
            <a class="uk-position-center-left uk-position-small uk-hidden-hover uk-visible@m" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover uk-visible@m" href="#" uk-slidenav-next uk-slider-item="next"></a>
         </div>
</template>

<script>
    export default{
    props: ['tech']
}
</script>