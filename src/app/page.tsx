import SideBar from "@/components/sidebar";
import Main from "@/components/main";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full">
      <SideBar />
      <div className="flex-1 flex justify-center w-full min-w-0">
        <Main />
      </div>
    </div>
  );
}