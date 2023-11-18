import { tweetsData } from './data.js'

const tweetInputArea = document.getElementById('tweet-input-area')
const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')
const feed = document.getElementById('feed')


document.addEventListener('click', function(event){
    

    if ( event.target.dataset.replies ) { handleRepliesClick(event) }
    else if ( event.target.dataset.likes ) { handleLikeClick(event) }
    else if ( event.target.dataset.retweets )  { handleRetweetsClick(event) }
})

tweetBtn.addEventListener('click', function(){
    console.log(`clicked ${tweetBtn}`)
})

function handleLikeClick(tweetId){
    //document.querySelector(tweetId.target).classList.add('liked')
    // find the object the corresponds to the uuid
    tweetsData.forEach(function(tweet){
        if ( tweetId.target.dataset.likes === tweet.uuid){
            
            if( tweet.isLiked ){
                // add to likes
                tweet.likes--
            } else {
                tweet.likes ++
            }
            tweet.isLiked = !tweet.isLiked

            // tweet.isLiked = true
        }
        // rendered updated data to the page
        renderTweetHtml()
    })
       
}

function handleRepliesClick(tweetId){
    console.log(tweetId.target.dataset.replies)
}

function handleRetweetsClick(tweetId){
    //console.log(tweetId.target.dataset.retweets)

    //find the object with the returned uuid
    tweetsData.forEach(function(tweet){
        if( tweetId.target.dataset.retweets === tweet.uuid) {
            
            if(tweet.isRetweeted){
                tweet.retweets--
            } else {

                tweet.retweets++
            }
            tweet.isRetweeted = !tweet.isRetweeted
        }
        renderTweetHtml()
    })
}

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