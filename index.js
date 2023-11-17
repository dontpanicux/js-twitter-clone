import { tweetsData } from './data.js'

const tweetInputArea = document.getElementById('tweet-input-area')
const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')
const feed = document.getElementById('feed')
// let feedHtml =''

tweetBtn.addEventListener('click', function(){
    console.log(`clicked ${tweetBtn}`)
})

function getFeedHtml(){

    let feedHtml =''
    
    tweetsData.forEach(function(tweet){ 
        feedHtml += `
            <div class="tweet">
                <div class="tweet-inner">
                    <img src="./${tweet.profilePic}" class="profile-pic">
                    <div>
                        <p class="handle">${tweet.handle}</p>
                        <p class="tweet-text">${tweet.tweetText}</p>
                        <div class="tweet-details">
                            <span class="tweet-detail">
                                <i class="fa-regular fa-comment-dots"></i>
                                ${tweet.replies.length}
                            </span>
                            <span class="tweet-detail">
                                <i class="fa-regular fa-heart"></i>
                                ${tweet.likes}
                            </span>
                            <span class="tweet-detail">
                                <i class="fa-solid fa-retweet"></i>
                                ${tweet.retweets}
                            </span>
                        </div>   
                    </div>            
                </div>
            </div>
            `
        //console.log(feedHtml)
    
    })
    return feedHtml

}
    

/*
    for each Object in tweetsData array
    use object values to populate UI
*/


// add existing content to #feed
function renderTweetHtml(){
    feed.innerHTML = getFeedHtml()
}
renderTweetHtml()