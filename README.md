# "searcher-git-hub"

The web application that is able to search through
GitHub users and their corresponding projects using
the GitHub API: https://docs.github.com/en/rest and the React.

The application contains 2 screens.

The first screen contains a search bar that can
search through any user on the GitHub website at the top
with a list of results underneath.
Each list item contains: the avatar image, the username.

Tapping on a user brings up a screen
that contains the profile details of that user.

The view contains their avatar image, username, number of followers,
number of following, biography, email, location, join date
and a list of public repositories with a search bar at the top.

Each item of the list view contains the name of the repository,
the number of stars, and the number of forks.

The search bar allows the user to search through the user’s repository.
Additionally, the search automatically updates upon each letter entered.

All results are cached such that when going back,
the results still be displayed on the previous screen.

#Demo https://mikromajor.github.io/searcher-git-hub/

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
