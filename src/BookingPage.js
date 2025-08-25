import BookingForm from "./BookingForm";
import { useReducer } from "react";
import { submitAPI } from "./api";
import { Route, Router, Routes } from "react-router-dom";
import BookingConfirm from "./BookingConfirm";

function BookingPage() {
    const reducer = (state, action) => {
        if (action.date === "2025-12-25") return ["find her."]
        return action.times;
    }
    const initializeTimes = () => {
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    }
    const [availableTimes, dispatch] = useReducer(reducer, undefined, initializeTimes)
    const updateTimes = (date, times) => {
        return dispatch({ date: date, times: times })
    }
    const submitForm = (formData) => {
        return submitAPI(formData)
    }
    return (
        <section style={{
            backgroundColor: "#495E57",
            color: "white",
            padding: "1rem 1%"
        }}>
            <h1 className="serif-font title" style={{textAlign: "center"}}>Table Reservation Form</h1>
            <br />
            <Routes>
                <Route path="/" element={<BookingForm bookingTimes={availableTimes} updateTimes={updateTimes} submit={submitForm}/>}></Route>
                <Route path="/confirmation" element={<BookingConfirm />}></Route>
            </Routes>
        </section>
    )
}

export default BookingPage;