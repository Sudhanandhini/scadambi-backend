const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const sendContact = async (data) => {
  try {
    console.log('🚀 Sending to:', `${API_URL}/send-contact`);
    
    const response = await fetch(`${API_URL}/send-contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to send');
    }
    
    return result;
  } catch (error) {
    console.error('❌ Error:', error);
    throw error;
  }
};

export default sendContact;