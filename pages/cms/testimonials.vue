<template>
  <div>
    <!-- <div class="uk-card uk-card-default uk-card-body main" style="font-size: 20px;"><b style="color: white; font-size: 40px;">Testimonials Dashboard</b><br> -->

    <!-- <div class="uk-flex uk-grid-small uk-grid-match uk-margin-medium-top" uk-grid>
    <div class="uk-width-expand@m" uk-grid>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small uk-height-small color">
          <p>Cek</p>
          <div class="uk-position-bottom-right uk-margin-small-right uk-margin-small-bottom">
            <img
              uk-img
              src="~/assets/icon/Edit.png"
              style="width: 30px; cursor: pointer;"
            />
            <img
              uk-img
              src="~/assets/icon/Delete.png"
              style="width: 30px; cursor: pointer;"
            />
          </div>
        </div> -->
    <!-- </div>
    <div class="uk-width-expand@m" uk-grid>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small uk-height-small color">
          <p>Cek</p>
          <div class="uk-position-bottom-right uk-margin-small-right uk-margin-small-bottom">
            <img
              uk-img
              src="~/assets/icon/Edit.png"
              style="width: 30px; cursor: pointer;"
            />
            <img
              uk-img
              src="~/assets/icon/Delete.png"
              style="width: 30px; cursor: pointer;"
            />
          </div>
        </div>
    </div>
    <div class="uk-width-expand@m" uk-grid>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small uk-height-small color">
          <p>Cek</p>
          <div class="uk-position-bottom-right uk-margin-small-right uk-margin-small-bottom">
            <img
              uk-img
              src="~/assets/icon/Edit.png"
              style="width: 30px; cursor: pointer;"
            />
            <img
              uk-img
              src="~/assets/icon/Delete.png"
              style="width: 30px; cursor: pointer;"
            />
          </div>
        </div>
    </div>
</div> -->

    <!-- <div class="uk-flex uk-grid-small uk-grid-match" uk-grid style="margin-top:40px; "> -->
    <!-- <div class="uk-width-expand@m" uk-grid>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small uk-height-small color">
          <p>Cek</p>
          <div class="uk-position-bottom-right uk-margin-small-right uk-margin-small-bottom">
            <img
              uk-img
              src="~/assets/icon/Edit.png"
              style="width: 30px; cursor: pointer;"
            />
            <img
              uk-img
              src="~/assets/icon/Delete.png"
              style="width: 30px; cursor: pointer;"
            />
          </div>
        </div>
    </div> -->
    <!-- <div class="uk-width-expand@m" uk-grid>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small uk-height-small color">
          <p>Cek</p>
          <div class="uk-position-bottom-right uk-margin-small-right uk-margin-small-bottom">
            <img
              uk-img
              src="~/assets/icon/Edit.png"
              style="width: 30px; cursor: pointer;"
            />
            <img
              uk-img
              src="~/assets/icon/Delete.png"
              style="width: 30px; cursor: pointer;"
            />
          </div>
        </div>
    </div> -->
    <!-- <div class="uk-width-expand@m" uk-grid>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small uk-height-small color">
          <p>Cek</p>
          <div class="uk-position-bottom-right uk-margin-small-right uk-margin-small-bottom">
            <img
              uk-img
              src="~/assets/icon/Edit.png"
              style="width: 30px; cursor: pointer;"
            />
            <img
              uk-img
              src="~/assets/icon/Delete.png"
              style="width: 30px; cursor: pointer;"
            />
          </div>
        </div>
    </div>
</div>
      </div> -->

    <!-- <div class="uk-position-bottom-right uk-margin-large-right uk-margin-large-bottom"><img
              uk-img
              src="~/assets/icon/Create.png"
              style="width: 40px; cursor: pointer;"
            /></div> -->

    <div class="main">
      <div
        class="uk-margin-medium-top uk-margin-medium-left main"
        style="font-size: 20px"
      >
        <b style="color: white; font-size: 40px">Testimonials Dashboard</b>
        <TestimonialsCard :testimonials="testimonials" />
      </div>
      <div
        class="
          uk-position-bottom-right
          uk-margin-xlarge-right
          uk-margin-xlarge-bottom
        "
      >
      <nuxt-link to="create_testimonials">
        <img
          uk-img
          src="~/assets/cms/icon/Create.png"
          style="width: 40px; cursor: pointer; position: fixed"
        />
      </nuxt-link>
      </div>
    </div>
  </div>
</template>
  <script>
import TestimonialsCard from '~/components/cms/TestimonialsCard.vue'
export default {
  name: 'IndexPage',
  layout: 'cms/default',
  head: {
    title: 'Testimonials Dashboard',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Dashboard description',
      },
    ],
  },
  components: {
    TestimonialsCard,
  },
  data() {
    return {
      testimonials: [
        {
          name: 'Walter White',
          name_company: 'Owner of PT. Menthapethamin Suksesindo',
          desc: 'Daffascript Artworks has helped me in building my business website and it has since increased my sakes significatly',
        },
        {
          name: 'Walter White',
          name_company: 'Owner of PT. Menthapethamin Suksesindo',
          desc: 'Daffascript Artworks has helped me in building my business website and it has since increased my sakes significatly',
        },
        {
          name: 'Walter White',
          name_company: 'Owner of PT. Menthapethamin Suksesindo',
          desc: 'Daffascript Artworks has helped me in building my business website and it has since increased my sakes significatly',
        },
      ],
    }
  },
}
</script>