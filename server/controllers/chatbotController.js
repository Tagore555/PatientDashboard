const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function generateResponse(req, res) {
    try {
        const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = req.body.prompt || "Default prompt if none provided";  // Modify prompt handling as per your needs
        const result = await model.generateContent(prompt);
        const response = result.response.text();;
        res.send({ response: response });
    } catch (error) {
        console.error('Error generating response:', error);
        res.status(500).json({ error: 'Error generating response' });
    }
}

module.exports = { generateResponse };
