import React from 'react';
import Search from './search';
import UserInfo from './user-info'
import Actions from './actions';
import Repos from './repos';
import PropTypes from 'prop-types';

const AppContent = ({userinfo, repos, starred, handleSearch, isFetching, getRepos, getStarred}) => (
    <div className="App">
        <Search isDisabled={isFetching} handleSearch={handleSearch}/>

        {!!userinfo && <UserInfo userinfo={userinfo}/>}

        {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

        {!!repos.length && <Repos  
            className="repos" 
            title="Repositórios:" 
            repos={repos}
        />}

        {!!starred.length && <Repos 
            className="starred" 
            title="Favoritos:" 
            repos={starred}
        />}
    </div>
)

AppContent.propTypes = {
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    handleSearch: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired
}

export default AppContent