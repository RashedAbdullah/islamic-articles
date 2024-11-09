import ActiveNav from "./active-nav";


const Navigations = () => {
  return (
    <nav className="space-x-4 hidden md:inline-block">
      <ActiveNav href="/">হোম</ActiveNav>
      <ActiveNav href="/about">আমাদের সম্পর্কে</ActiveNav>
      <ActiveNav href="/articles">প্রবন্ধ</ActiveNav>
      <ActiveNav href="/authors">লেখকবৃন্দ</ActiveNav>
      <ActiveNav href="/contact">যোগাযোগ</ActiveNav>
    </nav>
  );
};

export default Navigations;
