import NavigationSidebar from "../NavigationSidebar/index.js";

function ProfileComponent() {
    $('#wd-profile').append(`
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
   <!--<h3>Navigation Sidebar</h3>-->
    ${NavigationSidebar("Profile")}
   </div>
     Profile Page
  </div>
   `);
}
$(ProfileComponent);