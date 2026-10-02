import { db } from './firebase';
import { collection, addDoc, query, where, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';

export interface ContactEnquiry {
  id?: string;
  name: string;
  email: string;
  organisation: string;
  service: string;
  message: string;
  consent: boolean;
  createdAt?: Date;
  status?: 'new' | 'reviewed' | 'responded';
}

// Save contact form enquiry to Firestore
export async function saveContactEnquiry(enquiry: Omit<ContactEnquiry, 'id' | 'createdAt'>): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, 'enquiries'), {
      ...enquiry,
      createdAt: new Date(),
      status: 'new',
    });
    return docRef.id;
  } catch (error) {
    console.error('Error saving enquiry:', error);
    throw error;
  }
}

// Get all enquiries (admin only)
export async function getEnquiries(): Promise<ContactEnquiry[]> {
  try {
    const q = query(collection(db, 'enquiries'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    } as ContactEnquiry));
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    throw error;
  }
}

// Get enquiries by status
export async function getEnquiriesByStatus(status: string): Promise<ContactEnquiry[]> {
  try {
    const q = query(collection(db, 'enquiries'), where('status', '==', status));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    } as ContactEnquiry));
  } catch (error) {
    console.error('Error fetching enquiries by status:', error);
    throw error;
  }
}

// Update enquiry status
export async function updateEnquiryStatus(id: string, status: 'new' | 'reviewed' | 'responded'): Promise<void> {
  try {
    const enquiryRef = doc(db, 'enquiries', id);
    await updateDoc(enquiryRef, { status });
  } catch (error) {
    console.error('Error updating enquiry status:', error);
    throw error;
  }
}

// Delete enquiry
export async function deleteEnquiry(id: string): Promise<void> {
  try {
    await deleteDoc(doc(db, 'enquiries', id));
  } catch (error) {
    console.error('Error deleting enquiry:', error);
    throw error;
  }
}

// Save content updates
export interface ContentPage {
  id?: string;
  slug: string;
  title: string;
  content: string;
  updatedAt?: Date;
}

export async function saveContentPage(page: ContentPage): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, 'pages'), {
      ...page,
      updatedAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error saving page:', error);
    throw error;
  }
}

// Get page by slug
export async function getPageBySlug(slug: string): Promise<ContentPage | null> {
  try {
    const q = query(collection(db, 'pages'), where('slug', '==', slug));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length === 0) return null;
    return {
      id: querySnapshot.docs[0].id,
      ...querySnapshot.docs[0].data(),
    } as ContentPage;
  } catch (error) {
    console.error('Error fetching page:', error);
    throw error;
  }
}
