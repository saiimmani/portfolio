import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { resume } from "@/lib/resume";

export default function ContactPage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <Section title="Contact" kicker="Reach Out">
        <div className="space-y-3 text-lg leading-8 text-neutral-800 dark:text-neutral-100">
          <p>Email: <a className="text-accent" href={`mailto:${resume.email}`}>{resume.email}</a></p>
          <p>LinkedIn: <a className="text-accent" href={resume.linkedin} target="_blank" rel="noreferrer">{resume.linkedin}</a></p>
          <p>GitHub: <a className="text-accent" href={resume.github} target="_blank" rel="noreferrer">{resume.github}</a></p>
          <p>Portfolio: <a className="text-accent" href="https://saiimmani.github.io/portfolio/" target="_blank" rel="noreferrer">https://saiimmani.github.io/portfolio/</a></p>
        </div>
      </Section>

      <Section title="Send a note" kicker="Mailto">
        <ContactForm email={resume.email} />
      </Section>
    </div>
  );
}
