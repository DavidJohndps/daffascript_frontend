<template>
    <div
          class="uk-position-relative uk-visible-toggle uk-light uk-flex"
          tabindex="-1"
          uk-slider="side: true"
          style="max-height: 320px"
        >
          <ul
            class="uk-slider-items"
            uk-height-viewport="offset-top: true; offset-bottom: 30"
          >
            <li
              v-for="(partner, index) in partners"
              :key="index"
              style="max-height: 320px"
              class="uk-flex uk-flex-middle"
            >
              <div class="uk-margin-large-top mr-user">
                <img
                  :src="partner.pict"
                  
                  width="300"
                />
              </div>
              <div class="uk-margin-medium-left homeourpartner">
                <img
                  src="~assets/homepage/quote.svg"
                  class="uk-position-absolute uk-visible@m"
                  style="margin-right: 20px; margin-top: 20px"
                  uk-img
                  alt=""
                />
                <p
                  class="
                    font-gilroy-medium
                    uk-margin-large-top uk-margin-medium-left
                    texttittlehome
                    mr-tittle
                  "
                  style="
                    font-size: 35px;
                    line-height: 41px;
                    color: rgba(255, 255, 255, 0.8);
                  "
                >
                  "{{ partner.title }}"
                </p>
                <div class="uk-flex">
                  <div>
                    <p
                      class="
                        text-white
                        uk-margin-medium-top
                        uk-margin-medium-left
                        uk-margin-remove-bottom
                        textnamehome
                        mr-name
                      "
                      style="
                        font-size: 32px;
                        line-height: 164%;
                        font-weight: 700;
                      "
                    >
                      {{ partner.name }}
                    </p>
                    <p
                      class="
                        font-gilroy-medium
                        uk-margin-medium-left uk-margin-remove-top
                        textcompany
                      "
                      style="
                        font-size: 19px;
                        line-height: 22px;
                        color: rgba(255, 255, 255, 0.62);
                      "
                    >
                      {{ partner.company }}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div
            class="
              uk-margin-large-top uk-flex uk-visible@m
              btnhome
              uk-position-bottom-right
            "
          >
            <div class="uk-position-small">
              <button
                style="
                  background-color: #191949;
                  border-radius: 50%;
                  border: 3px solid #fd0091;
                  width: 60px;
                  height: 60px;
                "
                uk-slidenav-previous
                uk-slider-item="previous"
              ></button>
            </div>
            <div class="uk-position-small">
              <button
                style="
                  background-color: #191949;
                  border-radius: 50%;
                  border: 3px solid #fd0091;
                  width: 60px;
                  height: 60px;
                "
                uk-slidenav-next
                uk-slider-item="next"
              ></button>
            </div>
          </div>
          <div class="uk-flex uk-visible@xs uk-hidden@m">
            <div class="uk-position-bottom-left">
              <button
                style="
                  background-color: #191949;
                  border-radius: 50%;
                  border: 1.5px solid #fd0091;
                  width: 30px;
                  height: 30px;
                "
                uk-slidenav-previous
                uk-slider-item="previous"
              ></button>
            </div>
            <div class="uk-position-bottom-right">
              <button
                style="
                  background-color: #191949;
                  border-radius: 50%;
                  border: 1.5px solid #fd0091;
                  width: 30px;
                  height: 30px;
                "
                uk-slidenav-next
                uk-slider-item="next"
              ></button>
            </div>
          </div>
        </div>
</template>

<script>
    export default{
        props:['partners']
    }
</script>