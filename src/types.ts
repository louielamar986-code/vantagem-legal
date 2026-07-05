/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  imageUrl: string;
  bio: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormState {
  name: string;
  email: string;
  phone: string;
  area: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}
