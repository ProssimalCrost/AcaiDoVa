import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import CarouselLite from "./carrossel"; 



export default function BackG() {
  const slides = [
    { src: "src/assets/images/background/images/3tigelas.jpg", alt: "Destaque 1" },
    { src: "src/assets/images/background/images/gpt.png", alt: "Destaque 2" },
    { src: "src/assets/images/background/images/tigelas.jpg", alt: "Destaque 3" },
  ];

  return (
    <ParallaxProvider>

      <div style={{ position: 'relative', height: '90vh', overflow: 'hidden' } }
       className="bg-[#6F08EF] min-h-[100dvh]">  
      
        <Parallax speed={-50}>
          <img 
            src="src/assets/images/background/images/tigelaroxa.webp" 
            alt="Parallax Background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              top: 0,
              left: 0,
              zIndex: 0,
                          
            }}
          />
          
        </Parallax>
        
        <div className="absolute inset-0 z-50 flex items-center justify-center px-4">
         <CarouselLite className="w-full max-w-4xl h-[260px] md:h-[380px] lg:h-[480px] mx-auto rounded-2xl shadow-2xl"

            slides={[
              { src: "src/assets/images/background/images/3tigelas.jpg", alt: "Destaque 1" },
              { src: "src/assets/images/background/images/gpt.png", alt: "Destaque 2" },
              { src: "src/assets/images/background/images/tigelas.jpg", alt: "Destaque 3" },
            ]}
          />
        </div>

     {/* Overlay para escurecer o fundo */}
     {/* Gradiente de transição */}

      <div
        className="
          absolute bottom-0 left-0 w-full
          h-20            /* ajuste a altura até ficar suave */
          bg-gradient-to-b
          from-transparent /* topo: transparente */
          to-purple-800    /* base: mesma cor do início da sua section */
          pointer-events-none
          z-0
        "
      >
      </div>
   </div> 

      {/* Seção de conteúdo */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-800 to-red-600 px-8">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Texto animado */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold">Sinta o sabor do Açaí do Aço</h1>
            <p className="text-lg md:text-xl">
              O melhor açaí da região, com ingredientes selecionados e qualidade premium.
            </p>
            <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-purple-100 transition">
              Peça Agora
            </button>
          </motion.div>

          {/* Imagem animada */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="src/assets/images/background/parallax/Website_Collections_HeaderBanner_SFP_1013x900_a01e4949-4e8b-4310-b28f-c4ae7602a820.webp"
              alt="Mulher comendo açaí"
              className="w-full max-w-md rounded-3xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>
      
    </ParallaxProvider>
  );
}
