export type Testimonial = {
  name: string;
  location: string;
  quote: string;
};

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <article className="card h-full">
      <p className="text-sm text-slateText/90 leading-relaxed mb-4">
        “{testimonial.quote}”
      </p>
      <p className="text-sm font-semibold text-navy">{testimonial.name}</p>
      <p className="text-xs text-slateText/70">{testimonial.location}</p>
    </article>
  );
}
