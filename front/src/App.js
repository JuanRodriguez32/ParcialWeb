import React, {Component} from "react";
import FollowerList from "./component/list.js";
import SearchBox from "./component/SearchBox.js";

import "./App.css";
import Chart from "./chart/chart.js";

export default class App extends Component {
	componentDidMount(){
		
		fetch("/"+this.state.username)
		.then(res => res.json())
      	.then(follows => {
      		let follow= follows.data.map((usuario, index) => {
      			return {
      				id: `usuario_${index+1}`,
      				login: usuario.login,
      				url: usuario.html_url,
      				
      			}
      		});
      		this.setState({followers: follow});
      	});
	}

	 componentWillMount(){
    this.getChartData();
  }

	componentDidUpdate(){
		fetch("/"+this.state.username)
		.then(res => res.json())
      	.then(follows => {
      		let follow= follows.data.map((usuario, index) => {
      			return {
      				id: `usuario_${index+1}`,
      				login: usuario.login,
      				url: usuario.html_url,
      				
      			}
      		});
      		this.setState({followers: follow});
      	});
	}

	getChartData(){
		if(this.followers != null)
		{
		var numb = this.followers.length;
		var name = this.state.username;
		}
		
    // Ajax calls here
    this.setState({
      chartData:{
        labels: ['jeromeetienne / Ar.js', 'mbeaudru / modern-js-cheatsheet', 'brpc / brpc', 'mr-mig / every -programmer-should-know', 'HVF / franchise', 'niezhiyang / open_source_team'],
        datasets:[
          {
            label:'Total Stars',
            data:[
              6290,
              3904,
              4126,
              5047,
              8756,
              5072
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
               'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
             
            ]
          }
        ]
      }
    });
  }


	constructor(props){
		super(props);

		this.state = {
			followers: [],
			username: "juanrodriguez32",
			chartData:{}
		}
	}

	search(text) {
			this.setState({
			username: text
		});
	} 

	render() {
		console.log(this.state);
		return(
			<div>
				<header>
					<h1 id = "title"> Following Github viewer : First approach to Github API </h1>
					
				</header>
				<p> To start hacking, please press "Tab" key, next type your victim's name</p>
				<div className = "start">

				<label>Victim Name: </label><SearchBox search={this.search.bind(this)}/>
				</div>

				<div className = "rest">
				<h2>Hi, Hacker,  your victim => {this.state.username} follows:</h2>
				<div className="row">
					<div className="col-8">
						<FollowerList followers={this.state.followers} />
					</div>
				</div>

				<Chart chartData={this.state.chartData} />
				</div>



			</div>
		);
	}
}