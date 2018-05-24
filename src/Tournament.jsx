import React,{Component} from 'react';
import './index.css';
import ReactTable from 'react-table';
import data  from './batting.json';

class Tournament extends Component {
	constructor(props){
		super(props);

		this.state={
   	/*tournament:'ALL',
 		division: 'ALL',
 		teams: 'ALL',*/
 		array: [] 
 	}

 }
 componentDidMount() {
		/*setInterval(()=> {
           this.arraypush();
       },1000);*/
       this.loop();
       this.arraypush();

   }

	/*componentWillMount() {
		// setInterval(()=> {
  //          this.arraypush();
		// },1000);
	  this.loop();
	  this.arraypush();
	 
	}
	*/
	/*shouldComponentUpdate(nextProps) {
        const differentTitle = this.props.tournament !== nextProps.tournament;
        //const differentDone = this.props.done !== nextProps.done
        console.log(differentTitle);
        return differentTitle ;
    }*/

    componentWillReceiveProps(nextProps) {
     	// console.log(this.props, nextProps)
     	if(this.props !== nextProps)
     		{ this.setState(nextProps, () => {
     			console.log('enter func');
     			let copy=[];

     			for(var i=0;i<data.length;i++)
     			{
     				if(this.props.division==='ALL')
     				{
     					if(this.props.tournament=='ALL')
     					{
     						if( this.props.teams=== 'ALL')
     						{
     							for(var p=1;p<data[i].stats.length;p++)
     							{
                                   copy.push(data[i].stats[p]);
     							}
     							/*copy.push(data[i].stats);*/
     						}

     						else{
     							console.log('enter else');
     							for(var j=0;j<data[i].stats.length;j++)
     								{console.log('enter for');
     							if(data[i].stats[j][1]===this.state.teams)
     							{
     								copy.push(data[i].stats[j]);
     							}
     						}

     					}
     				}
     				else
     				{
     					if(data[i].tournament===this.state.tournament)
     					{
     						if( this.props.teams=== 'ALL')
     						{  for(var p=1;p<data[i].stats.length;p++)
     							{
                                   copy.push(data[i].stats[p]);
     							}
     						   /*copy.push(data[i].stats);*/
     						}
     						else{

     							for(var j=0;j<data[i].stats.length;j++)
     							{
     								if(data[i].stats[j][1]===this.state.teams)
     								{ 
     									copy.push(data[i].stats[j]);
     									
     								}
     							}

     						}
     					}
     				}

     			}
     			else
     			{
     				if(data[i].division==this.state.division)
     				{
     					if(this.props.tournament=='ALL')
     					{
     						if( this.props.teams=== 'ALL')
     						{
     							for(var p=1;p<data[i].stats.length;p++)
     							{
                                   copy.push(data[i].stats[p]);
     							}
     							/*copy.push(data[i].stats);*/
     						}

     						else{

     							for(var j=0;j<data[i].stats.length;j++)
     							{
     								if(data[i].stats[j][1]===this.state.teams)
     								{
     									copy.push(data[i].stats[j]);
     								}
     							}

     						}
     					}
     					else
     					{
     						if(data[i].tournament===this.state.tournament)
     							{  console.log('enter tour');
     						if( this.props.teams=== 'ALL')
     						{  
     							for(var p=1;p<data[i].stats.length;p++)
     							{
                                   copy.push(data[i].stats[p]);
     							}
     							/*copy.push(data[i].stats);*/
     						}

     						else{

     							for(var j=0;j<data[i].stats.length;j++)
     							{
     								if(data[i].stats[j][1]===this.state.teams)
     								{
     									copy.push(data[i].stats[j]);
     								}
     							}

     						}
     					}
     				}
     			}
     		}
     	}
     	console.log("setting")
     	this.setState({array: copy});
     	/*let ans=[];
     	console.log(this.state.array.length)
     	this.state.array.map((arr,key)=> {

     		arr.map((player,k1)=> {
     			ans.push(player);
     		})
     	})
     	console.log('ans',ans);*/

     			 	/*for(var i=0;i<data.length;i++)
     			 	{  if(this.props.division==='ALL')
     			          {

     			          }
     			 		if(this.props.division===data[i].division )
     			 		{   if(this.props.tournament==='ALL')
     			 	         {
     			 	         	copy.push(data[i].stats)
     			 	         }
     			 	         else
                            {
                             if( this.props.tournament==data[i].tournament)
                             {
     			 			if(this.state.team==='ALL')
     			 	        {
     			 	        	copy.push(data[i].stats);
     			 	        }
     			 	        else
     			 	        {
     			 			for(var j=0;j<data[i].stats.length;j++)
     			 			{
     			 				if(data[i].stats[j][1]===this.state.team)
     			 				{
     			 					copy.push(data[i].stats[j]);
     			 				}
     			 			}
     			 		  }
     			 		}
     			 	}
     			 		}
     			 	}*/

 	/*if (this.props.division==='ALL' && this.props.teams==='ALL' && this.props.tournament==='Pro_40')
 	{  //console.log('hello');
           let copy=[];
 		for( var i=0;i<data.length;i++)
 		{ 
 			if(data[i].tournament==='Pro40')
 			{ //console.log('hello');
 				//this.setState({array: [...data[i].stats]})
 				//this.setState({array: this.state.array.concat(data[i].stats)})
 				copy= copy.concat(data[i].stats);
 			}

 		}
 		this.setState({array: copy});
 	}


 	else if (this.props.division==='ALL' && this.props.teams==='ALL' && this.props.tournament==='Smaash')
 	{  //console.log('hello');
           let copy=[];
 		for( var i=0;i<data.length;i++)
 		{ 
 			if(data[i].tournament==='Smassh')
 			{ //console.log('hello');
 				//this.setState({array: [...data[i].stats]})
 				//this.setState({array: this.state.array.concat(data[i].stats)})
 				copy= copy.concat(data[i].stats);
 			}

 		}
 		//console.log('copy',copy);
 		this.setState({array: copy});
 	}

 	else if (this.props.division==='A' && this.props.teams==='ALL' && this.props.tournament==='ALL')*/







 });
     			// this.arraypush()

     		}
        // console.log('componentWillReceiveProps', nextProps);
         // this.setState(nextProps);
     }

     loop() {
 	//let object=JSON.parse(data);
 	console.log('object',data);
 }

 arraypush() {

 	console.log('enter func');

 	if (this.props.division==='ALL' && this.props.teams==='ALL' && this.props.tournament==='Pro40')
 	{  //console.log('hello');
 for( var i=0;i<data.length;i++)
 { 
 	if(data[i].tournament==='Pro40')
 		{ console.log('hello');
 				//this.setState({array: [...data[i].stats]})
 				this.setState({array: this.state.array.concat(data[i].stats)})
 			}

 		}
 	}

 	/*else if(this.state.tournament==='ALL' && this.state.division==='ALL' && this.state.teams==='ALL')
 	{
 		this.setState({array: [...data["0"].stats, ...data["1"].stats, ...data["2"].stats]})
 		// this.setState({array: this.state.array.concat(data["0"].stats)});
 		// this.setState({array: this.state.array.concat(data["1"].stats)});
 		// this.setState({array: this.state.array.concat(data["2"].stats)});

 	}*/
 }

 /*returnarray() {
 	let ans=[];
 	// console.log(this.state.array.length)
 	this.state.array.map((arr,key)=> {

 		arr.map((player,k1)=> {
 			ans.push(player);
 		})
 	})
 	 console.log('ans',ans);
 	return ans;
 }*/

 returnarray() {
 	let ans=[];
 	this.state.array.map((arr,key)=> {
      ans.push(ans.push(arr));
 	})
 	console.log('ans',ans);
 	return ans;
 }

  

 render() {

 	let ans=this.returnarray();
 	const columns=[{
 		Header: 'Batsman',
 		id: 'Batsman',
        
 		accessor: d=>d[0]


 	},
 	{
 		Header: 'Team',
 		id: 'team',
 		accessor: d=> d[1]
 	},
 	{
 		Header: 'Matches',
 		id: 'Matches',
 		accessor: d=>d[2]
 	},{
 		Header:'Innings',
 		id: 'Innings',
 		accessor: d=>d[3]
 	}, {
 		Header:'Not Outs',
 		id: 'Not Outs',
 		accessor: d=>d[4]
 	},{
 		Header:'Runs',
 		id: 'Runs',
 		accessor: d=>d[5]
 	},{
 		Header:'Highest',
 		id: 'Highset',
 		accessor: d=>d[6]
 	},{
 		Header:'50s',
 		id: '50s',
 		accessor: d=>d[7]
 	},{
 		Header:'100s',
 		id: '100s',
 		accessor: d=>d[8]
 	},{
 		Header:'Average',
 		id: 'Average',

 		accessor: d=>d[9]
 	},]
 	return (



 		<ReactTable
 		data={ans}
 		columns={columns}
 		/>
 		)
 }
}

export default Tournament;