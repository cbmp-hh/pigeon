# Pigeon - Anonymous Chat Room

**Pigeon** is a simple, anonymous chat room where users can join, choose a nickname, and start chatting with others in real-time. The website is designed to be minimalistic and easy to use, with support for both English and Chinese languages.

---

## Features

- **Anonymous Chatting**: Users can join the chat room without needing to create an account.
- **Nickname Selection**: Users can choose a nickname to identify themselves in the chat.
- **Real-Time Messaging**: Messages are displayed in real-time as they are sent.
- **Language Support**: The website supports both **English** and **Chinese** languages. Users can switch between languages with a single click.
- **Responsive Design**: The chat room is designed to work on both desktop and mobile devices.

---

## How to Use

1. **Join the Chat Room**:
   - Open the website in your browser.
   - Click the **Nickname** button to set your nickname.
   - Enter a nickname and click **Submit**.

2. **Start Chatting**:
   - Type your message in the input box at the bottom of the screen.
   - Press **Enter** to send your message.

3. **Switch Language**:
   - Click the **中/Eng** button in the top-right corner to switch between English and Chinese.

---

## Setup Instructions

To run this project locally, follow these steps:

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge).
- A local server (e.g., [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code) to serve the files.

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/cbmp-hh/pigeon.git
   cd pigeon
   ```

2. **Run the Project**:
   - Open the project folder in your code editor.
   - Use a local server to serve the `main.html` file (e.g., with Live Server in VS Code).
   - Open the website in your browser.

---

## File Structure

```
pigeon/
├── main.html            # Main HTML file for the chat room
├── uni.css              # CSS file for styling the website
├── uni.js               # JavaScript file for functionality
├── ico.png              # Icon for the website
├── ico.gif              # Animated icon for hover effect
├── messages.json        # File to store chat messages (currently empty)
└── README.md            # Project documentation
```

---

## Technologies Used

- **HTML**: Structure of the website.
- **CSS**: Styling and layout.
- **JavaScript**: Dynamic functionality (e.g., nickname selection, language switching, message sending).
- **Google Fonts**: Custom fonts for a clean and modern look.

---

## Future Improvements

- **Persistent Messages**: Store chat messages in a database or local storage to persist across sessions.
- **User Authentication**: Add optional user accounts for personalized experiences.
- **Emoji Support**: Allow users to send emojis in their messages.
- **Dark Mode**: Add a dark mode option for better usability in low-light environments.

---

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Please ensure your code follows the existing style and includes appropriate documentation.

---

## License

This project is licensed under the [**CC BY 4.0 License**](https://creativecommons.org/licenses/by/4.0/).

---

## Acknowledgments

- **Google Fonts**: For providing the fonts used in this project.
- **Stack Overflow**: For helpful community support during development.

---

Enjoy chatting on **Pigeon**! 🐦
