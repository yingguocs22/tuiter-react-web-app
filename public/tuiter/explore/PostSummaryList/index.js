import PostSummaryItem from "./PostSummaryItem.js";
import posts from "../PostSummaryList/posts.js"
const PostSummaryItemList = () => {
    return (`
           <ul class="list-group">
         ${
        posts.map(post => {
            return(PostSummaryItem(post));
        }).join('')
    }
           </ul>
`);
}

export default PostSummaryItemList;