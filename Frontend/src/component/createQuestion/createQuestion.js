import "./createQuestion.css"
import logo1 from '../assets/logo.svg';
import logo2 from '../assets/community.svg';
import hamburger from '../assets/hamburger.svg';
import person from '../assets/person.svg';
import leftArrow from '../assets/left-arrow.svg';
// import rectangleBox from '../assets/rectangle-box.svg';
import gear from '../assets/gear.svg';
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";






const QuestionPage = () => {
    var n=0;
    const [question, setQuestion] = useState([""]);
    const [option, setoption] = useState([""]);
    const [shift , setshift] = useState(true);
    const [title, settitle] = useState("Create Questions");
    const [preview , setpreview] = useState("Preview");
    const [selectedOption, setSelectedOption] = useState('');
    const [toggle, setToggle] = useState(false);
    const [color,setColor] = useState("");
    const [font,setFont] = useState("");
    const [bold, setBold] = useState("");
    function Newquestion(){
        //  console.log(question)
        setQuestion([...question,""])
    }
    function previewpage(){
        if(shift===true){
        setshift(false)
        settitle("Preview")
        setpreview("Close Preview")}
        else{
            setshift(true)
            settitle("Create Questions")
            setpreview("Preview")
        }
    }
    function reviewpage(){
        if(shift===true){
        setshift(false)
        settitle("Preview")
        setpreview("Close Preview")
        setToggle(true)}
        else{
            setshift(true)
            settitle("Create Questions")
            setpreview("Preview")
        }
    }
    function savedata(value,index){
        console.log(question);
        const Newquestion=question.map((que,queindex)=>{
            return queindex === index ? value : que 
        })
        setQuestion(Newquestion)
    }

    function saveoption(value, index){
        const optionsave=option.map((opt,optionindex)=>{
            return optionindex === index ? value : opt
        })
        setoption(optionsave)
    }

    function handleSelect(event) {
        setSelectedOption(event.target.value);
        console.log(setSelectedOption(event.target.value));
        if (event.target.value == 'logout') {
          handleLogout();
        }
      }
      
      const navigate = useNavigate();
      function handleLogout() {
        // redirect to first page
        navigate('/');
    
      }
        
console.log(question);
    return (
        <>
        {toggle && <>
            <div className="mainThemContainer">
              <div className="themsContainer">
                <h3 className="themsheader">Theme Settings</h3>
              </div>
              <div className=" themsinputs">
                <label  className="lableThems" htmlFor="Theme">
                  Theme
                  </label><br/>
                  <select className="Thems" name="Theme" id="theme">
                    <option value="MCQ">MCQ</option>
                    <option value="ONE WORD">ONE WORD</option>
                    
                  </select>
              
              </div>
              <div className="themsinput1">
                <div>
                <label className="Themelable1">Theme Name</label><br />
                <input type="text" className="Thems01" />
                </div>
                <div> <label className="Themelable12" >Theme Type</label><br />
                  <select className="Thems02"  name="Theme type" id="theme">
                    <option value="">Survey</option>
                    <option value="Population">Populatin</option>
                    <option value="food">Food</option>
                    <option value="literacy rate">Literacy rate</option>
                  </select><br /></div>
                <div> <label className="Themelable13">From Type</label><br />
                <select className="Thems03"  name="type" id="ttype">
                    <option value="One to One">One to One</option>
                    <option value="Live">Live</option>
                    
                  </select>
                  </div>
               
                
                  
          
              </div>
              <div className="themsinput2">
                <div><label className="Themelable01">All Question Mandatory</label><br />
                <select className="Thems2"  name="Mandatory" id="Mandatory">
                <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </select></div>
                <div>  <label className="Themelable22">Enable skip</label><br />
                <select className="Thems2"  name="Theme" id="theme">
                <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    
                  </select></div>
                <div> <label className="Themelable2" >Option Type</label><br />
                  <select className="Thems23"  name="optiontype" id="optiontype">
                    <option value="box">Box</option>
                    <option value="rectangle">Rectangle</option>
                    </select></div>
        
              </div>
        
              <div className="themsinput3">
                <div>  <label className="Themelable3" >Font</label><br />

                <select className="Thems10"  name="Themefont" id="themefont">
                <option value="pink" >select</option>
                    <option value="Bold" onClick={()=>setBold(800)}>Bold</option>
                    <option value="italic" onClick={()=>setFont("italic")}>Italic</option>
                    <option value="Norman" onClick={()=>setFont("normal")}>Normal</option>
                    <option value="oblique" onClick={()=>setFont("oblique")}>Oblique</option>
                    
                  </select></div>
                <div>  <label className="Themelable32" >Color</label><br />
                <select className="Themscl1"  name="Themecolor" id="themecolor" >
                <option value="pink" >select</option>
                    <option value="pink" onClick={()=>setColor("pink")}>Pink</option>
                    <option value="yellow" onClick={()=>setColor("yellow")}>yellow</option>
                    <option value="Grey" onClick={()=>setColor("grey")}>Grey</option>
                    <option value="blue" onClick={()=>setColor("blue")}>blue</option>
                </select></div>
                <div></div>
              
              </div>
              <div className="btncs">
                <button className="btnc">CANCEL</button>
                <button onClick={()=>{setToggle(false)}} className="btns">SAVE</button>
                </div>
            </div>
        </>}
        {/* // ------------------------------------------------------------ */}
         {!toggle && <div style={{backgroundColor:`${color}`,fontStyle:`${font}`,fontWeight:`${bold}`}} className="main">
            <div className="left-nav">
                <span>
                    <img src={logo1} alt="logo1" />
                </span>
                <span className="icon2">
                    <img src={logo2} alt="logo2" />
                </span>
                <span className="three-line">
                    <img className="three" src={hamburger} alt="hamburger" />
                </span>
            </div>
            <div className="right-side">
                <div className="top-nav">
                    <span>Logo</span>
                    <span className="right">
                        <span>
                        <select  value={selectedOption} onChange={handleSelect}
                              className="select">
                                 <option value="select">Select</option>
                                <option value="logout">Logout</option>
                            </select> </span>
                    </span>
                    <div className="picture-nav">
                        <img className="sort-image-person" src={person} alt="Person" />
                    </div>
                </div>
                <div className="box">
                    <img className="left-arrow" src={leftArrow} alt="leftArrow" />
                    <div id="text">{title}</div>
                    
                    {!toggle && <button onClick={reviewpage}  className="btns" id="btn-cancel" style={{display:"inline"}} >Theme </button>}
                    
                    
                    {!toggle && <button className="btns" id="btn-cancel" onClick={previewpage} style={{display:"inline",margin:"0px",marginTop:"10px"}}>Preview</button>}
                    {toggle && <button className="btns" id="btn-cancel" onClick={()=>navigate("/Questions")} style={{display:"inline",margin:"0px",marginTop:"10px"}}>Close Preview</button>}
                    <button
                        type="submit"
                        // onClick={handleSubmit}
                        className="btns"
                        id="btn-next"
                        onClick={()=>navigate("/Surveylist")}
                    >Save </button>
                </div>
   {shift && <div>  {question.map((que,index)=>{
                    n=n+1;
                return <div className="question-section">
                    <div className="question-title">
                        <span >Q{n}</span> <span className="question" >Question </span>
                        <img className="gear" src={gear} alt="gear" />
                    </div>
                    <div>
                        <input onChange={(e)=>savedata(e.target.value,index)}
                            className="question-input"
                            type={'text'}
                            placeholder={"Enter Question"} />
                    </div>
                    <div className="radio-btns" >
                             <input type={"radio"} name="k" value={"Value"} /> 
                            <input className="radio-input" type={'text'} placeholder={"Value"} />
                             <br />
                            <input type={"radio"} name="k" value={"Value"} /> 
                            <input className="radio-input" type={'text'} placeholder={"Value"} />
                             <br />
                             <input type={"radio"} name="k" value={"Value"} /> 
                             <input className="radio-input" type={'text'} placeholder={"Value"} />
                             <br />
                           
                    </div>
                </div>
        }) }

                <div className="btn-section">
                    <button  className="add-question-btn" 
                    onClick={()=>Newquestion()}>Add question</button>
                </div>
                </div>}
                {!shift && <div>    
                    {
                        question.map((que ,index )=>{
                            return <div className="preview">
                                <div className="que">Question {index+1}</div>
                                <div className="allques">{que}</div>
                                <div className="val">{option}</div>
                                </div>
                        })
                    }
                    
                    </div>}
            </div>
        </div>}
        </>
    )
}

export default QuestionPage ;



