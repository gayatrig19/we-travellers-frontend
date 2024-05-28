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
    - [Imports](#imports)
      - [Installed Packages](#installed-packages)
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
      - [Unit Testing](#unit-testing)
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








