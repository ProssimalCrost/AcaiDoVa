import './App.css';
import { Header } from './components/Header';
import Hero from './components/Hero';
import {Footer} from './components/Footer';


function App() {

  return (
    <div className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* Header fixo já foi estilizado em Header.tsx */}
      <Header />

      {/* Conteúdo principal, com padding para não ficar sob o Header */}
      <Hero />
      
      {/* Rodapé */}
      <Footer/>
    </div>
  );
}

export default App;
