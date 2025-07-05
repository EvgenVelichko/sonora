export interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

export class ContactsService {
  static async submitContact(contact: Omit<Contact, 'id' | 'createdAt'>): Promise<Contact> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ...contact,
          id: Math.random().toString(36).substr(2, 9),
          createdAt: new Date()
        });
      }, 1000);
    });
  }

  static async getContacts(): Promise<Contact[]> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([]);
      }, 500);
    });
  }
}