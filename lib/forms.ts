export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

export interface ContactFormPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  country?: string;
  message: string;
}

export interface QuoteRequestPayload {
  product: string;
  name: string;
  email: string;
  company?: string;
  quantity: string;
  destination?: string;
  notes?: string;
}

export interface QuoteLineItem {
  id?: string;
  marbleSlug: string;
  quantity: string;
  thickness?: string;
  destination?: string;
}

export interface QuoteBuilderPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  notes?: string;
  lineItems: QuoteLineItem[];
}

export interface ApiSuccessResponse {
  id: string;
  message: string;
  receivedAt: string;
}

export interface ApiErrorResponse {
  message: string;
}

export async function submitForm<Payload, Response = ApiSuccessResponse>(
  url: string,
  payload: Payload
): Promise<Response> {
  let response: Response | ApiErrorResponse | null = null;
  let ok = false;

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    ok = res.ok;
    response = await res.json().catch(() => null);
  } catch (error) {
    throw new Error('Unable to reach Rab Noor servers. Please try again.');
  }

  if (!ok || !response) {
    throw new Error('Unable to submit your request. Please try again.');
  }

  if (!ok) {
    throw new Error((response as ApiErrorResponse).message || 'Submission failed.');
  }

  return response as Response;
}
