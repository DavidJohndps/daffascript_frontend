<template>
    <div>
        <div v-for="(img, index) in images" :key="index" 
                  class="uk-card cardworks uk-margin-medium-left uk-margin-large-top uk-padding-remove-right uk-column-1-2@s uk-flex"  
                  style="width: 1100px; height: 300px; background-color: #191949; border-radius: 56px; overflow: hidden;">
                      <img :src="img.logo" class=" logohpr" style="margin-left: 55px; width:250px;"/>
                      <img :src="img.profile" class="profilehpr uk-position-right" style="border-radius: 0 56px 56px 0; "/>
                  </div>
    </div>
</template>

<script>
export default{
    props : ['images']
}
</script>