import type { Metadata } from "next";
import { PageStub } from "@/components/page-stub";

export const metadata: Metadata = {
  title: "Legacy of excellence",
};

export default function Page() {
  return (
    <PageStub
      index={"A — About"}
      title={"Legacy of excellence"}
      intro={"Four decades of engineering precision and industrial trust in Coimbatore — the story, the people and the facilities behind Renson Electronics."}
      sections={["Our story and 1986–today timeline","The people behind Renson","Division structure","Two units, one standard","Core principles"]}
    />
  );
}
