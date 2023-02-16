import NavigationSidebar from "../NavigationSidebar/index.js";

function NotificationComponent() {
    $('#wd-notification').append(`
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
   <!--<h3>Navigation Sidebar</h3>-->
    ${NavigationSidebar("Notifications")}
   </div>
     Notifications Page
  </div>
   `);
}
$(NotificationComponent);