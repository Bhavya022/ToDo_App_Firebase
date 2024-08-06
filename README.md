# ToDo_App

## ToDo App with Firebase Realtime Database

This is a simple ToDo application built using React and Firebase. The app allows users to perform CRUD (Create, Read, Update, Delete) operations on their tasks in real-time.

---

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Add new tasks:** Enter a task name and add it to your list.
- **View a list of tasks:** Tasks are displayed in real-time.
- **Update existing tasks:** Modify task names and save changes.
- **Delete tasks:** Remove tasks from the list.
- **Real-time synchronization:** Sync tasks with Firebase Realtime Database.

---

## Prerequisites

- **Node.js:** v14 or higher
- **Firebase account:** Set up a Firebase project.

---

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/todo-app.git
    cd todo-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up Firebase:**

    - Create a new project in the [Firebase Console](https://console.firebase.google.com/).
    - Enable Realtime Database in the Firebase project.
    - Obtain your Firebase configuration and replace the placeholder values in `src/components/firebase/firebase.js`:

    ```javascript
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
      databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_PROJECT_ID.appspot.com",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };
    ```

4. **Start the development server:**

    ```bash
    npm start
    ```

---

## Usage

- **Add a Task:** Enter a task name and click the "Add Task" button.
- **View Tasks:** Tasks will be listed below the input form.
- **Update a Task:** Click the "Edit" button next to a task, modify the task name, and save changes.
- **Delete a Task:** Click the "Delete" button next to a task to remove it from the list.

---

## API Routes

- **Add Task:** Adds a new task to the Firebase Realtime Database.
- **Get Tasks:** Retrieves the list of tasks from the Firebase Realtime Database.
- **Update Task:** Updates an existing task in the Firebase Realtime Database.
- **Delete Task:** Deletes a task from the Firebase Realtime Database.

---

## Contributing

We welcome contributions to the ToDo App! Please follow the steps below:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to modify this template as needed to better fit your project!
