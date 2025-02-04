export default ({ href, text, onClick }) => {

    return (
            <button 
            className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200" 
            id="book"
            onClick={onClick}
            >
                <a href={href}>{text}</a>
            </button>
    );

};
