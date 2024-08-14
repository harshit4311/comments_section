# HealthFlex Comment Section

This repository contains the **HealthFlex Comment Section** project, a React.js-based application developed as part of a frontend engineering assignment. The application provides a robust comment system with features such as replying, editing, and sorting comments by date and time.

## Project Overview

The main objective of this project is to create a fully functional comment section using React.js, adhering to specific design and functional requirements.

## Key Features

1. **Comment and Reply Validation:**
   - Validates the presence of both name and comment text before submission.

2. **Date and Time Tracking:**
   - Each comment and reply is saved with the current date and time.

3. **Sorting:**
   - Comments and replies are sortable by date and time, providing a clear chronological order.

4. **Edit Functionality:**
   - Users can edit comment text but cannot change the author’s name.

5. **Delete Functionality:**
   - A delete button is placed on the border of each comment or reply, as per the design.

6. **Data Persistence:**
   - Data is persisted using web storage, ensuring comments and replies are retained even after a page refresh.

7. **State Management:**
   - State management is handled using tools like Redux.js or Zustand for efficient data handling.

8. **Responsive Design:**
   - The application is designed to be responsive and works across different device sizes.

## Project Structure

comment-section/
├── public/ # Static files
├── src/ # Source files
│ ├── components/ # React components
│ ├── pages/ # Page components
│ ├── services/ # API services
│ └── App.js # Main application component
├── .gitignore # Git ignore file
├── package.json # Project dependencies and scripts
└── README.md # Project documentation



## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)

### Installation

1. **Clone the Repository:**

```
git clone https://github.com/harshit4311/HealthFlex-comment-section.git
```

2. **Navigate to the Project Directory:**
```
cd HealthFlex-comment-section/comment-section
```

3. **Install Dependencies:**
```
npm install
```

### Running the Application

To run the application locally:

1. **Start the Development Server:**
```
npm start
```

2. **Open your browser and navigate to:**
```
http://localhost:3000
```

### Deployment
The application can be deployed using Vercel or any other preferred hosting service. Ensure the root directory is configured correctly in the deployment settings.

### Live Application
[Deployed Link](https://comments-section-healthflex.netlify.app/)


### Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.



