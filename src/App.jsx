import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import TicketPage from './components/TicketPage';
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

  const navigateToTicket = () => {
    setCurrentPage({ type: 'ticket' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewDetails = (product) => {
    setModalProduct(product);
  };

  const handlePurchase = (product) => {
    setModalProduct(product);
  };

  const renderPage = () => {
    switch (currentPage.type) {
      case 'category':
        return (
          <CategoryPage
            category={currentPage.category}
            onBack={navigateHome}
            onViewDetails={handleViewDetails}
            onPurchase={handlePurchase}
          />
        );
      case 'ticket':
        return (
          <TicketPage
            onBack={navigateHome}
            onToast={showToast}
          />
        );
      default:
        return (
          <HomePage
            onSelectCategory={navigateToCategory}
            onToast={showToast}
          />
        );
    }
  };

  return (
    <>
      <Navbar
        currentPage={currentPage}
        onNavigateHome={navigateHome}
        onNavigateCategory={navigateToCategory}
      />

      {renderPage()}

      <Footer onNavigateTicket={navigateToTicket} />

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
