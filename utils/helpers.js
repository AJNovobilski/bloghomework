module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },

  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `( ಠ ͜ʖ ಠ)		`;
    } else if (randomNum > 0.4) {
      return `٩(◕‿◕)۶      `;
    } else {
      return `ଘ(੭ˊ꒳​ˋ)੭✧	`;
    }
  },
};
