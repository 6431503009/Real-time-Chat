# สร้าง ระบบ chat Realtime เเบบเบื้องต้น

Task Week 6 : Back-End Dev for Dev Init
Authors
assignment by @BorntoDev
implementation by @Chuntawat

## Import Dependencies

- `express`: A web application framework for Node.js.
- `http`: A core Node.js module for creating HTTP servers.
- `socket.io`: A library for real-time communication.

## Set up Express and Socket.IO

- Create an Express application and an HTTP server.
- Create an instance of Socket.IO and attach it to the HTTP server.

## Serve Static Files

- Configure Express to serve static files from the `/public` folder.

## Serve HTML File

- Define a route to serve the `index.html` file when accessing the website's root.

## Socket.IO Connection

- This function runs when a new client connects.
- When a new connection is established, it logs a message to the console.

## New User Event

- When a client emits the `newuser` event, it logs the username and displays a message in the console.
- When a user disconnects, it logs a message to the console and notifies other users.

## Chat Message Event

- When a client emits the `chat message` event, it broadcasts the message to all users.

## Start Server (npm start)

- Start the server on port 5000 and log a message to the console.

# System Functionality

- When entering the home page, the system prompts the user to enter a username.
![image](https://github.com/6431503009/Real-time-Chat/assets/97873903/75ec7fb7-5285-4fde-9f02-cbabf48e0316)


- If the user does not enter a username, the system will display a message asking them to provide a username. Without a username, the user cannot proceed to the chat page.
![image](https://github.com/6431503009/Real-time-Chat/assets/97873903/be4935e0-2b59-46d8-b128-b1bec5db2fad)



- When the user sends a message in the chat, other users connected to the chat will be able to see the message.
![image](https://github.com/6431503009/Real-time-Chat/assets/97873903/847bdf2d-ac19-4d29-b2a8-a1f04a211667)

- Similarly, when other users send messages, the user will be able to see their messages in the chat.
![image](https://github.com/6431503009/Real-time-Chat/assets/97873903/c8ba5da5-bd2f-4eea-bc88-cafcdc084992)

