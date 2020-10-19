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
