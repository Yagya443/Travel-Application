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
            You are an AI travel planner.

            Create a personalized travel itinerary using the following trip details:

            Destination: ${destination}
            Start Date: ${startDate}
            End Date: ${endDate}
            Adults: ${adults}
            Children: ${children}
            Minimum Budget: ${minBudget}
            Maximum Budget: ${maxBudget}
            Preferred Experiences: ${selected.join(", ")}

            Requirements:
            1. Create a day-by-day itinerary for the complete trip.
            2. Consider the number of adults and children when suggesting activities.
            3. Keep the total estimated cost within the given budget range.
            4. Prioritize the user's preferred experiences.
            5. Suggest realistic activities and places that are actually suitable for the destination.
            6. Organize activities in a logical order to reduce unnecessary travel.
            7. Include approximate timings for each activity.
            8. Include estimated costs where possible.
            9. Suggest suitable food options.
            10. Keep the itinerary practical rather than overcrowded.

            Return the response in the following format:

            TRIP SUMMARY
            - Destination:
            - Duration:
            - Travelers:
            - Budget:
            - Travel Style:

            DAY 1
            - Morning:
            - Afternoon:
            - Evening:
            - Estimated Cost:

            DAY 2
            - Morning:
            - Afternoon:
            - Evening:
            - Estimated Cost:

            Continue for every day of the trip.

            BUDGET BREAKDOWN
            - Accommodation:
            - Food:
            - Activities:
            - Local Transportation:
            - Estimated Total:

            TRAVEL TIPS
            - Provide 3-5 useful tips for this trip.

            Do not mention that you are an AI.
            `);

        const recommendation = result.response.text();
        res.status(200).json({
            recommendation,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { suggestLocation };
