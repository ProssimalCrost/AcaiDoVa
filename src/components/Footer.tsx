
export function Footer() {
    return (
        <footer  className="
            h-20            /* ajuste a altura até ficar suave */
            bg-red-600
            bg-gradient-to-b
            from-transparent /* topo: transparente */
            to-orange-800    /* base: mesma cor do início da sua section */
            pointer-events-none">

            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <p className="text-md">© 2025 AÇAÍ DO AÇO. Todos os direitos reservados.</p>
                    </div>
                    <div className="flex space-x-4 rtl:space-x-reverse ">
                        <a href="https://www.linkedin.com/in/theylon-siqueira-44a327257/" className="text-white hover:text-yellow-300">LinkedIn</a>
                        <a href="https://github.com/ProssimalCrost" className="text-white hover:text-yellow-300">Github</a>
                        <a href="https://theylon.netlify.app/" className="text-white hover:text-yellow-300">Portifólio</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}