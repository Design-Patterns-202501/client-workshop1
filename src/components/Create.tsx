import { useEffect, useState } from "react";
import FancyButton from "./FancyButton";
import type { Booking } from "@/types/Booking";
import { cleanDate } from "@/utils/utils";
import { toast, ToastContainer } from "react-toastify";
export const Create = () => {

    const [id, setId] = useState<string>();
    const [age, setAge] = useState<string>();
    const [name, setName] = useState<string>();
    const [date, setDate] = useState<Date | null>();
    const [time, setTime] = useState<Date | null>();

    const createBooking = async () => {

        const apiUrl = import.meta.env.PUBLIC_API_URL;

        if (!date || !time || !id || !name || !age )  {
            toast.error("No llenaste todos los campos")
            return;
        }

        const booking : Booking = {
            id,
            clientAge: parseInt(age),
            clientName: name,
            date: cleanDate(date),
            hour: time.getUTCHours(),
            minute: time.getUTCMinutes()
        }

        console.log(booking);

        const res = await fetch(`${apiUrl}/booking/create`, {
            method: 'POST',
            body: JSON.stringify(booking),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const resJson = await res.json();

        console.log(resJson)
    }

    return (
        <>
        <div>
        </div>
        <div className="relative flex-col justify-center items-center">
            <div className="p-10">
                <h1 className="text-7xl font-black text-center">Agendar</h1>
            </div>
            <h1 className="text-center m-5 text-2xl">Información de la reserva</h1>
            
            <div className="flex justify-center items-center">
                <div className="flex flex-col gap-5 justify-center items-center p-10 w-full">
                    <div className="flex w-full justify-between items-center gap-3">
                        <h1 className="text-xl">Cedula</h1>
                        <input
                            type="text"
                            id=""
                            className="w-[18vw] bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Cedula"
                            required
                            onChange={e => setId(e.target.value)}
                        />
                    </div>
                    <div className="flex w-full justify-between items-center gap-3">
                        <h1 className="text-xl">Edad</h1>
                        <input
                            type="number"
                            id=""
                            className="w-[18vw] bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Edad"
                            required
                            onChange={e => setAge(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-between w-full items-center gap-3">
                        <h1 className="text-xl">Nombres</h1>
                        <input
                            type="text"
                            id=""
                            className="w-[18vw] bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Nombres"
                            required
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-between w-full items-center gap-3">
                        <h1 className="text-xl">Fecha</h1>
                        <input
                            type="date"
                            id=""
                            className="w-[18vw] bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=""
                            onChange={e => setDate(e.target.valueAsDate)}
                            required
                        />
                    </div>
                    <div className="flex justify-between w-full items-center gap-3">
                        <h1 className="text-xl">Hora</h1>
                        <input
                            type="time"
                            id=""
                            className="w-[18vw] bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=""
                            required
                            onChange={e => setTime(e.target.valueAsDate)}
                        />
                    </div>
                    <button 
                        className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200" 
                        id="book"
                        onClick={createBooking}
                    >
                        Reserva
                    </button>
                </div>
            </div>

        </div>    
        </>
    );
}