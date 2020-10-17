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

u1 = User.create!(username: 'guest',password: 'password')
u2 = User.create!(username: 'username',password: 'password')
u3 = User.create!(username: 'billy',password: 'password')
u4 = User.create!(username: 'bob',password: 'password')
u5 = User.create!(username: 'chris',password: 'password')
u6 = User.create!(username: 'cedric',password: 'password')
u7 = User.create!(username: 'henry',password: 'password')
u8 = User.create!(username: 'paul',password: 'password')
u9 = User.create!(username: 'rayden',password: 'password')
u10 = User.create!(username: 'celine',password: 'password')
