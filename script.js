const botResponses = {
    "hello": "Hi there! How can I assist you today?",
    "bye": "Goodbye! Have a great day!",
    "how are you": "I'm just a bot, but I'm here to help!",
    "default": "I'm not sure how to respond to that. Can you rephrase?"
};
const inputMap = {
    "hi": "hello",
    "hey": "hello",
    "hello": "hello",
    "goodbye": "bye",
    "bye": "bye"
};
function normalizeInput(input) {
    return inputMap[input.toLowerCase()] || input.toLowerCase();
}
function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    const chatBody = document.getElementById("chat-body");

    if (userInput === "") return;
    const userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.textContent = userInput;
    chatBody.appendChild(userMessage);
    const normalizedInput = normalizeInput(userInput);
    const response = botResponses[normalizedInput] || botResponses["default"];
    const botMessage = document.createElement("div");
    botMessage.className = "message bot";
    botMessage.textContent = response;
    chatBody.appendChild(botMessage);
    chatBody.scrollTop = chatBody.scrollHeight;
    document.getElementById("user-input").value = "";
}
document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") sendMessage();
});