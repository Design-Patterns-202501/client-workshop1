import { Search } from "./Search";

export const SearchView = () => {
    return (
        <>
        <div className="relative p-10">
            <h1 className="text-7xl font-black text-center">Buscar</h1>
        </div>
        <div>
            <Search />
        </div>
        </>
    );
};
