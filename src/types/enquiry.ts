export interface QuoteRequestPayload {
  productName?: string;
  productSlug?: string;
  fullName: string;
  phone: string;
  email?: string;
  companyName?: string;
  city?: string;
  quantity?: string;
  message: string;
  sourcePage?: string;
}

export interface CallbackRequestPayload {
  fullName: string;
  phone: string;
  preferredTime?: string;
  productInterest?: string;
  message?: string;
}

export interface SubmissionResponse {
  success: boolean;
  message: string;
  referenceId?: string;
  timestamp: string;
}
