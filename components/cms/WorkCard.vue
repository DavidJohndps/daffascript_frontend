<template>
    <div class="uk-margin-medium-top uk-margin-medium-left main" style="font-size: 20px;">
          <b style="color: white; font-size: 40px;">Work Dashboard</b>
          <div class="uk-flex uk-child-width-1-5" style="flex-wrap: wrap;">
            <div v-for="(wk,index) in work" :key="index" class="uk-card uk-card-default uk-card-body uk-margin-medium-top uk-padding-small color" style="width: 180px">
                <p>{{ wk.text }}</p>
            </div>
          </div>
        </div>
</template>

<script>
    export default {
        props : ['work']
    }
</script>