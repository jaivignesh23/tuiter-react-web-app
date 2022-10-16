const NavigationSidebar = () => {
    return(`
      <div class="list-group">
        <a class="list-group-item" href="/">
          <i class="fab fa-twitter"></i></a>
          <!-- continue rest of list, e.g.,
               Home, Explore, Notifications,  Messages, etc. -->
        <a class="list-group-item" href="/">
          <i class="fab fa fa-home"></i><span class="d-none d-xl-inline-block wd_iconText">Home</span></a>

          <a class="list-group-item active" href="/">
          <i class="fab fa fa-hashtag"></i><span class="d-none d-xl-inline-block wd_iconText ">Explore</span></a>

          <a class="list-group-item" href="/">
          <i class="fab fa fa-bell"></i><span class="d-none d-xl-inline-block wd_iconText">Notifications</span></a>

          <a class="list-group-item" href="/">
          <i class="fab fa fa-envelope"></i><span class="d-none d-xl-inline-block wd_iconText">Messages</span></a>

          <a class="list-group-item" href="/">
          <i class="fab fa fa-bookmark"></i><span class="d-none d-xl-inline-block wd_iconText">Bookmark</span></a>

          <a class="list-group-item" href="/">
          <i class="fab fa fa-list"></i><span class="d-none d-xl-inline-block wd_iconText">Lists</span></a>

          <a class="list-group-item" href="/">
          <i class="fab fa fa-user"></i><span class="d-none d-xl-inline-block wd_iconText">Profile</span></a>

          <a class="list-group-item" href="/">
          <i class="fab fa fa-ellipsis-h"></i>
          <span class="d-none d-xl-inline-block wd_iconText">More</span>
          </a>
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
   }
   export default NavigationSidebar;