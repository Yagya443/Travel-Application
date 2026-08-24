import { useState } from "react";
import { experiences } from "../Data/experiences";

const usePlanner = () => {

    const [destination, setDestination] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [minBudget, setMinBudget] = useState(0);
    const [maxBudget, setMaxBudget] = useState(0);
    const [selected, setSelected] = useState([]);
    const toggleExperience = (id) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((expId)=> expId!==id) : [...prev, id]
        );
        console.log("Selected experiences:", selected);
    };

    // Functions

    const increaseAdults = () => setAdults((prev) => prev + 1);
    const decreaseAdults = () => {
        setAdults((prev) => Math.max(1, prev - 1));
    };
    const increaseChildren = () => setChildren((prev) => prev + 1);
    const decreaseChildren = () => {
        setChildren((prev) => Math.max(0, prev - 1));
    };

    // Generate Route

    const generateRoute = () => {
        const plannerData = {
            destination,
            startDate,
            endDate,
            adults,
            children,
            minBudget,
            maxBudget,
            selected,
        };

        console.log("Generating route:", plannerData);

        // API call will eventually go here
    };

    return {
        // state
        destination,
        startDate,
        endDate,
        adults,
        children,
        minBudget,
        maxBudget,
        selected,

        // setters
        setDestination,
        setStartDate,
        setEndDate,
        setMinBudget,
        setMaxBudget,

        // functions
        increaseAdults,
        decreaseAdults,
        increaseChildren,
        decreaseChildren,
        toggleExperience,
        generateRoute,
    };
};

export default usePlanner;