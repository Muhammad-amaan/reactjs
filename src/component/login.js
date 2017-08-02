import React from 'react';
 import { Link} from 'react-router-dom';

export default class Login extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const email = target.name;
        const password = target.password;
        this.setState({
            [email]: value,
            [password]: value
        });
    }

    handleSubmit(event){
        //alert("A result was submitted by: " + this.state.username + " - "+ this.state.password);
        var payload = {
            email: this.state.email,
            password: this.state.password
        };

        fetch("http://13.58.118.39/api/auth/login", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
            .then((resp) => resp.json())
            .then(function(data) {
               console.log(data);
            })
            //.catch((err) => err.json())
            .catch(function(err){
                console.log(err.message);
            });

        event.preventDefault();
    }


 render(){
     return(
         <div className="login-outer">
             <div className="login-inner">
                 <center><img style={{maxWidth: '200px'}} src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png" /></center>
                 <form method="post" action="" className="login-form" onSubmit={this.handleSubmit}>
                     <div className="form-header">
                         <label>Login</label>
                     </div>
                     <div className="form-body">
                         <div className="form-group">
                             <label>Username or Email</label>
                             <input type="text" value={this.state.email} name="email" onChange={this.handleInputChange} className="form-control" />
                         </div>
                         <div className="form-group">
                             <label>Password</label>
                             <input type="password" value={this.state.password} name="password" onChange={this.handleInputChange} className="form-control" />
                         </div>
                         <div className="form-group">
                             <button type="button" className="btn btn-md btn-primary btn-block" to="/"> Login </button>
                             <button type="submit" className="btn btn-md btn-primary btn-block"> Register </button>
                             <Link className="" to='/admin'>Home</Link>
                         </div>
                     </div>
                 </form>
             </div>
         </div>
     );
 }
}