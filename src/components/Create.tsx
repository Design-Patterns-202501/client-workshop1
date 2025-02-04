export const Create = () => {
    return (
        <div className="relative flex-col justify-center items-center">
            <div className="p-10">
                <h1 className="text-7xl font-black text-center">Agendar</h1>
            </div>
            <h1 className="text-center m-5 text-2xl">Información de la reserva</h1>
            
            <div className="flex justify-center items-center">
                <div className="flex flex-col gap-5 justify-center items-center p-10 w-full">
                    <div className="flex w-full justify-evenly items-center gap-3">
                        <h1 className="text-xl">Cedula</h1>
                        <input
                            type="text"
                            id=""
                            className="bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Cedula"
                            required
                        />
                    </div>
                    <div className="flex justify-evenly w-full items-center gap-3">
                        <h1 className="text-xl">Nombres</h1>
                        <input
                            type="text"
                            id=""
                            className="bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Nombres"
                            required
                        />
                    </div>
                    <div className="flex justify-evenly w-full items-center gap-3">
                        <h1 className="text-xl">Fecha</h1>
                        <input
                            type="date"
                            id=""
                            className="bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=""
                            required
                        />
                    </div>
                    <div className="flex justify-around w-full items-center gap-3">
                        <h1 className="text-xl">Hora</h1>
                        <input
                            type="time"
                            id=""
                            className="bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder=""
                            required
                        />
                    </div>
                </div>
            </div>

        </div>    
    );
}