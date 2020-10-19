class Video < ApplicationRecord
    validates :title, :description, presence:true
    has_one_attached :video_file
    has_one_attached :thumbnail

    belongs_to :uploader,
        foreign_key: :uploader_id,
        class_name: :User
end
