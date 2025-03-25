# Toonder App 

## Collaborators 
- Maia De Emmony
- Arya Ram

This was our third project on the course where we were put into a team of 3, and were given one week to complete a full stack app. The backend was built with Express and MongoDB and the frontend was using React. 

## Technologies 
- React.js
- Express
- MongoDB

## Process and Diagrams 

We all had the opportunity to contribute to the planning process, I was responsible for drawing out our wireframes, Maia did our Routing Table and Arya completed our ERD. 

- Toonder ERD 
<img width="1031" alt="ToonderERD" src="https://github.com/user-attachments/assets/10d92564-9050-4629-b68d-b9be7ef7b34c" />

- Toonder Routing Table 
<img width="1324" alt="ToonderRoutingTable" src="https://github.com/user-attachments/assets/c2eb7aed-f08a-4e52-86e4-e3ac8e976c7a" />

- Wireframes to help us visualize the app. 
![ToonderWireframe2](https://github.com/user-attachments/assets/a5e30040-4902-402b-a361-53ccc14d52c2)

## Code 

We decided to build our API together, we would take turns sharing our screens and writing the code as a group. This was a very rewarding experience as it meant we could discuss and work through code we found difficult. For the Frontend we split up the different components to speed up time, I was in charge of the Sign Up, Login, Navbar and Image Upload. 

### Snippets of our Backend Code 

- User Schema 
<img width="614" alt="Screenshot 2025-03-25 at 10 59 14" src="https://github.com/user-attachments/assets/8bec6e9c-1258-4c8c-943b-6d482a08c4c0" />

- Retrieving messages
<img width="700" alt="Screenshot 2025-03-25 at 10 59 56" src="https://github.com/user-attachments/assets/5fadc770-c69d-4921-8f58-e6ef69407640" />

- This code handles the retrieval of messages between two users in a matching-based messaging system. It first validates if both users have matched with each other by checking their profile's matches array. If they haven't matched, it returns a 403 Forbidden response with an appropriate message. If they have matched, it queries the database for messages where either user is the author and the other is the recipient, populates the author and recipient fields with user details, and returns the conversation history as a JSON response with a 200 status code. Error handling is implemented to pass any exceptions to the Express error middleware.

Front end 

- Sign up Component snippet 
  
<img width="623" alt="Screenshot 2025-03-25 at 11 03 31" src="https://github.com/user-attachments/assets/b6218fcf-128d-4678-92ef-25d3df449bf5" />

- This code renders a React signup form for Toonder with email and username fields. It includes validation with error messages that display conditionally when errors exist for each field. The form uses styled components with CSS modules and handles input changes and form submission through separate handler functions.

- Navbar Component snippet

<img width="557" alt="Screenshot 2025-03-25 at 11 05 20" src="https://github.com/user-attachments/assets/092035ce-8be5-4e38-844d-e4871c1ea790" />

- This code implements a navigation menu component for Toonder. It accesses the user context to determine authentication status, manages the menu's open/closed state, and provides a sign-out function that clears the token, resets user data, and redirects to the home page. The component renders a navigation bar with conditional links - the home link is always visible, while the "Match Now" option only appears when a user is logged in.

## Toonder App Screenshots

- Homepage 
<img width="1463" alt="Toonder_Home" src="https://github.com/user-attachments/assets/f8f6c267-6b0e-4139-af8f-fc2825c51843" />

- Log in 
<img width="1459" alt="Toonder_4" src="https://github.com/user-attachments/assets/68b3472e-d64c-4e8b-b7cc-89811a0c9c71" />

- Match Now 
<img width="1451" alt="Toonder_3" src="https://github.com/user-attachments/assets/984238af-62b0-4c5d-aaf1-df06c6cc3270" />

- Create Profile 
<img width="1463" alt="Toonder_2" src="https://github.com/user-attachments/assets/4a0f9672-0b83-4588-bbfa-b215a44e1132" />

## Challenges Faced

- Authentication Implementation: Creating a secure login and signup system with JWT tokens required careful handling of user credentials and session management.
- Conditional Navigation: Building a dynamic navbar that responds to authentication state meant ensuring proper context management and state updates.
- API Integration: Connecting our frontend React components with the Express backend required careful consideration of data flow, error handling, and asynchronous operations.

## Future Improvements 

- Real-time Messaging: Integrate WebSocket technology to enable instant messaging between matched profiles, improving user engagement and creating a more dynamic interaction experience.
- Enhanced Profile Customization: Implement additional character customization options, including more personality traits, background stories, and expanded visual customization to create more unique character profiles.
