<template>
  <div class="uk-margin-medium-top uk-card uk-column-1-2@s uk-column-1-3@m uk-text-center cardhome" style="width: 500px; height: 126px; padding: 20px 15px 5px 15px; border-radius: 18px; background-color: #191949;">
    <div v-for="(textcard, index) in card" :key="index">
      <p
        class="text-white uk-margin-remove-bottom texttotal"
        style="font-size: 33px; font-weight: 700; line-height: 164.5%"
      >
        {{ textcard.total }}
      </p>
      <p
        class="font-gilroy-bold uk-margin-remove-top textname"
        style="
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
          line-height: 163.5%;
          text-transform: capitalize;
        "
      >
        {{ textcard.name }}
      </p>
    </div>
  </div>
</template>


<script>
export default {
  props: ['card'],
}
</script>