const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item d-flex align-items-center">
        <span class="col-2 float-start">
            <img src=${who.avatarIcon} class="wd-avatar-size" alt="...">
        </span>
        <div class="col-8">
            <span class="wd-follow-title">${who.userName} </span><i class="fas fa-check-circle ms-1"></i><br/>
            <span class="wd-follow-holder align-top">@${who.handle} </span>
        </div>
        <button onclick="location.href='http://www.google.com'" class="col-2 rounded-pill wd-follow-button" type="button">Follow</button>
       </li>
   `);
}
export default WhoToFollowListItem;