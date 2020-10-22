import React from 'react'
import { Player } from 'video-react';
// import { Link } from 'react-router-dom';
import "../../../node_modules/video-react/dist/video-react.css";

class VideoForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            description: "",
            uploader_id: null,
            thumbnailFile: null,
            thumbnailUrl: null,
            videoFile: null,
            videoUrl: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.handleVideoFile = this.handleVideoFile.bind(this);
        this.handleThumbnailFile = this.handleThumbnailFile.bind(this); 
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        // console.log(this.props.video)
        // debugger;
        this.props.fetchVideo(this.props.match.params.videoId)
            .then( () =>{
                this.setState({
                    title: this.props.video.title,
                    description: this.props.video.description,
                    uploader_id: this.props.video.uploader_id,
                    thumbnailFile: this.props.video.thumbnail,
                    thumbnailUrl: this.props.video.thumbnailUrl,
                    videoFile: this.props.video.video_file,
                    videoUrl: this.props.video.videoUrl,
                })
            })
        
        // this.props.fetchVideo(this.props.match.params.videoId)
        
    }
    update(property) {
        return e => this.setState({
            [property]: e.target.value
        });
    }
    handleThumbnailFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ thumbnailFile: file, thumbnailUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }
    handleVideoFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ videoFile: file, videolUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }
    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        if(this.props.match.params.videoId){
            formData.append('video[id]', this.props.match.params.videoId)
        }
        formData.append('video[description]', this.state.description);
        //If file has thumbnail and video attached, no point resubmitting it to db since its just patchin and not putting
        if (this.state.thumbnailFile) formData.append('video[thumbnail]', this.state.thumbnailFile);
        if (this.state.videoFile) formData.append('video[video_file]', this.state.videoFile);
        if (this.state.title) formData.append('video[title]', this.state.title);
        this.props.action(formData, this.props.match.params.videoId)
            .then( result => {
                if(this.props.formType === "Update Video"){
                    this.props.history.replace(`/videos/${this.props.match.params.videoId}`)
                }
                else{
                    this.props.history.replace(`/videos/${result.video.id}`)
                }
            })

    }
    handleDelete(){
        this.props.deleteVideo(this.props.match.params.videoId)
            .then( ()=>{
                this.props.history.replace('/')
            })
    }
    render(){
        const thumbPreview = this.state.thumbnailUrl ? <img height="200px" width="200px" src={this.state.thumbnailUrl} /> : null;
        const videoPreview = this.state.video ? <Player
            // playsInline
            poster={this.props.video.thumbnailUrl}
            src={this.props.video.videoUrl}
            fluid={false}
            className="videoPlayer"
            // autoPlay={true}
            width={400}
            height={400}
        >
        </Player>: null
        if (!this.props.video) { return null }
        return(
            <div className="videoFormContainer">
                
                <form onSubmit={this.handleSubmit} className ="videoForm">
                <h1>{this.state.title}</h1>
                    <label htmlFor="">
                        <input type="text" 
                        placeholder="Title(required)" 
                        className ="formTitle"  
                        value={this.state.title} 
                        onChange={this.update('title')}
                        />
                    </label>
                    <label htmlFor=""> 
                        <input type="text"
                            placeholder="Description.&#10;Tell Viewers about your video" 
                        className="formDescription" 
                        value={this.state.description}
                        onChange={this.update('description')}
                        />
                    </label>
                    <label htmlFor="">
                        <h4>Upload Thumbnail</h4> 
                        <p>
                            Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention.
                        </p>
                        <div className="formThumb">
                            
                            <input type="file" onChange={this.handleThumbnailFile.bind('thumbnailFile')} />
                            {/* <p>Image Preview:</p> */}
                            <p> {thumbPreview} </p>
                        </div>
                        
                    </label>
                        <h4>Upload Video</h4> 
                    <label htmlFor="" className="formVideo" >
                        <input type="file" onChange={this.handleVideoFile.bind('videoFile')} />
                        {videoPreview}

                    </label>
                    <label className="submitForm">
                        <input type="submit" value={this.props.formType}/>
                        
                    </label>
                </form>
                <form onSubmit={(e) => { this.handleDelete() }}>
                    {this.props.formType === "Update Video" ? <input type="submit" value="Delete Video"  /> : ""}
                </form>

            
        </div>
        )
    }

}



export default VideoForm