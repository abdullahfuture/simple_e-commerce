import React, {Component} from "react";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
  };
  handleChange = (event) => {
    const fields = Object.assign({}, this.state);
    fields[event.target.name] = event.target.value;
    this.setState({...fields});
  };
  render() {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col absolute top-[30%] shadow-lg border-[2px] rounded-lg p-5 w-[60%] mobile:w-[90%]">
          <div className="text-2xl">Login</div>
          <div className="flex mt-3">
            <input
              className="border-[2px] rounded-lg w-full p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-liner duration-200"
              type="text"
              placeholder="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="flex mt-3">
            <input
              className="border-[2px] rounded-lg w-full p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-liner duration-200"
              type="password"
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <input
              type="button"
              className="btn mt-7 hover:scale-[1.1] w-full"
              value="Login"
            />
          </div>
        </div>
      </div>
    );
  }
}
