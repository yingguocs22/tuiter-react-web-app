import PostList from "./index.js";

// alert('Hello World!');

$('#wd-post').append(`
   <div class="container bg-black">
       ${PostList()}
   </div>
`);