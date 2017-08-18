# youdoc-frontend
[![CircleCI](https://circleci.com/gh/andela-fabolaji/youdoc-frontend.svg?style=svg)](https://circleci.com/gh/andela-fabolaji/youdoc-frontend)

[![CircleCI](https://circleci.com/gh/andela/learning-map-front.svg?style=svg)](https://circleci.com/gh/andela/learning-map-front)

# YOUDOC
Youdoc client side implementation.

## Getting Started
### Prerequisites
You need to install node on your machine to get started
[node.js installer](https://nodejs.org/en/download/). npm is installed as part of node.

### Installing
 * Clone the repository
  ``` $ git clone https://github.com/andela-fabolaji/youdoc-frontend.git```

 * Checkout your local repo:
   ```$ cd youdoc-frontend```

 * Install dependencies
  ``` $ yarn install```

 * Create an domain alias in your /etc/hosts file
  ```sudo vim /etc/hosts``` opens your /etc/hosts for editing using vim.
  To edit it, get into insert mode by pressing ```shift i``` key and put these
   ```127.0.0.1       youdoc``` after the last line.

 * Finally use this command to run your node server and start the project on you browser.
   ```$ yarn start```

## Running the tests
This is how you will run the tests for the system:
 ```$ yarn test```

## Built With
* [React](https://facebook.github.io/react/) - The Javascript library used
* [NodeJS](https://nodejs.org/en/)
* [SCSS](http://sass-lang.com/documentation/file.SCSS_FOR_SASS_USERS.html) - The CSS preprocessor used

## Contributions
Contributions should adhere to the guidelines in the:
- [Engineering Playbook](https://github.com/andela/engineering-playbook/wiki/Conventions)
- [Airbnb for React](https://github.com/airbnb/javascript/tree/master/react)
- [Airbnb for ES6 or  ES7](https://github.com/airbnb/javascript)