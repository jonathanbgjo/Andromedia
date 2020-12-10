class Like < ApplicationRecord
    validates :video_id, :user_id
    belongs_to :video,
        foreign_key: :video_id,
        class_name: :Video
    
end
