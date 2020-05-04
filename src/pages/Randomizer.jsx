import React from 'react';
import {shuffleArray} from '../js/ArrayShuffle';
import RandomizedSection from '../components/randomized/RandomizedSection';
//https://www.youtube.com/watch?v=9xhKH43llhU

export default class Randomizer extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            textValues: '',
            randomized:false,
            randomValues:[],
            shuffleCount:0,
            grouped:false
        };
        this.randomizeNames=this.randomizeNames.bind(this);
        this.resetForm=this.resetForm.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this._randomizedWithGroups= this._randomizedWithGroups.bind(this);
    }
    randomizeNames(event){
        //randomise event here
        var textValues = this.state.textValues;
        var lines=textValues.split('\n');
        if(lines.length>1){
            shuffleArray(lines)
            this.setState({...this.state, randomValues:lines, randomized:true,shuffleCount:1,grouped:false});
        }
    }

    _randomizedWithGroups(event){
        var textValues = this.state.textValues;
        var lines=textValues.split('\n');
        if(lines.length>1){
            shuffleArray(lines)
            this.setState({...this.state, randomValues:lines, randomized:true,shuffleCount:1,grouped:true});
        }
    }

    resetForm(){
        this.setState({textValues:'',randomized:false,shuffleCount:0,randomValues:[],grouped:false});
    }

    handleChange(event){
        this.setState({...this.state,textValues: event.target.value })
    }
    render(){

        return(
            <div>
            <section className="bg-light page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">List Randomizer</h2>
                        <h3 className="section-subheading text-muted">Provide each names in a new line. We randomize the names for you</h3>
                        </div>
                    </div>
                    
                    <div className="row align-items-center">
                        <div className="col-md-6 offset-md-3" >
                            <div className="form-group">
                            <textarea className="form-control rounded" placeholder="Enter Names to obtain randomized result" required="required" rows="10" onChange={this.handleChange} value={this.state.textValues}></textarea>
                            <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                        <div className="col-md-6 offset-md-3">
                            <button id="randomize" className="btn btn-light" style={{marginRight:'1em'}} onClick={this.randomizeNames}>Randomize</button>
                            <button id="reset" className="btn btn-light" style={{marginRight:'1em'}} onClick={this.resetForm}>Reset Values</button>
                            <button id="advanced-grouping" className="btn btn-light" onClick={this._randomizedWithGroups}>Create Randomized Multiple Groups</button>
                        </div>
                    </div>
                    {
                        this.state.randomized
                        ?
                            <RandomizedSection randomItems={this.state.randomValues} 
                                resetHandler={this.resetForm} 
                                shuffleHandler={
                                    ()=>{shuffleArray(this.state.randomValues);
                                    this.setState({...this.state,shuffleCount:this.state.shuffleCount+1});
                                    }}
                                grouping={this.state.grouped}
                            />
                        :
                            <div className="row" style={{marginTop:'1em'}}>
                                <div className="col-lg-12 text-center">
                                <h6 className="section-heading text-muted">Your Randomized Values Appears Below</h6>
                                </div>
                            </div>
                    }
                    {
                        this.state.shuffleCount>1?<p>You have shuffled it {this.state.shuffleCount} times </p> : null
                    }
                </div>
            </section>
           </div>

        );
    }
}