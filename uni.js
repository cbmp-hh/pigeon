var lang = 0;
var id = 0;

function langChange() {
    console.log("langChange");
    if (lang == 0) {
        langButton.innerHTML = "<p>Eng</p>";
        header.innerHTML = "秘密聊​​天室"
        nicknameDiv.innerHTML = `            <input type = "text" placeholder = "暱稱" id = "nickname"></input>
            <button onclick = "getNickname()">提交</button>`;
        lang = 1;
        return;
    }
    else {
        langButton.innerHTML = "<p>中</p>";
        header.innerHTML =  "Secret chat room"
        nicknameDiv.innerHTML = `            <input type = "text" placeholder = "nickname" id = "nickname"></input>
            <button onclick = "getNickname()">Submit</button>`;
        lang = 0;
        return;
    };
}

let currentNickname = '';

function getNickname() {
    nicknameValue = document.getElementById("nickname").value;
    if (nicknameValue != "") {
        console.log("nickname: " + nicknameValue);
        currentNickname = nicknameValue;
        document.getElementById("nickname").value = "";
    } else {
        alert("Nickname cannot be empty!")
    }
}

function createMessageBubble(nickname, message, timestamp) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message-bubble';

    const nicknameSpan = document.createElement('span');
    nicknameSpan.className = 'message-nickname';
    nicknameSpan.textContent = nickname;

    const timeSpan = document.createElement('span');
    timeSpan.className = 'message-time';
    timeSpan.textContent = new Date(timestamp).toLocaleTimeString();

    const messageContent = document.createElement('p');
    messageContent.className = 'message-content';
    messageContent.textContent = message;

    messageDiv.appendChild(nicknameSpan);
    messageDiv.appendChild(timeSpan);
    messageDiv.appendChild(messageContent);

    return messageDiv;
}

langButton = document.getElementById("lang");
header = document.getElementById("title-header");
nicknameDiv = document.getElementById("nickname-div");
ico = document.getElementById("ico");
message = document.getElementById("message");
const messageStream = document.getElementById("stream");

if (document.cookie.indexOf("id=") === -1) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (3153600000000));
    document.cookie = "id=" + id + "; expires=" + expires.toUTCString() + "; path=/";
}

console.log("Current cookies: " + document.cookie);

ico.addEventListener("mouseover", () => {
    console.log("mouseover");
    ico.src = "ico.gif"
});

ico.addEventListener("mouseout", () => {
    console.log("mouseout");
    ico.src = "ico.png";
});

message.addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
        messageValue = message.value.trim();
        if (messageValue != "") {
            if (!currentNickname) {
                alert("Please set a nickname first!");
                return;
            }

            const newMessage = {
                nickname: currentNickname,
                content: messageValue,
                timestamp: Date.now()
            };

            // Add message bubble to the stream
            const messageBubble = createMessageBubble(
                newMessage.nickname,
                newMessage.content,
                newMessage.timestamp
            );
            messageStream.appendChild(messageBubble);

            // Auto scroll to bottom
            messageStream.scrollTop = messageStream.scrollHeight;

            // Clear input
            message.value = "";

            // Here you would typically send the message to your server
            console.log("New message:", newMessage);
        }
    }
});