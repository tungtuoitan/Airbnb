export const truncateText=(text, maxLength)=> {
    if (text.length <= maxLength) {
      return text;
    }
  
    const truncatedText = text.substr(0, maxLength - 3) + '...';
    return truncatedText;
  }
  