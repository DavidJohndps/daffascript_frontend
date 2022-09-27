<template>
  <div>
    <div>
      <div
        class="uk-card uk-card-default uk-card-body"
        style="background-color: #0C2D48; height: 100vh; color: white; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; font-size: 20px;"
      >
      <img
              uk-img
              src="~/assets/Logo.svg"
              style="width: 80%;"
            />
        <ul class="uk-list sidebar" style="margin-top: 100px; margin-left: 10px;">
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
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>

a.nuxt-link-active {
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

.main{
    color: white;
    background-color: #5885AF;
    height: 100vh;
    width: 80vw;
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

