const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const suggestLocation = async (req, res) => {
    try {
        const {
            destination,
            startDate,
            endDate,
            adults,
            children,
            minBudget,
            maxBudget,
            selected,
        } = req.body;

        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
        });

        const result = await model.generateContent(`
            You are an AI travel recommendation engine for a travel planning application.

            Your job is to analyze a user's travel preferences and recommend destinations
            that best match their interests, travel style, budget, 3 to 4 preferred activities,
            and travel duration.

            IMPORTANT RULES:

            1. Do not create a day-by-day itinerary.
            2. Your job is ONLY to recommend suitable destinations.
            3. Recommend destinations based on the user's preferences, not generic popularity.
            4. Give every destination a match score from 0 to 100.
            5. Explain why the destination matches the user's interests.
            6. Mention the main activities that match the user's interests.
            7. Consider budget and duration when ranking destinations.
            8. Prefer realistic recommendations.
            9. Return 2 to 3 destinations.
            10. Return ONLY the requested JSON structure.
    

                        
            Destination: ${destination}
            Start Date: ${startDate}
            End Date: ${endDate}
            Adults: ${adults}
            Children: ${children}
            Minimum Budget: ${minBudget}
            Maximum Budget: ${maxBudget}
            Preferred Experiences: ${selected.join(", ")}

            

            TRAVEL TIPS
            - Provide 2-4 useful tips for this trip each of 100 words and make sure you dont use ** in that.

            Do not mention that you are an AI.
            `);

        const data = result.response.text();

        const cleanedText = data
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        const recommendation = JSON.parse(cleanedText);

        res.status(200).json({
            recommendation,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = { suggestLocation };

