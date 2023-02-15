import PostSummaryItemList from "./index.js";

// alert('Hello World!');

$('#wd-post').append(`
   <div class="container">
       <h1>Todo example</h1>
       ${PostSummaryItemList()}
   </div>
`);