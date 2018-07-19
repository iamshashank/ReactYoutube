import React from 'react';

const VideoDetail = (props)=>{
	if(!props.video){
		return <div>Loading ....</div>;
	}
const video = props.video;
const id = video.id.videoId;
const url = `https://www.youtube.com/embed/${id}`;


	return (
		<div className="video-detail col-md-7 col-sm-10">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url} />
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
				
			</div>			

		</div>
		);
}

export default VideoDetail;