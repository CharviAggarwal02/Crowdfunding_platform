import { io } from "socket.io-client"

const socket = io("https://crowdfunding-platform-3.onrender.com", {
  path: "/socket.io",
  transports: ["websocket"],
  autoConnect: true
});
export default socket