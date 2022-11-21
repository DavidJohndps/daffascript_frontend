<template>
  <div class="uk-container">
    <div
      class="uk-position-top-left uk-margin-medium-top uk-margin-medium-left"
    >
      <nuxt-link to="/cms/testimonials">
        <img uk-img src="~/assets/cms/icon/back.png" style="width: 45px" />
      </nuxt-link>
    </div>
    <div class="uk-margin-large-top uk-margin-large-left">
      <p class="font-gilroy-bold" style="font-size: 30px; text-align: center">
        Testimonial
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
            />
          </div>
        </div>
        <div class="uk-flex">
          <p
            class="font-gilroy-medium"
            for="form-horizontal-text"
            style="font-size: 30px; width: 300px"
          >
            Name Company
          </p>
          <div class="uk-margin-medium-right">
            <input
              class="formc r-formt font-gilroy-medium"
              id="form-horizontal-text"
              type="text"
              placeholder=""
              style="width: 500px"
              v-model="data.name_company"
            />
          </div>
        </div>
        <div class="uk-flex">
          <p
            class="font-gilroy-medium"
            for="form-horizontal-text"
            style="font-size: 30px; width: 300px"
          >
            Testimonial
          </p>
          <div class="uk-margin-medium-right">
            <textarea
              class="formc1 r-formt1 mr-c font-gilroy-medium"
              style="outline: none"
              placeholder=""
              v-model="data.desc"
            ></textarea>
          </div>
        </div>

        <div class="uk-flex">
          <p
            class="font-gilroy-medium"
            for="form-horizontal-text"
            style="font-size: 30px; width: 300px"
          >
            Image
          </p>
          <div class="uk-margin-medium-right">
            <div class="js-upload" uk-form-custom>
              <input
                type="file"
                @change="(e) => onFileChange(e, 'img')"
              />
              <button
                class="uk-button"
                type="button"
                tabindex="-1"
                style="background-color: #191949; border-radius: 10px"
              >
                <span uk-icon="icon: cloud-upload"></span>
                {{ data.img ? data.img.name : 'Choose File' }}
              </button>
            </div>
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
    title: 'Create Testimonial',
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
        name_company: null,
        desc: null,
        img: null,
      },
    }
  },
  created() {
    this.get()
  },
  methods: {
    async get() {
      const data = await this.$axios.$get(
        '/api/review/get/' + this.$route.params.id
      )
      this.data = {
        name: data.data.name,
        name_company: data.data.name_company,
        desc: data.data.desc,
      }
    },
    async save(e) {
      e.preventDefault()
      let formData = new FormData()
      formData.append('name', this.data.name)
      formData.append('img', this.data.img)
      formData.append('name_company', this.data.name_company)
      formData.append('desc', this.data.desc)
      const data = await this.$axios.$post(
        '/api/review/update/' + this.$route.params.id,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      this.$router.push('/cms/testimonials')
    },
    onFileChange(e, field = null) {
      var files = e.target.files || e.dataTransfer.files
      this.data[field] = files[0]
    },
  },
}
</script>