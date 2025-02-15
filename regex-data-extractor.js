// Regular Expressions for extracting data
const patterns = {
  emails: /\b[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}\b/g,
  phoneNumbers: /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g,
  urls: /https?:\/\/\S+/g,
  creditCards: /\b\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}\b/g,
  currency: /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g,
  time: /\b\d{1,2}:\d{2}\s?(?:AM|PM)?\b/g, 
  htmlTags: /<\/?\w+.*?>/g,
  hashtags: /#\w+/g
};

// Function to extract data
const extractData = (text) => {
  return Object.fromEntries(
      Object.entries(patterns).map(([key, pattern]) => [key, text.match(pattern) || []])
  );
};
