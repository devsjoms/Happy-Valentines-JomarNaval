const box = document.getElementById("modal-box");
const love = document.getElementById("love-message");
const valentinesMessages = [
  "Love is a reminder that kindness still exists. Even the smallest gestures can make someone’s day brighter. Today is a good day to share warmth and appreciation. Love always finds its way.",
  "Valentine’s Day is about celebrating care and connection. It’s a moment to slow down and appreciate the good around us. Love doesn’t have to be loud to be meaningful. Sometimes, it’s felt quietly.",
  "Love shows up in many forms, big and small. It can be found in smiles, patience, and understanding. Today is a reminder to value those moments. Love makes life a little lighter.",
  "This day celebrates warmth, compassion, and human connection. Love is not limited to romance alone. It lives in friendships, family, and shared kindness. Every heart deserves to feel appreciated.",
  "Valentine’s Day is a chance to spread positivity. Love grows when it is shared freely. Even simple words can leave a lasting impact. Choose kindness today and always.",
  "Love has the power to bring people closer. It creates comfort, hope, and understanding. Today reminds us to express gratitude. Every act of love matters.",
  "Love is something everyone can give and receive. It doesn’t require perfection, only sincerity. This day celebrates connection in all its forms. Let love be felt everywhere.",
  "Valentine’s Day highlights the beauty of human connection. Love can be gentle, strong, or quietly supportive. Each form has value and meaning. Celebrate love in its simplest form.",
  "Love reminds us that we are never truly alone. It exists in shared moments and thoughtful actions. Today is a good day to appreciate those bonds. Love makes the world warmer.",
  "This day is a celebration of care and affection. Love can be found in everyday moments. A kind word or small effort can mean a lot. Love lives in intention.",
  "Valentine’s Day is about appreciation and warmth. Love shows itself through respect and understanding. Every expression of love counts. Share positivity freely today.",
  "Love has many languages beyond words. It can be felt through actions and presence. Today reminds us to value those connections. Love is always worth celebrating.",
  "This day honors love in all its beautiful forms. Love builds bridges between people. It encourages empathy and kindness. Let love guide today’s moments.",
  "Love creates spaces where people feel valued. It strengthens bonds and builds trust. Valentine’s Day is a reminder of that power. Choose love whenever possible.",
  "Valentine’s Day is a celebration of connection. Love doesn’t need a reason to exist. It thrives in honesty and care. Every heart deserves kindness.",
  "Love is a shared experience that brings warmth. It grows when expressed with sincerity. This day highlights that simple truth. Love makes moments meaningful.",
  "This celebration reminds us to pause and appreciate. Love is present in both words and actions. Even small gestures carry meaning. Let love be intentional today.",
  "Love has a way of bringing comfort and joy. It doesn’t need to be perfect to be real. Valentine’s Day celebrates that authenticity. Love is enough.",
  "Love is a constant reminder of human connection. It shows up in support and understanding. Today is a chance to reflect on that. Let love be shared openly.",
  "Valentine’s Day celebrates warmth and appreciation. Love exists in many relationships and moments. It thrives on kindness and patience. Share love generously.",
  "Love is something that connects everyone. It creates understanding and compassion. This day reminds us of its importance. Let love lead the way.",
  "This day is a celebration of meaningful connections. Love doesn’t require grand gestures. It lives in consistency and care. Every expression matters.",
  "Love adds value to everyday life. It strengthens bonds and creates comfort. Valentine’s Day highlights that beauty. Choose love with intention.",
  "Love is a powerful and simple force. It brings people closer and hearts warmer. Today is a reminder to appreciate that. Love is always worth sharing.",
  "Valentine’s Day honors care and connection. Love shows up in many ways. Each form has its own meaning. Celebrate love without limits.",
  "Love creates moments worth remembering. It builds understanding and trust. This day celebrates those connections. Let love be present everywhere.",
  "Love is a gift that grows when shared. It doesn’t ask for perfection. Valentine’s Day reminds us of its simplicity. Love is enough.",
  "This celebration highlights human warmth and kindness. Love exists in everyday interactions. Small acts can leave a big impact. Share love freely today.",
  "Love brings comfort and hope to people. It strengthens relationships and builds trust. Today is a reminder to appreciate that. Love makes life richer.",
  "Valentine’s Day celebrates connection and care. Love doesn’t belong to one form alone. It thrives in understanding and empathy. Let love be felt by all."
];




function openMessage(){
    box.style.display = "block";
    const counter = Math.floor(Math.random() * 20)
    love.innerHTML = valentinesMessages[counter];
}
function closeBtn(){
    box.style.display = "none";
}

