import React, { Component }  from 'react';
class Network extends React.Component{


    constructor(props, context){
        super(props, context);

        this.state = {
            movies: 'abc'
        };
        this.state = {name: 'amaan'};

    }

    componentDidMount(){
        this.getMovies();
    }

    getMovies() {
    return fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
        //this.setState({movies: responseJson.movies});
            return responseJson.movies;
        })
        .catch((error) => {
            console.error(error);
        });

    }


    render(){
        if(this.state.name)
        {
            return <p>Loading...</p>
        }
        return(
            <div>
                Movies
                <MovieList />
            </div>
        )
    }

}


function MovieItem(props){
    return <li>{props.value}</li>;
}

function MovieList(props){
    const movies = props.movies;
    const movieItems = this.state.movies.map((movie) =>
        <MovieItem value={movie.title}/>
    );
    return (
        <ul>
            {movieItems}
        </ul>
    );
}
export default Network;