class Comment < ApplicationRecord
    validates :author_id, :video_id, presence:true
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
        
    belongs_to :video
end
