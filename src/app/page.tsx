import Main from "@/components/main";
import SideBar from "@/components/sidebar";
import TextAnimation from "@/components/textanimation";

export default function Home() {
  return (
    <main>
      <TextAnimation />
      <div className="min-h-screen h-full flex flex-col lg:flex-row gap-0 justify-start items-start">
        <SideBar />
        <Main />
      </div>
    </main>
  );
}
