require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const db = require('./db'); // Import database connection

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Section to email mapping
const sectionEmails = {
  'play-school': 'support@sunsys.in',
  'pre-primary': 'sunsys06@gmail.com',
  'icse-primary': 'sudhanandhini@sunsys.in',
  'icse-high': 'sudhanandhinis@gmail.com',
  'high-school': 'manjunatha.n@sunsys.in',
  'pu-college': 'maheshkumar.d.sunsys@gmail.com',
  'contact': 'dmahesh879@gmail.com'
};

// ============= CONTACT FORM ROUTE =============
app.post('/api/send-contact', async (req, res) => {
  try {
    console.log('📨 Received contact form:', req.body);
    
    const { section, name, email, phone, mobile, subject, message, extra } = req.body;

    if (!section || !name || !email) {
      return res.status(400).json({ success: false, message: 'Required fields missing' });
    }

    const recipientEmail = sectionEmails[section] || sectionEmails['contact'];
    console.log('📧 Sending to:', recipientEmail);

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    let htmlContent = `
      <div style="font-family: Arial; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 10px;">
        <div style="background: linear-gradient(135deg, #0F2A4A, #1a4d7a); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
          <h2>S. Cadambi Education Center</h2>
          <p>${section.toUpperCase()}</p>
        </div>
        <div style="padding: 30px; background: #f9f9f9;">
          <h3 style="color: #0F2A4A; border-bottom: 2px solid #FDB913;">New Contact Form</h3>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td style="padding: 10px; background: #fff; border: 1px solid #ddd; font-weight: bold;">Name:</td><td style="padding: 10px; background: #fff; border: 1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding: 10px; background: #f5f5f5; border: 1px solid #ddd; font-weight: bold;">Email:</td><td style="padding: 10px; background: #f5f5f5; border: 1px solid #ddd;">${email}</td></tr>
            ${phone ? `<tr><td style="padding: 10px; background: #fff; border: 1px solid #ddd; font-weight: bold;">Phone:</td><td style="padding: 10px; background: #fff; border: 1px solid #ddd;">${phone}</td></tr>` : ''}
            ${mobile ? `<tr><td style="padding: 10px; background: #f5f5f5; border: 1px solid #ddd; font-weight: bold;">Mobile:</td><td style="padding: 10px; background: #f5f5f5; border: 1px solid #ddd;">${mobile}</td></tr>` : ''}
            ${subject ? `<tr><td style="padding: 10px; background: #fff; border: 1px solid #ddd; font-weight: bold;">Subject:</td><td style="padding: 10px; background: #fff; border: 1px solid #ddd;">${subject}</td></tr>` : ''}
            ${extra ? Object.keys(extra).map(key => `<tr><td style="padding: 10px; background: #f5f5f5; border: 1px solid #ddd; font-weight: bold;">${key}:</td><td style="padding: 10px; background: #f5f5f5; border: 1px solid #ddd;">${extra[key]}</td></tr>`).join('') : ''}
            <tr><td style="padding: 10px; background: #fff; border: 1px solid #ddd; font-weight: bold;">Message:</td><td style="padding: 10px; background: #fff; border: 1px solid #ddd;">${message || 'No message'}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #FDB913; border-radius: 5px; text-align: center;">
            <p style="margin: 0; color: #0F2A4A; font-weight: bold;">📅 ${new Date().toLocaleString('en-IN')}</p>
          </div>
        </div>
      </div>
    `;

    const info = await transporter.sendMail({
      from: `"S. Cadambi Contact" <${process.env.EMAIL_USER}>`,
      to: recipientEmail,
      replyTo: email,
      subject: subject || `New Contact - ${name}`,
      html: htmlContent
    });

    console.log('✅ Email sent:', info.messageId);
    res.json({ success: true, message: 'Message sent successfully!' });
    
  } catch (error) {
    console.error('❌ Contact form error:', error);
    res.status(500).json({ success: false, message: 'Failed to send message: ' + error.message });
  }
});

// ============= CHATBOT ROUTES =============

// Create new chatbot conversation
app.post('/api/chatbot/conversation', async (req, res) => {
  try {
    const { section = 'main' } = req.body;
    const sessionId = require('crypto').randomUUID();
    
    console.log('🤖 Creating conversation for section:', section);
    
    const [result] = await db.query(
      'INSERT INTO chatbot_conversations (session_id, section) VALUES (?, ?)',
      [sessionId, section]
    );
    
    console.log('✅ Conversation created with ID:', result.insertId);
    
    res.json({ 
      conversationId: result.insertId, 
      sessionId,
      section 
    });
  } catch (error) {
    console.error('❌ Chatbot conversation error:', error);
    res.status(500).json({ 
      error: 'Failed to create conversation', 
      details: error.message 
    });
  }
});

// Send message and get bot response
app.post('/api/chatbot/message', async (req, res) => {
  const { conversationId, message, section = 'main' } = req.body;

  try {
    console.log('📨 Received message:', { conversationId, message, section });

    if (!conversationId || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        details: 'conversationId and message are required' 
      });
    }

    // Save user message
    await db.query(
      'INSERT INTO chatbot_messages (conversation_id, message, sender) VALUES (?, ?, ?)',
      [conversationId, message, 'user']
    );
    console.log('✅ User message saved');

    // Get bot response
    const botResponse = await getChatbotResponse(message, section);
    console.log('🤖 Bot response generated:', botResponse.substring(0, 50) + '...');

    // Save bot message
    await db.query(
      'INSERT INTO chatbot_messages (conversation_id, message, sender) VALUES (?, ?, ?)',
      [conversationId, botResponse, 'bot']
    );
    console.log('✅ Bot message saved');

    res.json({ 
      userMessage: message, 
      botResponse 
    });
  } catch (error) {
    console.error('❌ Chatbot message error:', error);
    res.status(500).json({ 
      error: 'Failed to process message', 
      details: error.message 
    });
  }
});

// Get conversation history
app.get('/api/chatbot/conversation/:id/messages', async (req, res) => {
  try {
    const conversationId = req.params.id;
    console.log('📜 Fetching messages for conversation:', conversationId);
    
    const [messages] = await db.query(
      'SELECT * FROM chatbot_messages WHERE conversation_id = ? ORDER BY created_at ASC',
      [conversationId]
    );
    
    console.log('✅ Found', messages.length, 'messages');
    res.json(messages);
  } catch (error) {
    console.error('❌ Fetch messages error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch messages', 
      details: error.message 
    });
  }
});

// Get all bot responses (for debugging/admin)
app.get('/api/chatbot/responses', async (req, res) => {
  try {
    const [responses] = await db.query('SELECT * FROM chatbot_responses ORDER BY section, priority DESC');
    console.log('✅ Found', responses.length, 'bot responses');
    res.json(responses);
  } catch (error) {
    console.error('❌ Fetch responses error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch responses', 
      details: error.message 
    });
  }
});

// ============= CHATBOT LOGIC =============

async function getChatbotResponse(message, section) {
  const lowerMessage = message.toLowerCase().trim();
  
  try {
    console.log('🔍 Finding response for message:', lowerMessage, 'in section:', section);
    
    // Get all responses for the current section and 'all' sections
    const [responses] = await db.query(
      'SELECT * FROM chatbot_responses WHERE section IN (?, ?) ORDER BY priority DESC',
      [section, 'all']
    );
    
    console.log('📚 Found', responses.length, 'possible responses');
    
    if (responses.length === 0) {
      console.log('⚠️ No responses found in database');
      return "I'm here to help! You can ask me about:\n• Admissions\n• Academic programs\n• Facilities\n• School timings\n• Contact information\n\nOr type 'help' to see all available options.";
    }
    
    let bestMatch = null;
    let highestScore = 0;

    // Find best matching response based on keywords
    for (const response of responses) {
      const keywords = response.keywords.split(',').map(k => k.trim().toLowerCase());
      let score = 0;

      for (const keyword of keywords) {
        if (lowerMessage.includes(keyword)) {
          score += response.priority;
          console.log('✓ Keyword match:', keyword, '(priority:', response.priority + ')');
        }
      }

      if (score > highestScore) {
        highestScore = score;
        bestMatch = response;
      }
    }

    if (bestMatch) {
      console.log('🎯 Best match found with score:', highestScore);
      return bestMatch.response;
    }

    // No keyword match found - return default response
    console.log('❌ No keyword matches found, returning default');
    return "I'm here to help! You can ask me about:\n• Admissions\n• Academic programs\n• Facilities\n• School timings\n• Contact information\n\nOr type 'help' to see all available options.";
    
  } catch (error) {
    console.error('❌ Chatbot response error:', error);
    return "I'm having trouble responding right now. Please try again or contact us directly at support@sunsys.in";
  }
}

// ============= BASIC ROUTES =============

app.get('/', (req, res) => {
  res.json({ 
    message: 'S. Cadambi Education Center API',
    version: '1.0.0',
    endpoints: {
      contact: 'POST /api/send-contact',
      chatbot: {
        createConversation: 'POST /api/chatbot/conversation',
        sendMessage: 'POST /api/chatbot/message',
        getHistory: 'GET /api/chatbot/conversation/:id/messages',
        getResponses: 'GET /api/chatbot/responses'
      }
    }
  });
});

app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date(),
    database: 'connected'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('💥 Unhandled error:', err);
  res.status(500).json({ 
    error: 'Internal server error', 
    message: err.message 
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    path: req.path 
  });
});

// ============= START SERVER =============

app.listen(PORT, () => {
  console.log('\n' + '='.repeat(50));
  console.log('🚀 S. Cadambi Education Center API Server');
  console.log('='.repeat(50));
  console.log('📡 Port:', PORT);
  console.log('📧 Email:', process.env.EMAIL_USER);
  console.log('💾 Database:', process.env.DB_NAME || 'scadambi');
  console.log('🌐 Server URL: http://localhost:' + PORT);
  console.log('='.repeat(50) + '\n');
});