const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY2);

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

            Structure
            {
                recommended_destinations: [
                    {
                        name:
                        match_score: 
                        reason_for_match:
                        main_activities: [
                            
                        ]
                    },
                    {
                        name: 
                        match_score: 
                        reason_for_match: 
                        main_activities: [
                            (In 7,10 words each)
                        ]
                    }
                ],

                travel_tips: [
                    
                ]
            }

            TRAVEL TIPS
            - Provide 2-4 useful tips for this trip each of 30,40 words and make sure you dont use ** in that.

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

const AuditReview = async (req, res) => {
    try {
        const { destination, duration, unitCount, operationalTier } = req.body;

         
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
        });

        const output = await model.generateContent(`
            You are an AI travel plan auditor.

            Analyze the following travel plan:

            Destination: ${destination}
            Duration: ${duration} days
            Number of travelers: ${unitCount}
            Budget: ${operationalTier}

            Evaluate the trip for:
            - Budget efficiency
            - Duration suitability
            - Expense distribution
            - Potential problems
            - Safety margin
            - Overall feasibility

            IMPORTANT:
            Return ONLY valid JSON.

            Use exactly this structure:

            {
            "overall_score": 0,
            "verdict": "",
            "summary": "",

            "key_metrics": {
                "daily_burn": 0,
                "total_cost": 0,
                "safety_buffer": 0
            },

            "expense_breakdown": [
                {
                "category": "Lodging",
                "amount": 0
                },
                {
                "category": "Dining",
                "amount": 0
                },
                {
                "category": "Transport",
                "amount": 0
                },
                {
                "category": "Insurance",
                "amount": 0
                },
                {
                "category": "Extras",
                "amount": 0
                },
                {
                "category": "Buffer",
                "amount": 0
                }
            ],

            "duration_analysis": {
                "planned_duration": 0,
                "recommended_duration": 0,
                "status": "",
                "analysis": ""
            },

            "issues": [],

            "suggestions": [],

            "travel_tips": []
            }

            Rules:
            - overall_score must be between 0 and 100.
            - All expense amounts must be numbers.
            - expense_breakdown should represent the estimated total trip cost.
            - daily_burn should represent estimated average spending per day.
            - safety_buffer should be a percentage.
            - Do not invent precise costs when insufficient information is available.
            - Keep explanations concise.
            - Return JSON only.
        `);

        
        const answer = output.response.text();
        const cleanedText = answer
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();
        const result = JSON.parse(cleanedText);

        res.status(200).json({
            result,
        });
    } catch (error) {
        console.log(error);

        res.status(400).json({ message: error.message });
    }
};

module.exports = { suggestLocation, AuditReview };
