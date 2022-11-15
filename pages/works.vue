<template>
  <div>
    <img
      src="~/assets/cms/Details/Line_vector.svg"
      uk-img
      class="uk-position-absolute uk-position-top-right vector"
      style="z-index: -1"
    />
    <div class="uk-container uk-margin-medium-top">
      <img
        class="starbucks-img"
        uk-img
        src="~/assets/cms/Details/Starbucks.svg"
      />
    </div>

    <div class="uk-container">
      <!-- <div class="uk-child-width-1-5@s uk-flex card uk-margin-large-top" uk-grid>
    <div class="uk-margin-medium-right">
        <div class="uk-card uk-card-default uk-card-small uk-card-body font-gilroy-bold uk-text-center" style="width: 314px; height: 86px; border-radius: 20px; background-color: #0F0F3E; color: rgba(255, 255, 255, 0.5);">
            <p style="font-size:37px;">UI UX Designing</p>
        </div>
        </div>
    <div>
      <div class="uk-card uk-card-default uk-card-small uk-card-body font-gilroy-bold uk-text-center uk-margin-large-left" style="width: 474px; height: 86px; border-radius: 20px; background-color: #0F0F3E; color: rgba(255, 255, 255, 0.5);">
            <p style="font-size:37px;">Mobile App Development</p>
        </div>
        </div>
      </div> -->
      <div class="uk-margin-xlarge-top uk-margin-large-left containerservices uk-flex" uk-grid>
        <CardWorkWeb :data="star"/>
      </div>

      <!-- <div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-margin-large-top uk-flex" uk-grid>
    <div>
        <div class="uk-card img-empat">
          <img
              uk-img
              src="~/assets/cms/Details/Home.svg"
            />
        </div>
    </div>
    <div>
        <div class="uk-card img-empat">
          <img
              uk-img
              src="~/assets/cms/Details/Card.svg"
            />
        </div>
    </div>
    <div>
        <div class="uk-card img-empat">
          <img
              uk-img
              src="~/assets/cms/Details/Rewards.svg"
            />
        </div>
    </div>
    <div>
        <div class="uk-card img-empat">
          <img
              uk-img
              src="~/assets/cms/Details/Orders.svg"
            />
        </div>
    </div>
</div> -->

      <ImgCardDetails :images="images" />

      <div class="Starbucks uk-margin-large-top">
        <p class="text-white font-gilroy-bold text-starbucks">
          Starbucks has a mobile app that include many interisting features for
          Starbucks lovers. Starbucks card, Starbucks rewards & Starbucks menus.
        </p>
      </div>

      <div class="reason uk-margin-large-top">
        <p class="font-gilroy-bold text-reason" style="color: white">Reason</p>
        <ul
          class="uk-list uk-list-disc uk-text-normal font-gilroy-regular text"
          style="color: white"
        >
          <li>
            We want user to be able to order starbucks in the starbucks app.
          </li>
          <li>we want user to able to use starbucks card for online orders.</li>
          <li>
            We want starbucks beverages & coffe promo shown in the starbucks
            app.
          </li>
        </ul>
      </div>

      <div class="Problems uk-margin-large-top">
        <p class="font-gilroy-bold text-problems" style="color: white">
          Problems
        </p>
        <ul
          class="uk-list uk-list-disc uk-text-normal font-gilroy-regular text"
          style="color: white"
        >
          <li>
            There's no point for everyone expect starbucks card user to use the
            app.
          </li>
          <li>
            Menu in the app seems not attracting appetite & there's no
            transparency.
          </li>
          <li>About the price of each beverages & coffe.</li>
          <li>
            Starbucks card can only be used to pay in the starbucks outlet not
            in online starbucks delivery.
          </li>
          <li>
            Starbucks promos only shows in the ride hailing app like Gojek or
            Grab.
          </li>
          <li>Promos don't show in the starbucks app.</li>
        </ul>
      </div>

      <center class="uk-margin-large-top">
        <button
          class="button-gra font-gilroy-medium works-button"
          style=""
        >
          <nuxt-link to="/other_work" style="text-decoration: none; color: white"
            >See other works</nuxt-link
          >
        </button>
      </center>
    </div>
  </div>
</template>
  
  <script>
import ImgCardDetails from '../components/ImgCardDetails.vue'
export default {
  name: 'IndexPage',
  layout: "default",
  head: {
    title: 'Details',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Dashboard description',
      },
    ],
  },
  components: {
    ImgCardDetails,
  },
  data() {
    return {
      images: [
        {
          url: require('~/assets/cms/Details/Card.svg'),
        },
        {
          url: require('~/assets/cms/Details/Home.svg'),
        },
        {
          url: require('~/assets/cms/Details/Orders.svg'),
        },
        {
          url: require('~/assets/cms/Details/Rewards.svg'),
        },
      ],
      star: [
        {
          text: 'UI UX Designing'
        },
        {
          text: 'Mobile App Development'
        }
      ]
    }
  },
}
</script>

  <style>
.kolom-satu {
  width: 200px;
  height: 60px;
  padding: 10px;
  background-color: #191949;
  border-radius: 10px;
}

.kolom-dua {
  width: 300px;
  height: 60px;
  padding: 10px;
  background-color: #191949;
  border-radius: 10px;
}

.text-kolom {
  font-size: 23px;
  color: rgba(255, 255, 255, 0.5);
}

.text-starbucks {
  font-size: 40px;
}

.text-reason {
  font-size: 32px;
}

.text-problems {
  font-size: 32px;
}

.text {
  font-size: 25px;
}

.works-button{
      font-size: 15px;
      width: 226px; 
      height: 58px; 
      --border-width: 4px;
      --border-radius: 75px;
      text-transform: capitalize;
      position: relative;
      background: linear-gradient(#FD0091, #FD0091, #FF7732);
      border-radius: var(--border-radius);
      z-index: 1;
      border: none;
    }

    .works-button::before{
      content: '';
      display: block;
      height: calc(100% - calc(var(--border-width) * 2));
      width: calc(100% - calc(var(--border-width) * 2));
      background: #000032;
      position: absolute;
      top: var(--border-width);
      left: var(--border-width);
      border-radius: calc(var(--border-radius) - var(--border-width));
      z-index: -1;
    }

/* .works-button {
  width: 250px;
  height: 65px;
  border-radius: 75px;
  border: 3px solid #fd0091;
  background-color: #000032;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 20px;
}

.works-button:hover {
  background: linear-gradient(#fd0091, #fd0091, #ff7732);
  border: none;
  height: 60px;
} */

@media only screen and (max-width: 1155px) {
  .kolom-satu {
    margin-left: 20px;
    width: 190px;
    height: 50px;
    border-radius: 8px;
  }

  .kolom-dua {
    width: 280px;
    height: 50px;
    border-radius: 8px;
  }

  .text-kolom {
    font-size: 18px;
  }

  .img-empat {
    width: 200px;
  }

  .text-starbucks {
    font-size: 30px;
  }

  .works-button {
    margin-bottom: 100px;
  }
}

@media only screen and (max-width: 878px) {
  .starbucks-img {
    width: 300px;
  }

  .kolom-satu {
    width: 150px;
  }

  .kolom-dua {
    width: 230px;
  }

  .text-kolom {
    font-size: 15px;
  }

  .img-empat {
    width: 150px;
  }

  .text-starbucks {
    font-size: 25px;
  }
}

@media only screen and (max-width: 722px) {
  .kolom-satu {
    width: 120px;
    height: 35px;
    border-radius: 5px;
  }

  .kolom-dua {
    width: 190px;
    height: 35px;
    border-radius: 5px;
  }

  .text-kolom {
    font-size: 12px;
  }

  .text-starbucks {
    font-size: 25px;
  }

  .text-reason {
    font-size: 25px;
  }

  .text-problems {
    font-size: 25px;
  }

  .text {
    font-size: 20px;
  }

  .works-button {
    width: 220px;
    height: 60px;
    border-radius: 50px;
  }
}

@media only screen and (max-width: 620px) {
  .kolom-satu {
    width: 100px;
    height: 30px;
  }

  .kolom-dua {
    width: 150px;
    height: 30px;
  }

  .text-kolom {
    font-size: 10px;
  }

  .img-empat {
    width: 120px;
  }

  .works-button {
    width: 180px;
    height: 55px;
    border-radius: 30px;
    font-size: 16px;
  }
}

@media only screen and (max-width: 541px) {
  .starbucks-img {
    width: 250px;
  }

  .kolom-satu {
    width: 100px;
    height: 30px;
    border-radius: 7px;
  }

  .kolom-dua {
    width: 180px;
    height: 30px;
    border-radius: 7px;
  }

  .text-kolom {
    font-size: 10px;
  }

  .img-empat {
    width: 100px;
  }

  .text-starbucks {
    font-size: 18px;
  }

  .text-reason {
    font-size: 18px;
  }

  .text-problems {
    font-size: 18px;
  }

  .text {
    font-size: 14px;
  }

  .works-button {
    width: 160px;
    height: 50px;
    border-radius: 30px;
    font-size: 15px;
  }
}

@media only screen and (max-width: 433px) {
  .starbucks-img {
    width: 200px;
  }

  .kolom-satu {
    width: 100px;
    height: 30px;
    border-radius: 5px;
  }

  .kolom-dua {
    width: 150px;
    height: 30px;
    border-radius: 5px;
  }

  .text-kolom {
    font-size: 10px;
  }

  .img-empat {
    width: 75px;
  }

  .text-starbucks {
    font-size: 15px;
  }

  .text-reason {
    font-size: 15px;
  }

  .text-problems {
    font-size: 15px;
  }

  .text {
    font-size: 12px;
  }

  .works-button {
    width: 150px;
    height: 45px;
    border-radius: 20px;
    font-size: 12px;
  }
}

@media only screen and (max-width: 375px) {
  .starbucks-img {
    width: 159px;
    height: 50px;
  }

  .kolom-satu {
    width: 120px;
    height: 40px;
    padding: 10px;
    border-radius: 7px;
    margin-right: -15px;
  }

  .kolom-dua {
    width: 170px;
    height: 40px;
    padding: 10px;
    border-radius: 7px;
  }

  .text-kolom {
    font-size: 12px;
  }

  .img-empat {
    width: 71px;
    height: 181px;
  }

  .text-kolom {
    font-size: 12px;
  }

  .text-starbucks {
    font-size: 15px;
  }

  .text-reason {
    font-size: 15px;
  }

  .text-problems {
    font-size: 15px;
  }

  .text {
    font-size: 12px;
  }

  .works-button {
    width: 130px;
    height: 40px;
    border-radius: 20px;
    font-size: 12px;
    margin-bottom: 100px;
  }
}
</style>
  