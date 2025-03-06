interface HeaderProps {
    onNavigate: (section: "about" | "booking") => void;
}

const Header = ({ onNavigate }: HeaderProps) => {
    return (
        <>
            <header className="container mx-auto px-4 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-600 font-semibold">P</span>
                    </div>
                    <span className="font-semibold text-gray-700">
                        PAWTASTIC
                    </span>
                </div>
                <nav className="hidden md:flex items-center gap-6 text-sm text-gray-500">
                    <button onClick={() => onNavigate("about")} className="hover:text-gray-900">
                    About us
                </button>
                <button onClick={() => onNavigate("booking")} className="hover:text-gray-900">
                    Schedule a visit
                </button>
                </nav>
            </header>
        </>
    );
};

export default Header;
