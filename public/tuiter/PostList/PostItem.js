const hasContent = (post) => {
    if (post.context_title === "" && post.context_text === "" && post.context_link === "") {
        return (`
            <div>
                <img class="wd-content-image-round" src=${post.image}/>
            </div>
        `)
    }
    return (`
        <div class="wd-context">
            <div>
                <img class="wd-content-image" src=${post.image}/>
            </div>

            <div class="wd-second-content">
                <div class="text-truncate">
                    ${post.context_title}
                </div>

                <div class="wd-font-size-15 wd-second-content-text">
                    ${post.context_text}
                </div>
                
                <div class="wd-font-size-15 wd-second-content-text">
                    ${hasLink(post)}
                </div>
            </div>     
        </div>
    `)
}

const hasLink = (post) => {
    if (post.context_link === "") {
        return (``)
    }
    return (`
            <i class="fa-solid fa-link me-1"></i>${post.context_link}
        `)
}

const PostItem = (post) => {
    return(`
                <li class="list-group-item">          
                    <div class="row">
                        <div class="col-1 text-center">
                            <img class="wd-avatar" src=${post.avatar}/>
                        </div>
    
                        <div class="col-11">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <span>${post.userName}</span> 
                                    <i class="fas fa-check-circle ms-1"></i>
                                    <span>@${post.handle}  • ${post.time}</span>                             
                                </div>
                                <div>
                                    <i class="fas fa-ellipsis-h text-dark"></i>                      
                                </div>
                            </div>
                
                            <div class="mb-2">
                                ${post.title}
                            </div>
                            
                            ${hasContent(post)}
                            
                            <div class="wd-icon-container d-flex justify-content-between align-items-center">
                                <a href="#chat"><i class="far fa-comment"></i><span>${post.comment}</span></a>
                                <a href="#reply"><i class="fa-solid fa-repeat"></i><span>${post.repeat}</span></a>
                                <a href="#like"><i class="fa-regular fa-heart"></i><span>${post.like}</span></a>
                                <a href="#upload"><i class="fa-solid fa-arrow-up-from-bracket"></i></i><span>${post.share}</span></a>
                            </div>
                        </div>     
                    </div>
                </li>
               
   `);
}

export default PostItem;