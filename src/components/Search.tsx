import { CompactTable } from "@table-library/react-table-library/compact";
import FancyButton from "./FancyButton";

import { useTheme } from '@table-library/react-table-library/theme';
import { DEFAULT_OPTIONS, getTheme } from '@table-library/react-table-library/mantine';
import type { Booking } from "@/types/Booking";
import { cleanDate } from "@/utils/utils";
import { useState } from "react";

const COLUMNS = [
  {
    label: "Cedula",
    renderCell: (item: Booking) => {
      return item.id;
    },
  },
  {
    label: "Nombres",
    renderCell: (item: Booking) => {
      return item.clientName;
    },
  },
  {
    label: "Hora",
    renderCell: (item: Booking) => {
      const date = new Date();
      date.setHours(item.hour);
      date.setMinutes(item.minute);
      date.setSeconds(0);

      return date.toLocaleTimeString();
    },
  },
];

export const Search =  () => {

  const [nodes, setNodes] = useState<Booking[]>([]);

  const data = { nodes };

  const mantineTheme = getTheme();
  const theme = useTheme(mantineTheme);

  const getBookings = async (e: React.ChangeEvent<HTMLInputElement>) => {

    const apiUrl = import.meta.env.PUBLIC_API_URL;
    const dateString = cleanDate(e.target.valueAsDate!);
    try {
      const res = await fetch(`${apiUrl}/bookings?date=${dateString}`, {
      });
      const resJson = await res.json();

      setNodes(resJson.data);
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <div className="flex-col justify-center items-center relative m-[2rem]">
      <div className="flex justify-center items-center">
        <h1 className="text-xl p-5 text-center">Introduzca la fecha</h1>
        <input
          type="date"
          id="first_name"
          className="bg-white border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          onChange={getBookings}
          required
        />
      </div>
      <div className="text-black p-5 m-[2rem] bg-white">
        <CompactTable columns={COLUMNS} data={data} theme={theme} />
      </div>

      <div className="flex justify-center items-center">
        <FancyButton href={"/"} text={"Volver"} onClick={() => {}}/>
      </div>

    </div>
  );
};
