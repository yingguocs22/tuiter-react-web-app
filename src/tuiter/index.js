import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./ExploreScreen";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer
    from "./tuits/tuits-reducer";
import profileReducer
    from "./profile/profile-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileComponent from "./profile";
import EditProfileComponent from "./profile/editProfileComponent";
const store = configureStore(
    {reducer: {who: whoReducer, tuitsData: tuitsReducer, pros: profileReducer}});

function Tuiter() {
    return(
        <Provider store={store}>
            <div>
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
                            <Route path="/"    element={<HomeComponent/>}/>
                            <Route path="/home2"    element={<HomeComponent/>}/>
                            <Route path="/explore2" element={<ExploreComponent/>}/>
                            <Route path="/profile2" element={<ProfileComponent/>}/>
                            <Route path="/edit-profile2" element={<EditProfileComponent/>}/>
                        </Routes>
                    </div>
                    {/*<div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">*/}
                    {/*    <WhoToFollowList/>*/}
                    {/*</div>*/}
                </div>
            </div>
        </Provider>


    )
}
export default Tuiter