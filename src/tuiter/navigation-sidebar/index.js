import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    // find the name of this web
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>

            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-door-fill me-1" /> Home
            </Link>

            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash me-1"/> Explore
            </Link>

            <Link to="/" className="list-group-item">
                <i className="bi bi-asterisk me-1"/> Labs
            </Link>

            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell me-1"/> Notifications
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope me-1"/> Messages
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark me-1"/> Bookmarks
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="bi bi-card-list me-1"/> Lists
            </a>
            <Link to="/tuiter/profile" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person me-1"/> Profile
            </Link>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots me-1"/> More
            </a>
        </div>
    );
};
export default NavigationSidebar;
