import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import Hero from './components/Hero';
import type { Product } from './types/Product';
import {Footer} from './components/Footer';

function App() {
  const [products, setProducts] = useState<Product[]>([
    // aqui pode vir um fetch ou dados mock
    { id: 1, name: 'Açaí 300ml', description: 'Açaí puro', price: 12.9, inventoryStatus: 'disponivel', image: '/img/acai300.png' },
    { id: 2, name: 'Açaí 500ml', description: 'Açaí com granola', price: 18.5, inventoryStatus: 'disponivel', image: '/img/acai500.png' },
    // …
  ]);

  return (
    <div className="font-sans bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* Header fixo já foi estilizado em Header.tsx */}
      <Header />

      {/* Conteúdo principal, com padding para não ficar sob o Header */}
        <Hero />

      <Footer/>
    </div>
  );
}

export default App;
