require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all

# Comment.delete_all
Video.delete_all
# Like.delete_all

u1 = User.create!(username: 'guest', email: "guest@guest.com", password: 'password')
u2 = User.create!(username: 'username', email: "user@user.com", password: 'password')
cedric = User.create!(username: 'cedric', email: "cedric@cedric.com", password: 'password')
henry = User.create!(username: 'henry', email: "henry@henry.com", password: 'password')
paul = User.create!(username: 'paul', email: "paul@paul.com", password: 'password')
rayden = User.create!(username: 'rayden', email: "rayden@rayden.com", password: 'password')
celine = User.create!(username: 'celine', email: "starsmitten@smitten.com", password: 'password')

video1 = Video.create!({
    uploader_id: cedric.id,
    title: "Isn't she lovely",
    description: "Clara c + Jayesslee",
    views: rand(1000)
})
thumb1 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/thumbnails/clarac.jpg')
vid1 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/videos/clarac.mp4')
video1.video_file.attach(io:vid1, filename:'clarac.mp4')
video1.thumbnail.attach(io:thumb1, filename:'clarac.jpg')

video2 = Video.create!({
    uploader_id: henry.id,
    title: "Brad Leone makes butter",
    description: "Bon Appetit Brad Leona makes butter on it's alive!",
    views: rand(1000)
})
thumb2 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/thumbnails/bonappetit.jpg')
vid2 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/videos/bonappetit.mp4')
video2.video_file.attach(io:vid2, filename:'bonappetit.mp4')
video2.thumbnail.attach(io:thumb2, filename:'bonappetit.jpg')

video3 = Video.create!({
    uploader_id: celine.id,
    title: "How to start a movie",
    description: "Film essay on how to start a movie by Closer Look",
    views: rand(1000)
})
thumb3 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/thumbnails/closerlook.jpg')
vid3 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/videos/closerlook.mp4')
video3.video_file.attach(io:vid3, filename:'closerlook.mp4')
video3.thumbnail.attach(io:thumb3, filename:'closerlook.jpg')

video4 = Video.create!({
    uploader_id: rayden.id,
    title: "Benedict Cumberpatch's impressions",
    description: "Benedict Cumberpatch impersonating actor/actresses he's worked with",
    views: rand(1000)
})
thumb4 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/thumbnails/cumberpatch.jpg')
vid4 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/videos/cumberpatch.mp4')
video4.video_file.attach(io:vid4, filename:'cumberpatch.mp4')
video4.thumbnail.attach(io:thumb4, filename:'cumberpatch.jpg')

video5 = Video.create!({
    uploader_id: paul.id,
    title: "You won't believe this!",
    description: "David Dobrik's vlog",
    views: rand(1000)
})
thumb5 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/thumbnails/david.jpg')
vid5 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/videos/david.mp4')
video5.video_file.attach(io:vid5, filename:'david.mp4')
video5.thumbnail.attach(io:thumb5, filename:'david.jpg')

video6 = Video.create!({
    uploader_id: cedric.id,
    title: "Dup Lipa singing new rules",
    description: "Dua Lipa live singing",
    views: rand(1000)
})
thumb6 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/thumbnails/dua.jpg')
vid6 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/videos/dua.mp4')
video6.video_file.attach(io:vid6, filename:'dua.mp4')
video6.thumbnail.attach(io:thumb6, filename:'dua.jpg')

video7 = Video.create!({
    uploader_id: cedric.id,
    title: "How to pronounce Gif",
    description: "title says it all",
    views: rand(1000)
})
thumb7 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/thumbnails/gif.jpg')
vid7 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/videos/gif.mp4')
video7.video_file.attach(io:vid7, filename:'gif.mp4')
video7.thumbnail.attach(io:thumb7, filename:'gif.jpg')

video8 = Video.create!({
    uploader_id: celine.id,
    title: "JJ Watt mic'd up",
    description: "JJ Watt mic'd up and dominating",
    views: rand(1000)
})
thumb8 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/thumbnails/jj.jpg')
vid8 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/videos/jj.mp4')
video8.video_file.attach(io:vid8, filename:'jj.mp4')
video8.thumbnail.attach(io:thumb8, filename:'jj.jpg')

video9 = Video.create!({
    uploader_id: henry.id,
    title: "Lebron James best 3 final games",
    description: "GOAT",
    views: rand(1000)
})
thumb9 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/thumbnails/legoat.jpg')
vid9 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/videos/legoat.mp4')
video9.video_file.attach(io:vid9, filename:'legoat.mp4')
video9.thumbnail.attach(io:thumb9, filename:'legoat.jpg')

video10 = Video.create!({
    uploader_id: rayden.id,
    title: "Random weasel video",
    description: "Did you need to know more",
    views: rand(1000)
})
thumb10 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/thumbnails/weasel.jpg')
vid10 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/videos/weasel.mp4')
video10.video_file.attach(io:vid10, filename:'weasel.mp4')
video10.thumbnail.attach(io:thumb10, filename:'weasel.jpg')

video11 = Video.create!({
    uploader_id: cedric.id,
    title: "Lord of the rings clip",
    description: "all rights belong to ---",
    views: rand(1000)
})
thumb11 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/thumbnails/lotr.jpg')
vid11 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/videos/lotr.mp4')
video11.video_file.attach(io:vid11, filename:'lotr.mp4')
video11.thumbnail.attach(io:thumb11, filename:'lotr.jpg')

video12 = Video.create!({
    uploader_id: paul.id,
    title: "Machine gun kelly - lonely",
    description: "see more on www .mgk.com",
    views: rand(1000)
})
thumb12 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/thumbnails/mgk.jpg')
vid12 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/videos/mgk.mp4')
video12.video_file.attach(io:vid12, filename:'mgk.mp4')
video12.thumbnail.attach(io:thumb12, filename:'mgk.jpg')

video13 = Video.create!({
    uploader_id: celine.id,
    title: "Unbelieveable singing!",
    description: "Thought it was the radio",
    views: rand(1000)
})
thumb13 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/thumbnails/radio.jpg')
vid13 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/videos/radio.mp4')
video13.video_file.attach(io:vid13, filename:'radio.mp4')
video13.thumbnail.attach(io:thumb13, filename:'radio.jpg')

video14 = Video.create!({
    uploader_id: cedric.id,
    title: "Summit steals athena chests on Sea of Thieves",
    description: "check summit @ twitch.tv",
    views: rand(1000)
})
thumb14 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/thumbnails/summit.jpg')
vid14 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/videos/summit.mp4')
video14.video_file.attach(io:vid14, filename:'summit.mp4')
video14.thumbnail.attach(io:thumb14, filename:'summit.jpg')


video15 = Video.create!({
    uploader_id: celine.id,
    title: "Monster Jerry",
    description: "Monster Jerry vs tom",
    views: rand(1000)
})
thumb15 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/thumbnails/tomnjerry.jpg')
vid15 = open('https://andromedia-dev.s3-us-west-2.amazonaws.com/videos/tomnjerry.mp4')
video15.video_file.attach(io:vid15, filename:'tomnjerry.mp4')
video15.thumbnail.attach(io:thumb15, filename:'tomnjerry.jpg')


