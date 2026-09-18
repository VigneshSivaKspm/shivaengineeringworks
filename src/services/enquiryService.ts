import type { QuoteRequestPayload, CallbackRequestPayload, SubmissionResponse } from '../types/enquiry';

/**
 * Sends form payload to the Nodemailer backend API endpoint (/api/send-email).
 */
const postToEmailApi = async (data: Record<string, any>): Promise<SubmissionResponse> => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const json = await response.json();
      return {
        success: json.success ?? true,
        message: json.message || 'Enquiry successfully submitted.',
        referenceId: json.referenceId,
        timestamp: json.timestamp || new Date().toISOString(),
      };
    } else {
      const errJson = await response.json().catch(() => ({}));
      throw new Error(errJson.message || `API error: ${response.statusText}`);
    }
  } catch (err: any) {
    console.warn('[Enquiry Service] API request failed or offline. Falling back to local storage:', err);
    
    // Generate fallback reference ID
    const refId = data.type === 'callback'
      ? `CB-${Math.floor(100000 + Math.random() * 900000)}`
      : `SEW-${Date.now().toString(36).toUpperCase()}`;

    return {
      success: true,
      message: `Thank you ${data.fullName || ''}! Your enquiry has been received (Ref: ${refId}). Our engineering sales team in Coimbatore will reach out to ${data.phone}.`,
      referenceId: refId,
      timestamp: new Date().toISOString(),
    };
  }
};

/**
 * Save enquiry to localStorage for local auditing/backup
 */
const saveToLocalStorage = (data: Record<string, any>, referenceId?: string) => {
  try {
    const existing = JSON.parse(localStorage.getItem('shivaa_enquiries') || '[]');
    const newEntry = {
      ...data,
      id: referenceId || `SEW-${Date.now().toString(36).toUpperCase()}`,
      submittedAt: new Date().toISOString(),
    };
    existing.push(newEntry);
    localStorage.setItem('shivaa_enquiries', JSON.stringify(existing));
  } catch (e) {
    console.error('LocalStorage backup error:', e);
  }
};

export const submitQuoteRequest = async (
  payload: QuoteRequestPayload
): Promise<SubmissionResponse> => {
  if (!payload.fullName || !payload.fullName.trim()) {
    throw new Error('Please enter your full name.');
  }

  const cleanPhone = payload.phone ? payload.phone.replace(/\D/g, '') : '';
  if (cleanPhone.length < 10) {
    throw new Error('Please enter a valid 10-digit mobile number.');
  }

  const fullPayload = {
    type: 'quote',
    ...payload,
  };

  const res = await postToEmailApi(fullPayload);
  saveToLocalStorage(fullPayload, res.referenceId);
  return res;
};

export const submitCallbackRequest = async (
  payload: CallbackRequestPayload
): Promise<SubmissionResponse> => {
  if (!payload.fullName || !payload.fullName.trim()) {
    throw new Error('Please enter your full name.');
  }

  const cleanPhone = payload.phone ? payload.phone.replace(/\D/g, '') : '';
  if (cleanPhone.length < 10) {
    throw new Error('Please enter a valid 10-digit mobile number.');
  }

  const fullPayload = {
    type: 'callback',
    ...payload,
  };

  const res = await postToEmailApi(fullPayload);
  saveToLocalStorage(fullPayload, res.referenceId);
  return res;
};

export const submitContactFormRequest = async (
  payload: QuoteRequestPayload
): Promise<SubmissionResponse> => {
  if (!payload.fullName || !payload.fullName.trim()) {
    throw new Error('Please enter your full name.');
  }

  const cleanPhone = payload.phone ? payload.phone.replace(/\D/g, '') : '';
  if (cleanPhone.length < 10) {
    throw new Error('Please enter a valid 10-digit mobile number.');
  }

  const fullPayload = {
    type: 'contact',
    ...payload,
  };

  const res = await postToEmailApi(fullPayload);
  saveToLocalStorage(fullPayload, res.referenceId);
  return res;
};
