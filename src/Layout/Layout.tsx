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
      <div className="text-center">
        <main className="inline-block pt-12">
          <div className="flex flex-col sm:flex-row w-full text-center">
            <SidebarNavigation />
            <div className="flex flex-col">{children}</div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
