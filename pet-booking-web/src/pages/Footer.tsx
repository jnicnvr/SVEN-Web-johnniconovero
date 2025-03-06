const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center gap-2 mb-4 md:mb-0">
                            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                                <span className="text-gray-800 font-semibold">
                                    P
                                </span>
                            </div>
                            <span className="font-semibold">PAWTASTIC</span>
                        </div>
                        <div className="text-sm text-gray-300">
                            © {new Date().getFullYear()} Pawtastic. All rights
                            reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
