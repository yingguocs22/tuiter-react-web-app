import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./ExploreScreen";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";

function Tuiter() {
    return(
        <div>
            <Nav/>
            {/*<NavigationSidebar active="home"/>*/}
            {/*<WhoToFollowList/>*/}
            {/*<h1>Tuiter</h1>*/}

            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-md-10 col-lg-11 col-xl-10"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route path="/home"    element={<HomeComponent/>}/>
                        <Route path="/explore" element={<ExploreComponent/>}/>
                    </Routes>
                </div>
                {/*<div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">*/}
                {/*    <WhoToFollowList/>*/}
                {/*</div>*/}
            </div>


        </div>


    )
}
export default Tuiter