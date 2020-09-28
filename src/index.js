console.clear();
console.log("Client ready!");

const ws = new WebSocket("ws://localhost:8080");
ws.addEventListener("open", () => {
  console.log("WS connection opened");
  // ws.send("foo");
});
ws.addEventListener("close", (evt) => {
  console.log("Connection closed:", evt.code, evt.reason || "—");
});
ws.addEventListener("error", (error) => {
  console.log("WS error:", error);
});
ws.addEventListener("message", (message) => {
  console.log("msg:", JSON.parse(message.data));
});

// let readyState = ws.readyState;
// const stateMap = {
//   [WebSocket.CONNECTING]: "CONNECTING",
//   [WebSocket.OPEN]: "OPEN",
//   [WebSocket.CLOSING]: "CLOSING",
//   [WebSocket.CLOSED]: "CLOSED"
// };

// console.log("Initial WS state:", stateMap[readyState]);
// setInterval(() => {
//   if (ws.readyState !== readyState) {
//     readyState = ws.readyState;
//     console.log("WS state changed to:", stateMap[readyState]);
//   }
// });
