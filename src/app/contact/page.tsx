import type { Metadata } from "next";
import { PageStub } from "@/components/page-stub";

export const metadata: Metadata = {
  title: "Get in touch",
};

export default function Page() {
  return (
    <PageStub
      index={"D — Contact"}
      title={"Get in touch"}
      intro={"Ready to support your industrial requirements across our two Coimbatore units."}
      sections={["Enquiry form with service categories","Unit I — Kalapatti Road","Unit II — Vellanapatti","Facility map","Direct call, WhatsApp and email"]}
    />
  );
}
