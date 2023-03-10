import NavigationSidebar from "../navigation-sidebar";
import Explore from "../ExploreScreen/explore";
import WhoToFollowList from "../who-to-follow-list";
import PostSummaryItem from "../post-summary-list/post-summary-item";
import PostSummaryList from "../post-summary-list";
import WhatsHappening from "./whats-happening";
import TuitsList from "./a7_home";


function HomeComponent() {
    return(
        <div>
            {/*<NavigationSidebar active="home"/>*/}
            {/*<WhoToFollowList/>*/}
            {/*<h1>Tuiter</h1>*/}
            <div className="row">
                {/*<div className="col-2 col-md-2 col-lg-1 col-xl-2">*/}
                {/*    <NavigationSidebar active="explore"/>*/}
                {/*</div>*/}
                <div className="col-10 col-md-10 col-lg-8 col-xl-7"
                     style={{"position": "relative"}}>
                    <h4>Home</h4>
                    <WhatsHappening/>
                    <TuitsList/>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-5">
                    {/*<PostSummaryList/>*/}
                    <WhoToFollowList/>
                </div>
            </div>
        </div>
    )
}
export default HomeComponent