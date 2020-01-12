# Contributing to React Native Design System
Hey there! 🙋‍♂️ Thanks for contributing to React Native Design System

## Ways to contribute
* Reporting a bug
* Adding Storybook docs
* Adding components
* Suggesting UI enhancement

## How to contribute
React Native Design System follows Component Driver Development (CDD). StoryBook helps us develop components in isolation from your app, which also encourages better reusability and testability for your components. Here is what we are gonna do:

### Step 1. Setup environment
Documentation is in separate repo [rnds_docs](https://github.com/iamshadmirza/rnds_docs). You can clone the repo and start building.  
`react-native-design-system` is a submodule to the repo which enables us to push changes to storybook and design system separately.  
Setup instructions are available in the README of rnds_docs.

### Step 2. Contribute
* If you're adding a component then it goes into a new folder inside `src/` of `react-native-design-system`.  
* You just create a `.js` component file and a `stories.mdx` story file and write a basic component and a story.
* Now you can see the component on storybook and start building.
* If you're updating something then you can just browse to the component folder and its storybook then make changes.

## Step 3. Send a PR
Create a pull request when you're done making changes. One PR should contain only one feature or bug fix. A story and a component can come along in a single PR.
