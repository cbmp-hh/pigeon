var lang = 0;
var id = 0;

function langChange() {
    console.log("langChange");
    const messageInput = document.getElementById("message"); // Get the message input field
    const nicknameButton = document.querySelector(".header-button p"); // Get the nickname button text

    if (lang == 0) {
        // Switch to Chinese
        langButton.innerHTML = "<p>Eng</p>";
        header.innerHTML = "秘密聊天室";
        nicknameModal.querySelector('input').placeholder = "暱稱";
        nicknameModal.querySelector('button').textContent = "提交";
        messageInput.placeholder = "發送訊息..."; // Change the placeholder to Chinese
        nicknameButton.textContent = "暱稱"; // Translate nickname button text
        lang = 1;
    } else {
        // Switch back to English
        langButton.innerHTML = "<p>中</p>";
        header.innerHTML = "Secret chat room";
        nicknameModal.querySelector('input').placeholder = "nickname";
        nicknameModal.querySelector('button').textContent = "Submit";
        messageInput.placeholder = "Send a message..."; // Change the placeholder back to English
        nicknameButton.textContent = "Nickname"; // Translate nickname button text back to English
        lang = 0;
    }
}

let currentNickname = '';

function toggleNicknameModal() {
    const modal = document.getElementById('nickname-modal');
    modal.style.display = modal.style.display === 'none' ? 'flex' : 'none';
}

function getNickname() {
    const nicknameValue = document.getElementById("nickname-input").value;
    if (nicknameValue.trim() !== "") {
        console.log("nickname: " + nicknameValue);
        currentNickname = nicknameValue;
        document.getElementById("nickname-input").value = "";
        toggleNicknameModal(); // Hide modal after setting nickname
    } else {
        alert("Nickname cannot be empty!");
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
nicknameModal = document.getElementById("nickname-modal");
ico = document.getElementById("ico");
message = document.getElementById("message");
const messageStream = document.getElementById("stream");

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === nicknameModal) {
        toggleNicknameModal();
    }
}

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
                toggleNicknameModal();
                return;
            }
            
            const newMessage = {
                nickname: currentNickname,
                content: messageValue,
                timestamp: Date.now()
            };
            
            const messageBubble = createMessageBubble(
                newMessage.nickname,
                newMessage.content,
                newMessage.timestamp
            );
            messageStream.appendChild(messageBubble);
            
            messageStream.scrollTop = messageStream.scrollHeight;
            message.value = "";
            
            console.log("New message:", newMessage);
        }
    }
});