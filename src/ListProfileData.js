
import React, { Component } from 'react'

class ListProfileData extends Component {
  render() {
   
    return (
      <ul className='profile-list'>
        {this.props.profiles.map((profile) => {
      const userName = this.props.users[profile.userID].name
       const movieName = this.props.movies[profile.favoriteMovieID].name
      
      return (
          <li key={profile.userID} className='profile-list-item'>
        {`${userName}\'s favorite movie is "${movieName}."`}
            </li>
        )})}
      </ul>
    )
  }
}

export default ListProfileData