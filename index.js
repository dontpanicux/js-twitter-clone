import { tweetsData } from './data.js'

const tweetInputArea = document.getElementById('tweet-input-area')
const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')
const feed = document.getElementById('feed')

tweetBtn.addEventListener('click', function(){
    console.log(`clicked ${tweetBtn}`)
})