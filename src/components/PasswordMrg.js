const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

export function generatePassword(length, uppercase, lowercase, numbers, symbols, optionalText) {
  let chars = '';
  if (uppercase) chars += uppercaseChars;
  if (lowercase) chars += lowercaseChars;
  if (numbers) chars += numberChars;
  if (symbols) chars += symbolChars;
  if (chars.length === 0 && optionalText === '') {
    window.alert('Please select at least one character type or provide optional text.');
    return null; 
  }
  let password = '';

  // Add optional text if provided
  if (optionalText) {
    password += optionalText;
    length -= optionalText.length;
  }

  // Generate random characters
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  // Shuffle the password to ensure optional text is not always at the beginning
  return shuffleString(password);
}

function shuffleString(str) {
  const arr = str.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
}