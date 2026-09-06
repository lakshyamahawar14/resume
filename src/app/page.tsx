import Main from "@/components/main";
import SideBar from "@/components/sidebar";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen h-full flex flex-col lg:flex-row gap-0 justify-start items-start">
        <SideBar />
        <Main />
      </div>
    </main>
  );
}
