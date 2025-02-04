import { CompactTable } from "@table-library/react-table-library/compact";
import FancyButton from "./FancyButton";

import { useTheme } from '@table-library/react-table-library/theme';
import { DEFAULT_OPTIONS, getTheme } from '@table-library/react-table-library/mantine';

type Booking = {
  id: string;
  clientName: string;
  clientAge: number;
  date: string;
  hour: number;
  minute: number;
};

const nodes: Booking[] = [
  {
    id: "0",
    clientName: "Shopping List",
    clientAge: 3,
    date: "TASK",
    hour: 2,
    minute: 3,
  },
];

const COLUMNS = [
  {
    label: "Cedula",
    renderCell: (item: Booking) => {
      return item.id;
    },
    style: "dsa"
  },
  {
    label: "Nombres",
    renderCell: (item: Booking) => {
      return item.clientName;
    },
    style: "dsa"
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
    style: "dsa"
  },
];

export const Search =  () => {
  const data = { nodes };

  const mantineTheme = getTheme();
  const theme = useTheme(mantineTheme);

  const getBookings = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateParts = e.target.valueAsDate
      ?.toLocaleDateString("en-US")!
      .split("/")!;
    const year = dateParts[2];
    let month = dateParts[1].trim();
    if (month.length == 1) month = "0" + month;
    let day = dateParts[0].trim();
    if (day.length == 1) day = "0" + day;

    const dateString = year + "/" + month + "/" + day;

    console.log(dateString);
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
        <FancyButton href={"/"} text={"Volver"} />
      </div>

    </div>
  );
};
