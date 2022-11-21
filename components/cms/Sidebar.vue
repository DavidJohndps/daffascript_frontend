<template>
  <div>
    <div>
      <div
        class="uk-card uk-card-body"
        style="
          color: white;
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
            sans-serif;
          font-size: 20px;
        "
      >
        <img uk-img src="~/assets/cms/Logo.svg" style="width: 80%" />

        <div class="uk-flex uk-margin-medium-top" style="cursor: pointer">
          <img
            uk-img
            src="~assets/cms/icon/User.png"
            style="width: 50px; height: 50px; border-radius: 50%"
          />
          <div class="user" style="margin-top: 10px; margin-left: 10px">
            <h4 style="color: white">User</h4>
            <hr />
          </div>
        </div>

        <ul class="uk-list sidebar" style="margin-top: 25px; margin-left: 10px">
          <li>
            <nuxt-link
              to="/cms/dashboard"
              style="text-decoration: none; color: white"
            >
              <img
                uk-img
                src="~/assets/cms/icon/Dashboard.png"
                style="width: 20px; margin-right: 20px"
              />Dashboard</nuxt-link
            >
          </li>
          <li style="margin-top: 20px">
            <nuxt-link
              to="/cms/contact_us"
              style="text-decoration: none; color: white"
            >
              <img
                uk-img
                src="~/assets/cms/icon/contact.png"
                style="width: 20px; margin-right: 20px"
              />Contact Us</nuxt-link
            >
          </li>
          <li style="margin-top: 20px">
            <nuxt-link
              to="/cms/work"
              style="text-decoration: none; color: white"
            >
              <img
                uk-img
                src="~/assets/cms/icon/Work.png"
                style="width: 20px; margin-right: 20px"
              />Work</nuxt-link
            >
          </li>
          <li style="margin-top: 20px">
            <nuxt-link
              to="/cms/servicee"
              style="text-decoration: none; color: white"
            >
              <img
                uk-img
                src="~/assets/cms/icon/service.png"
                style="width: 20px; margin-right: 20px"
              />Service</nuxt-link
            >
          </li>
          <li style="margin-top: 20px">
            <nuxt-link
              to="/cms/testimonials"
              style="text-decoration: none; color: white"
            >
              <img
                uk-img
                src="~/assets/cms/icon/testimoni.png"
                style="width: 20px; margin-right: 20px"
              />Testimonials</nuxt-link
            >
          </li>
          <li style="margin-top: 20px">
            <nuxt-link
              to="#"
              style="text-decoration: none; color: white"
            >
              <img
                uk-img
                src="~/assets/cms/icon/team.png"
                style="width: 20px; margin-right: 20px"
              />Team</nuxt-link
            >
          </li>
          <li style="margin-top: 20px">
            <nuxt-link
              to="#"
              style="text-decoration: none; color: white"
            >
              <img
                uk-img
                src="~/assets/cms/icon/expertise.png"
                style="width: 20px; margin-right: 20px"
              />Expertise</nuxt-link
            >
          </li>
          <li style="margin-top: 20px">
            <nuxt-link
              to="#"
              style="text-decoration: none; color: white"
            >
              <img
                uk-img
                src="~/assets/cms/icon/technologie.png"
                style="width: 20px; margin-right: 20px"
              />Technologie</nuxt-link
            >
          </li>
          <li style="margin-top: 10%">
            <nuxt-link to="#" style="text-decoration: none; color: white">
              <img
                uk-img
                src="~/assets/cms/icon/Logout2.png"
                style="width: 20px; margin-right: 20px"
              />Log Out</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.nuxt-link-active {
  background-color: #145da0;
  padding: 12px 10px;
  position: static;
  border-radius: 10px;
}

.sidebar li {
  cursor: pointer;
  font-size: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

ul li:hover {
  background-color: #145da0;
  transition: all ease-in 0.3s;
  padding: 12px 10px;
  position: static;
  border-radius: 10px;
}

.tab {
  border: 2px solid black;
  border-collapse: collapse;
}

.tombol {
  border-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>

