
export function Footer() {
    return (
        <footer className="bg-purple-800 text-white py-6">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <p className="text-sm">© 2023 AÇAÍ DO AÇO. Todos os direitos reservados.</p>
                    </div>
                    <div className="flex space-x-4 rtl:space-x-reverse">
                        <a href="#" className="text-white hover:text-yellow-300">Facebook</a>
                        <a href="#" className="text-white hover:text-yellow-300">Instagram</a>
                        <a href="#" className="text-white hover:text-yellow-300">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}