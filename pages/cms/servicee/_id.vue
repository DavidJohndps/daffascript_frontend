<template>
  <div class="uk-container">
    <div
      class="uk-position-top-left uk-margin-medium-top uk-margin-medium-left"
    >
      <nuxt-link to="/cms/servicee">
        <img uk-img src="~/assets/cms/icon/back.png" style="width: 45px" />
      </nuxt-link>
    </div>
    <div class="uk-margin-large-top uk-margin-large-left">
      <p class="font-gilroy-bold" style="font-size: 30px; text-align: center">
        Service
      </p>

      <form class="uk-form-horizontal uk-margin-top-m" @submit="save">
        <div class="uk-flex">
          <p
            class="font-gilroy-medium"
            for="form-horizontal-text"
            style="font-size: 30px; width: 300px"
          >
            Name
          </p>
          <div class="uk-margin-medium-right">
            <input
              class="formc r-formt font-gilroy-medium"
              id="form-horizontal-text"
              type="text"
              placeholder=""
              style="width: 500px"
              v-model="data.name"
              required
            />
          </div>
        </div>
        <div
          class="uk-flex uk-flex-middle"
          v-for="(v, i) in data.desc"
          :key="i"
        >
          <p
            class="font-gilroy-medium"
            for="form-horizontal-text"
            style="font-size: 30px; width: 300px"
          >
            Desc {{ i + 1 }}
          </p>
          <div>
            <input
              class="formc r-formt font-gilroy-medium"
              id="form-horizontal-text"
              type="text"
              placeholder=""
              style="width: 500px"
              v-model="data.desc[i]"
              required
            />
          </div>
          <div>
            <img
              v-if="i == 0"
              uk-img
              src="~/assets/cms/icon/Create.png"
              style="width: 40px; cursor: pointer"
              @click="addDesc"
            />
            <img
              v-if="i > 0"
              uk-img
              src="~/assets/cms/icon/Delete.png"
              style="width: 40px; cursor: pointer"
              @click="deleteDesc(i)"
            />
          </div>
        </div>

        <div class="uk-flex">
          <p
            class="font-gilroy-medium"
            for="form-horizontal-text"
            style="font-size: 30px; width: 300px"
          ></p>
          <div class="uk-margin-medium-right">
            <button class="uk-button button-gra">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Create Service',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'form description',
      },
    ],
  },
  name: 'form',
  layout: 'cms/form_layout',
  data() {
    return {
      data: {
        name: null,
        desc: [null],
      },
    }
  },
  created() {
    this.get()
  },
  methods: {
    async get() {
      const data = await this.$axios.$get(
        '/api/service/get/' + this.$route.params.id
      )
      this.data = {
        name: data.data.name,
        desc: JSON.parse(data.data.desc),
      }
    },
    async save(e) {
      e.preventDefault()
      const data = await this.$axios.$post(
        '/api/service/update/' + this.$route.params.id,
        this.data
      )
      this.$router.push('/cms/servicee')
    },
    addDesc() {
      this.data.desc.push(null)
    },
    deleteDesc(i) {
      this.data.desc.splice(i, 1)
    },
  },
}
</script>