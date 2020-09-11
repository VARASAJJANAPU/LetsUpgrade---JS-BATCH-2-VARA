
// Question 1
// Create a webpage containing an image and three buttons
// A. On click of the second button a change the existing image to a new image
// B. On click of the third button change it once again
// C. On click of first, the first image should come back

function changeImage(){
    const ele = document.getElementById("Image")
    const newUrl = "https://i.ytimg.com/vi/YvFc5hiO30M/maxresdefault.jpg"
    ele.src= newUrl
}

function getBack(){
    const ele = document.getElementById("Image")
    const newUrl = "https://static.t-cdn.net/5e564d5760a1b0133aba2215/portals/banner_95703.png"
    ele.src = newUrl
}

function changeAgain(){
    const ele = document.getElementById("Image")
    const newUrl = "https://avatars2.githubusercontent.com/u/20568736?s=460&u=7cfcc0179cbc9b5f5ae8a29cb9418a47ec4f039f&v=4"
    ele.src = newUrl
}
