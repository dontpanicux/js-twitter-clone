import { tweetsData } from './data.js'

const tweetInputArea = document.getElementById('tweet-input-area')
const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')
const feed = document.getElementById('feed')


document.addEventListener('click', function(event){
    if( event.target.dataset.replies ) { console.log(event.target.dataset.replies) }
    else if (  event.target.dataset.likes ) { console.log( event.target.dataset.likes )}
    else if ( event.target.dataset.retweets ) { console.log( event.target.dataset.retweets ) }
})

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
                                <i 
                                    class="fa-regular
                                     fa-comment-dots"
                                     data-replies="${tweet.uuid}"
                                     >
                                </i>
                                ${tweet.replies.length}
                            </span>
                            <span class="tweet-detail">
                                <i 
                                    class="fa-solid
                                     fa-heart"
                                     data-likes="${tweet.uuid}"
                                >
                                </i>
                                
                                ${tweet.likes}
                            </span>
                            <span class="tweet-detail">
                                <i 
                                    class="fa-solid
                                     fa-retweet"
                                     data-retweets="${tweet.uuid}"
                                >
                                </i>
                                
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