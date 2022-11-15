<template>
    <div>
        <div v-for="(clients, index) in client" :key="index">
                  <img :src="clients.logo" class="uk-align-center" alt="">
              </div>
    </div>
</template>

<script>
export default{
    props : ['client']
}
</script>