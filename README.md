# We Travellers

This README is for the React front-end full stack application - We Travellers.

   - Link to the live site: [We Travellers](https://we-travellers-3efa8cc2d788.herokuapp.com/)
   - Link to live API: [We Travellers API](https://we-travellers-api-125fa063dfcb.herokuapp.com/)
   - Link to Backend Repository: [we-travelleres-api](https://github.com/gayatrig19/we-travellers-api) 


To view the api in a nicer format install a JSON extension like [this one](https://chromewebstore.google.com/detail/jsonvue/chklaanhfefbnpoihckbnefhakgolnmc)

We Travellers website is developed as a Portfolio Project#5 (Advanced Front End / React) for the Code Institute's Full Stack Software Development Course.

![we_travellers_mockup_image](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717043415/we_travellers_mockup_image_q5hgg4.png)

## Table of Contents

- [We Travellers](#we-travellers)
  - [Table of Contents](#table-of-contents)
- [User Experience and Design](#user-experience-and-design)
  - [The Strategy Plane](#the-strategy-plane)
    - [Site Goals](#site-goals)
    - [Agile Planning](#agile-planning)
      - [Milestones](#milestones)
      - [User Stories](#user-stories)
  - [The Structure Plane](#the-structure-plane)
    - [Features](#features)
    - [Reusable Components](#reusable-components)
    - [Future Features](#future-features)
  - [The Skeleton Plane](#the-skeleton-plane)
    - [Wireframes](#wireframes)
    - [Database Design](#database-design)
  - [The Surface Plane](#the-skeleton-plane)
    - [Design/ Colour-Scheme/ Typography/ Images](#design-colour-scheme-typography-images)
  - [Technologies](#technologies)
    - [Tools and Technologies](#tools-and-technologies)
  - [Testing](#testing)
    - [Responsiveness](#responsiveness)
    - [Accessibility](#accessibility)
    - [Lighthouse](#lighthouse)
    - [Validator Testing](#validator-testing)
      - [HTML Validation](#html-validation)
      - [CSS Validation](#css-validation)
      - [JavaScript Validation](#javascript-validation)
    - [Manual Testing](#manual-testing)
      - [Functional Testing](#functional-testing)
        - [Links and Buttons](#links-and-buttons)
        - [Negative Testing](#negative-testing)
    - [Automated Testing](#automated-testing)
      - [Unit Testing](#unit-tests)
    - [Bugs](#bugs)
      - [console errors](#console-errors)
    - [Deployment](#deployment)
      - [Version Control](#version-control)
      - [Deploying in Heroku](#deploying-in-heroku)
      - [Cloning the Repository](#cloning-the-repository)
      - [Forking](#forking)
    - [Credits](#credits)
    - [Acknowledgements](#acknowledgements)


# User Experience and Design

## The Strategy Plane

### Site Goals

"We Travellers" is a social media content sharing platform designed to bring together a vibrant community of travelers who love to share their experiences and discover new destinations. At We Travellers, every journey is a story waiting to be told. Whether it is a weekend getaway, an epic cross-country road trip, or an exotic international expedition, the platform allows users to share their travel experience through captivating posts, stunning photos and travel stories.

- The aim of the website is to provide a simple, intuitive, visually appealing and user-friendly platform where users can post / share their travel moments, interact with each other by following, commenting, bookmarking and liking posts and comments. The website caters to a diverse audience, from young adults to older generations with an interest in exploring new places, sharing their travel stories or someone who wants an inspiration for their next travel destinations.
- The application aims to provide a sleek and intuitive user interface, ensuring easy accessibility and seamless navigation across all features. Moreover, it is designed to be responsive, adapting to various screen sizes and devices.
- The features are presented in a way that makes it easy for users to find what they're looking for.
- Users can have access to complete features of the website with more personalized content when registered(logged-in). Users can sign in / sign-up to the website by filling out a simple form containing username and password. With logged-in status, users can create(add), update, retrieve and delete the travel posts. 
- Registered users can also like the posts and comments made by other community members. They can bookmark the travel posts they are interested in the most and save it to visit later. To interact with like-minded travelers and get involved with the community, users can create, retrieve, update or delete comments on posts. The follow / unfollow features allows users to access the posts by the users they are interested in as a separate feed.
- Logged-in users can update their profiles for username, password, their bio and profile avatar. For a personlized user experience, users can view their username and profile avatar in navigation bar through all pages.
- The posts are accessible to all the users regardless of their logged-in status. Users can also search for travel stories using search / filter functionality. Users can filter posts by title, profile username, region and place to easily find what they are looking for, making their experience smooth and enjoyable.
- The website navigation provides easy access to all website sections, including personalized content for logged in users.

### Agile Planning 

I employed the Agile methodology and utilized a GitHub project board to organize and develop my user stories starting from the project planning stage and continuing until the final product was built. To enhance clarity and structure, a user story template is designed that precisely outlines each user story with an acceptance criteria to be fulfilled. Small features have been assigned to 7 milestones.

- All User Stories include:
  - Acceptance Criteria
  - Labels (MoSCoW Prioritization)

- Labels have been used to mark which features the project : 'must have', 'should have', 'could have' and 'nice to have'. The prioritization was done so that a MVP for the project is created in time I have and only focus on the 'should haves' or 'could haves' if the time allows.

- I have created two additional labels to indicate which stories required the backend work and which ones required the front-end work:    
    - **API-backend** - for backend api implementation
    - **React-frontend** - for frontend react app

- The user stories that have both labels is discussed in each README. Instead of creating separate 'developer stories' and 'user stories' for both API and React, I have incorporated both in a single workflow for more structured work with less chaos.

- Each User story was checked for the acceptance criteria have been met and closed.

- The detailed Project Board with all user stories can be found here. [PROJECT BOARD-link](https://github.com/gayatrig19/we-travellers-frontend/projects?query=is%3Aopen)

- **Issues Template**

![issue-template](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716596362/issue_template_cwh9pl.png)


- **Issues List**

![issues](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716596374/issues_list_nspeun.png)


- **Project Board**

![project-board](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716596350/github_project_board_mowwv7.png)


#### Milestones

- 1- Initial Project Setup:The first task in starting the project was to set it up. All the tasks from setting up github repository to installing django, setting up django app and related packages and libraries were included in this milestone. The acceptance criteria was refined for each of the setup to be completed for clarity and ease of understanding.

- 2- Navigation and Authentication: This milestone covers user authentication and authorization i.e. user sign-up, sign-in and signout so that user can explore complete features and functionality of the website.
- 3- Profiles: Allows users to Create, Retrieve and Edit (CRE) own details. Also allows other users to find out more about a user.
- 4- Posts: This milestone includes all the features enabling the CRUD functionality for the user. 
- 5- Comments: Includes all the features enabling the CRUD functionality for the user.
- 6.- Like and Bookmark Posts: Allows users to like / unlike and bookmark posts. Users can perform create, retrieve and delete (CRD) functionality on liked and bookmarked posts.
- 7- Documentation and Deployment: This milestone was needed so that I can document my project in-depth with all website features, testing, deployment information. Deployment section is included as it was absolutely necessary and important to have a live link of fully functional website with no errors so that everyone can have access to the application.


#### User Stories

Each Milestone covers the user stories for small features allowing me to prioritize the most important ones to least in project development.

- Milestone 1- Initial Project Setup
  - As a developer, I need to set up the we-travellers project with all the necessary components and configurations so that I can build the page - frontend UI/UX and functionality.
    - Initialize and setup a GitHub repository with a README file using CI Gitpod template.
    - Install necessary dependencies and packages.
    - Create app
    - Add Procfile
    - Deploy project to Heroku to test deployment is successful.
  - As a developer, I need to add favicon to the website so that users can locate pages easily when they have multiple tabs open.

- Milestone 2- Navigation and Authentication
  - As a user, I can navigate through pages quickly so that I can view content seamlessly without page refresh.
  - As a logged in user, I can stay logged in so that I can keep using the features until I log out myself.
  - As a User, I can see my logged in status, so that I know I need to log in or log out as needed.
  - As a user, I can see different authentication options within nav bar depending on my log in status so that I'm not confused with my current log in status
  - As a user, I can view a navbar from every page so that I can navigate easily between pages.
  - As a user, I can create a new account so that I can access all the features for signed up users.
  - As a user, I can sign in to the app so that I can access functionality for logged in users.

- Milestone 3- Profiles
  - As a user, I can view other users profiles so that I can see their posts and learn more about them.
  - As a user, I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them.
  - As a logged in user, I can edit my profile details so that I can keep it up to date.
  - As a logged in user (profile owner), I can update my username and password details so that I can change my display name and keep my profile safe.
  - As a user, I can see a list of the most followed profiles so that I can see which profiles are popular.
  - As a User, I can use a default profile image so that I don't have to upload my own.
  - As a logged in user I can follow other users so that I can see posts by specific users in my posts feed and stay updated with any new posts that they create.
  - As a logged in user I can unfollow other users so that I can remove posts by specific users from my posts feed.

- Milestone 4- Posts
  - As a user, I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them.
  - As a logged-in User, I can post an image so that I can share my travel experience with others.
  - As a User, I can click on a post to view the post details so that I can find out more information about the post.
  - As a User, I can search / filter for posts with keywords so that I can find the posts and user profiles I am curious about and learn more about them.
  - As a user, I can view the list of all the most recent posts so that I can browse through them and keep up to date with the newest content.
  - As a User, I can keep scrolling through the posts list on the site, that are loaded for me automatically so that I don't have to click on "next page" to view more.
  - As a logged-in post owner, I can edit my own posts so that I can make corrections or update my post after it was created.
  - As a logged-in post owner, I can delete my own posts so that I can remove the posts I don’t want to share anymore.
  - As a logged-in User, I can view the posts I liked so that I can find the posts that I enjoy the most.
  - As a logged-in user, I can view content filtered by users I follow so that I can keep up to date with what they are posting about.


- Milestone 5- Comments
  - As a logged in user, I can add comments to a post so that I can share my thoughts about the post and engage with the community.
  - As a user I can read comments on posts so that I can read what other users think about the posts.
  - As a logged-in owner of a comment I can edit my comment so that I can fix or update my existing comment.
  - As an owner of a comment I can delete my comment so that I can remove the comments I don't want to be posted anymore.
  - As a logged-in User, I can like other users' comments so that I can show my appreciation to their opinion.
  - As a User, I can keep scrolling through the comments on the site so that I don't have to click on "next page" to view more comments.

- Milestone 6- Like and Bookmark Posts
  - As a logged in user, I can like a users' posts so that I can show my appreciation for the posts and authors that interest me.
  - As a logged-in user, I can unlike a post so that I can remove a like if I don't feel to like the post anymore.
  - As a logged-in User, I can bookmark the posts so that I can save posts and revisit them later.
  - As a logged-in User, I can remove bookmark tags (labels) from the posts so that they are no longer displayed on the bookmarks page.

- Milestone 7- Documentation and Deployment
  - As a developer, I need to make sure the project is deployed to heroku so that everything works and looks as expected.
  - As a developer, I need to create readme.md file so that the project is documented in detail.


## The Structure Plane

### Features

All the features are implemented with user stories in mind.

#### Favicon

`As a developer, I need to add favicon to the website so that users can locate pages easily when they have multiple tabs open.`

![favicon_image](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716912140/favicon_icon_image_xb18fq.png)

- Favicon icon for the website is displayed within the tab so that the user is able to easily find the tab and navigate to the website if a number of sites are opened at the same time.

#### Navigation Menu

`As a User, I can see my logged in status, so that I know I need to log in or log out as needed.`

`As a user, I can see different authentication options within nav bar depending on my log in status so that I'm not confused with my current log in status`

`As a user, I can view a navbar from every page so that I can navigate easily between pages.`

- Navbar for large screens (unauthorised users):

![Navbar_large_screen_unauthorised_users](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716912973/navbar_large_screen_unauthorised_jn0hs2.png)

- Navbar for large screens (authorised users):

![Navbar_large_screen_authorised_users](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716912973/navbar_large_screen_authorised_pvutro.png)

- Navbar for small screens (unauthorised users):

![Navbar_small_screen_unauthorised_users](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716912974/navbar_small_screen_unauthorised_faou6j.png)

- Navbar for small screens (authorised users):

![Navbar_small_screen_unauthorised_users](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716912974/navbar_small_screen_authorised_cjouwd.png)


- Navigation bar is shown the same on all pages for consistent design and good UX. Responsive design allows for hamburger bar on smaller screens. When user is logged in - a user profile avatar and username is displayed. The displayed name and avatar for navbar is implemented to give a more personalized touch every time user visits the website.
- The aim of the feature is so that the user can easily navigate around the website pages. Username and the profile avatar shown is there for confirmation of logged in state for user on each page. Options the user can select differ based on whether the user is logged in or not. This is so that the nav bar isn't overcrowded and is simple and intuitive to use.
- The active link is marked for ease of accessibility so that the user knows the current page been visited.
- Following options are displayed to the users based on their logged-in status:
  - Home - for all users
  - Sign Up - for unauthorised users
  - Sign in - for unauthorised users
  - Sign out - for authorised users
  - Feed - for authorised users
  - Liked - for authorised users
  - Bookmarks - for authorised users
  - Profile Avatar and Username - for authorised users
  - Add Post - for authorised users

#### Sign in / Sign up / Sign out

- Each of the following pages are accessible through navigation menu for large and small screen 
  sizes.


`As a user, I can create a new account so that I can access all the features for signed up users.`

- Implementation of the sign up feature allows users to register to the application to explore the 
  complete functionality of the website.
- If user is already registered, a link to sign in is also provided in the form for better user 
  experience.

- Sign up feature design for large and small screens:

![sign_up_large_screen](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716914867/sign_up_large_screens_qqawi9.png)

![sign_up_small_screen](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716914866/sign_up_small_screens_by2sij.png)


`As a user, I can sign in to the app so that I can access functionality for logged in users.`

- Implementation of this feature allows user to sign in to explore complete website features for 
  authorised users
- If user is not registered or if enters incorrect page, link for sign up is provided in the form 
  for better UX.

- Sign in feature design for large and small screens:

![sign_in_large_screen](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716914866/sign_in_large_screens_kzja6a.png)

![sign_in_small_screen](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716914865/sign_in_small_screens_czs20g.png)


`As a logged in user, I can stay logged in so that I can keep using the features until I log out myself.`

![sign_out_feature_image](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716921852/sign_out_image_h1mpfs.png)

- These features allows user to register to explore the complete website and interact with users, posts, and the pages content
- The aim of this feature implementation is a user is able to perform CRUD functionality on their content and can access other features of the website as long as they decide to sign out. This provides a complete user control so that they can easily navigate through pages and have access to all without getting sign out automatically.
- On registration / sign in, user can create travel posts(with CRUD functionality), add comments to posts(with CRUD functionality), like / unlike the comments and posts made by other users, bookmark the user posts, follow and unfollow the user profiles, access their own content and profile(can perform CRUD functionality), thus exploring the complete website features tailored for them.


#### Home Page(Posts Page)

`As a user, I can view the list of all the most recent posts so that I can browse through them and keep up to date with the newest content.`

- The home page view is available to all the users regardless of their logged-in status on entering the website. They can view list of all travel posts with the most recent ones appearing at the top. The listing of the posts is in descending order based on the recent created date so that the newest content is available for users to keep them updated for the same.
- The home page view consists of the Post lists, a search bar and the popular profiles to follow as a side bar.
- Each post contains details for: image, title, content, place, region, created / updated date, the post owner name and avatar.
- The above details are followed by the like, comments and bookmark icons. 

`As a user, I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them.`

- User can view all the posts by a specific user irrespective of their logged-in status by clicking the profile avatar on individual posts or from the side bar for the popular profiles. The user is then taken to the profile of the clicked user where all the posts are listed in a list view with the most recent appearing at the top.


`As a User, I can keep scrolling through the posts list on the site, that are loaded for me automatically so that I don't have to click on "next page" to view more.`

- Infinite scroll has been implemented so that the user doesn't have to use page pagination which 
  makes the experience nice and smooth for a social media platform.

`As a user, I can navigate through pages quickly so that I can view content seamlessly without page refresh.`

- Routing is implemented to allow user to seamlessly navigate through content without having to wait for the page to refresh every time user clicks on something. This has been done throughout the entire website pages.


- Home Page View for unauthorised(all) users(large screens):

![home_page_view_unauthorised](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716928538/post_list_view_unauthorised_hdx256.png)

- Home Page View for authorised users(large screens):

![home_page_view_authorised](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716928536/post_list_view_authorised_rasd0c.png)


- Home Page View for all users(medium to small screens):

![home_page_view_small_screens](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716928539/post_list_view_small_screens_lm3bxi.png)

Each of the Home page features is described as follow:

#### Search Posts

`As a User, I can search / filter for posts with keywords so that I can find the posts and user profiles I am curious about and learn more about them.`

`As a logged-in user, I can view content filtered by users I follow so that I can keep up to date with what they are posting about.`

![search_bar_feature](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716974343/search_bar_feature_pncahd.png)

- The search bar feature is available for all users on the home page. Users can search posts by keywords, author(username) of a post, title, region and place. Reason to include all these fields is to allow user to find the travel posts easily and retrieve the results for what they are looking for. The search options is to make user experience as smooth and easy as possible so that they don't have scroll through the list of posts every time and can find the relevant posts they are looking for without wasting any time.
- The region and place is included in the search field given that the website aims for travelers and they can search for places and destinations to travel that they are interested in easily. This aligns with the website goals for users to have everything at one place for their travel plans and next travel destination.
- For authorised users, the search bar is available on liked, feed and bookmarks pages so that users can find the posts according to their requirements on the relevant pages.
- Logged-in users can search the content filtered by username so that they can view the most recent posts by the users they are following. This allows user to stay up to date  with the content of the user they have followed.

#### Posts

`As a User, I can click on a post to view the post details so that I can find out more information about the post.`

- Post Detail View for unauthorised and authorised Users:

![post_detail_view_unauthorised](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716975857/post_detail_view_unauthorised_cjtxq5.png) ![post_detail_view_authorised](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716975857/post_detail_view_authorised_sdttkq.png)


- The Post view is same for home page and post detail view page. The post detail view page includes additional information and functionality depending on whether the user is logged-in or not. This feature allows users to view posts in detail shared by others. The aim of this feature (home page) and this content (post) is so that the moment users enter the page, they know the aim of the page and the website itself, keeping anyone who just entered the page interested and encourage them to explore it more. With this feature, it saves user from navigating through another page for getting the post in detail, here it is done by just a single click on the post image(home page) linking to the detail view page, making a hassel free navigation experience for users.
- For unauthorised users, the post detail view page will be displayed with the like, comments and bookmark icons(if hovered on the icons a message with tool tip is displayed to login to perform action). Also if the post has received comments, they are displayed under the detail view 
- For logged in users all the options are active under the post detail view. The post detail view contains:
  - Author username and avatar
  - Image of the travel post
  - Title
  - Content
  - Place
  - Region
  - icon to bookmark post, like post with number of comments, likes and bookmarks the post has 
    received
  - comments section and icons to like comments

#### Like Posts

`As a logged in user, I can like a users' posts so that I can show my appreciation for the posts and authors that interest me.`

![like_post_option](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716979350/like_posts_option_dlqczj.png)

- The option to like posts with the number of likes count is available throughout all pages on the website. The like functionality is implemented as follows:
  - For unauthorised users: the like option will be displayed hollow and users will get an overlay text that says login to like the post.
  - For authorised users: the like option will be active (if user has not perviously liked the post a hollow icon will be displayed) and on clicking the icon, it will change to solid red colour with the number of likes count increased by 1.
  - For the owner of the posts, the like option will be displayed with an overlay text to say they can't like their own posts.

`As a logged-in User, I can view the posts I liked so that I can find the posts that I enjoy the most.`

- All the posts the user has liked will be displayed in a list view on Liked page. The Liked page is accessible to the logged-in users through nav bar. Within the liked page, the posts will be displayed with like option to be solid red colour. 


![liked_post_view](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716979443/liked_page_view_dx4cqi.png)


`As a logged-in user, I can unlike a post so that I can remove a like if I don't feel to like the post anymore.`

![unlike_post_option](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716979380/unlike_post_option_lwcuai.png)

- The option to unlike the posts(if previously liked) is available for logged-in users only. The icon will be displayed in a solid red colour. If user clicks the icon to unlike the post, it will return to hollow icon, with number of likes decreased by 1. The posts that are unliked by the user will be removed from their liked page.


#### Bookmark Posts

`As a logged-in User, I can bookmark the posts so that I can save posts and revisit them later.`

![bookmark_posts_option](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716980418/bookmark_post_option_xflgi3.png)

- The option to bookmark posts with the number of bookmarks count is available throughout all pages on the website. The bookmark functionality is implemented as follows:
  - For unauthorised users: the bookmark option will be displayed hollow and users will get an overlay text that says login to bookmark the post.
  - For authorised users: the bookmark option will be active (if user has not perviously bookmarked the post a hollow icon will be displayed) and on clicking the icon, it will change to solid colour with the number of bookmark count increased by 1.
  - For the owner of the posts, the bookmark option will be displayed with an overlay text to say they can't bookmark their own posts.

![bookmarks_page_view](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716980749/bookmarks_page_view_fcvqqu.png)

- All the posts the user has bookmarked will be displayed in a list view on Bookmarks page. The Bookmarks page is accessible to the logged-in users through nav bar. Within the bookmarked page, the posts will be displayed with bookmarked option to be in solid colour. 


`As a logged-in User, I can remove bookmark tags (labels) from the posts so that they are no longer displayed on the bookmarks page.`

![remove_bookmark_option](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716980670/remove_bookmark_option_gfytsp.png)

- The option to remove bookmarks(label) from the posts(if previously bookmarked) is available for logged-in users only. The icon will be displayed in a solid colour. If user clicks the icon to remove the bookmark label from the post, it will return to hollow icon, with number of bookmarks decreased by 1. The posts that are removed from bookmarks(unbookmarked) by the user will not be displayed on their bookmarks page any longer.

- Note that if logged-in user has previously liked or bookmarked a post, on hovering over the icons, a overlay text will be displayed that says, unlike a post(for liked ones) and remove post from bookmarks(for bookmarked post)

#### Add Post

`As a logged-in User, I can post an image so that I can share my travel experience with others.`

![add_post_option](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716981981/add_post_option_zu88fi.png)


- The add post icon for users to create a travel post is accessible through navigation bar. This feature is available for logged-in users only. Only clicking the add post icon, user is directed to the Post create form with all the fields displayed to fill up. 

![add_post_form](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716982122/add_post_form_oducyv.png)

- Following fields have been added to the form:
  - Title - required
  - image to upload - required
  - content - optional, this provides user flexibilty to share their travel experience without a   brief information, if user wants to just share their travel images with the community.
  - place - required
  - region - optional, as the default value is set to Europe(decided to keep it as default when searched for the most visited locations on google), users if decide to not select the region from the dropdown menu, the post will have Europe as it's region in the given field. Users can though change it by choosing one of the options as per their post requirements.

- This is the main feature of the website without which the website intent would not be fulfilled.
- The aim of the feature is to allow user to share their travel experience with the community.


#### Edit or Delete a Post

`As a logged-in post owner, I can edit my own posts so that I can make corrections or update my post after it was created.`

`As a logged-in post owner, I can delete my own posts so that I can remove the posts I don’t want to share anymore.`

![posts_edit_delete_page](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716998171/post_editdelete_page_icons_voxk0j.png)

- Post Edit and Delete Icons:

![edit_delete_posts_option](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716983600/edit_delete_option_posts_tk6iax.png)

- Post Edit Form:

![post_edit_form](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716987212/post_edit_form_nduiux.png)

- CRUD Functionality: This feature is available only if user is logged in and the post belongs to the logged in user, when clicked on three dots menu:
  - user will see and icon for edit and icon for delete, when hovered over the icons overlay text will be displayed that says Edit and Delete respectively.
  - if user clicks on edit icon - this will take them to the already pre-populated post form which looks same the post add form, here the fields are already filled with their previously created respective posts. User can change whatever they want and save the posts to keep the changes made.
  - if user clicks on the trash-bin icon, the post is deleted and user is taken back to the page they were. This feature allows user to remove their posts that they no longer wants to share or keep on their profile.

- Note that the cancel button on both add post form and edit form if clicked by the user, user will be directed(taken back) to the page they were on. This feature avoids the user from any confusion during the navigation between the pages on the website providing a seamless user experience the entire time.


#### Comments

##### Comments CRUD functionality

`As a logged in user, I can add comments to a post so that I can share my thoughts about the post and engage with the community.`

![add_comment_form](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716985286/add_comments_authorised_cfh569.png)

- The comments on posts are displayed on clicking the comments icon on each post displayed in a list view on the home page. User is directed to the post detail view were:
  - if user is authorised, a form to add comments to the post will be displayed. On adding the 
    comment, it will be displayed under the form along with other comments of present and the number of comments count on the post will be increased by 1. If there are no comments on the relevant posts a message is displayed - No comments yet..be the first to comment
  - if user is unauthorised, the comment form will not be displayed rather if comments are present 
    they will be displayed under the posts. If no comments are yet made on the posts, users are encouraged to login to leave a comment and be the first one to post it.
- This feature allows users to share their views about the post and show appreciation to the    post / post owner. The main aim of this feature is to enable user to engage with the communtiy and involve in the conversation with the other like-minded travelers.
- The comments like icon is provided for the user to like / unlike comments of other users and show interest in the conversation. The functionality is discussed below.


`As a user I can read comments on posts so that I can read what other users think about the posts.`

![comments_list_view](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716985332/comments_list_view_qyl06p.png)

- The comments list is displayed to all users regardless of their logged-in status. When the users clicks on the comments icon on the post (on home page), they are directed to the post detail page, where all the comments are displayed under the post.

- This feature allows users to read the comments on the given posts and know how the post has impacted other users and what are their opinions on the post content.


`As a User, I can keep scrolling through the comments on the site so that I don't have to click on "next page" to view more comments.`

- Infinite scroll has been implemented for the comments list so that the user doesn't have to use 
  page pagination(disturbing the flow of the content). This feature makes the experience nice and smooth for a social media platform and the users consuming the content on it.


`As a logged-in owner of a comment I can edit my comment so that I can fix or update my existing comment.`

`As an owner of a comment I can delete my comment so that I can remove the comments I don't want to be posted anymore.`


![comment_edit_delete_page](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716998089/comment_editdelete_page_epikuc.png)

- Comment Edit and Delete Icons:

![comment_edit_delete_option](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716987302/edit_delete_comment_ym0mez.png)

- Comment Edit Form:

![comment_edit_form](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716987325/comment_edit_form_qeladf.png)


This feature is available only if user is logged in and the comment belongs to the logged in user, when clicked on three dots menu:
  - user will see and icon for edit and icon for delete, when hovered over the icons overlay text will be displayed that says Edit and Delete respectively.
  - if user clicks on edit icon - this will display them the edit form within same page with already pre-populated comment content form which looks same as the comment add form, here the field is already filled with their previously created respective comment. User can change / update the comment content as they want and save the it to keep the changes made.
  - if user clicks on the trash-bin icon, the comment is deleted and user is taken back to the page they were. This feature allows user to remove their comments that they no longer wants to share or keep on other users posts.

- The comments CRUD functions within same page, which results in a better UX as users don't have to 
  navigate through pages to perform the actions, thus keeping users engaged with the content of the site.

`As a logged-in User, I can like other users' comments so that I can show my appreciation to their opinion.`

![comment_like_option](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716995882/comments_like_option_mhoigk.png)

- The feature to like comments is implemented so that users can show appreciation to the comment made on the post by other users. This feature enables users to engage with the community and show their interaction with the content. 

- The option to like the comments with the number of likes count is available on the post detail page for the comments made by user. The comment like functionality is implemented as follows:
  - For unauthorised users: the like option will be displayed hollow and users will get an overlay text that says login to like the comment.
  - For authorised users: the like option will be active (if user has not perviously liked the comment a hollow icon will be displayed) and on clicking the icon, it will change to solid red colour with the number of likes count increased by 1.
  - For the owner of the comment, the like option will be displayed with an overlay text to say they can't like their own comments.
  - Users can unlike the comment by going to the relevant comment and clicking the liked icon(solid red in colour) in front of the comment. The icon will turn hollow with the number of likes decreased by 1.


#### Profiles

`As a user, I can see a list of the most followed profiles so that I can see which profiles are popular.`

- The list of most popular profiles in the side bar of the page can be viewed through every page on the website and is accessible to all users. The profiles are displayed in descending order with the popular ones at the top. The list is updated depending on number of followers a user has.
- Clicking on the profile avatar can take user to the selected user profile. The popular profiles view is different for large screen and smaller screen sizes given images below.

- Popular profiles for small screens:

![popular_profiles_small_screens](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716997852/popular_profiles_small_screens_zvlyuz.png)


- Popular profiles for Unauthorised(left) and authorised Users(right)(large screens):

![popular_profiles_unauthorised](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716997677/popular_profiles_unauthorised_qvwwjm.png) ![popular_profiles_authorised](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716997776/popular_profiles_authorised_rsgo8m.png)


- If the user is logged-in, the popular profiles side bar is rendered with the follow / unfollow button besides each users avatar and username. This brings us to our next user story as follows:

`As a logged in user I can follow other users so that I can see posts by specific users in my posts feed and stay updated with any new posts that they create.`

`As a logged in user I can unfollow other users so that I can remove posts by specific users from my posts feed.`

- The follow and unfollow button are displayed besides the user profile avatar and username at two places: first is on the popular profiles side bar and the second one is on individual users profile page.
- These options are rendered for logged-in users only. Users can only follow other profiles and not their own. The option to follow / unfollow users own profile is not displayed for the same reason.
- Once the user has followed the other users' profile:
    - The users' following count is increased by 1(which is displayed on own profile)
    - The other users' profile(the one followed) follower count is increased by 1
    - The posts shared by the users being followed are displayed in the feed of the user who is following them

- If a user unfollows the other user profile, the posts shared by that user will no longer be displayed in the user feed.
- This feature is implemented to give users a more personalized website experience so that every time they visit the website, they can easily access all the recent posts by the users they are following in their feed without scrolling through the posts on home page to find out the ones that interests them the most, thereby staying up to date with the user content. 

- Users Feed page when they have a followed other users profiles:

![users_feed_page](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716999548/users_feed_page_ps1k1f.png)

`As a user, I can view other users profiles so that I can see their posts and learn more about them.`

`As a user, I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them.`


![user_profile_statistics](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717000585/user_profile_stat_jfnnsu.png)

- User Profile Page View:

![user_profile_page](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717000622/user_profile_page_xv018d.png)


- User can view other profiles by clicking on the profile avatar and username of the profiles to visit, they will be directed to the profile page of the user where they can view:
  - The users profile name, avatar, bio, the total number of posts made by user, the total number of users a user is following and the total number of followers for the user.
  - Users can view all the posts made by the user so far on their selected user profile page. The button to follow / unfollow is displayed on the user profile only if:
    - the user is not the owner of the profile and
    - the user is logged-in (authorised)

`As a User, I can use a default profile image so that I don't have to upload my own.`

![user_default_profile_image](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717001307/user_default_profile_image_a2nlni.png)

- A default profile image is modelled in backend database schema, so that on registration and sign in users can see a default profile image as a avatar for their profiles. User can choose to keep it or update the image for more personalized touch. The functionality to update profile imformation such as username, password, profile avatar and bio is implemented so that users can interact with their own profile information and perform CRUD operations on their own profile.

`As a logged in user, I can edit my profile details so that I can keep it up to date.`

![user_profile_edit_page](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717001489/user_information_editing_weul3i.png)

- Profile Edit Form for users(authorised):

![user_profile_edit_form](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717001528/user_bio_update_form_mmr0wo.png)

- Profile CRUD operations are only accessible if the user is logged-in and the owner of the profile.
- Users can navigate to their own profile if they want to update their profile information.
- Within the profile, on clicking the three dots user is given options to:
     - edit their profile
     - change username
     - change password

- Users can navigate to the relevant options on clicking the icons. If user clicks the edit icon, they are directed to profile edut form with pre-populated form fields (if user has added already). User can either update their bio and profile image or choose to cancel. They will be directed to their profile in both instances.

`As a logged in user (profile owner), I can update my username and password details so that I can change my display name and keep my profile safe.`

- Username Edit form for users(authorised): 

![username_edit_form](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717001561/user_username_update_form_zy2gyc.png)


- Password Edit form for users(authorised): 

![user_password_edit_form](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717001597/user_password_update_form_uhmcnv.png)


- Users can change their username by clicking on the card icon, the updated username (if changed) will be reflected on the user profile and relevant parts of the website where it exists.
- On clicking the key icon, user is directed to the password edit form, where user can enter password and confirm it. User is given warnings if any error occurs in submitting the form(for example, if passwords doesnt match, or if it is too short)


#### No results found

![noresults_found_image](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717006673/noresults_found_image_hx2irx.png)

- Users are displayed with the no results found message if:
    - the search query does not match the keywords(requirements), or the posts they are looking for are not present.
    - On the feed page, if they have not followed any user profile or the ones followed has not shared any posts
    - On bookmarks page, if they have no bookmarked posts
    - On liked page, if they have not liked any posts.
    - on User profile, if user hasn't posted anything yet.

- This feature allows to convey an appropriate message(feedback) to the users with the actions they are expected to do so that user is not left confused whilst navigating the website content.


#### Not Found Page

![notfound_page_image](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717006713/page_notfound_image_lb5shx.png)

- If user tries to enter the page which is not present or the page which is not available on the website(user going to incorrect address), they are given appropriate feedback with page not found message. This feature aims to provide a better UX for users action and the outcome for the same.

- Note: In both the above cases(not found and noresults page), user will still have a nav bar to navigate from the page. The aim of this is to improve user experience and not encourage users to leave the website.


#### Form Warnings

All the forms with more than one field have warning messages added into required fields so that it is easier for users to understand why or which fields cause error and stop from submitting

![form_warnings_signup](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717005926/form_warnings_signup_c7zved.png)

- Each and every form on the website is covered for the appropriate warnings to be displayed for 
users to understand the errors and the actions expected from them.

![form_warnings_add_post](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717006061/form_warnings_addpost_nyoc8i.png)

- All this features are incorporated with the aim of improving users' experience while exploring  
the website content.


### Reusable Components

Reusable components have been created to recycle the code and reduce code duplication.

``NavBar.js``

Reused throughout the entire page to provide consistent design allowing users to become familiar with navigating the pages and making it an easy and enjoyable experience.

``Asset.js``

The asset component is utilized throughout the site to display a loading spinner from react-bootstrap while content is being processed. The component is used on the following pages:

  - ProfilePage.js
  - PopularProfiles.js
  - PostCreateForm.js
  - PostPage.js
  - PostsPage.js


``Avatar.js``

This component has been reused to display profile images within any content(posts, comments, comments create form, popular profiles, profile and profile page) that has been added by the specific profile. This made it easy for other users to click on the profile avatar and check out who was the content from. The component has been helpful in making the user experience more personalized by displaying their own profile image.

![avatar_reusable_component](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717037199/avatar_reusable_component_ezvri9.png)


``EditDeleteDropdown.js``

![editdelete_dropdown_component](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717047386/editdelete_dropdown_component_imkmol.png)

This component has been reused in every single form that allowed users for Update and Delete functionality. The simple design allowed me to use it even within the small forms (comments for example). It didn't overcrowd the page despite being used in so many places. The component is accessed for editing or deleting posts and comments, and for updating user profiles.

### Future Features

- Allow users to upload multiple images in a single post.
- Enable discussion forums for users to ask questions, share tips, and discuss travel plans.
- Add map feature to allow users to pin-point famous travel spots.
- Use maps and geo-location APIs to connect users with local guides during their travel.
- Implement Event Notifications - Notify users of local events, festivals, and activities 
  happening at their destination.


## The Skeleton Plane

### Wireframes

#### Sign In Page

This wireframe is for desktop(large screens). The mobile wireframe would have looked the same with the exception of not having the image and only form to sign in is displayed with a hamburger menu expanded for Home, Sign in and Sign out

![sign_in_page_wireframe](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717015342/sign_in_wireframe_ny3zus.png)


#### Sign Up Page

This wireframe is for desktop(large screens). The mobile wireframe would have looked the same with the exception of not having the image and only form to sign up is displayed with a hamburger menu expanded for Home, Sign in and Sign out

![sign_out_page_wireframe](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717015344/sign_up_wireframe_hy2wgp.png)


#### Home Page (Post List View):

The home page (Post List View) design structure is same for Feed, Liked and Bookmarks page. The difference is showed using tooltip. As the Feed, Liked and Bookmarks page are only available for logged-in users, I will not be making separate wireframes for them, as the design structure is same as that of home page for logged in(desktop view).

  - Desktop - when user is logged in:

![home_page_authorised_users_wireframe](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717015596/home_page_wireframe_authorised_hym2oa.png)


  - Desktop - when user is not logged in:

![home_page_unauthorised_users_wireframe](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717015597/home_page_wireframe_unauthorised_rmtoza.png)


  - Mobile - for all users:

The difference for authorised and unauthorised users is shown using tooltip. The design remains same in both cases.

![home_page_mobile_wireframe](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717016071/home_page_wireframe_mobile_nfp6mx.png)


#### Post Detail Page

- Post Detail View when user is logged in(desktop):

![post_detail_page_authorised_wireframe](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717016479/post_detail_page_authorised_f6tq51.png)


- Post Detail View when user is not logged in(desktop):

![post_detail_page_unauthorised_wireframe](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717016480/post_detail_page_unauthorised_zfw4d8.png)


- Post Detail View(Mobile):
The difference for authorised and unauthorised users is shown using tooltip in the required places.

![post_detail_page_mobile_wireframe](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717016484/post_detailview_wireframe_mobile_kllkqv.png)


#### Add Post and Edit Post Pages:

The design for add post and edit post remains same. The difference is shown wherever it is required. The mobile wireframes would have been same with the exception that the upload image icon is stacked on the form on smaller screens.

![add_post_page_wireframe](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717016945/add_post_wireframe_smtxnu.png)


#### Profile Page

- Desktop View when user is logged in:

  - Note: Here follow button is displayed on the profile page (at the place of three dots) if the user is not the owner of the profile. The design structure for mobile is responsive with the bootstrap styles applied to it. 

![profile_page_authorised_wireframe](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717017261/user_profile_wireframe_authorised_wbbpra.png)


- Desktop View when user is not logged in:

![profile_page_unauthorised_wireframe](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717017263/user_profile_wireframe_unauthorised_ltmf51.png)


### Database Design

- For detailed database model design please visit this link: [BACK-END REPO](https://github.com/gayatrig19/we-travellers-api)


## The Surface Plane

### Design/ Colour-Scheme/ Typography/ Images

#### Design and Colour-Scheme

- The website uses clean, simple design with a mix of cool and earthy colour tones and images that showcases the primary goal of the website. The aim here was to keep the site clutter-free so that user can have a smooth straight-forward navigation experience throughout without any chaos and confusion. 
- The website colour was selected to be light on users, so that users are not distracted by the background and are engaged with the website content. The use of such design also aims to align with the essence of the website and the site goals.


#### Typography

- [DM Sans](https://fonts.google.com/specimen/DM+Sans) a google font, is used throughout the website.
- With website consideration it was best suited as it gives a modern and versatile look to the content throughout on all pages. 
- The accessibilty and user experience, both are achieved with this as the font is easy to read, clear on all screen sizes and for all font sizes making it good choice to use for a social media platform.

#### Images

- The images in this project are sourced from [Pexels](https://www.pexels.com/), [Unsplash](https://unsplash.com/) and [Pixabay](https://pixabay.com/). 
- They were specifically selected to correlate with the main purpose of the website and to give    user a imagery representation for the travel content to increase impact of the design.
- The website logo is designed using [canva](https://www.canva.com/)


## Technologies

### Tools and Technologies

- Node - package manager used to install dependencies
- React - a JavaScript library used for building websites' UI.
- Bootstrap React - CSS framework used for responsive design
- Gitpod - used to develop the website
- [GitHub](https://github.com/) to host the source code. 
- Git to provide the version control to commit and push code to the repository.
- HTML - used to create main static content of the website
- CSS- used for website styling
- JavaScript- used to create dynamic content and make page interactive
- Heroku - to deploy the app
- [Google Fonts](https://fonts.google.com/) for typography.
- [FontAwesome](https://fontawesome.com/v5/search) v5.15.4 for website icons.
- [Favicon.io](https://favicon.io/) to create the website favicon.
- [Canva](https://www.canva.com/) user to create the website logo.
- [Cloudconvert](https://cloudconvert.com/jpg-to-webp) to convert .jpg images into .webp to reduce 
  the storage and enhance the website performance.    
- [TinyJPG](https://tinyjpg.com/) to optimise images for website.
- Balsamiq to design the wireframes for the website.
- Google Chrome's Lighthouse to test accessibility for desktop and mobile devices.
- [W3C HTML Markup Validator](https://validator.w3.org/) to validate the HTML Code.
- [W3C Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/) to validate the CSS Code.
- ESLINT - pre-installed tool in CI gitpod template used to check java script code meets standards 
   and has no errors.
- [SmartDraw](https://www.smartdraw.com/) used to generate the ER Diagram
- [Am I Responsive](http://amiresponsive.blogspot.com/) to create the Mockup image in this README.
- Code Institute's Gitpod Template to generate the workspace for the project.


## Testing

### Responsiveness

- The site is designed to be flexible, fluid and responsive on all screen sizes. Website has been 
  checked for responsiveness through Chrome Development tools. In order to do this, the following steps have been taken:
  1. Open the browser.
  2. Navigate to the We Travellers website <https://we-travellers-3efa8cc2d788.herokuapp.com/>
  3. Right click anywhere on the page and got to "Inspect" to open Development Tools.
  4. Click on drop down menu: "Dimensions: Responsive" and choose "Responsive".
  5. Drag the side of the screen and change screen size, making sure the website looks good from 320px and up. Here, ensure there is consistency in design of the website on every screen size from small(mobile devices) to larger(desktop devices) and no scorll bar is showing for layout of site.

- Expected Result: Each page is responsive and user friendly when viewing the website on small and 
  large screens. The pages have no design or accessibility issue in any of the screen sizes from 320px and up.
- Actual Result: Website is responsive with no scroll bar showing, the content is accessible to  
  user to read and the images are not appearing stretched. Website is user friendly on small to large screen sizes.

- The following devices are used to check responsiveness:
     - Iphone 12 Pro
     - Samsung Galaxy S20 Ultra
     - iPad Mini
     - Surface Pro 7
- The website was also tested further by sharing the live link with friends and family. The site  
  was tested on following devices:
     - Samsung S20 FE 5G
     - Iphone 12 
     - iPad Air
     - Samsung S24 Ultra
     - Microsoft Surface
     - Asus X5 50
     - Lenovo Pad Pro 12.7

- The following browsers have been used to check responsiveness. Testing for different browsers was 
  carried on manually.
     - Chrome
     - Safari
     - Microsoft Edge
     - Firefox
     - Internet Explorer

I was not able to use the app on Iphone and also on Safari browser(on all devices). It registers the new user account however it won't allow to sign in, I have found that everyone submitting the project has the same issue and this can not be fixed. [Sean explains it here](https://code-institute-room.slack.com/archives/C02MTH5MBDG/p1659719243446449?thread_ts=1659705919.570999&cid=C02MTH5MBDG)


### Accessibility

- Each page is checked with the help of WAVE Accessibility tool (<https://wave.webaim.org/>)
- Each page passes accessibility test with no error for:
  - contrast
  - aria- labels for users who use screen-readers.
  - alternative text as a function for screen readers or in events if the images don't load.
  - structural elements: for users of assistive technology as well as visual and semantic meaning.
  - language of the document for screen readers.
  - alerts coming up 'Reduntant link-Adjacent links go to the same URL', however as it doesn't come 
    up as an error, I have left it in. The warnings are mainly for signup, signin. Also for the comments link on post list view which takes user to comments section in post detail view and two links to home page from 'home' link and logo.
  - The errors for form labels are not resolved and left for later due to time constraint, will be addressed in future enhancements.

- Accessibility test result for [website](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716938607/wave_accessibility_testing_vo9lfh.png)


### Lighthouse

#### Home Page (desktop and mobile):

![home_page_lighthouse_desktop](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717040776/home_page_desktop_lighthouse_sev7oh.png)


![home_page_lighthouse_mobile](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717040778/homepage_mobile_lighthouse_hoqzoj.png)


#### Posts Detail View (desktop and mobile):

![postdetail_page_lighthouse_desktop](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717040843/post_detail_desktop_lighthouse_rxyvbh.png)


![postdetail_page_lighthouse_mobile](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717040844/post_detail_mobile_lighthouse_afsvxm.png)


#### Sign In Page (desktop and mobile):

![sign_in_page_lighthouse_desktop](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717040928/sign_in_desktop_lighthouse_z0c473.png)


![sign_in_page_lighthouse_mobile](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717040937/signin_mobile_lighthouse_wtdg7j.png)


#### Sign Up Page (desktop and mobile):

![sign_up_page_lighthouse_desktop](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717040931/sign_up_desktop_lighthouse_ouszwf.png)


![sign_up_page_lighthouse_mobile](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717040934/sign_up_mobile_lighthouse_mzajp6.png)


#### Profile Page (desktop and mobile):

![profile_page_lighthouse_desktop](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717041498/profilepage_lighthouse_desktop_nwhoav.png)


![profile_page_lighthouse_mobile](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717041500/profilepage_lighthouse_mobile_ts9wxl.png)


The performance is lower due to the fact that the page is heavy on images, fixes can be applied in the future as time won't allow me for it now. The accessibilty score is low for the profile page due to issue explained [here](#bugs)


### Validator Testing

#### HTML Validation

I have not validated the code for HTML validation, as it is validated with the elint alongside JavaScript while using React for front-end. 

In order to check HTML code in dynamic website using the [W3C VALIDATOR](https://validator.w3.org/):

- go to the live page
- click right and select 'Inspect' then click right and select 'View page source'
- code will open in new tab - copy the code
- paste the code in the validator as 'direct input'


#### CSS Validation

Each of the CSS files are checked for errors and validated with success results.

No errors were found when passing through the official Jigsaw W3 Validator

![css_validation_result](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716938595/css_validation_image_pm2kxy.png)


#### JavaScript Validation

During development, ESLint was integrated into the gitpod IDE. This integration enables real-time analysis of the code as it's written, providing immediate feedback on potential issues. ESLint rules are applied to the code, and if violations or possible errors are detected, warnings or errors are displayed directly in the terminal.

For example, when working on a component, ESLint might show warnings like this:

![eslint_compiled_errors](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717035487/eslint_compiled_warnings_yoybik.png)

Throughout the development of We Travellers, ESLint has been instrumental in identifying and resolving problematic code patterns. The codebase has been kept clean and adheres to the recommended JavaScript best practices. On successful compilation, the code is executed through running the development server with no errors and warnings.

When running ``npx eslint`` in the terminal, the linting check is performed on the entire codebase, including files that may not be currently open or actively being edited. This enables the detection of linting errors that may not have been captured by the "regular" ESLint setup during development.

Along with Eslint, Prettier is also used to check the codebase and keep the files free of error during development. Code is successfully passed through Eslint with no errors.

![eslint_testing_results](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717035488/eslint_testing_output_tljt9j.png)


### Manual Testing

#### Functional Testing

|  Testing   |   Action   |    Expected    |  Actual  |
|-------------|-------------|----------------|----------|
| Post list view returns all posts(any auth state) | Go to <https://we-travellers-3efa8cc2d788.herokuapp.com/> | all posts display in descending order based on created and updated date | as expected |
| Post List View Infinite Scroll | Scroll through posts list | User doesn't need to use page pagination, user can keep scrolling infinitely through list view even if more than 20 posts available | as expected |
| Search Bar returns posts by keywords (any auth state) | Navigate to home page, feed, liked, or bookmarks link within nav bar, type a keyword to search | posts with the keyword either in title, username, place or region is returned | as expected |
| Post Details returned correctly when clicked on post from list view (any auth state) | Click on the image of post in list view | User taken to correct post detail view. All details rendered for correct advert | as expected |
| Add Post - logged in users | Click on 'Add Post' link from navbar, enter all the required fields, click submit | User taken to detail view with all correct post details | as expected |
| Edit Post - logged in users | Select three dots drop down menu from post detail view, select edit icon | User taken back to post form with all details already pre-populated, correct details shown, user changes any field and submits a form. user gets redirected back to advert detail view, all correct updated details show | as expected |
| Delete Post - logged in users | Select three dots drop down menu from post detail view, select delete icon | Post is deleted and user gets redirected back to last page they were on | as expected|
|Bookmark post option - other users posts- signed out | Hover over then Click on bookmark to save any posts | User can see an overlay message to log in to bookmark posts, when clicked - no action performed | as expected |
|Bookmark post option - own post- logged in |	Hover over then click the icon |	User can see a message that they can't bookmark their posts as they can see own posts within profile, when clicked nothing happens	| as expected |
|Bookmark post option - other users post- signed in |	Sign in and click on bookmarks icon to bookmark someone else's post | Icon now shows as solid with count increased by 1 , post shows within list view when clicked on 'Bookmarks' link from nav bar |	as expected |
|Bookmarks link from NavBar - logged in | Sign in, click on 'Bookmarks'  from navbar |	User can see posts they have bookmarked, no unbookmarked posts shows within the list |	as expected |
|Most Followed Profiles - any auth state |	Check the profile list with avatar and username displayed |	User checks each user profile from sidebar, profiles most followed show at the top |	as expected |
|Like post option - other users posts - signed out | Hover over then Click on like icon to like any posts | User can see an overlay message to log in to like the posts, when clicked - no action performed | as expected |
|Like post option - own post- logged in |	Hover over then click the icon |	User can see a message that they can't like their own posts when clicked nothing happens	| as expected |
|Like post option - other users post - signed in |	Sign in and click on like icon to like someone else's post | Icon now shows as solid red with count increased by 1 , item shows within list view when clicked on 'Liked' link from nav bar |	as expected |
|Liked link from NavBar - logged in | Sign in, click on 'Liked'  from navbar |	User can see posts they have liked, no unliked posts shows within the list |	as expected |
| Profile avatar from Post View or Most Followed profiles side bar - any auth state |	Click on profile avatar from post view or side bar |	User directed to profile page view, user can see correct profile details: Username, bio if available, posts number, number of followers, number of following and user posts list if available |	as expected |
| Profile avatar with username link from nav bar-logged in |	Click on the profile avatar with username link |	User directed to profile page view, user can see correct profile details |	as expected |
| Sign out - logged in | Click on sign out link from nav bar |	User logged in, redirected to home page, links to sign in and sign-up now available within nav bar. Profile avatar with username, feed, liked and bookmarks link no longer within nav bar |	as expected |
|Sign in - logged out |	Click on Sign in link from nav bar, click on Sign in link from Sign up page |	User directed to sign in page, user enters correct username and password, user is directed to last page they were on |	as expected |
| Sign up - logged out |	Click on sign up link from nav bar, click on sign up link from sign in page |	User enters username and password twice to confirm, user gets directed to sign in page |	as expected |
| Logo and Home link from nav bar - any auth state|	Click on logo | User directed to home page |	as expected |
| Comments option - any auth state | Click on comments icon from post lists view | User is directed to the post detail view with comments displayed under posts | as expected |
| Comments Form - Add Comments - logged in | Add comment in the form under post detail view and click post | User can see the comment within the list view at the top | as expected |
| Comments List view - any auth | Click on comments icons in post list view if not there yet | User can see comment list view with most recent comments at the top | as expected |
| Comments Edit Form - logged in - own comment | Select three dots drop down menu within the comment, select edit icon | User can see comment within the edit form, user updates the comment and save it. User can see the edited comment within the list now | as expected |
| Comment delete - logged in - own comment |  Select three dots drop down menu within the comment, select delete icon | Comment deleted and no longer displays within the comment list | as expected |
| Like comment option - other users comments - signed out | Hover over then Click on like icon to like any comment | User can see an overlay message to log in to like the comments, when clicked - no action performed | as expected |
|Like comment option - own comment - logged in |	Hover over then click the icon |	User can see a message that they can't like their own comments when clicked nothing happens	| as expected |
|Like comment option - other users comments - signed in |	Sign in and click on like icon to like someone else's comments | Icon now shows as solid red with count increased by 1 |	as expected |
|Comments Infinite Scroll - any auth state | Scroll through Comments list | User doesn't need to use pagination even if more than 20 comments available withing the list | as expected |
| Follow option from most followed profiles or other user profile page view - signed in |	Sign in and click on follow button to follow other users profiles | Follow button now shows as unfollow with count increased by 1 for followers and following for both users, post shows within list view when clicked on 'Feed' link from nav bar | as expected |
| Profile edit - own profile - logged in |	User clicks on three dots dropdown menu |	User can see options to edit profile, change username, change password | as expected |
| Edit Profile - logged in profile owner |	Click on edit profile option |	User taken to profile edit form, image and bio prepopulated with existing details, on submit user gets directed to previous page |	as expected |
| Change Username - logged in profile owner |	Click on change username option |	User taken to username edit form, username form prepopulated with existing data, on submit user gets directed to previous page |	as expected |
| Change password - logged in profile owner |	Click on change password option |	User taken to password change form, user enters valid password and confirms password again, on submit user gets directed to previous page |	as expected |
| User Profiles own posts - any auth state |	Click on profile owners avatar from any tab or page |	User can see list of posts that belong to that profile, posts are listed with most recently added/updated at the top |	as expected |
| Most Followed Profiles list side bar - any auth state |	User selects any of the profiles from the most followed profiles side bar |	User directed to that profile page, user can see correct profile details | as expected |
|Page Not Found - any auth state |	Enter incorrect URL |	User receives an error page with 'page not found' message | as expected |
|NO RESULTS - any auth state |	search for keyword that doesn't exist across the posts |	User receives no results message page	| as expected |


#### Links and Buttons

|  Testing   |   Action   |    Expected    |  Actual  |
|-------------|-------------|----------------|----------|
|'Home' link from navbar - any auth state | click on home link from any page |	user directed to home page | as expected |
|'Feed' link from navbar - logged in |	click on feed link from any page |	user directed to 'feed' page with posts list of followed profiles |	as expected |
|'Liked' link from navbar - logged in |	click on liked link from any page |	user directed to 'liked' page with liked posts list |	as expected |
|'Bookmarks' link from navbar - logged in |	click on bookmarks link from any page |	user directed to 'bookmarks' page with bookmarked / saved posts list |	as expected |
|'Add Post' link from navbar - logged in | click on add post link from any page |	user directed to add post form | as expected |
|'profile avatar with username' link from navbar - logged in |	click on profile avatar with username link from any page | user directed to own profile page |	as expected |
| 'Sign in' link from nav bar - unauthorised |	click on sign in link from any page |	user directed to sign in page |	as expected |
|'Sign up' link from navbar - unauthorised | click on sign up link from any page | user directed to sign up page |	as expected |
|'Sign out' link from navbar - logged in |	click on sign out link from any page |	user signed out |	as expected |
| Logo from navbar - any auth state | click on logo from any page |	user directed to home page |	as expected |
| Profile avatar or username from post container - any auth state |	click on profile avatar from any page |	user directed to related profile |	as expected |
| Profile avatar from Most followed Profiles sidebar - any auth state |	click on profile avatar from sidebar |	user directed to related profile |	as expected |
|'Comments icon' from post container - any auth state |	click on comments icon |	user directed to correct post detail  page with list of comments displayed |	as expected |
|'Comments icon' from post container - logged in |	click on comments icon |	user now have access to comment form |	as expected |


#### Negative Testing

|  Testing   |   Action   |    Expected    |  Actual  |
|-------------|-------------|----------------|----------|
|Add Post - logged in |	Click on 'Add Post' link from nav bar, enter all the required form fields apart from image , click create |	User receives a warning message indicating which field needs attention. User needs to correct the error before they can successfully submit the form |	as expected |
|Edit Post - logged in | Select three dots drop down menu from post detail view, select edit icon |	User taken back to post form with all details already pre-populated, correct details shown, user removes place details and leaves the field blank, user submits the form, user can see a warning next to the field that requiers attention, user won't be able to successfuly submit the form until they correct the error |	as expected |
|Change Username - logged in profile owner | Click on change username option, select username that already exists |	User receives a warning message against the form filled to say that the username already exists. User won't be able to submit this form until corrected |	as expected |
| Change password - logged in profile owner |	Click on change password option, input password 1 and password 2 that doesn't match password 1 | User  receives a warning to say the fields don't match. User won't be able to submit the form until corrected |	as expected |


### Automated Testing

#### Unit Testing

Automated Testing is carried out only for the navbar component. For the tests I have referred the CI Moments Walkthrough. 
  - used the msw library to mock user and logout endpoints
  - tested the NavBar component:
    - renders without a problem
    - renders the link to a user profile for a logged in user
    - renders the sign in and sign up buttons again on logout

- Link to test files can be found here: [NavBar](https://github.com/gayatrig19/we-travellers-frontend/blob/main/src/components/__tests__/NavBar.test.js)

- Unit tests outcome when run ``npm test``:

![automated_testing_result_navbar](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716940527/navbar_links_tests_on1csz.png)


## Bugs

- Safari issue as explained [here](#accessibility)

- While performing WAVE accessibilty testing, no contrasts errors were detected. But the errors for missing form label, and alt attribute for avatar and post image is raised for profile page. This is because a default alt attribute is hardcoded rather that using the avatar or post image title itself. This has impacted the lighthouse accessibility tests for profile page. I have not addressed the issue due to time constraint. As everything is working as expected, it will addressed in future enhancements.


### Console errors

- When unauthorised, there is some console errors which have also been present in walkthrough. While following along the walkthrough videos, it is noted that these errors are to be viewed as a feedback from API. Errors such as 401 while sign in /sign up are feedback errors from API. I have not addressed them taking into account the response and left it unchanged. The functionality and working of the website is not affected by these errors.

![console_errors_image](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717038919/console_errors_image_bagivm.png)


**Note -** The commented out console.logs in catch blocks are kept in the code as it was advised in the moments walkthrough. Other than that there is no commented code present in the project.


## Deployment

### Version Control

- The front-end website is developed using CI gitpod template.
- Code has been pushed to repository on Github with following git commands:

    - ``git add`` . - to add files ready to commit
    - ``git commit -m "message"`` - to commit the code to local repository ready to be pushed
    - ``git push`` - final command used to push committed code to remote repo on Github


### Deploying in Heroku

- The project has been deployed on Heroku as follows:
  - Use: ``pip freeze > requirements.txt`` to add external libraries to the deployed app.
  - Create Heroku account
  - In the top right, click 'New'
  - Click 'Create new app'
  - Give your app a name and select your region from drop down
  - Click 'Create new app'
  - Scroll down to 'Buildpacks' section
  - Click 'Add buildpack'
  - Add Python as first dependency and select 'Save changes'
  - Add node.js as a second dependency and save again (This is settings section done)
  - Select 'Deploy' tab at the top
  - Select ' Github' from 'Deployment method'
  - type the name of how you called project in Github and click 'search'
  - Scroll down and select manual deployment method
  - You can also use Auto deployment method to allow the project to update every time you push the 
    code.
  - You can now click to view the app ready and running
- For this project I used Manual deployment method to deploy the current state of the branch, every time I pushed the code from Gitpod.

- Once you have the deployment of front end-done you can connect it to API:
  - Go to your drf api in Heroku
  - Add Config Vars within settings section: 
    - 'CLIENT_ORIGIN_DEV' as key with a value of: link to your local host (front-end) no quote  
      marks no forward slash at the end.
    - 'CLIENT_ORIGIN' as key and value of: URL to your deployed front end repo from heroku
    - In front end workspace install ``npm install axios``
    - Create a folder 'API' --> AND FILE : 'axiosDefaults'
    - At the top of the file import axios and define your baseURL which is the URL of your backend
      deployed API project 
    - Set content-type header to multi-part/form-data as the API will need to deal with images as 
      well as text in it's requests.
    - To avoid any CORS issues, set withCredentials to True.
    - Import this file into App.js to be used across all pages


### Cloning the Repository

1. On Github navigate to the repository
2. Click "Code" drop down menu - a green button shown right above the file list.
3. Copy the URL of the repository using "HTTPS", "SSH" or "Github CLI".
4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory.
6. Type "git clone", and then paste the URL copied earlier.
7. Press enter to create local clone. A clone of the repository will now be created.

For more details on how to clone the repository in order to create a copy for own use refer to the site: <https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository>


### Forking

1. On Github navigate to the repository.
2. Click "Fork" located towards top right corner on GitHub page.
3. Select "owner" for the forked repository from the dropdown menu under "owner".
4. It will create forked repo under the same name as original by default. But you can type a name in "Repository name" or add a description in "Description" box.
5. Click on "Create fork". A forked repo is created.

- Forking allows you to make any changes without affecting original project. You can send the the suggestions by submitting a pull request. Then the Project Owner can review the pull request before accepting the suggestions and merging them.
- When you have fork to a repository, you don't have access to files locally on your device, for getting access you will need to clone the forked repository.
- For more details on how to fork the repo, in order to for example suggest any changes to the project you can visit:<https://docs.github.com/en/get-started/quickstart/fork-a-repo>


## Credits

- Code Institues learning material for advanced front end which I have used as a base of this project.
- Code Institute's Advanced Front-end "Moments" walkthrough project served as inspiration and template. Code was customized and expanded for further functionality.
- [React documentation](https://react.dev/) was used throughout the project to understand the codebase and implementation.
- [React-Bootstrap documentation](https://react-bootstrap-v4.netlify.app/)
- All images used on the website are sourced from [Pexels](https://www.pexels.com/), [Pixabay](https://pixabay.com/) and [Unsplash.](https://unsplash.com/)
- Code Institute's Tutor - Sean, Thomas, Roman, Rebecca, for solving my doubts during this project development.

## Acknowledgements

- I would like to express my gratitude to my mentor, Luke Buchanan and Martina Terlevic for their unwavering guidance, encouragement, and invaluable suggestions throughout the project. 
- I am grateful to the Code Institute's Tutor support and slack community for solving all my doubts.



