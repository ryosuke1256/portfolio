import Head from 'next/head';
import Header from '../components/organisms/Header';
import SidebarNavigation from '../components/organisms/SidebarNavigation';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="This is my portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="pt-12 m-auto w-10/12 sm:w-7/12 md:w-7/12 lg:w-6/12 sm:max-w-md md:max-w-lg lg:max-w-xl">
        <div className="flex flex-col sm:flex-row sm:justify-between w-full text-center">
          <SidebarNavigation />
          <div className="flex flex-col w-full sm:text-right">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
