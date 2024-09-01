import Image from "next/image";
import { Header } from "../app/pages/Header";
import { Summary } from "../app/pages/Summary";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between ">
      <Header />
      <Summary />
    </main>
  );
}
