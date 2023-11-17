import { tweetsData } from './data.js'

const tweetInputArea = document.getElementById('tweet-input-area')
const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')
const feed = document.getElementById('feed')

tweetBtn.addEventListener('click', function(){
    console.log(`clicked ${tweetBtn}`)
})

tweetsData.forEach(getFeedHtml)
/*
    for each Object in tweetsData array
    use object values to populate UI
*/

function getFeedHtml(tweet){
    let feedHtml = ''
    
    feedHtml += `
    <div class="tweet">
        <div class="tweet-inner">
            <img src="./${tweet.profilePic}" class="profile-pic">
            <div>
                <p class="handle">${tweet.handle}</p>
                <p class="tweet-text">${tweet.tweetText}</p>
                <div class="tweet-details">
                    <span class="tweet-detail">
                        ${tweet.replies.length}
                    </span>
                    <span class="tweet-detail">
                        ${tweet.likes}
                    </span>
                    <span class="tweet-detail">
                        ${tweet.retweets}
                    </span>
                </div>   
            </div>            
        </div>
    </div>
`
//console.log(feedHtml)
return feedHtml
}