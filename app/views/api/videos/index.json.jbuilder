@videos.each do |video|
	json.set! video.id do
		json.extract! video, :id, :title, :views, :description, :created_at
		json.thumbnailUrl url_for(video.thumbnail) 
		json.uploader video.uploader.username
	end
end