import BookingForm from "./BookingForm";
import { useReducer } from "react";
import { fetchAPI, submitAPI } from "./api";
import { Route, Router, Routes } from "react-router";
import BookingConfirm from "./BookingConfirm";

function BookingPage() {
    const today = new Date();

    const reducer = (state, action) => {
        return fetchAPI(action.date);
    }
    const initializeTimes = () => {
        return fetchAPI(today);
    }
    const [availableTimes, dispatch] = useReducer(reducer, undefined, initializeTimes)
    const updateTimes = (date) => {
        return dispatch({ date: date })
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