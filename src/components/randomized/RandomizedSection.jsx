import React, {useState, useEffect} from "react";
import ListView from "./ListView";
import GridView from "./GridView";

function head(){
    return (
        <div className="row" style={{marginTop:'1em'}}>
            <div className="col-lg-12 text-center">
                <h5 className="section-subheading text-muted">We have Randomized Data For You</h5>
            </div>
        </div>
    );
}

function RandomizedSection(props){
    //Declare state Variable 
    const [csv, isCSV] = useState(false);
    const [scroll, isScroll] = useState(false);
    const [noOfGroups, handleChange] = useState(1);
    const [distributeRemaining, distribute] = useState(true);
    const [showGridResults, setShowResults] = useState(false)


    //Render again when randomItems changes its
    useEffect(()=>{
        setShowResults(false);
        handleChange(1);
        distribute(true);
    },[props.randomItems])

    function GridForm(props){
        let randomItems = props.randomItems;
        var itemLength =randomItems.length;
        
        return(
                <div className="container">
                   <h5>You have {itemLength} records. </h5>
                   <div className="form-group row">
                        <div className="col col-md-5" style={{paddingLeft:'13rem'}}>
                        <label style={{float:'left', marginLeft:'0.5rem', marginTop:'0.5rem'}}> How many groups do you want?</label>
                        </div>
                        <div className="col col-md-1" >
                        <input type="number" className="form-control" placeholder="1" min="1" max={itemLength} onChange={e=>{handleChange(e.target.value);setShowResults(false)}} value={noOfGroups}/>
                        </div>
                        <div>
                       {
                           //Input out of bound
                           noOfGroups<=0 || noOfGroups>itemLength ? <label style={{float:'left', marginLeft:'0.5rem', marginTop:'0.5rem'}}> Please don't try to trick us. Don't act kid</label>:
                           <label style={{float:'left', marginLeft:'0.5rem', marginTop:'0.5rem'}}> You will have {parseInt(itemLength/noOfGroups)} players in each group</label>
                       }
                        </div>
                    </div>
                    {
                        itemLength%noOfGroups >0
                        ?
                        <div className="form-group row">
                        <div className="col col-md-6">
                        <label className="form-check-label">
                          Distribute remaining players
                        </label>
                        <input className="form-check-input" type="radio" style={{marginLeft:'0.5rem'}} onChange={e=>{distribute(true);setShowResults(false)}} checked={distributeRemaining}/>
                        </div>
                       <div className="form-check">
                       <label className="form-check-label">
                          Put all remaining players in one group.
                        </label>
                        <input className="form-check-input" type="radio" style={{marginLeft:'0.5rem'}} onChange={e=>{distribute(false);setShowResults(false)}} checked={!distributeRemaining}/>
                      </div> 
                      </div>
                        :
                            null
                    }
                    <div>
                    <button type="button" className="btn btn-outline-success btn-lg" onClick={()=> setShowResults(true)}>PROCESS</button>
                    </div>
                    {showGridResults?<GridView items={randomItems} noOfGroups={noOfGroups} distributeRemaining={distributeRemaining}></GridView> : null}
                </div>
            );
    }

    function showRandomValues(props){
        return (
         <div>
            <div className="row align-items-center">
                <div className="col-md-6 offset-md-3" >
                    <div className="col-md-6 offset-md-3">
                    <ListView listItems={props.randomItems}/>
                    <p className="help-block text-danger"></p>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
            <div className="col-md-6 offset-md-3">
                <button className="btn btn-light" style={{marginRight:'1em'}} onClick={props.shuffleHandler}>Shuffle</button>
                <button id="reset" className="btn btn-light" onClick={props.resetHandler}>Reset </button>
            </div>
        </div>);
    }

    //Show grouped Section
    if(props.grouping){
        return(
        <div>
            {
            head()
            }
            <button className="btn btn-light" onClick={()=>downloadCSV(props.randomItems)}>Download Randomized CSV?</button>
            
                <div style={{marginTop:'1em'}}>
                    {
                        GridForm(props)
                    }
                </div>
        </div>
        );
    }
    else{//Show list section
    return(
            <div>
                {
                head()
                }
                {
                    props.randomItems.length>50?
                    <div>
                        <div class="alert alert-light" role="alert">
                            You have more than 50 Names. Do you want to keep scrolling?
                        </div>
                        <button className="btn btn-outline-success" style={{marginRight:'1em'}} onClick={()=>{isCSV(true);isScroll(false)}}>Nah, Give me CSV.</button>
                        <button className="btn btn-light" onClick={()=>{isCSV(false);isScroll(true)}}>Yeah Keep Scrolling</button>
                        {
                            scroll?showRandomValues(props):csv?downloadCSV(props.randomItems):null
                        }
                    </div>
                    :
                    <div>
                    <button className="btn btn-outline-success" onClick={()=>downloadCSV(props.randomItems)}>Download CSV?</button>
                    {
                        showRandomValues(props)
                    }
                    
                    </div>
                }
            </div>
        );
    }
}

const downloadCSV= (namesToBeDownloaded)=>{

    let values= "data:text/csv;charset=utf-8," + namesToBeDownloaded.join("\n");
    var link = document.createElement("a");
    link.setAttribute("href", encodeURI(values));
    link.setAttribute("download", "randomizedNames.csv");
    document.body.appendChild(link); // Required for FF
    link.click(); 
}
export default RandomizedSection;
