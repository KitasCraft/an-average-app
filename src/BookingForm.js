import { useEffect, useState } from "react";
import { fetchAPI } from "./api";
import { useNavigate } from "react-router-dom";

function BookingForm({bookingTimes, updateTimes, submit}) {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("Birthday");

    const [error, setError] = useState({
        name: true,
        date: true,
        time: true
    })
    const [touched, setTouched] = useState({
        name: false,
        date: false,
        time: false
    })
    const isError = () => {
        return error.name || error.date || error.time;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.currentTarget));
        const submitted = submit(formData)

        if (submitted) {
            navigate("confirmation", {state: {formData}})
        }
        else {
            alert("Error: failed to submit form.")
        }
    }

    useEffect(() => {
        if (!date) return;
        const formattedDate = new Date(date)
        updateTimes(date, fetchAPI(formattedDate))
    }, [date])

    return (
        <form style={{ display: "grid", maxWidth: "200px", gap: "4px"}} onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                    if (error.name === true) {
                        setError({...error, name: false})
                    }
                }}
                onBlur={() => {
                    setTouched({...touched, name: true})
                    if (!name) {
                        setError({...error, name: true})
                    }
                }}
            />
            {error.name && touched.name && <p style={{color: "red", fontSize: 11}}>Please fill out your name</p>}
            <br />
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => {
                    setDate(e.target.value)
                    if (error.date === true) {
                        setError({...error, date: false})
                    }
                }}
                onBlur={() => {
                    setTouched({...touched, date: true})
                    if (!date) {
                        setError({...error, date: true})
                    }
                }}
            />
            {error.date && touched.date && <p style={{color: "red", fontSize: 11}}>Please select a date</p>}
            <br />
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => {
                    setTime(e.target.value)
                    if (error.time === true) {
                        setError({...error, time: false})
                    }
                }}
                onBlur={() => {
                    setTouched({...touched, time: true})
                    if (!time) {
                        setError({...error, time: true})
                    }
                }}
            >
                <option value="">-- Select a time --</option>
                {bookingTimes.map((times) => (
                    <option
                        key={times}
                        value={times}
                    >
                        {times}
                    </option>
                ))}
            </select>
            {error.time && touched.time && <p style={{color: "red", fontSize: 11}}>Please select a time</p>}
            <br />
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
            />
            <br />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Other">Other</option>
            </select>
            <br />
            <button className="btn-default" type="submit" disabled={isError()}>Make your reservation</button>
        </form>
    )
}

export default BookingForm;