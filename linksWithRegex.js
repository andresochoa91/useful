let num1 = "www.google.com"
let num2 = "www.facebook.com"
let num3 = "http://www.yahoo.com"
let num4 = "https://www.twitter.com"
let num5 = "www.wikipedia.org"
let num6 = "https://www.couchsurfing.org"

console.log(num1.replace(/(\.com|www\.)/g, ""))


let websites = [
  "www.google.com",
  "www.facebook.com",
  "http://www.yahoo.com",
  "https://www.twitter.com",
  "www.wikipedia.org",
  "https://www.couchsurfing.org",
  "www.hello.net"
]

for (let i = 0; i < websites.length; i++) {
  console.log(websites[i].replace(/(https:\/\/|http:\/\/|www\.|\.com|\.org|\.net)/g, ""));
  console.log(websites[i].replace(/(https?:\/\/|www\.|\.(com|net|org))/g, ""));
}