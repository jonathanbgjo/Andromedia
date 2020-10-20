#json.array! @videos do |video|
#	json.extract! video, :id, :title, :description
#	json.videoUrl url_for(video.video_file)
#    json.thumbUrl url_for(video.thumbnail)
#end 

@videos.each do |video|
	json.set! video.id do
		json.extract! video, :id, :title, :views, :description, :created_at
		json.thumbnailUrl url_for(video.thumbnail)
		json.uploader video.uploader.username
	end
end