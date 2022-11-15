<template>
    <div class="uk-child-width-1-2@s uk-child-width-1-3@m card-r" uk-grid style="margin-left: 16px;">
        <div v-for="(img, index) in images" :key="index"
                    class="uk-card bg-card carditems-r uk-padding-remove-left c-r" uk-grid
                    style="width: 360px; height: 400px; margin-left: 20px; margin-top: 20px; overflow:hidden;" 
                    >
                    <div class="uk-card-body mr-team" style="padding-bottom: 0;">
                        <p class="font-gilroy-medium titledivisi">{{img.divisi}}</p>
                        <p class="font-gilroy-bold text-white titlename">{{img.name}}</p>
                    </div>
                    <img :src="img.url" class="uk-media-bottom img-team img-t uk-margin-remove-top" style="margin-left: auto; margin-right: auto; padding-left: 0; width: 87%;"/>
                </div>
    </div>
</template>

<script>
    export default{
        props : ['images']
    }
</script>