import Header from "./Header";
import HeaderSidebar from "./HeaderSidebar";
export default function Layout({ children }) {
  return (
    <div className="wraper">
      <HeaderSidebar />
      <div className="content_wraper">
        <Header />
        <main className="inner_content">{children}</main>
      </div>
    </div>
  );
}
