import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import styles from './About.module.css';
import ErrorBlock from '../ErrorBlock/ErrorBlock';


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
    avatarUser: [],
    firstRepo: 0,
		lastRepo: 2
	}

	lastPage = () => {
		this.setState({
			firstRepo: this.state.firstRepo - 2,
			lastRepo: this.state.lastRepo - 2,
		});
	};

	nextPage = () => {
		this.setState({
			firstRepo: this.state.firstRepo + 2,
			lastRepo: this.state.lastRepo + 2,
		});
	};


	componentDidMount() {
		octokit.repos.listForUser({
			username: 'Evgeshka1412'
		}).then(({ data }) => {
		     this.setState({
		     	  repoList: data,
		     	  isLoading: false
		     });

   // this.setState({
   //   repoPageList: this.state.repoList.slice(0, this.state.pageLimit),
   //   countPages: Math.ceil(this.state.repoList.length / this.state.pageLimit)
   // });    

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
		const {isLoading,repoList, isError, error, avatarUser, firstRepo, lastRepo} = this.state;
		const repoPageList = repoList.slice(firstRepo,lastRepo);
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
				    {!isLoading && <ul>
				    	  {isError ?
				    	   <ErrorBlock /> :
				    	   repoPageList.map(repo => (
				    	  	<li key={repo.id} className={styles.repo} > 
				    	  	  <a href={repo.html_url} className={styles.link} > 
				    	  	    <h2> {repo.name} </h2> 
				    	  	  <div className={styles.infoRepo} >
				    	  	    <div className={styles.infoDesc} > {repo.description} </div>
				    	  	  </div>  
				    	  	  <div> <span> {repo.language} </span> </div>
				    	  	  <div> <span> {repo.stargazers_count} </span> </div>
				    	  	  </a>
				    	  	</li> ))}
				    </ul>}
				    				<div className={styles.pagination}>
                    <button className={styles.pagination_button}
                        onClick={this.lastPage}
                        disabled={firstRepo < 1}
                    >
                    Back
                    </button>
                    <button className={styles.pagination_button}
                        onClick={this.nextPage}
                        disabled={repoList.length < lastRepo}
                    >
                    Forward
                    </button>
                </div>
				  </div> 
	        
			</CardContent>
		);
	}	
}

export default About;
