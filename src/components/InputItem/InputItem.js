import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import styless from './InputItem.module.css';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

class InputItem extends React.Component {
	  state = {
	  	  inputValue: '' ,
	  	  errorStatus: false,
	  	  helperText:'',
	  };

	  onButtonClick = () => {
	  	  this.setState({
	  	  	  inputValue: '' ,
	  	  	  errorStatus: false ,
	  	      helperText:'',
	  	  });

	  if (this.state.inputValue) {
	  	this.props.onClickAdd(this.state.inputValue);
	  } else {
	  	this.setState ({
	  		errorStatus: true,
	  		helperText: 'Заполните поле'
	  	});
	  }	  
	 }

	  render () {

	  	return (<div className={styless.one}> 
	  			<form	      
          onSubmit={event => event.preventDefault()}	          
          autoComplete="off"	       
          className={styless.form}
          >
          <TextField 
		        error={this.state.errorStatus}
		        helperText={this.state.helperText}
		        fullWidth={true}
		        id="outlined-secondary"
		        label="Добавить дело"
		        margin="dense"
            variant="outlined"
            value={this.state.inputValue}
            onChange={event => this.setState({inputValue: event.target.value.toUpperCase()})}
          />
	          <Fab
	            color="primary"
	            aria-label="add"
	            onClick={() => this.onButtonClick()}>
	            <AddIcon />
            </Fab>
          </form>  
	      </div>);
	  }
}

InputItem.propTypes = {
	  isDone: PropTypes.bool,
	  helperText: PropTypes.string
};

	export default InputItem;


    
