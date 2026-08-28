import type { Metadata } from "next";
import { PageStub } from "@/components/page-stub";

export const metadata: Metadata = {
  title: "Industrial services",
};

export default function Page() {
  return (
    <PageStub
      index={"B — Services"}
      title={"Industrial services"}
      intro={"From precision surface coating to reliable electrical manufacturing — all under one roof in Coimbatore."}
      sections={["Powder coating and the 10-step process","Unit comparison and capacity","Voltage stabilizers 0.2–10 KVA","Battery chargers and after-sales","Components we handle"]}
    />
  );
}
