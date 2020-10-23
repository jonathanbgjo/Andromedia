@comments.each do |comment|
    json.set! comment.id do 
        json.extract! comment, :id, :body, :author_id, :video_id
        json.author comment.author.username
    end
end