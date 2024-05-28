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

- Issues Template

![issue-template](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716596362/issue_template_cwh9pl.png)


- Issues List

![issues](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716596374/issues_list_nspeun.png)


- Project Board

![project-board](https://res.cloudinary.com/dpzitpjjc/image/upload/v1716596350/github_project_board_mowwv7.png)








