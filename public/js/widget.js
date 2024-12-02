const socket = io();
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const messageContainer = document.getElementById("messageContainer");
const typingIndicator = document.getElementById("typingIndicator");

// Use EJS to pass the server-side "name" variable to JavaScript
const chatWidget = document.querySelector('.chat-widget');
const username = chatWidget.dataset.name;

// Generate a random username for demo purposes
// const username = 'User_' + Math.floor(Math.random() * 1000);
const room = "default_room";

// Join room
socket.emit("join_room", {
  username,
  room,
  user_type_id: 1,
});

// Send message
function sendMessage() {
  const message = messageInput.value.trim();
  if (message) {
    const messageData = {
      message,
      username,
      room,
      __createdtime__: Date.now(),
      user_type_id: 1,
    };
    socket.emit("send_message", messageData);
    messageInput.value = "";
  }
}

sendButton.onclick = sendMessage;
messageInput.onkeypress = (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
  socket.emit("is_typing", { username, room });
};

// Receive message
socket.on("receive_message", (data) => {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${
    data.username === username ? "user-message" : "admin-message"
  }`;
  messageDiv.textContent = `${
    data.username === username ? "You" : data.username
  }: ${data.message}`;
  messageContainer.appendChild(messageDiv);
  messageContainer.scrollTop = messageContainer.scrollHeight;
});

// Typing indicator
socket.on("typing", (data) => {
  if (data.username !== username) {
    typingIndicator.textContent = `${data.username} is typing...`;
    setTimeout(() => {
      typingIndicator.textContent = "";
    }, 1000);
  }
});

// Close button functionality
document.querySelector(".close-btn").onclick = () => {
  socket.emit("leave_room", { username, room, user_type_id: 1 });
  // Here you might want to hide the widget instead of closing it
  document.querySelector(".chat-widget").style.display = "none";
};