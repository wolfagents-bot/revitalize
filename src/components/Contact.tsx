"use client";

import { useActionState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import {
  submitContact,
  type ContactFormState,
} from "@/app/actions/contact";

const initialState: ContactFormState = { status: "idle" };

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-teal-100">
        {label}
        {required && <span className="ml-1 text-teal-200">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-lg border bg-white/10 px-4 py-3 text-white placeholder:text-teal-200/60 focus:outline-none focus:ring-1 transition-colors ${
          error
            ? "border-red-400 focus:border-red-400 focus:ring-red-400"
            : "border-white/20 focus:border-teal-300 focus:ring-teal-300"
        }`}
      />
      {error && (
        <p
          id={`${name}-error`}
          className="mt-1 flex items-center gap-1 text-xs text-red-300"
        >
          <AlertCircle className="h-3 w-3" />
          {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const [state, action, isPending] = useActionState(
    submitContact,
    initialState
  );

  return (
    <section id="contact" className="bg-cream-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-2xl border border-teal-700/20 bg-gradient-to-br from-teal-700 to-teal-800">
          <div className="grid lg:grid-cols-2">
            {/* Left - CTA */}
            <div className="p-10 lg:p-14">
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                Ready to <span className="text-teal-100">Optimize</span>?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-teal-100">
                Book your free consultation. We&apos;ll review your health
                history, discuss your goals, and determine if our program is the
                right fit.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-teal-100">
                  <Mail className="h-5 w-5 text-white" />
                  <span>hello@revitalize.health</span>
                </div>
                <div className="flex items-center gap-3 text-teal-100">
                  <Phone className="h-5 w-5 text-white" />
                  <span>(555) 000-0000</span>
                </div>
                <div className="flex items-center gap-3 text-teal-100">
                  <MapPin className="h-5 w-5 text-white" />
                  <span>Virtual & In-Person Available</span>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-white/10 p-10 lg:p-14">
              {state.status === "success" ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center">
                  <CheckCircle className="h-16 w-16 text-teal-200" />
                  <h3 className="text-xl font-semibold text-white">
                    Request Received!
                  </h3>
                  <p className="text-teal-100">
                    We&apos;ll be in touch within 24 hours to schedule your free
                    consultation.
                  </p>
                </div>
              ) : (
                <form
                  action={action}
                  aria-label="Contact form"
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="First Name"
                      name="firstName"
                      placeholder="John"
                      required
                      error={state.errors?.firstName}
                    />
                    <Field
                      label="Last Name"
                      name="lastName"
                      placeholder="Doe"
                      required
                      error={state.errors?.lastName}
                    />
                  </div>
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    error={state.errors?.email}
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    error={state.errors?.phone}
                  />
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-teal-100"
                    >
                      Note{" "}
                      <span className="font-normal text-teal-200/60">
                        (optional)
                      </span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      maxLength={500}
                      className="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-teal-200/60 focus:border-teal-300 focus:outline-none focus:ring-1 focus:ring-teal-300"
                      placeholder="Anything you'd like us to know beforehand..."
                    />
                  </div>

                  {state.status === "error" && !state.errors && (
                    <p className="flex items-center gap-2 text-sm text-red-300">
                      <AlertCircle className="h-4 w-4" />
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isPending}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3.5 text-sm font-semibold text-teal-700 transition-colors hover:bg-teal-50 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Book Free Consultation"
                    )}
                  </button>
                  <p className="text-center text-xs text-teal-200">
                    No obligation. We&apos;ll respond within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
