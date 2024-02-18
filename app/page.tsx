import Sidebar from "@/components/sidebar/Sidebar";
import MainSection from "@/components/main/MainSection";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen ">
        <Sidebar />
        <MainSection />
      </div>
    </>
  );
}
