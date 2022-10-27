<template>
  <div>
    <div>
      <div
        class="uk-card uk-card-body"
        style="color: white; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 20px;"
      >
      <img
              uk-img
              src="~/assets/Logo.svg"
              style="width: 80%;"
            />

            <div class="uk-flex uk-margin-medium-top" style="cursor: pointer;">
              <img uk-img src="~assets/icon/User.png" style="width: 50px; height: 50px; border-radius: 50%;">
              <div class="user" style="margin-top: 10px; margin-left: 10px;">
                  <h4 style="color: white">User</h4>
                  <hr>
              </div>
            </div>


        <ul class="uk-list sidebar" style="margin-top: 25px; margin-left: 10px;">
          <li><nuxt-link to="/Dashboard" style="text-decoration:none; color:white">
            <img
              uk-img
              src="~/assets/icon/Dashboard.png"
              style="width: 20px; margin-right: 20px"
            />Dashboard</nuxt-link>
          </li>
          <li style="margin-top: 20px"><nuxt-link to="/Contact_us" style="text-decoration:none; color:white">
            <img
              uk-img
              src="~/assets/icon/contact.png"
              style="width: 20px; margin-right: 20px"
            />Contact Us</nuxt-link>
          </li>
          <li style="margin-top: 20px"><nuxt-link to="/Work" style="text-decoration:none; color:white">
            <img
              uk-img
              src="~/assets/icon/Work.png"
              style="width: 20px; margin-right: 20px"
            />Work</nuxt-link>
          </li>
          <li style="margin-top: 20px"><nuxt-link to="/Service" style="text-decoration:none; color:white">
            <img
              uk-img
              src="~/assets/icon/service.png"
              style="width: 20px; margin-right: 20px"
            />Service</nuxt-link>
          </li>
          <li style="margin-top: 20px"><nuxt-link to="/Testimonials" style="text-decoration:none; color:white">
            <img
              uk-img
              src="~/assets/icon/testimoni.png"
              style="width: 20px; margin-right: 20px"
            />Testimonials</nuxt-link>
          </li>
          <li style="margin-top: 70%"><nuxt-link to="#" style="text-decoration:none; color:white">
            <img
              uk-img
              src="~/assets/icon/Logout2.png"
              style="width: 20px; margin-right: 20px"
            />Log Out</nuxt-link>
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
  background-color: #145DA0;
  padding: 12px 10px;
  position: static;
  border-radius: 10px;
}


.sidebar li {
  cursor: pointer;
  font-size: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

ul li:hover{
    background-color: #145DA0;
    transition: all ease-in .3s;
    padding: 12px 10px;
    position: static;
    border-radius: 10px;
}

.tab{
    border: 2px solid black;
    border-collapse: collapse;
}

.tombol{
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
}

</style>

