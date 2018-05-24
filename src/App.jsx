import React,{Component} from 'react';
import './index.css';
import data  from './batting.json';
import Tournament from './Tournament.jsx';

class App extends Component {
 constructor(props) {
 	super(props);

 	this.state= {
 		tournament:'ALL',
 		division: 'ALL',
 		teams: 'ALL'
 		

 	}


 }


	

 

	render () {

		return (
			<div className="headline">
			<div>
			<h3> Year </h3>
			<select >
			<option value="2017">2017</option>

			</select>
			</div>
			<div>


    

			<h3> Tournament </h3>
			<select>
			<option value="ALL" onClick={event=> {this.setState({tournament: event.target.value})}}>ALL</option>
			<option value="Pro40" onClick={event=> {this.setState({tournament:event.target.value})}}>Pro 40</option>
			<option value="Smassh" onClick={event=> {this.setState({tournament: event.target.value})}}>Smassh</option>

			</select>
        
			</div>

			<div>
			<h3> Divison </h3>
			<select>
			<option value="ALL"  onClick={event=> {this.setState({division: event.target.value})}}>ALL</option>
			<option value="A" onClick={event=> {this.setState({division: event.target.value})}} >A</option>
			<option value="B" onClick={event=> {this.setState({division: event.target.value})}} >B</option>

			</select>
			</div>

			<div>
			<h3> Teams </h3>
			<select>
			<option value="ALL" onClick={event=> {this.setState({teams: event.target.value})}}>ALL</option>
			<option value="Boston Gymkhana S.C A" onClick={event=> {this.setState({teams: event.target.value})}} > Boston Gymkhana S.C A</option>
			<option value="Boston Eagles" onClick={event=> {this.setState({teams: event.target.value})}}> Boston Eagles</option>
			<option value="Conway Cricket Club" onClick={event=> {this.setState({teams: event.target.value})}} >Conway Cricket Club</option>
			<option value="NECC Hawks" onClick={event=> {this.setState({teams: event.target.value})}} >NECC Hawks</option>
			<option value="Challengers Cricket Club" onClick={event=> {this.setState({teams: event.target.value})}} >Challengers Cricket Club</option>
			<option value="Commonwealth Cricket Club A" onClick={event=> {this.setState({teams: event.target.value})}} >Commonwealth Cricket Club A</option>
			<option value="NECC Stars" onClick={event=> {this.setState({teams: event.target.value})}} >NECC Stars</option>
			<option value="Lagaan Lions" onClick={event=> {this.setState({teams: event.target.value})}} >Lagaan Lions</option>
			<option value="Smashing Challengers" onClick={event=> {this.setState({teams: event.target.value})}} >Smashing Challengers</option>
			<option value="Southern Connecticut Cricket Association" onClick={event=> {this.setState({teams: event.target.value})}} >Southern Connecticut Cricket Association</option>
			<option value="Pakistan 1st Cricket Club" onClick={event=> {this.setState({teams: event.target.value})}} >Pakistan 1st Cricket Club</option>
			<option value="Boston Bulls CC" onClick={event=> {this.setState({teams: event.target.value})}} >Boston Bulls CC</option>
			<option value="DMV Warriors" onClick={event=> {this.setState({teams: event.target.value})}} >DMV Warriors</option>
			<option value="Conway CC - T20" onClick={event=> {this.setState({teams: event.target.value})}} >Conway CC - T20</option>


			</select>
			</div>
               <Tournament 
              tournament={this.state.tournament}
              division={this.state.division}
              teams={this.state.teams}
              
            /> 

			</div>

			)

	}

}

export default App;