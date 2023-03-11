import WhoToFollowList from "../who-to-follow-list";
import Profile from "./profile";

function ProfileComponent() {
    return(
        <div>
            {/*<NavigationSidebar active="home"/>*/}
            {/*<WhoToFollowList/>*/}
            {/*<h1>Tuiter</h1>*/}

            <div className="row">
                {/*<div className="col-2 col-md-2 col-lg-1 col-xl-2">*/}
                {/*    <NavigationSidebar active="explore"/>*/}
                {/*</div>*/}
                <div className="col-10 col-md-10 col-lg-9 col-xl-8"
                     style={{"position": "relative"}}>
                    <Profile/>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-3 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </div>
    )
}
export default ProfileComponent