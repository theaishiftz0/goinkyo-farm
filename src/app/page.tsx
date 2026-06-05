import ContactCTA from "@/components/ContactCTA";
import CropCards from "@/components/CropCards";
import DiaryList from "@/components/DiaryList";
import Greeting from "@/components/Greeting";
import Hero from "@/components/Hero";
import SalesInfo from "@/components/SalesInfo";
import { getDiaryList } from "@/lib/microcms";

export const revalidate = 60;

export default async function Home() {
  const diary = await getDiaryList({ limit: 3 });

  return (
    <>
      <Hero />
      <Greeting />
      <DiaryList entries={diary.contents} />
      <CropCards />
      <SalesInfo compact />
      <ContactCTA />
    </>
  );
}
