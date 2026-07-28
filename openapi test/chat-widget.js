(function() {
    // 1. Create a container element for the widget
    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'custom-chat-widget';
    
    // 2. Inject the HTML structures (Launcher and Chat Box)
    widgetContainer.innerHTML = `
        <!-- Floating Launcher Button -->
        <div id="chat-launcher" style="position:fixed; bottom:20px; right:20px; width:60px; height:60px; background:#007bff; color:white; border-radius:50%; text-align:center; line-height:60px; cursor:pointer; font-size:24px; box-shadow:0 4px 10px rgba(0,0,0,0.3); z-index:9999;">
            💬
        </div>

        <!-- Chat Window (Initially Hidden) -->
        <div id="chat-box" style="display:none; position:fixed; bottom:90px; right:20px; width:300px; height:40px; background:white; border:1px solid #ccc; border-radius:10px; box-shadow:0 4px 15px rgba(0,0,0,0.2); z-index:9999; flex-direction:column; overflow:hidden; font-family: Arial, sans-serif;">
            <div style="background:#007bff; color:white; padding:15px; font-weight:bold;">Live Chat</div>
            <div id="chat-messages" style="flex:1; padding:15px; overflow-y:auto; font-size:14px; min-height: 200px;">
                <p style="margin:0;">Hello! How can we help you today?</p>
            </div>
            <div style="padding:10px; border-top:1px solid #eee; display:flex;">
                <input type="text" id="chat-input" placeholder="Type a message..." style="flex:1; padding:8px; border:1px solid #ddd; border-radius:4px; outline:none;">
            </div>
        </div>
    `;

    // 3. Append the widget directly to the body
    document.body.appendChild(widgetContainer);

    // 4. Interactivity Logic
    const launcher = document.getElementById('chat-launcher');
    const chatBox = document.getElementById('chat-box');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    // Toggle Chat Window visibility
    launcher.addEventListener('click', () => {
        if (chatBox.style.display === 'none' || chatBox.style.display === '') {
            chatBox.style.display = 'flex';
        } else {
            chatBox.style.display = 'none';
        }
    });

    // Handle sending a message on Enter key
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && chatInput.value.trim() !== '') {
            const userMsg = document.createElement('p');
            userMsg.style.cssText = "margin:5px 0; text-align:right; color:#007bff; font-weight:bold;";
            userMsg.textContent = chatInput.value;
            chatMessages.appendChild(userMsg);
            
            chatInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight; // Auto scroll
        }
    });
})();
