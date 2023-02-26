import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js"
import ExploreComponent from "../ExploreScreenPosts/ExploreComponent.js"
import PostSummaryItemList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";

function exploreComponent() {
    $('#wd-home').append(`
  <div class="row mt-2">
   <div class="col-2 col-md-2 col-lg-1 col-xl-2">
   <!--<h3>Navigation Sidebar</h3>-->
    ${NavigationSidebar("Home")}
   </div>
   <div class="col-10 col-lg-7 col-xl-6">
       ${PostList()}
   </div>
   <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
<!--    <h3>PostSummaryList </h3>-->
       ${PostSummaryItemList()}

   </div>
  </div>
   `);
}
$(exploreComponent);