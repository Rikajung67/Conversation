const conversationData = [
    {
        userName: "แมวเหมียวนิรนาม",
        userText: "ว้าว! นี่เป็นหมู่บ้านที่ดีจริง ๆ ดูสงบสุขและเรียบง่ายมากเลยพี่ Theta",
    },
    {
        userName: "Theta",
        userText: "ใช่แล้ว แมวเหมียวนิรนาม เเละที่สำคัญชาวบ้านที่หมู่บ้าน Newmathcian ตั้งใจทำงานกันมากเลยนะเรามาที่นี้เพื่อช่วยเหลือพวกเขาล่ะ",
    },
    {
        userName: "แมวเหมียวนิรนาม",
        userText: "น่าตื่นเต้นจริง ๆ เลยพี่ Theta",
    },
    {
        userName: "คุณลุง",
        userText: "อ้าว ! Theta มาได้จังหวะช่วยงานพอดีเลย ช่วงนี้ที่หมู่บ้านกำลังวุ่น ๆ กับการเก็บเกี่ยวพืชผักอยู่ล่ะ",
    },
    {
        userName: "คุณลุง",
        userText: "เอ๊ะ ? แล้วนั่นใครน่ะ",
    },
    {
        userName: "Theta",
        userText: "สวัสดีคุณลุง Theta ขอแนะนำแมวเหมียวนิรนามที่จะมาช่วยงานในครั้งนี้",
    },
];

let currentConversationIndex = 0;

function displayInitialConversation() {
    // Call nextPage() to display the first conversation
    nextPage();
}

// Function to display the next conversation
function nextPage() {
    // Get the next conversation from the conversation data
    const conversation = conversationData[currentConversationIndex];
    
    // Check if there are more conversations
    if (conversation) {
        // Update the dialog box with the conversation data
        document.getElementById("userName").textContent = conversation.userName;
        document.getElementById("userText").textContent = conversation.userText;

        // Display the appropriate character image based on the userName
        const charImages = document.querySelectorAll('.char img');
        charImages.forEach(img => {
            if (img.alt === conversation.userName) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
        
        // Increment the conversation index for the next iteration
        currentConversationIndex++;
    } else {
        // If there are no more conversations, redirect to the specified URL
        window.location.href = "https://cdn-icons-png.flaticon.com/512/1505/1505465.png";
    }
}
