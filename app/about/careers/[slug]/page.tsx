import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { jobs, getJob } from "@/lib/job-data";
import CareerDetailContent from "@/components/sections/about/CareerDetailContent";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return jobs.map((j) => ({ slug: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return { title: "Role not found" };
  return {
    title: `${job.title} ${job.titleHighlight} | Careers | Formezy`,
    description: job.description[0],
  };
}

export default async function CareerDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  return <CareerDetailContent job={job} />;
}
