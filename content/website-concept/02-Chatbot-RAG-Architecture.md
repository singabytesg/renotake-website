**Purpose: This document outlines the technical architecture for the RAG-based chatbot system that will serve quick answers to users from the knowledge database.**

### **\#\# 1\. Core Architecture: The "Smart Librarian" Model 🧠**

Think of your AI not as an author writing answers from scratch, but as a hyper-efficient librarian. When a user asks a question, the AI's first job is to quickly find the most relevant "books" (your pre-written articles or links) from its library (your database). Only then does it decide how to present that book to the user.

This RAG approach is perfect for your needs because:

- **It's grounded in facts:** The AI can only use the information you've provided, preventing it from making things up (hallucinating).
- **It's token-efficient:** As you requested, the AI doesn't need to spend lots of processing power (and tokens) rewriting content. It just retrieves and displays.
- **It's easily updated:** To make the AI "smarter," you just add more high-quality articles to your database.

---

### **\#\# 2\. Database & Metadata Strategy 📚**

This is the foundation of your system. You'll use a special type of database called a **vector database**. It stores not just the text, but the _meaning_ of the text.

Here’s how to structure your data for each piece of content:

| Field Name | Data Type | Description                                                                                               | Example                                                  |
| :--------- | :-------- | :-------------------------------------------------------------------------------------------------------- | :------------------------------------------------------- |
| content_id | String    | A unique identifier for the piece of content.                                                             | hdb-permit-001                                           |
| type       | String    | internal_article or external_link.                                                                        | internal_article                                         |
| title      | String    | The title of the article or link.                                                                         | "HDB Renovation Permits: What You Need"                  |
| content    | String    | The full 2-3 paragraph text for internal_article types.                                                   | "Hacking walls in an HDB flat requires a permit from..." |
| url        | String    | The full URL for external_link types.                                                                     | https://www.hdb.gov.sg/renovation/permits                |
| keywords   | Array     | Relevant keywords for filtering.                                                                          | \["hdb", "permit", "hacking", "walls"\]                  |
| embedding  | Vector    | **The most important part.** This is a numerical representation of the meaning of your title and content. | \[0.012, \-0.45, 0.89, ...\]                             |

#### **The Magic of Embeddings**

An embedding is a list of numbers that captures the semantic meaning of text. To create it, you'll use a pre-trained AI model (an "embedding model"). When you add a new article to your database, you first run its text through this model to generate its unique embedding vector.

This allows for **semantic search**. If a user asks, _"Do I need approval to tear down a wall in my BTO?"_, the system will convert this question into an embedding. It then searches the vector database for articles whose embeddings are mathematically closest to the user's query embedding, even if the exact words aren't the same. It understands that "tear down a wall" is similar in meaning to "hacking walls."

---

### **\#\# 3\. The AI Logic: Step-by-Step Workflow ⚙️**

Here is the exact sequence of events that will happen on your backend every time a user sends a message.

1. **Receive User Query:** The backend receives the user's question, e.g., _"How to check for waterproofing defects?"_.
2. **Generate Query Embedding:** The system sends the user's query to an embedding model to convert it into a vector.
3. **Perform Semantic Search:** This query vector is used to search your vector database. The database returns the top 3-5 most similar content items (based on the embedding field). Let's say it returns two internal articles and one external link.
4. **Construct a Simple Prompt:** Now, you use a Large Language Model (LLM) like Gemini or GPT. The key is to give it a very simple, low-token task. You are NOT asking it to answer the question. You are asking it to **present the retrieved information**.  
   Here's a sample prompt you'd send to the LLM:  
   You are a helpful assistant for Singapore renovators. Based \*only\* on the provided context below, present the information to the user.

   If the context is an 'internal_article', display the title and the full content directly.  
   If the context is an 'external_link', display the title and the URL.  
   If no context is relevant, say "I couldn't find a specific article about that, but you can ask me about other topics like HDB permits or flooring types."

   User's Question: "How to check for waterproofing defects?"

   Context:  
   \[  
    {  
    "type": "internal_article",  
    "title": "Checking for Bathroom Waterproofing Issues",  
    "content": "One common method is the 'ponding test'. Block the bathroom floor trap and fill the floor with about 50mm of water. Leave it for 24 hours and check for any water seepage stains on the ceiling of the unit below. This is typically done by the contractor before handover."  
    },  
    {  
    "type": "external_link",  
    "title": "BCA Guide to Common Household Defects",  
    "url": "https://www.bca.gov.sg/defectsguide.html"  
    }  
   \]

5. **Generate Final Response:** The LLM follows these simple instructions and generates the final, clean output to send back to the user in the chat interface. It might look like this:**Checking for Bathroom Waterproofing Issues**One common method is the 'ponding test'. Block the bathroom floor trap and fill the floor with about 50mm of water. Leave it for 24 hours and check for any water seepage stains on the ceiling of the unit below. This is typically done by the contractor before handover.For more information, you can also check out this guide:  
   BCA Guide to Common Household Defects  
   https://www.bca.gov.sg/defectsguide.html

#### **Clarification on "Token Consumption"**

Your goal to "not consume additional tokens to parse the data" is achieved here. The LLM isn't "parsing" or "thinking about" the content. It's just following a formatting rule. The cost is minimal—far less than asking it to write an answer from scratch. You're using the powerful LLM for simple orchestration, not complex generation.

---

### **\#\# 4\. Recommended Technology Stack 🛠️**

- **Backend Framework:** **Python** with **FastAPI** is an excellent modern choice. It's fast, easy to learn, and great for building APIs.
- **AI/LLM Framework:** **LangChain** or **LlamaIndex**. These are Python libraries specifically designed to make building RAG applications like this much easier. They have pre-built components for connecting to vector databases and LLMs.
- **Vector Database:**
  - **Pinecone** or **Weaviate** (Managed cloud services, easy to start).
  - **ChromaDB** or **FAISS** (Self-hosted, more control).
- **Embedding Model:** You can start with free, high-quality models like all-MiniLM-L6-v2 from Hugging Face (via the SentenceTransformers library).
- **LLM for Orchestration:** A fast and cheap model is all you need. **Gemini 1.5 Flash** or **GPT-3.5-Turbo** are perfect for the simple formatting task described above.

---

### **\#\# 5\. Content Strategy for Singapore Renovators 🇸🇬**

The quality of your chatbot depends entirely on the quality of your content. You need to create articles and curate links specifically for the Singapore context.

**Topic Ideas for Your Database:**

- **HDB/BTO Specifics:** HDB renovation guidelines, timeline for BTO key collection to renovation, list of approved window contractors, rules for air-con ledge.
- **Permits & Regulations:** What needs a permit (wall hacking, plumbing changes) vs. what doesn't. How to apply for permits.
- **Process & Planning:** Choosing an Interior Designer (ID) vs. a contractor, understanding a renovation quote, payment schedules.
- **Technical Issues:** Common defects to check for, waterproofing, electrical wiring standards (SS 638), types of flooring (vinyl, tiles, parquet).
- **Local Trends:** Popular design styles in Singapore (e.g., Japandi, Scandinavian), common materials used (KompacPlus, quartz), space-saving ideas for small flats.
