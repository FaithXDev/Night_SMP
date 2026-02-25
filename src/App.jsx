import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import Footer from './components/Footer';
import Toast from './components/Toast';
import ProductModal from './components/ProductModal';

function App() {
  const [toast, setToast] = useState({ visible: false, message: '' });
  const [modalProduct, setModalProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState({ type: 'home' });

  const showToast = (message) => {
    setToast({ visible: true, message });
  };

  const navigateToCategory = (categoryId) => {
    setCurrentPage({ type: 'category', category: categoryId });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateHome = () => {
    setCurrentPage({ type: 'home' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewDetails = (product) => {
    setModalProduct(product);
  };

  const handlePurchase = (product) => {
    setModalProduct(product);
  };

  return (
    <>
      <Navbar
        currentPage={currentPage}
        onNavigateHome={navigateHome}
        onNavigateCategory={navigateToCategory}
      />

      {currentPage.type === 'home' ? (
        <HomePage
          onSelectCategory={navigateToCategory}
          onToast={showToast}
        />
      ) : (
        <CategoryPage
          category={currentPage.category}
          onBack={navigateHome}
          onViewDetails={handleViewDetails}
          onPurchase={handlePurchase}
        />
      )}

      <Footer />

      <Toast
        message={toast.message}
        visible={toast.visible}
        onClose={() => setToast({ visible: false, message: '' })}
      />

      <ProductModal
        product={modalProduct}
        onClose={() => setModalProduct(null)}
      />
    </>
  );
}

export default App;
