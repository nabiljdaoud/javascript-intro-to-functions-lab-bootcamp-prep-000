function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
  return;
}

function logWhisper(string) {
  console.log(string.toLowerCase());
  return;
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } elif (string === string.toUpperCase()) {
    return "YES INDEED!";
  } elif (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
  
  return
}