import React, { useState } from 'react';

function AgeCalculator() {
    // Define state to store day, month, year, and age
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [age, setAge] = useState(null);

    // Function to calculate the age
    const calculateAge = () => {
        const birthDate = new Date(year, month - 1, day); // Create a Date object for the birthdate
        const today = new Date(); // Current date

        let calculatedAge = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        // Adjust age if the birth month hasn't been reached yet or the day hasn't passed
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            calculatedAge--;
        }

        setAge(calculatedAge); // Update the state with the calculated age
    };

    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        calculateAge(); // Call the function to calculate age
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Age Calculator</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="number"
                        placeholder="Day"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                        required
                        min="1"
                        max="31"
                    />
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Month"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        required
                        min="1"
                        max="12"
                    />
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        required
                        min="1900"
                        max={new Date().getFullYear()}
                    />
                </div>
                <button type="submit">Calculate Age</button>
            </form>

            {age !== null && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Your age is: {age} years</h2>
                </div>
            )}
        </div>
    );
}

export default AgeCalculator;