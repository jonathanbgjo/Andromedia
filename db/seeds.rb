# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all

# Comment.delete_all
# Video.delete_all
# Like.delete_all

u1 = User.create!(username: 'guest', email: "guest@guest.com", password: 'password')
u2 = User.create!(username: 'username', email: "user@user.com", password: 'password')
u3 = User.create!(username: 'billy', email: "bill@bill.com", password: 'password')
u4 = User.create!(username: 'bob', email: "bob@bob.com", password: 'password')
u5 = User.create!(username: 'chris', email: "chris@chris.com", password: 'password')
u6 = User.create!(username: 'cedric', email: "cedric@cedric.com", password: 'password')
u7 = User.create!(username: 'henry', email: "henry@henry.com", password: 'password')
u8 = User.create!(username: 'paul', email: "paul@paul.com", password: 'password')
u9 = User.create!(username: 'rayden', email: "rayden@rayden.com", password: 'password')
u10 = User.create!(username: 'celine', email: "starsmitten@smitten.com", password: 'password')
