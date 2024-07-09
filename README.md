**Chat_IT_OUT ->**
* It is a real-time chat application built using React for the front-end and Node.js with Socket.io for the back-end. This application allows users to join a chat room, send messages, and receive messages in real-time.

**Features**
* Real-time messaging
* User-friendly interface
* Join chat rooms with a unique username
* Responsive design


**Technologies Used:-**
* React
* Node.js
* Socket.io
* CSS

  
**Prerequisites ->**
* Node.js (version 14.x or higher)
* npm (version 6.x or higher)
* React (version 17.x or higher)

  
**Installation ->**
Clone the repository:
* git clone https://github.com/yourusername/Chat_IT_OUT.git

Navigate to the project directory:
* cd Chat_IT_OUT

Install server dependencies:
* cd server
* npm install

Start the client:
* cd ../client
* npm start


**Project Structure**

* server/: Contains the server-side code using Node.js and Socket.io.
* client/: Contains the client-side code using React.
* client/public/: Contains public assets like images and the HTML template.
* client/src/: Contains the React components and CSS files.

  
**React Components ->**
* Join: Component to handle user joining the chat room.
* Chat: Component to handle the chat functionality.
* Message: Component to display individual messages.

  
**Socket Events ->**
* connect: Triggered when a user connects to the chat.
* joined: Emitted when a user joins the chat room.
* welcome: Sent to the user when they join the chat room.
* userJoined: Broadcasted to all users when a new user joins the chat.
* leave: Broadcasted to all users when a user leaves the chat.
* sendMessage: Broadcasted to all users when a user sends a message.
