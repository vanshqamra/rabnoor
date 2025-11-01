import { ChangeEvent, FormEvent, useState } from 'react';
import Head from 'next/head';
import { textContent } from '../data/strings';

interface AppointmentFormState {
  name: string;
  phone: string;
  email: string;
  reason: string;
  preferredDate: string;
  preferredTime: string;
  visitType: 'clinic' | 'online';
}

const defaultState: AppointmentFormState = {
  name: '',
  phone: '',
  email: '',
  reason: '',
  preferredDate: '',
  preferredTime: '',
  visitType: 'clinic',
};

const AppointmentPage = () => {
  const [formState, setFormState] = useState(defaultState);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus('success');
        setFormState(defaultState);
      } else {
        throw new Error('Request failed');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>{textContent.seo.appointmentTitle}</title>
        <meta name="description" content={textContent.appointment.description} />
      </Head>
      <section className="section">
        <div className="container">
          <h1 className="section-title">{textContent.appointment.title}</h1>
          <p>{textContent.appointment.description}</p>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{textContent.appointment.name}</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">{textContent.appointment.phone}</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formState.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">{textContent.appointment.email}</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="reason">{textContent.appointment.reason}</label>
              <textarea
                id="reason"
                name="reason"
                value={formState.reason}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="preferredDate">{textContent.appointment.preferredDate}</label>
              <input
                id="preferredDate"
                name="preferredDate"
                type="date"
                value={formState.preferredDate}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="preferredTime">{textContent.appointment.preferredTime}</label>
              <input
                id="preferredTime"
                name="preferredTime"
                type="time"
                value={formState.preferredTime}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="visitType">{textContent.appointment.visitType}</label>
              <select id="visitType" name="visitType" value={formState.visitType} onChange={handleChange}>
                <option value="clinic">{textContent.appointment.visitOptions.clinic}</option>
                <option value="online">{textContent.appointment.visitOptions.online}</option>
              </select>
            </div>
            <button className="button" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting…' : textContent.appointment.submit}
            </button>
            {status === 'success' && <p className="badge">{textContent.appointment.success}</p>}
            {status === 'error' && <p className="badge">{textContent.appointment.error}</p>}
          </form>
        </div>
      </section>
    </>
  );
};

export default AppointmentPage;
