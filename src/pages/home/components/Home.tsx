import React from 'react';
import Layout from '../../../components/common/layout/Layout';
import DiscountBanner from '../../../components/DiscountBanner';
import ProductHero from '../../../components/ProductHero';
import CustomerReviews from '../../../components/CustomerReviews';
import FAQ from '../../../components/FAQ';
import Notifications from '../../../components/notifications/Notifications';

const Home = () => {
  return (
    <div className="home">
      <DiscountBanner />
      <Layout>
        <ProductHero />
        <CustomerReviews />
        <FAQ />
      </Layout>
      <Notifications />
    </div>
  );
};

export default Home;