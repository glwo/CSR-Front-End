# AMP CSR Portal - User Management System

The AMP CSR Portal is a web-based User Management System designed to efficiently manage and organize registered users for the AMP Customer Service Representatives. The application provides a user-friendly interface that allows CSR representatives to view, edit, and manage user accounts and subscriptions.

<a href="https://glwo.github.io/CSR-Front-End/" target="_blank">Deployed Live Site Link</a>

![AMPCSR](https://github.com/glwo/CSR-Front-End/assets/112520930/4ce70aff-734b-4128-8710-c10f51b06973)


## Key Features

- User Listing: The portal displays a list of registered users, showing their names, email addresses, and phone numbers.

- User Details: When clicking on a user's card, the portal expands to reveal more details about the user, including their subscriptions and purchase history.

- Edit Account: CSR representatives can edit user account information, such as name, email, and phone number, using a modal component.

- Manage Subscriptions: CSR representatives can manage user subscriptions, including adding or removing subscriptions, using a separate modal component.

- Search Functionality: The portal includes a search bar that allows CSR representatives to easily search and filter users by their names.

## Technology Stack

The AMP CSR Portal is built using the following technologies:

- Front-end:
  - React: A popular JavaScript library for building user interfaces.
  - Redux: A state management library to handle application state and data flow.
  - React-Redux: Official Redux bindings for React to connect the components with the Redux store.
  - CSS: Styling the components and user interface.

## Installation

1. Clone the repository from [GitHub](https://github.com/glwo/CSR-Front-End).

2. Navigate to the project directory.

3. Install the required dependencies using npm or yarn:

   ```bash
   npm install
   # or
   yarn install

## Start the Development Server

```bash
npm start
# or
yarn start
```
## Usage

Upon accessing the AMP CSR Portal, the CSR representatives will be presented with a list of registered users.

- To view more details about a specific user, click on their card, which will expand to reveal additional information, such as subscriptions and purchase history.
- To edit a user's account information, click the "Edit Account" button within the expanded card and make the necessary changes in the modal.
- To manage a user's subscriptions, click the "Manage Subscriptions" button within the expanded card, which opens a modal to add or remove subscriptions.
- Utilize the search bar to quickly find specific users by their names.
