import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import styless from './InputItem.module.css';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';


let helper = "Добавить задание";
let text;

class InputItem extends React.Component {
    state = {
        inputValue: '' ,
        // errorStatus: false,
        // helperText:'',
        // isDouble: false
    };

  onButtonClick = () => {
      this.setState({
        inputValue: ''
      });
      if (!this.state.inputValue) {
        helper = 'Пустое поле! Добавьте задание.';
        text = '';
      } else if (this.props.items.find((item) => this.state.inputValue === item.value)) {
        helper = 'Это задание уже есть! Добавьте новое задание.';
        text = '';
      } else {
      this.props.onClickAdd(this.state.inputValue.toUpperCase());
      helper = 'Добавить задание';
      text = undefined;
      }
    }

//    //   onChangeInputItem = (event) => {


//   //     this.setState({
//   //     inputValue: event.target.value,
//   //     errorStatus: (
//   //     this.state.errorStatus && this.valueCheck(this.state.inputValue) && this.valueCheckDouble(this.state.isDouble)
//   //     ),
//   //     helperText: !(this.state.errorStatus &&
//   //       this.valueCheck(this.state.inputValue) ? '' : 'Введите текст'
//   //     )
//   //   })
//   // };


//   // valueCheck = (value) => {

//   //  if (value === '') {
//   //     return false;
//   //   } else {
//   //     return true;
//   //   }        
//   // }; 


//   // valueCheckDouble = (value) => {

//   //   let result;

//   //   if (this.props.items.length === 0) return true;

//   //   this.props.items.find(item => {

//   //     if (item.value === value) {
//   //       result = true;
//   //     } else {
//   //       result = false;
//   //     }
//   //     return result;
//   //   });


//   //   if (result) {
//   //       return false;
//   //     } else {
//   //       return true;
//   //     }
//   // };

//    //  onButtonClick = () => {
//   //   if (!this.valueCheck(this.state.inputValue)) {
//   //     this.setState({
//   //         helperText: 'Введите текст',
//   //         errorStatus: true
//   //     });
//   //   // } else if (!this.valueCheckDouble(this.state.inputValue)) {
//   //   //   this.setState({
//   //   //     helperText: 'Такое дело уже есть в списке',
//   //   //     errorStatus: true
//   //   //   });

//   //    } else {
//   //     this.setState({
//   //       inputValue: ''
//   //     });        
//   //     this.props.onClickAdd(this.state.inputValue);
//   //   }      
          
//   // }    

    render () {
      const { onClickAdd, items } = this.props;

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
