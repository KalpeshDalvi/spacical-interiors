import Link from "next/link";

export type Service = {
  title: string;
  description: string;
  slug: string;
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card h-full flex flex-col">
      <h3 className="font-heading text-xl text-navy mb-3">{service.title}</h3>
      <p className="text-sm text-slateText/90 flex-1 leading-relaxed">
        {service.description}
      </p>
      <Link
        href={`/services#${service.slug}`}
        className="mt-4 text-sm font-semibold text-navy hover:underline"
      >
        Learn more →
      </Link>
    </article>
  );
}
