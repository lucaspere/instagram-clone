export const getAvatarColor = (name) => {
   const hexCode = name.
   split('')
   .reduce((acc, char) => (acc * char.charCodeAt(0) % 0xfffff, 1))
   .toString(16);

   return `#${'0'.repeat(6 - hexCode.length) + hexCode}`;
}