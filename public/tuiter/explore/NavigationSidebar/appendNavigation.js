import NavigationSidebar from "./index.js";

// alert('Hello World!');

$('#wd-todo').append(`
   <div class="container">
       ${NavigationSidebar()}
   </div>
`);