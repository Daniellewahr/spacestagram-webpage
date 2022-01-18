console.log('likes file');

function getLikes() {
    let likes = localStorage.getItem('likes');
    if (likes) {
        likes = likes.split(',');
    } else {
        likes = []
    }
    return likes

}

/**
 * 
 * @param {string} date yyyy-mm-dd
 */
function like(date) {
  const likes = getLikes();
  let yourDate = new Date(date);
  const offset = yourDate.getTimezoneOffset();
  yourDate = new Date(yourDate.getTime() - (offset*60*1000));
  const formattedDate = yourDate.toISOString().split('T')[0];
  if (!likes.includes(formattedDate)) {
    likes.push(formattedDate);
    localStorage.setItem('likes', likes);
  }
}

/**
 * 
 * @param {string} date yyyy-mm-dd
 */
function unlike(date) {
  const likes = getLikes();
  const updatedLikes = likes.filter(like => like !== date);
  localStorage.setItem('likes', updatedLikes);
}