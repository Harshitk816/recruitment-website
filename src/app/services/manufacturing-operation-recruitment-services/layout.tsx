import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing & Operations Recruitment | Staffing Experts",
  description:
    "Expert manufacturing and operations recruitment services. Hire skilled professionals to streamline production and improve efficiency.",
  alternates: {
    canonical:
      "https://www.workeraa.co.in/services/manufacturing-operation-recruitment-services",
  },
};

export default function ManufacturingRecruitmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}