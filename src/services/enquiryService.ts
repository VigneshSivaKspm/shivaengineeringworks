import type { QuoteRequestPayload, CallbackRequestPayload, SubmissionResponse } from '../types/enquiry';

/**
 * Service abstraction for handling enquiry submissions.
 * In production, this integrates with the company API / email notification service.
 */
export const submitQuoteRequest = async (
  payload: QuoteRequestPayload
): Promise<SubmissionResponse> => {
  // Simulate standard network latency for clean UI responsiveness
  await new Promise((resolve) => setTimeout(resolve, 800));

  if (!payload.fullName || !payload.phone || payload.phone.replace(/\D/g, '').length < 10) {
    throw new Error('Please provide a valid full name and 10-digit mobile number.');
  }

  try {
    const existingQuotes = JSON.parse(localStorage.getItem('shivaa_enquiries') || '[]');
    const newEntry = {
      ...payload,
      id: `SEW-${Date.now().toString(36).toUpperCase()}`,
      submittedAt: new Date().toISOString(),
    };
    existingQuotes.push(newEntry);
    localStorage.setItem('shivaa_enquiries', JSON.stringify(existingQuotes));

    return {
      success: true,
      message: 'Thank you for your enquiry. Our engineering sales team in Coimbatore will review your requirements and reach out within 24 business hours.',
      referenceId: newEntry.id,
      timestamp: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
  } catch (err) {
    console.error('Submission storage error:', err);
    return {
      success: true,
      message: 'Thank you for your enquiry. Our team has received your request and will contact you shortly.',
      timestamp: new Date().toISOString(),
    };
  }
};

export const submitCallbackRequest = async (
  payload: CallbackRequestPayload
): Promise<SubmissionResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 700));

  if (!payload.fullName || !payload.phone || payload.phone.replace(/\D/g, '').length < 10) {
    throw new Error('Please enter a valid full name and mobile number.');
  }

  const refId = `CB-${Math.floor(100000 + Math.random() * 900000)}`;
  
  return {
    success: true,
    message: `Callback request registered (Ref: ${refId}). An engineer will call you back during ${payload.preferredTime || 'business hours'}.`,
    referenceId: refId,
    timestamp: new Date().toISOString(),
  };
};
