# We Travellers

This README is for the React front-end of a full stack application - We Travellers.

   - Link to the live site:
   - Live API link goes here  
   - [Link to the Back-end repository](https://github.com/gayatrig19/we-travellers-api) 

To view the api in a nicer format install a JSON extension like [this one](https://chromewebstore.google.com/detail/jsonvue/chklaanhfefbnpoihckbnefhakgolnmc)

We Travellers website is developed as a Portfolio Project#5 (Advanced Front End / React) for the Code Institute's Full Stack Software Development Course.

### Website Mockup Image goes here

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
    - [Features Left to Implement](#features-left-to-implement)
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

![edit_delete_posts_option](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716983600/edit_delete_option_posts_tk6iax.png)


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


![comment_edit_delete_option](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716987302/edit_delete_comment_ym0mez.png)


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

- Popular profiles for small screens

![popular_profiles_small_screens](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716997852/popular_profiles_small_screens_zvlyuz.png)


- Popular profiles for Unauthorised(left) and authorised Users(right)(large screens)

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

![user_profile_edit_form](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717001528/user_bio_update_form_mmr0wo.png)

- Profile CRUD operations are only accessible if the user is logged-in and the owner of the profile.
- Users can navigate to their own profile if they want to update their profile information.
- Within the profile, on clicking the three dots user is given options to:
     - edit their profile
     - change username
     - change password

- Users can navigate to the relevant options on clicking the icons. If user clicks the edit icon, they are directed to profile edut form with pre-populated form fields (if user has added already). User can either update their bio and profile image or choose to cancel. They will be directed to their profile in both instances.

`As a logged in user (profile owner), I can update my username and password details so that I can change my display name and keep my profile safe.`


![username_edit_form](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717001561/user_username_update_form_zy2gyc.png)

![user_password_edit_form](https://res.cloudinary.com/dpzitpjjc/image/upload/v1717001597/user_password_update_form_uhmcnv.png)


- Users can change their username by clicking on the card icon, the updated username (if changed) will be reflected on the user profile and relevant parts of the website where it exists.
- On clicking the key icon, user is directed to the password edit form, where user can enter password and confirm it. User is given warnings if any error occurs in submitting the form(for example, if passwords doesnt match, or if it is too short)














### Reusable Components

### Features Left to Implement



## The Skeleton Plane

### Wireframes

### Database Design



## The Surface Plane

### Design/ Colour-Scheme/ Typography/ Images



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
  - The errors for form labels are not resolved and left for later due to time constraint.

- Accessibility test result for [website](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716938607/wave_accessibility_testing_vo9lfh.png)


### Lighthouse

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


### Manual Testing

#### Functional Testing

##### Links and Buttons

##### Negative Testing


### Automated Testing

#### Unit Testing

Automated Testing is carried out only for the navbar component. For the tests I have referred the CI Moments Walkthrough. 
  - used the msw library to mock user and logout endpoints
  - tested the NavBar component:
    - renders without a problem
    - renders the link to a user profile for a logged in user
    - renders the sign in and sign up buttons again on logout

- Link to test files can be found here: [NavBar](https://github.com/gayatrig19/we-travellers-frontend/tree/main/src/components/__tests__)

- Unit tests outcome when run ``npm test``:
![automated_testing_result_navbar](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716940527/navbar_links_tests_on1csz.png)


## Bugs

### Console errors


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

## Acknowledgements












