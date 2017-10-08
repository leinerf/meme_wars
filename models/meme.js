var mongoose = require("mongoose");
mongoose.connect('mongodb://'+dbuser+':'+dbpassword+'@ds113785.mlab.com:13785/memeshack4',{useMongoClient:true});

var memeSchema = new mongoose.Schema({
    url: String,
    likes: Number
});
var Meme = mongoose.model("Meme",memeSchema);
// var allMemesSchema = new mongoose.Schema({
//     name: String,
//     memes: [memeSchema]
// });
//
// var Memes = mongoose.model("Memes",allMemesSchema);

//adding a new cat to the DB

// var george = new Cat({
//     name: "Mrs. Norris",
//     age: 7,
//     temperament: "Evil"
// });

// george.save(function(err, cat){
//     if(err){
//         console.log("SOMETHING WENT WRONG!")
//     } else {
//         console.log("WE JUST SAVED A CAT TO THE DB:")
//         console.log(cat);
//     }
// });
var imgs= [ "http://i3.kym-cdn.com/photos/images/newsfeed/001/217/729/f9a.jpg",
    "https://fthmb.tqn.com/f2E0oJLHltGUCxwGiDw8bRkIm08=/768x0/filters:no_upscale()/dicaprio3-583e33155f9b58d5b19e3a00.jpg",
    "https://fthmb.tqn.com/gxyNkKkkTnHBdcQ0G-2Q27BLLas=/400x0/success-56a9fd1f3df78cf772abee09.jpg",
    "https://i.pinimg.com/736x/c5/e8/77/c5e877889a1fea74b5fe02c4003f71a9--teaching-memes-funny-teachers-in-may-meme.jpg",
    "https://media1.popsugar-assets.com/files/thumbor/Jd4nQ83myp6U6gWLzHV8aCkp6Lo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/07/30/615/n/1922153/6f32db66ead6ded2_Screen_Shot_2015-07-29_at_5.21.10_PM/i/Funny-Beauty-Memes.png"]
// Meme.create({
//     url:  "http://i3.kym-cdn.com/photos/images/newsfeed/001/217/729/f9a.jpg",
//     likes: 10
// }, function(err, meme){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(meme);
//     }
// });
// Meme.create({
//     url:  "https://fthmb.tqn.com/gxyNkKkkTnHBdcQ0G-2Q27BLLas=/400x0/success-56a9fd1f3df78cf772abee09.jpg",
//     likes: 4
// }, function(err, meme){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(meme);
//     }
// });
// Meme.create({
//     url: "http://i0.kym-cdn.com/entries/icons/mobile/000/013/564/doge.jpg",
//     likes: 7
// }, function(err, meme){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(meme);
//     }
// });
// Meme.create({
//     url: "https://www.google.com/search?q=meme+doge&tbm=isch&source=iu&pf=m&ictx=1&fir=1yzCZFCxeec9HM%253A%252CA_I1p2-S0zKL9M%252C_&usg=__NaNwAYbcR-xj8JYGgahtx7g69QY%3D&sa=X&ved=0ahUKEwj1x5Xn0N_WAhXkz1QKHWA5BhUQ9QEIKDAA#imgrc=1yzCZFCxeec9HM:",
//     likes: 7
// }, function(err, meme){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(meme);
//     }
// });

//retrieve all cats from the DB and console.log each one

// Meme.find({}, function(err, memes){
//     if(err){
//         console.log("OH NO, ERROR!");
//         console.log(err);
//     } else {
//         console.log("ALL THE CATS.....");
//         console.log(memes);
//     }
// });
//
module.exports = Meme;
