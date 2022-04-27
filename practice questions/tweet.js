let tweet = prompt('Enter your tweet')
let slicedTweet = tweet.slice(0,240).length
alert(`Entered : ${slicedTweet}. Remaining : ${240-slicedTweet}`)