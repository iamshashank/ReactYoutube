import React from 'react';

class SearchBar extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {term : ''};
		this.onInputChange= this.onInputChange.bind(this);
		this.onSearchClick = this.onSearchClick.bind(this);
	}

	onInputChange(event){
		this.setState({term: event.target.value});
	}

	onSearchClick(event){
		this.props.searchVideos(this.state.term);
	}

	render(){
		return (<div className="form-inline">
			<input className="form-control" 
			placeholder="Search here ..."
		value = {this.state.term}
		onChange={this.onInputChange} />
		<button onClick={this.onSearchClick} className="btn btn-primary">Search</button>
		</div>);
	}
}

export default SearchBar;