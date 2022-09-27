<template>
    <div>
        <div class="uk-width-large">
      <div class="uk-card uk-card-default uk-card-body main" style="font-size: 40px;">Contact Us Dashboard<br>
        <button class="uk-button tombol" style="margin-top: 50px; margin-bottom: 10px; float: right; background-color: #116530;">create</button>
        <table class="uk-table tab" style="font-size: 30px;">
    <tbody>
        <tr>
            <td>No</td>
            <td>Table Data</td>
            <td>Action</td>
        </tr>
        <tr>
            <td>1</td>
            <td>Work</td>
            <td><button class="uk-button uk-button-primary tombol" style="margin-right: 20px; background-color: #E1C340;">Edit</button><button class="uk-button tombol" style="background-color: #F51720;">Delete</button></td>
        </tr>
    </tbody>
</table></div>
      
    </div>
    </div>
  </template>
  
  <script>
  import Sidebar from "../components/Sidebar.vue";
  export default {
    head: {
    title: 'Contact Us Dashboard',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Dashboard description'
      }
    ],
  },
    name: "IndexPage",
    layout: "default",
    components: { Sidebar }
  }
  </script>