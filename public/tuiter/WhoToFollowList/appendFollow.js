import WhoToFollowList from "./index.js";

// alert('Hello World!');

$('#wd-follow').append(`
   <div class="container">
       <h1>Todo example</h1>
       ${WhoToFollowList()}
   </div>
`);