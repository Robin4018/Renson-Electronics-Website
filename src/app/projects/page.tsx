import type { Metadata } from "next";
import { PageStub } from "@/components/page-stub";

export const metadata: Metadata = {
  title: "Selected work",
};

export default function Page() {
  return (
    <PageStub
      index={"C — Projects"}
      title={"Selected work"}
      intro={"From large-scale industrial panel boards to precision-engineered voltage regulation systems — consistent quality across every batch."}
      sections={["Industrial powder coating","Voltage stabilizer builds","Advanced battery chargers","Colour and finish gallery","Request a quote"]}
    />
  );
}
