import React from 'react';
import Paper from '@material-ui/core/Paper';
import styles from './About.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Octokit} from '@octokit/rest';

const octokit = new Octokit();
class About extends React.Component {
	state = {
		isLoading: true,
		isError: false,
    error: '',
    repoList: [],
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
		     })
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
          })
        })
	}


	render () {
		const {isLoading,  isError, error, repoList, nameUser, avatarUser} = this.state;
		return (
				<Paper className={styles.paper} elevation={3} >
					<div>
	          <img className={styles.avatar} src={avatarUser} alt={avatarUser}/>
	          <h1> {isError ? error : nameUser} </h1>
	        </div>
			    <div>
				    <h1 className={styles.title}>{ isLoading ? <CircularProgress /> : 'Мои репозитории:'}</h1>
				    {!isLoading && <ol>
				    	  {isError ? error : repoList.map(repo => (
				    	  	<li key={repo.id}> 
				    	  	  <a href={repo.html_url}> {repo.name} </a>
				    	  	</li> ))}
				    </ol>}
				  </div> 
			</Paper>
		);
	}	
}

export default About;
