"use client";

import { useState, useActionState } from "react";
import { submitIntake, type IntakeFormState } from "@/app/actions/intake";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface IntakeFields {
  // Step 1
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dobMonth: string;
  dobDay: string;
  dobYear: string;
  gender: string;
  // Step 2
  heightFeet: string;
  heightInches: string;
  weight: string;
  healthConcerns: string;
  healthGoals: string;
  // Step 3
  usedPeptides: string;
  peptideMedications: string[];
  peptideDosage: string;
  peptideResults: string;
  // Step 4
  pregnantOrBreastfeeding: string;
  cancerDiagnosis: string;
  // Step 5
  labWork: string;
  // Step 6
  consentAgreed: boolean;
  signature: string;
  signatureAgreed: boolean;
}

const TOTAL_STEPS = 6;

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAYS = Array.from({ length: 31 }, (_, i) => String(i + 1));

const currentYear = new Date().getFullYear();
const YEARS = Array.from({ length: 100 }, (_, i) => String(currentYear - i));

const PEPTIDE_MEDICATION_OPTIONS = [
  "Semaglutide",
  "Tirzepatide",
  "Ozempic",
  "Mounjaro",
  "Wegovy",
  "Other",
];

const today = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const STEP_LABELS = [
  "Personal Info",
  "Physical Data",
  "Peptide History",
  "Contraindications",
  "Lab Information",
  "Consent",
];

// ---------------------------------------------------------------------------
// Shared field components
// ---------------------------------------------------------------------------

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-1 text-sm text-red-600">
      {message}
    </p>
  );
}

function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-slate-700">
      {children}
      {required && (
        <span className="ml-1 text-red-500" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
}

const inputClass =
  "mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30 disabled:bg-slate-50 disabled:text-slate-500";

const selectClass =
  "mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30";

const textareaClass =
  "mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/30 resize-y";

// ---------------------------------------------------------------------------
// Step components
// ---------------------------------------------------------------------------

function Step1({
  data,
  onChange,
  errors,
}: {
  data: IntakeFields;
  onChange: (field: keyof IntakeFields, value: string) => void;
  errors: Record<string, string>;
}) {
  return (
    <fieldset>
      <legend className="sr-only">Personal Information</legend>
      <div className="space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <Label htmlFor="firstName" required>
              First Name
            </Label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              value={data.firstName}
              onChange={(e) => onChange("firstName", e.target.value)}
              className={inputClass}
              aria-describedby={errors.firstName ? "firstName-error" : undefined}
            />
            <FieldError message={errors.firstName} />
          </div>
          <div>
            <Label htmlFor="lastName" required>
              Last Name
            </Label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              value={data.lastName}
              onChange={(e) => onChange("lastName", e.target.value)}
              className={inputClass}
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
            />
            <FieldError message={errors.lastName} />
          </div>
        </div>

        <div>
          <Label htmlFor="email" required>
            Email Address
          </Label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={data.email}
            onChange={(e) => onChange("email", e.target.value)}
            className={inputClass}
          />
          <FieldError message={errors.email} />
        </div>

        <div>
          <Label htmlFor="phone" required>
            Phone Number
          </Label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={data.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            className={inputClass}
          />
          <FieldError message={errors.phone} />
        </div>

        <div>
          <span className="block text-sm font-medium text-slate-700">
            Date of Birth
            <span className="ml-1 text-red-500" aria-hidden="true">*</span>
          </span>
          <div className="mt-1 grid grid-cols-3 gap-3">
            <div>
              <label htmlFor="dobMonth" className="sr-only">
                Month
              </label>
              <select
                id="dobMonth"
                name="dobMonth"
                value={data.dobMonth}
                onChange={(e) => onChange("dobMonth", e.target.value)}
                className={selectClass}
                aria-label="Birth month"
              >
                <option value="">Month</option>
                {MONTHS.map((m, i) => (
                  <option key={m} value={String(i + 1)}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="dobDay" className="sr-only">
                Day
              </label>
              <select
                id="dobDay"
                name="dobDay"
                value={data.dobDay}
                onChange={(e) => onChange("dobDay", e.target.value)}
                className={selectClass}
                aria-label="Birth day"
              >
                <option value="">Day</option>
                {DAYS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="dobYear" className="sr-only">
                Year
              </label>
              <select
                id="dobYear"
                name="dobYear"
                value={data.dobYear}
                onChange={(e) => onChange("dobYear", e.target.value)}
                className={selectClass}
                aria-label="Birth year"
              >
                <option value="">Year</option>
                {YEARS.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {(errors.dobMonth || errors.dobDay || errors.dobYear) && (
            <p role="alert" className="mt-1 text-sm text-red-600">
              Please select your complete date of birth.
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="gender">Gender</Label>
          <select
            id="gender"
            name="gender"
            value={data.gender}
            onChange={(e) => onChange("gender", e.target.value)}
            className={selectClass}
          >
            <option value="">Select…</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="prefer_not_to_say">Prefer not to say</option>
          </select>
        </div>
      </div>
    </fieldset>
  );
}

function Step2({
  data,
  onChange,
  errors,
}: {
  data: IntakeFields;
  onChange: (field: keyof IntakeFields, value: string) => void;
  errors: Record<string, string>;
}) {
  return (
    <fieldset>
      <legend className="sr-only">Physical Data</legend>
      <div className="space-y-5">
        <div>
          <span className="block text-sm font-medium text-slate-700">Height</span>
          <div className="mt-1 flex gap-3">
            <div className="flex items-center gap-2">
              <input
                id="heightFeet"
                name="heightFeet"
                type="number"
                min="1"
                max="9"
                placeholder="Ft"
                value={data.heightFeet}
                onChange={(e) => onChange("heightFeet", e.target.value)}
                className={`${inputClass} w-20`}
                aria-label="Height in feet"
              />
              <span className="text-sm text-slate-600">ft</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                id="heightInches"
                name="heightInches"
                type="number"
                min="0"
                max="11"
                placeholder="In"
                value={data.heightInches}
                onChange={(e) => onChange("heightInches", e.target.value)}
                className={`${inputClass} w-20`}
                aria-label="Height in inches"
              />
              <span className="text-sm text-slate-600">in</span>
            </div>
          </div>
        </div>

        <div>
          <Label htmlFor="weight">Weight</Label>
          <div className="flex items-center gap-2">
            <input
              id="weight"
              name="weight"
              type="number"
              min="1"
              placeholder="0"
              value={data.weight}
              onChange={(e) => onChange("weight", e.target.value)}
              className={`${inputClass} w-32`}
              aria-label="Weight in pounds"
            />
            <span className="text-sm text-slate-600">lbs</span>
          </div>
        </div>

        <div>
          <Label htmlFor="healthConcerns" required>
            Main Health Concerns
          </Label>
          <textarea
            id="healthConcerns"
            name="healthConcerns"
            required
            rows={4}
            placeholder="Describe your primary health concerns..."
            value={data.healthConcerns}
            onChange={(e) => onChange("healthConcerns", e.target.value)}
            className={textareaClass}
          />
          <FieldError message={errors.healthConcerns} />
        </div>

        <div>
          <Label htmlFor="healthGoals" required>
            Main Health Goals
          </Label>
          <textarea
            id="healthGoals"
            name="healthGoals"
            required
            rows={4}
            placeholder="What would you like to achieve through our program?"
            value={data.healthGoals}
            onChange={(e) => onChange("healthGoals", e.target.value)}
            className={textareaClass}
          />
          <FieldError message={errors.healthGoals} />
        </div>
      </div>
    </fieldset>
  );
}

function Step3({
  data,
  onChange,
  onMedicationToggle,
  errors,
}: {
  data: IntakeFields;
  onChange: (field: keyof IntakeFields, value: string) => void;
  onMedicationToggle: (med: string) => void;
  errors: Record<string, string>;
}) {
  const showConditional = data.usedPeptides === "yes";

  return (
    <fieldset>
      <legend className="sr-only">Peptide History</legend>
      <div className="space-y-5">
        <div>
          <span className="block text-sm font-medium text-slate-700" id="usedPeptides-label">
            Have you taken peptides or GLP medications in the past 3 months?
            <span className="ml-1 text-red-500" aria-hidden="true">*</span>
          </span>
          <div
            className="mt-2 flex gap-6"
            role="radiogroup"
            aria-labelledby="usedPeptides-label"
          >
            {["yes", "no"].map((val) => (
              <label key={val} className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  name="usedPeptides"
                  value={val}
                  checked={data.usedPeptides === val}
                  onChange={() => onChange("usedPeptides", val)}
                  className="h-4 w-4 border-slate-300 text-teal-600 focus:ring-teal-500"
                />
                <span className="text-sm text-slate-700 capitalize">{val === "yes" ? "Yes" : "No"}</span>
              </label>
            ))}
          </div>
          <FieldError message={errors.usedPeptides} />
        </div>

        {showConditional && (
          <div className="space-y-5 rounded-lg border border-teal-100 bg-teal-50/50 p-4">
            <div>
              <span className="block text-sm font-medium text-slate-700">
                Which medications have you taken?
              </span>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {PEPTIDE_MEDICATION_OPTIONS.map((med) => (
                  <label key={med} className="flex cursor-pointer items-center gap-2">
                    <input
                      type="checkbox"
                      name="peptideMedications"
                      value={med}
                      checked={data.peptideMedications.includes(med)}
                      onChange={() => onMedicationToggle(med)}
                      className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
                    />
                    <span className="text-sm text-slate-700">{med}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="peptideDosage">Dosage</Label>
              <input
                id="peptideDosage"
                name="peptideDosage"
                type="text"
                placeholder="e.g., 0.25 mg weekly"
                value={data.peptideDosage}
                onChange={(e) => onChange("peptideDosage", e.target.value)}
                className={inputClass}
              />
            </div>

            <div>
              <Label htmlFor="peptideResults">Results / Experience</Label>
              <textarea
                id="peptideResults"
                name="peptideResults"
                rows={3}
                placeholder="Describe your results and experience..."
                value={data.peptideResults}
                onChange={(e) => onChange("peptideResults", e.target.value)}
                className={textareaClass}
              />
            </div>
          </div>
        )}
      </div>
    </fieldset>
  );
}

function Step4({
  data,
  onChange,
  errors,
}: {
  data: IntakeFields;
  onChange: (field: keyof IntakeFields, value: string) => void;
  errors: Record<string, string>;
}) {
  const showNote =
    data.pregnantOrBreastfeeding === "yes" || data.cancerDiagnosis === "yes";

  return (
    <fieldset>
      <legend className="sr-only">Medical Contraindications</legend>
      <div className="space-y-6">
        <div>
          <span
            className="block text-sm font-medium text-slate-700"
            id="pregnant-label"
          >
            Are you currently pregnant or breastfeeding?
            <span className="ml-1 text-red-500" aria-hidden="true">*</span>
          </span>
          <div
            className="mt-2 flex flex-wrap gap-6"
            role="radiogroup"
            aria-labelledby="pregnant-label"
          >
            {[
              { value: "yes", label: "Yes" },
              { value: "no", label: "No" },
              { value: "na", label: "N/A" },
            ].map(({ value, label }) => (
              <label key={value} className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  name="pregnantOrBreastfeeding"
                  value={value}
                  checked={data.pregnantOrBreastfeeding === value}
                  onChange={() => onChange("pregnantOrBreastfeeding", value)}
                  className="h-4 w-4 border-slate-300 text-teal-600 focus:ring-teal-500"
                />
                <span className="text-sm text-slate-700">{label}</span>
              </label>
            ))}
          </div>
          <FieldError message={errors.pregnantOrBreastfeeding} />
        </div>

        <div>
          <span
            className="block text-sm font-medium text-slate-700"
            id="cancer-label"
          >
            Have you been diagnosed with cancer in the past 5 years?
            <span className="ml-1 text-red-500" aria-hidden="true">*</span>
          </span>
          <div
            className="mt-2 flex gap-6"
            role="radiogroup"
            aria-labelledby="cancer-label"
          >
            {["yes", "no"].map((val) => (
              <label key={val} className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  name="cancerDiagnosis"
                  value={val}
                  checked={data.cancerDiagnosis === val}
                  onChange={() => onChange("cancerDiagnosis", val)}
                  className="h-4 w-4 border-slate-300 text-teal-600 focus:ring-teal-500"
                />
                <span className="text-sm text-slate-700 capitalize">{val === "yes" ? "Yes" : "No"}</span>
              </label>
            ))}
          </div>
          <FieldError message={errors.cancerDiagnosis} />
        </div>

        {showNote && (
          <div
            role="alert"
            className="rounded-lg border border-amber-200 bg-amber-50 p-4"
          >
            <p className="text-sm font-medium text-amber-800">
              Please discuss with our medical team during your consultation.
            </p>
            <p className="mt-1 text-sm text-amber-700">
              A physician review is required before beginning any treatment
              protocol.
            </p>
          </div>
        )}
      </div>
    </fieldset>
  );
}

function Step5({
  data,
  onChange,
  errors,
}: {
  data: IntakeFields;
  onChange: (field: keyof IntakeFields, value: string) => void;
  errors: Record<string, string>;
}) {
  const labOptions = [
    { value: "yes_email", label: "Yes \u2014 I\u2019ll email them" },
    { value: "no_order", label: "No \u2014 I\u2019d like to order labs" },
    { value: "no_not_handy", label: "No \u2014 I have recent labs but not handy" },
  ];

  const showEmailNote = data.labWork === "yes_email";

  return (
    <fieldset>
      <legend className="sr-only">Lab Information</legend>
      <div className="space-y-5">
        <div>
          <span
            className="block text-sm font-medium text-slate-700"
            id="labWork-label"
          >
            Do you have current lab work to share?
            <span className="ml-1 text-red-500" aria-hidden="true">*</span>
          </span>
          <div
            className="mt-3 space-y-3"
            role="radiogroup"
            aria-labelledby="labWork-label"
          >
            {labOptions.map(({ value, label }) => (
              <label
                key={value}
                className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 bg-white p-3 hover:border-teal-400 hover:bg-teal-50/40 transition-colors"
              >
                <input
                  type="radio"
                  name="labWork"
                  value={value}
                  checked={data.labWork === value}
                  onChange={() => onChange("labWork", value)}
                  className="mt-0.5 h-4 w-4 border-slate-300 text-teal-600 focus:ring-teal-500"
                />
                <span className="text-sm text-slate-700">{label}</span>
              </label>
            ))}
          </div>
          <FieldError message={errors.labWork} />
        </div>

        {showEmailNote && (
          <div className="rounded-lg border border-teal-200 bg-teal-50 p-4">
            <p className="text-sm text-teal-800">
              Please email your lab results to{" "}
              <a
                href="mailto:Info@RevivalizeMD.com"
                className="font-medium underline hover:text-teal-600"
              >
                Info@RevivalizeMD.com
              </a>
              . Include your full name in the subject line.
            </p>
          </div>
        )}
      </div>
    </fieldset>
  );
}

function Step6({
  data,
  onChange,
  errors,
}: {
  data: IntakeFields;
  onChange: (field: keyof IntakeFields, value: string | boolean) => void;
  errors: Record<string, string>;
}) {
  return (
    <fieldset>
      <legend className="sr-only">Consent and Electronic Signature</legend>
      <div className="space-y-6">
        <div className="rounded-lg border border-slate-200 bg-cream-100 p-5">
          <p className="text-sm leading-relaxed text-slate-700">
            I understand that the information provided will be used for medical
            evaluation purposes. I consent to being contacted by Revivalize
            Performance Medicine regarding my health optimization goals. I
            understand that this form does not constitute a doctor-patient
            relationship until a formal consultation has been conducted.
          </p>
        </div>

        <div>
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              name="consentAgreed"
              value="true"
              checked={data.consentAgreed}
              onChange={(e) => onChange("consentAgreed", e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
              required
              aria-describedby={errors.consentAgreed ? "consent-error" : undefined}
            />
            <span className="text-sm text-slate-700">
              I have read and agree to the above consent statement
              <span className="ml-1 text-red-500" aria-hidden="true">*</span>
            </span>
          </label>
          <FieldError message={errors.consentAgreed} />
        </div>

        <div>
          <Label htmlFor="signature" required>
            Full Legal Name (Electronic Signature)
          </Label>
          <input
            id="signature"
            name="signature"
            type="text"
            autoComplete="name"
            required
            placeholder="Type your full legal name"
            value={data.signature}
            onChange={(e) => onChange("signature", e.target.value)}
            className={`${inputClass} font-medium italic`}
            aria-describedby={errors.signature ? "signature-error" : undefined}
          />
          <FieldError message={errors.signature} />
        </div>

        <div>
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              name="signatureAgreed"
              value="true"
              checked={data.signatureAgreed}
              onChange={(e) => onChange("signatureAgreed", e.target.checked)}
              className="mt-0.5 h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
              required
              aria-describedby={errors.signatureAgreed ? "sigAgreed-error" : undefined}
            />
            <span className="text-sm text-slate-700">
              I agree that my typed name above constitutes my electronic signature
              <span className="ml-1 text-red-500" aria-hidden="true">*</span>
            </span>
          </label>
          <FieldError message={errors.signatureAgreed} />
        </div>

        <div>
          <Label htmlFor="signatureDate">Date</Label>
          <input
            id="signatureDate"
            name="signatureDate"
            type="text"
            readOnly
            value={today}
            className={`${inputClass} cursor-default`}
          />
        </div>
      </div>
    </fieldset>
  );
}

// ---------------------------------------------------------------------------
// Progress bar
// ---------------------------------------------------------------------------

function ProgressBar({ step }: { step: number }) {
  const percent = Math.round((step / TOTAL_STEPS) * 100);

  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-medium text-teal-700">
          Step {step} of {TOTAL_STEPS}: {STEP_LABELS[step - 1]}
        </span>
        <span className="text-sm text-slate-500">{percent}%</span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-slate-200"
        role="progressbar"
        aria-valuenow={step}
        aria-valuemin={1}
        aria-valuemax={TOTAL_STEPS}
        aria-label={`Step ${step} of ${TOTAL_STEPS}`}
      >
        <div
          className="h-full rounded-full bg-teal-500 transition-all duration-300 ease-in-out"
          style={{ width: `${percent}%` }}
        />
      </div>
      <div className="mt-3 hidden sm:flex">
        {STEP_LABELS.map((label, i) => {
          const stepNum = i + 1;
          const isComplete = stepNum < step;
          const isCurrent = stepNum === step;
          return (
            <div
              key={label}
              className="flex flex-1 flex-col items-center gap-1"
              aria-current={isCurrent ? "step" : undefined}
            >
              <div
                className={`h-2 w-2 rounded-full transition-colors ${
                  isComplete
                    ? "bg-teal-500"
                    : isCurrent
                      ? "bg-teal-400 ring-2 ring-teal-200"
                      : "bg-slate-300"
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Success state
// ---------------------------------------------------------------------------

function SuccessState() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm text-center">
      <div
        className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-teal-100"
        aria-hidden="true"
      >
        <svg
          className="h-8 w-8 text-teal-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-2xl font-bold text-slate-900">
        Intake Form Received!
      </h2>
      <p className="mt-3 text-slate-600">
        Our medical team will review your information and reach out within 48
        hours.
      </p>
      <p className="mt-2 text-sm text-slate-500">
        If you have urgent questions, contact us at{" "}
        <a
          href="mailto:Info@RevivalizeMD.com"
          className="text-teal-700 hover:underline"
        >
          Info@RevivalizeMD.com
        </a>
        .
      </p>
      <div className="mt-8">
        <a
          href="/"
          className="inline-block rounded-lg bg-teal-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main form component
// ---------------------------------------------------------------------------

const initialFormData: IntakeFields = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dobMonth: "",
  dobDay: "",
  dobYear: "",
  gender: "",
  heightFeet: "",
  heightInches: "",
  weight: "",
  healthConcerns: "",
  healthGoals: "",
  usedPeptides: "",
  peptideMedications: [],
  peptideDosage: "",
  peptideResults: "",
  pregnantOrBreastfeeding: "",
  cancerDiagnosis: "",
  labWork: "",
  consentAgreed: false,
  signature: "",
  signatureAgreed: false,
};

const initialActionState: IntakeFormState = { status: "idle" };

export default function IntakeForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<IntakeFields>(initialFormData);
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});

  const [actionState, formAction, isPending] = useActionState(
    submitIntake,
    initialActionState
  );

  const serverErrors: Record<string, string> = {};
  for (const [key, val] of Object.entries(actionState.errors ?? {})) {
    if (val !== undefined) serverErrors[key] = val;
  }
  const errors = { ...serverErrors, ...clientErrors };

  function handleChange(field: keyof IntakeFields, value: string | boolean) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setClientErrors((prev) => {
      const next = { ...prev };
      delete next[field as string];
      return next;
    });
  }

  function handleMedicationToggle(med: string) {
    setFormData((prev) => {
      const meds = prev.peptideMedications.includes(med)
        ? prev.peptideMedications.filter((m) => m !== med)
        : [...prev.peptideMedications, med];
      return { ...prev, peptideMedications: meds };
    });
  }

  function validateStep(s: number): Record<string, string> {
    const errs: Record<string, string> = {};
    if (s === 1) {
      if (!formData.firstName.trim()) errs.firstName = "First name is required";
      if (!formData.lastName.trim()) errs.lastName = "Last name is required";
      if (!formData.email.trim()) errs.email = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
        errs.email = "Please enter a valid email";
      if (!formData.phone.trim()) errs.phone = "Phone number is required";
      if (!formData.dobMonth) errs.dobMonth = "Required";
      if (!formData.dobDay) errs.dobDay = "Required";
      if (!formData.dobYear) errs.dobYear = "Required";
    }
    if (s === 2) {
      if (!formData.healthConcerns.trim())
        errs.healthConcerns = "Please describe your main health concerns";
      if (!formData.healthGoals.trim())
        errs.healthGoals = "Please describe your main health goals";
    }
    if (s === 3) {
      if (!formData.usedPeptides)
        errs.usedPeptides = "Please select an option";
    }
    if (s === 4) {
      if (!formData.pregnantOrBreastfeeding)
        errs.pregnantOrBreastfeeding = "Please select an option";
      if (!formData.cancerDiagnosis)
        errs.cancerDiagnosis = "Please select an option";
    }
    if (s === 5) {
      if (!formData.labWork) errs.labWork = "Please select an option";
    }
    if (s === 6) {
      if (!formData.consentAgreed)
        errs.consentAgreed = "You must agree to the consent statement";
      if (!formData.signature.trim())
        errs.signature = "Please enter your full legal name";
      if (!formData.signatureAgreed)
        errs.signatureAgreed =
          "You must agree that your typed name is your electronic signature";
    }
    return errs;
  }

  function handleNext() {
    const errs = validateStep(step);
    if (Object.keys(errs).length > 0) {
      setClientErrors(errs);
      return;
    }
    setClientErrors({});
    setStep((s) => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handlePrev() {
    setClientErrors({});
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Build a hidden-field FormData for the server action
  function buildNativeFormData(): globalThis.FormData {
    const fd = new globalThis.FormData();
    fd.append("firstName", formData.firstName);
    fd.append("lastName", formData.lastName);
    fd.append("email", formData.email);
    fd.append("phone", formData.phone);
    fd.append("dobMonth", formData.dobMonth);
    fd.append("dobDay", formData.dobDay);
    fd.append("dobYear", formData.dobYear);
    fd.append("gender", formData.gender);
    fd.append("heightFeet", formData.heightFeet);
    fd.append("heightInches", formData.heightInches);
    fd.append("weight", formData.weight);
    fd.append("healthConcerns", formData.healthConcerns);
    fd.append("healthGoals", formData.healthGoals);
    fd.append("usedPeptides", formData.usedPeptides);
    fd.append(
      "peptideMedications",
      formData.peptideMedications.join(", ")
    );
    fd.append("peptideDosage", formData.peptideDosage);
    fd.append("peptideResults", formData.peptideResults);
    fd.append("pregnantOrBreastfeeding", formData.pregnantOrBreastfeeding);
    fd.append("cancerDiagnosis", formData.cancerDiagnosis);
    fd.append("labWork", formData.labWork);
    fd.append("consentAgreed", formData.consentAgreed ? "true" : "");
    fd.append("signature", formData.signature);
    fd.append("signatureAgreed", formData.signatureAgreed ? "true" : "");
    fd.append("signatureDate", today);
    return fd;
  }

  if (actionState.status === "success") {
    return <SuccessState />;
  }

  const stepTitles = [
    "Personal Information",
    "Physical Data",
    "Peptide History",
    "Medical Contraindications",
    "Lab Information",
    "Consent & Signature",
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Patient Intake Form
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          All fields marked with{" "}
          <span className="text-red-500" aria-label="asterisk">
            *
          </span>{" "}
          are required.
        </p>
      </div>

      <ProgressBar step={step} />

      <form
        action={formAction}
        onSubmit={(e) => {
          // Intercept the native submit on step 6, validate, then dispatch
          e.preventDefault();
          const errs = validateStep(6);
          if (Object.keys(errs).length > 0) {
            setClientErrors(errs);
            return;
          }
          setClientErrors({});
          // Dispatch via useActionState by calling formAction manually
          formAction(buildNativeFormData());
        }}
        noValidate
        aria-label="Patient intake form"
      >
        <h2 className="mb-5 text-lg font-semibold text-teal-700">
          {stepTitles[step - 1]}
        </h2>

        {step === 1 && (
          <Step1
            data={formData}
            onChange={(f, v) => handleChange(f, v as string)}
            errors={errors}
          />
        )}
        {step === 2 && (
          <Step2
            data={formData}
            onChange={(f, v) => handleChange(f, v as string)}
            errors={errors}
          />
        )}
        {step === 3 && (
          <Step3
            data={formData}
            onChange={(f, v) => handleChange(f, v as string)}
            onMedicationToggle={handleMedicationToggle}
            errors={errors}
          />
        )}
        {step === 4 && (
          <Step4
            data={formData}
            onChange={(f, v) => handleChange(f, v as string)}
            errors={errors}
          />
        )}
        {step === 5 && (
          <Step5
            data={formData}
            onChange={(f, v) => handleChange(f, v as string)}
            errors={errors}
          />
        )}
        {step === 6 && (
          <Step6
            data={formData}
            onChange={handleChange}
            errors={errors}
          />
        )}

        {actionState.status === "error" && !Object.keys(clientErrors).length && (
          <div
            role="alert"
            className="mt-5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
          >
            There were errors with your submission. Please review the form and
            try again.
          </div>
        )}

        <div className="mt-8 flex items-center justify-between gap-4 border-t border-slate-100 pt-6">
          {step > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
            >
              Previous
            </button>
          ) : (
            <div aria-hidden="true" />
          )}

          {step < TOTAL_STEPS ? (
            <button
              type="button"
              onClick={handleNext}
              className="rounded-lg bg-teal-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={isPending}
              className="rounded-lg bg-teal-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isPending ? "Submitting..." : "Submit"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
