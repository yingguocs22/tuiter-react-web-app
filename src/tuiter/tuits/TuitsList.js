import React, {useEffect} from "react";
// import posts from './homePosts.json';
import {useDispatch, useSelector} from "react-redux";
import HomeItem from "./tuitItem";
import {findTuitsThunk}
    from "../../services/tuits-thunks";

const TuitsList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(tuit =>
                    <HomeItem
                        key={tuit._id} post={tuit}/> )
            }
        </ul>
    );
};
export default TuitsList;