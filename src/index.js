import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import YTSearch from 'youtube-api-search';



const API_KEY =  '';


class App extends React.Component{

	constructor(props){
		super(props);
		this.state ={videos:[],
			selectedVideo:null};
		YTSearch({key:API_KEY,term: 'gta'},(data)=>{
			//console.log(data);
			this.setState({videos:data,selectedVideo:data[0]});
		});
		this.handleSearch = this.handleSearch.bind(this);

	}

	handleSearch(term){
		YTSearch({key:API_KEY,term: term},(data)=>{
			//console.log(data);
			this.setState({videos:data,selectedVideo:data[0]});
		});
	}


	render(){
		return (
		<div>
		<div>
			<SearchBar searchVideos={(term)=>this.handleSearch(term)} />
		</div>
		<div>
			<VideoDetail video={this.state.selectedVideo} />
		</div>
			<VideoList 
			onVideoSelect={(selectedVideo)=>{this.setState({selectedVideo})}}
			videos={this.state.videos} />
		</div>
		);
	}
}

ReactDOM.render(<App />,document.querySelector('.container'));
