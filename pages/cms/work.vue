<template>
  <!-- <div class="uk-card uk-card-default uk-card-body main" style="font-size: 20px;">
        <b style="color: white; font-size: 40px;">Work</b>
      

      <div class="uk-grid-small uk-child-width-1-5 uk-flex uk-margin-medium-top" uk-grid>
        <div>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small color">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small color">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small color">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small color">Item</div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body uk-padding-small color">Item</div>
    </div>
      </div>

      <div class="uk-position-bottom-right uk-margin-large-right uk-margin-large-bottom"><img
              uk-img
              src="~/assets/icon/Create.png"
              style="width: 40px; cursor: pointer;"
            /></div>

    </div> -->
  <div>
    <div class="main">
      <WorkCard :work="work" />
      <div
        class="
          uk-position-bottom-right
          uk-margin-xlarge-right
          uk-margin-xlarge-bottom
        "
      >
        <img
          uk-img
          src="~/assets/cms/icon/Create.png"
          style="width: 40px; cursor: pointer; position: fixed"
        />
      </div>
    </div>
  </div>
</template>
  
  <script>
import WorkCard from '../../components/cms/WorkCard.vue'
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
    WorkCard,
  },
  data() {
    return {
      work: [
        {
          text: 'Item',
        },
        {
          text: 'Item',
        },
        {
          text: 'Item',
        },
        {
          text: 'Item',
        },
        {
          text: 'Item',
        },
        {
          text: 'Item',
        },
        {
          text: 'Item',
        },
      ],
    }
  },
  name: 'IndexPage',
  layout: 'cms/default'
}
</script>