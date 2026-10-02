import { useState } from 'react';

const initialFormState = {
  name: '',
  email: '',
  organisation: '',
  service: '',
  message: '',
  consent: false,
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!formData.name.trim()) nextErrors.name = 'Full name is required.';
    if (!formData.email.trim()) nextErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Please enter a valid email address.';
    if (!formData.service.trim()) nextErrors.service = 'Please select a service of interest.';
    if (!formData.message.trim()) nextErrors.message = 'Please enter your enquiry description.';
    if (!formData.consent) nextErrors.consent = 'Please provide consent before submitting.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      setStatus({ type: 'error', message: 'Please correct the highlighted fields and try again.' });
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      setStatus({
        type: 'info',
        message: 'Form submission is ready for integration. Add NEXT_PUBLIC_FORMSPREE_ENDPOINT to send enquiries securely to your preferred service.'
      });
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setStatus({ type: 'success', message: 'Your enquiry has been submitted successfully.' });
      setFormData(initialFormState);
      setErrors({});
    } catch {
      setStatus({ type: 'error', message: 'We could not submit your enquiry. Please try again or contact FINVALUE ADVISORY directly.' });
    }
  };

  const updateField = (field: keyof typeof initialFormState, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  return (
    <form onSubmit={handleSubmit} className="card-surface p-6 md:p-8">
      <h2 className="text-2xl font-semibold text-navy">Send an enquiry</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-navy">Full name</label>
          <input value={formData.name} onChange={(e) => updateField('name', e.target.value)} className="input-field" />
          {errors.name ? <p className="mt-2 text-sm text-red-600">{errors.name}</p> : null}
        </div>

        <div>
          <label className="text-sm font-medium text-navy">Email address</label>
          <input type="email" value={formData.email} onChange={(e) => updateField('email', e.target.value)} className="input-field" />
          {errors.email ? <p className="mt-2 text-sm text-red-600">{errors.email}</p> : null}
        </div>

        <div>
          <label className="text-sm font-medium text-navy">Business or organisation</label>
          <input value={formData.organisation} onChange={(e) => updateField('organisation', e.target.value)} className="input-field" />
        </div>

        <div>
          <label className="text-sm font-medium text-navy">Service of interest</label>
          <select value={formData.service} onChange={(e) => updateField('service', e.target.value)} className="input-field">
            <option value="">Select a service</option>
            <option value="Accounting & Bookkeeping">Accounting &amp; Bookkeeping</option>
            <option value="Tax & TIN Support">Tax &amp; TIN Support</option>
            <option value="Audit & Assurance Support">Audit &amp; Assurance Support</option>
            <option value="Internal Audit, Risk & Internal Controls">Internal Audit, Risk &amp; Internal Controls</option>
            <option value="Financial Advisory">Financial Advisory</option>
            <option value="Business Consulting">Business Consulting</option>
            <option value="Management Reporting & Business Intelligence">Management Reporting &amp; Business Intelligence</option>
          </select>
          {errors.service ? <p className="mt-2 text-sm text-red-600">{errors.service}</p> : null}
        </div>
      </div>

      <div className="mt-6">
        <label className="text-sm font-medium text-navy">Enquiry description</label>
        <textarea value={formData.message} onChange={(e) => updateField('message', e.target.value)} rows={6} className="input-field" />
        {errors.message ? <p className="mt-2 text-sm text-red-600">{errors.message}</p> : null}
      </div>

      <div className="mt-6 flex items-start gap-3">
        <input
          type="checkbox"
          checked={formData.consent}
          onChange={(e) => updateField('consent', e.target.checked)}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-gold focus:ring-gold"
        />
        <label className="text-sm leading-6 text-slate-700">
          I consent to FINVALUE ADVISORY contacting me regarding my enquiry and processing the information provided.
        </label>
      </div>
      {errors.consent ? <p className="mt-2 text-sm text-red-600">{errors.consent}</p> : null}

      {status ? (
        <div className={status.type === 'success' ? 'mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700' : status.type === 'error' ? 'mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700' : 'mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-700'}>
          {status.message}
        </div>
      ) : null}

      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        Submit enquiry
      </button>
    </form>
  );
}
