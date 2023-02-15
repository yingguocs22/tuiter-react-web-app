const hasTopic = (post) => {
    if (post.topic !== "") {
        return (`
        <span class="wd-post-color-gray">${post.topic}</span><br/>
        `)
    } else {
        return (``)
    }
}

const hasTitle = (post) => {
    if (post.title !== "") {
        return (`
        <span><b>${post.title}</b></span><br/>
        `)
    } else {
        return (``)
    }
}

const hasTweets = (post) => {
    if ('tweets' in post) {
        return (`
        <span class="wd-post-color-gray">${post.tweets}</span><br/>
        `)
    } else {
        return (``)
    }
}


const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="wd-post-size">
                ${hasTopic(post)}
                <span><b>${post.userName}</b></span><i class="fas fa-check-circle ms-1"></i><span class="wd-post-color-gray"> - ${post.time}</span><br/>
                ${hasTitle(post)}
                ${hasTweets(post)}
            </div>
            <div class="ms-2">
                <img src=${post.image} class="wd-post-picture" alt="...">
            </div>
        </li>
               
   `);
}

export default PostSummaryItem;