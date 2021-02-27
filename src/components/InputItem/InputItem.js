import React from 'react';
import TextField from '@material-ui/core/TextField';
import styless from './InputItem.module.css';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';



class InputItem extends React.Component {
    state = {
        inputValue: '',
        inputError: false
    };

onButtonClick = () => {
  if(this.state.inputValue === '') {
    this.setState({inputError: true, helperText: 'Введите задание!'});
  } else if (this.props.items.find(item => item.value === this.state.inputValue.toUpperCase() )) {
      this.setState({inputError: true, helperText: 'Такое задание уже есть!'});
    } else {
      this.setState({
        inputValue: '',
        inputError: false,
        helperText: ''
      });
      this.props.onClickAdd(this.state.inputValue.toUpperCase());
    }
  };


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


export default InputItem;  
