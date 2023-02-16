import NavigationSidebar from "../NavigationSidebar/index.js";

function BookMarkComponent() {
    $('#wd-bookmarks').append(`
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
   <!--<h3>Navigation Sidebar</h3>-->
    ${NavigationSidebar("Bookmarks")}
   </div>
     Bookmarks Page
  </div>
   `);
}
$(BookMarkComponent);