export default function Section({
  id,
  heading,
  subheading,
  children,
  background = "white",
}: {
  id?: string;
  heading?: string;
  subheading?: string;
  children: React.ReactNode;
  background?: "white" | "light";
}) {
  return (
    <section
      id={id}
      className={`section ${background === "light" ? "bg-lightBg" : "bg-white"}`}
    >
      <div className="section-inner">
        {heading && (
          <div className="mb-10">
            <h2 className="section-heading">{heading}</h2>
            {subheading && (
              <p className="section-subheading">{subheading}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
