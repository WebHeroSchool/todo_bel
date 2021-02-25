// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import styless from './InputItem.module.css';
// import AddIcon from '@material-ui/icons/Add';
// import Fab from '@material-ui/core/Fab';


// let helper = "Добавить задание";
// let text;

// class InputItem extends React.Component {
//     state = {
//         inputValue: '' ,
//         errorStatus: false,
//         helperText:'',
//         isDouble: false
//     };

 
//      onChangeInputItem = (event) => {


//       this.setState({
//       inputValue: event.target.value,
//       errorStatus: (
//       this.state.errorStatus && this.valueCheck(this.state.inputValue) && this.valueCheckDouble(this.state.isDouble)
//       ),
//       helperText: !(this.state.errorStatus &&
//         this.valueCheck(this.state.inputValue) ? '' : 'Введите текст'
//       )
//     })
//   };


//   valueCheck = (value) => {

//    if (value === '') {
//       return false;
//     } else {
//       return true;
//     }        
//   }; 


//   valueCheckDouble = (value) => {

//     let result;

//     if (this.props.items.length === 0) return true;

//     this.props.items.find(item => {

//       if (item.value === value) {
//         result = true;
//       } else {
//         result = false;
//       }
//       return result;
//     });


//     if (result) {
//         return false;
//       } else {
//         return true;
//       }
//   };

//     onButtonClick = () => {
//     if (!this.valueCheck(this.state.inputValue)) {
//       this.setState({
//           helperText: 'Введите текст',
//           errorStatus: true
//       });
//     } else if (!this.valueCheckDouble(this.state.inputValue)) {
//       this.setState({
//         helperText: 'Такое дело уже есть в списке',
//         errorStatus: true
//       });

//      } else {
//       this.setState({
//         inputValue: ''
//       });        
//       this.props.onClickAdd(this.state.inputValue);
//     }      
          
//   }    

//     render () {
//       const { onClickAdd, items } = this.props;

//       return (<div className={styless.one}> 
//           <form       
//           onSubmit={event => event.preventDefault()}            
//           autoComplete="off"         
//           className={styless.form}
//           >
//           <TextField 
//             error={this.state.errorStatus}
//             helperText={this.state.helperText}
//             fullWidth={true}
//             id="outlined-secondary"
//             label="Добавить дело"
//             margin="dense"
//             variant="outlined"
//             value={this.state.inputValue}
//             onChange={event => this.setState({inputValue: event.target.value.toUpperCase()})}
//           />
//             <Fab
//               color="primary"
//               aria-label="add"
//               onClick={() => this.onButtonClick()}>
//               <AddIcon />
//             </Fab>
//           </form>  
//         </div>);
//     }
// }


// export default InputItem;  


import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './InputItem.module.css';
import Button from '@material-ui/core/Button';

class InputItem extends React.Component {
    state = {
        inputValue: '',
        inputError: false,
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



render() {

    return (
        <div className={styles.inputWrap}>
                <TextField
                    className={styles.inputField}
                    id="outlined-full-width"
                    label="Задача"
                    style={{ margin: 0 }}
                    placeholder="Введите задачу"
                    fullWidth
                    value={this.state.inputValue.toUpperCase()}
                    onChange={event => this.setState({ inputValue: event.target.value })}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    inputError = {this.state.inputError}
                    helperText = {this.state.helperText}
                />
            <Button variant="contained"
                color="primary"
                fullWidth
                onClick={this.onButtonClick}>
                Добавить Задачу
      </Button>
        </div>
    );
    }
}

export default InputItem;
