import Main from "@/components/main";

export default function Home() {
  console.log('page.tsx rendered!');
  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full">
      <Main />
    </div>
  );
}