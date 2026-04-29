import { io } from 'socket.io-client';

// Connect to the backend socket server
const socket = io(import.meta.env.VITE_SOCKET_URL, {
  autoConnect: false, // connect manually when needed
});

export default socket;
