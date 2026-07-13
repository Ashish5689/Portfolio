import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { LoaderCircle, Send } from "lucide-react";
import { useRef, useState } from "react";
import { socialLinks } from "@/data/portfolio";
import { Button } from "./ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof ContactFormData, string>>;
type SubmitStatus = "idle" | "submitting" | "success" | "error";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const validateForm = (data: ContactFormData): FormErrors => {
  const errors: FormErrors = {};
  if (data.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.email = "Please enter a valid email address.";
  if (data.subject.trim().length < 3) errors.subject = "Please add a short subject.";
  if (data.message.trim().length < 10) errors.message = "Please share at least a few details.";
  return errors;
};

const MagneticEmail = () => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 260, damping: 22 });
  const smoothY = useSpring(y, { stiffness: 260, damping: 22 });
  const reduceMotion = useReducedMotion();

  const handlePointerMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (reduceMotion || !linkRef.current) return;
    const bounds = linkRef.current.getBoundingClientRect();
    x.set((event.clientX - (bounds.left + bounds.width / 2)) * 0.08);
    y.set((event.clientY - (bounds.top + bounds.height / 2)) * 0.14);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={linkRef}
      className="contact-email"
      href={socialLinks.email}
      style={{ x: smoothX, y: smoothY }}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      onBlur={reset}
    >
      ashisheduims@gmail.com
    </motion.a>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      const response = await fetch("https://formspree.io/f/xovjrrlp", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Contact form request failed");
      setFormData(initialFormData);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <FieldGroup>
        <div className="contact-form__row">
          <Field data-invalid={Boolean(errors.name)}>
            <FieldLabel htmlFor="contact-name">Name</FieldLabel>
            <Input
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              value={formData.name}
              onChange={(event) => updateField("name", event.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
            />
            <FieldError id="contact-name-error">{errors.name}</FieldError>
          </Field>
          <Field data-invalid={Boolean(errors.email)}>
            <FieldLabel htmlFor="contact-email">Email</FieldLabel>
            <Input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={(event) => updateField("email", event.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
            />
            <FieldError id="contact-email-error">{errors.email}</FieldError>
          </Field>
        </div>

        <Field data-invalid={Boolean(errors.subject)}>
          <FieldLabel htmlFor="contact-subject">Subject</FieldLabel>
          <Input
            id="contact-subject"
            name="subject"
            placeholder="What would you like to discuss?"
            value={formData.subject}
            onChange={(event) => updateField("subject", event.target.value)}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? "contact-subject-error" : undefined}
          />
          <FieldError id="contact-subject-error">{errors.subject}</FieldError>
        </Field>

        <Field data-invalid={Boolean(errors.message)}>
          <FieldLabel htmlFor="contact-message">Message</FieldLabel>
          <Textarea
            id="contact-message"
            name="message"
            rows={6}
            placeholder="Tell me about the role, system, or problem you’re working on."
            value={formData.message}
            onChange={(event) => updateField("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
          />
          <FieldError id="contact-message-error">{errors.message}</FieldError>
        </Field>
      </FieldGroup>

      <div className="contact-form__submit">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? (
            <>
              <LoaderCircle data-icon="inline-start" className="animate-spin" />
              Sending
            </>
          ) : (
            <>
              Send message
              <Send data-icon="inline-end" />
            </>
          )}
        </Button>
        <div className="contact-form__status" aria-live="polite">
          {status === "success" ? <p role="status">Thanks—your message has been sent.</p> : null}
          {status === "error" ? <p role="alert">The message could not be sent. Please email me directly instead.</p> : null}
        </div>
      </div>
    </form>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="page-container">
        <div className="contact-cta">
          <h2 id="contact-title">Have a system to build?</h2>
          <p>I’m open to backend and full-stack engineering opportunities.</p>
          <MagneticEmail />
          <div className="contact-links">
            <a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="/Ashish-Jha-Resume.pdf" download="Ashish-Jha-Resume.pdf">Download résumé</a>
          </div>
        </div>

        <div className="contact-workspace">
          <div className="contact-form-intro">
            <span>Start a conversation</span>
            <p>Share a little context and I’ll get back to you as soon as I can.</p>
          </div>
          <ContactForm />
        </div>

        <div className="footer-circuit" aria-hidden="true"><span /></div>

        <footer className="site-footer">
          <div>
            <strong>Ashish Jha</strong>
            <p>Backend-focused full-stack engineer building reliable systems that scale.</p>
          </div>
          <div>
            <span>Explore</span>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#about">Capabilities</a>
          </div>
          <div>
            <span>Connect</span>
            <a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={socialLinks.email}>Email</a>
          </div>
          <p className="footer-location">Ghaziabad, India</p>
        </footer>
        <p className="copyright">Ashish Jha · 2026</p>
      </div>
    </section>
  );
};

export default ContactSection;
