<div> 
  <h1>
    User Login
  </h1>
  <div className="container">
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <img src="https://cdn.tgdd.vn/UserUpload/939706/1TT3SU.gif" className="rounded-circle" alt=""/>
      </div>
    </div>
  </div>
    <form style={{"margin": "0px 200px"}}>
      <div className="form-group">
        <label for="email">Email address:</label>
        <input type="email" className="form-control" ref="email" />
      </div>
      <div className="form-group">
        <label for="pwd">Password:</label>
        <input type="password" className="form-control" ref="pwd" />
      </div>
      <button onClick={() => this.loginUser()} to={this.state.sttLog? "/Home": "/Login"} type="button" class="btn btn-primary">Login</button>
    </form>
</div>