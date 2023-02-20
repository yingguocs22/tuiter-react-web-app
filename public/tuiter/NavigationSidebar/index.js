import NavigationItem from "./navigationItem.js";
import navigations from "./nagivations.js";

const NavigationSidebar = (active) => {
    return(`
      <ul class="list-group">
         ${
        navigations.map(navigation => {
            return(NavigationItem(navigation, active));
        }).join('')
    }
      </ul>
      
    <div class="d-grid gap-2">
        <button onclick="location.href='#'" class="btn btn-primary rounded-pill mt-2" type="button">Tweet</button>
    </div>

   `);
}

export default NavigationSidebar;


// const NavigationSidebar = (active) => {
//     return(`
//    <div class="list-group mynavbar">
//     <ul>
//         <a class="list-group-item" href="#">
//            <i class="fab fa-twitter me-1"></i>
//         </a>
//
//      <a href="../HomeScreen/index.html" class="list-group-item overflow-hidden">
//         <i class="fas fa-home me-1"></i>
//         <span class="d-none d-xl-inline">Home</span>
//      </a>
//
//      <a href="../explore/test.html" class="list-group-item active" aria-current="true">
//         <i class="fas fa-hashtag me-1"></i>
//         <span class="d-none d-xl-inline">Explore</span>
//      </a>
//
//      <a href="#" class="list-group-item overflow-hidden">
//         <i class="fas fa-bell me-1"></i>
//         <span class="d-none d-xl-inline">Notifications</span>
//      </a>
//
//      <a href="#" class="list-group-item overflow-hidden">
//         <i class="fas fa-envelope me-1"></i>
//         <span class="d-none d-xl-inline">Messages</span>
//      </a>
//
//      <a href="#" class="list-group-item overflow-hidden">
//         <i class="fas fa-bookmark me-1"></i>
//         <span class="d-none d-xl-inline">Bookmarks</span>
//      </a>
//
//      <a href="#" class="list-group-item overflow-hidden">
//         <i class="fas fa-list me-1"></i>
//         <span class="d-none d-xl-inline">Lists</span>
//      </a>
//
//      <a href="../profile.html" class="list-group-item overflow-hidden">
//         <i class="fas fa-user me-1"></i>
//         <span class="d-none d-xl-inline">Profile</span>
//      </a>
//
//      <a href="#" class="list-group-item overflow-hidden">
//         <i class="fas fa-ellipsis-h me-1"></i>
//         <span class="d-none d-xl-inline">More</span>
//      </a>
//     </ul>
//   </div>
//  `);
// }
// export default NavigationSidebar;