<template>
  <div>
    <div
      class="uk-margin-medium-top uk-margin-medium-left main"
      style="font-size: 20px"
    >
      <!-- <b style="color: white; font-size: 40px">Team</b> -->
      <TeamCard :team="teams" :deleteData="deleteData" />
    </div>

    <div
      class="
        uk-position-bottom-right uk-margin-xlarge-right uk-margin-xlarge-bottom
      "
    >
      <nuxt-link to="/cms/ateam/form">
        <img
          uk-img
          src="~/assets/cms/icon/Create.png"
          style="width: 40px; cursor: pointer; position: fixed"
        />
      </nuxt-link>
    </div>
  </div>
</template>
    
    <script>
import TeamCard from '~/components/cms/TeamCard.vue'
export default {
  head: {
    title: 'Work Dashboard',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Dashboard description',
      },
    ],
  },
  components: {
    TeamCard,
  },
  data() {
    return {
      teams: [
        // {
        //   text: 'Item',
        // },
        // {
        //   text: 'Item',
        // },
        // {
        //   text: 'Item',
        // },
        // {
        //   text: 'Item',
        // },
        // {
        //   text: 'Item',
        // },
        // {
        //   text: 'Item',
        // },
        // {
        //   text: 'Item',
        // },
      ],
    }
  },
  created() {
    this.getateam()
  },
  methods: {
    async getateam() {
      const data = await this.$axios.$get('/api/team')
      this.teams = data.data
    },
    async deleteData(id = null) {
      const data = await this.$axios.$delete('/api/team/destroy/' + id)
      this.getateam()
    },
  },
  name: 'IndexPage',
  layout: 'cms/default',
}
</script>

<style>
.color {
  color: white;
  margin-right: 30px;
  background-color: #101044;
  border-radius: 10px;
}
.main {
  color: white;
}
</style>