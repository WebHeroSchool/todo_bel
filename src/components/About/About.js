import React from 'react';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import styles from './About.module.css';

import CircularProgress from '@material-ui/core/CircularProgress';
import {Octokit} from '@octokit/rest';
import Contacts from '../Contacts/Contacts';

const octokit = new Octokit();
class About extends React.Component {
	state = {
		isLoading: true,
		isError: false,
    error: '',
    repoList: [],
    repoPageList: [],
    currentPage: 0,
    pageLimit: 4,
    countPages: 0,
    nameUser: [],
    avatarUser: []
	}

	componentDidMount() {
		octokit.repos.listForUser({
			username: 'Evgeshka1412'
		}).then(({ data }) => {
		     this.setState({
		     	  repoList: data,
		     	  isLoading: false
		     });

   this.setState({
     repoPageList: this.state.repoList.slice(0, this.state.pageLimit),
     countPages: Math.ceil(this.state.repoList.length / this.state.pageLimit)
   });    

		})
		.catch(err => {
      this.setState({
        error: 'Ошибка',
        isError: true,
        isLoading: false
      })
    });

    octokit.users.getByUsername({
        username: 'Evgeshka1412'
      }).then((res) => {
        this.setState({
          nameUser: res.data.login,
          avatarUser: res.data.avatar_url,
          isLoading: false
        })
      })
    .catch(err => {
          this.setState({
            error: 'Ошибка',
            isError: true,
            isLoading: false
          });
        });
	}

	render () {
		const {isLoading, isError, error, nameUser, avatarUser, repoPageList} = this.state;
		return (
				<CardContent className={styles.paper} elevation={3} >
					<div className={styles.name} >
	          <img className={styles.avatar} src={avatarUser} alt={avatarUser}/>	       
	        <div className={styles.info} >  
	          <h1> {isError ? error : 'Евгения Белоярцева'} </h1>
	          <Contacts />
	        </div>
	        </div> 
			    <div>
				    <h1 className={styles.title}>{ isLoading ? <CircularProgress /> : 'Мои репозитории:'}</h1>
				    {!isLoading && <ol>
				    	  {isError ? error : repoPageList.map(repo => (
				    	  	<li key={repo.id} className={styles.repo} > 
				    	  	  <a href={repo.html_url} className={styles.link} > 
				    	  	  <h2> {repo.name} </h2> 
				    	  	  <div>
				    	  	    <div className={styles.infoDesc} > {repo.description} </div>
				    	  	  </div>  
				    	  	  <div> <span> {repo.language} </span> </div>
				    	  	  <div> <span> {repo.stargazers_count} </span> </div>
				    	  	  </a>
				    	  	</li> ))}
				    </ol>}
				  </div> 
	        
			</CardContent>
		);
	}	
}

export default About;
