import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <!--      search area in the middle-->
            <div class="row justify-content-between align-items-center">
                <div class="has-search col-11">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" class="form-control rounded-pill" placeholder="Search Twitter">
                </div>
                <div class="col-1">
                     <a href="explore-settings.html"><i class="fas fa-cog" style="font-size:25px; color:rgb(29,161,242);"></i></a>
                </div>
            </div>
                
            <!--   Part2     navigation bar-->
            <ul class="nav nav-tabs mt-2">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="d-none d-md-block nav-item">
                    <a class="nav-link" href="#">Entertainment</a>
                </li>
            </ul>
            
           <!-- image with overlaid text -->
            <div class="container-fluid wd-relative-position p-0 mt-2">
                <img class="img-fluid of" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg">
                <p class="position-absolute text-dark fs-3 fw-bold wd-bottomleft">SpaceX's Starship</p>
            </div>
           
           ${PostSummaryList()}
    `);
}

export default ExploreComponent;
