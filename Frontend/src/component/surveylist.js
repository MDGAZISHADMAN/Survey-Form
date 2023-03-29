import React from "react";
import { useEffect, useState } from "react";
import logo1 from "./assets/logo.svg";
import logo2 from "./assets/community.svg";
import hamburger from "./assets/hamburger.svg";
import sort from "./assets/sort.svg";
import filter from "./assets/sortfilter.svg";
import person from "./assets/person.svg";
import "./SurveyList.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  const [survey, setsurvey] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const deleteSurvey = async (id) => {
    await axios
      .delete(
       `https://survay-form-backend.onrender.com/form/surveylist:${id}/delete`
      )
      .then((res) => console.log("deleted", res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("https://survay-form-backend.onrender.com/form/surveylist")
      .then((res) => {
        if (res.status === 200 && res.data) {
          console.log(res.data.data);
          setsurvey(res.data.data);
          console.log(survey);
        } else {
          throw new Error("Not able to fetch posts");
        }
      });
  }, []);
  console.log(survey);

  const logout = () => {
    navigate("/Surveylist");
  };
  const handleSearch = (event) => setSearchTerm(event.target.value);
  // const results = !searchTerm
  //   ? proposals
  //   : proposals.filter((each) =>
  //       each.eventName.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  return (
    <>
      <div className="main">
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
                <select className="select">
                  <option>select</option>
                  <option onClick={logout}>logout</option>
                </select>{" "}
              </span>
            </span>
            <div className="picture-nav">
              <img className="sort-image-person" src={person} alt="Person" />
            </div>
          </div>
          {/* ----------------------------------------------- */}
          <div className="navbar">
            <div className="logo">
              <span>Survey List</span>
            </div>
            <div className="search-container">
              <input className="search" type="text" placeholder="Search" onChange={handleSearch}/>
              <button onClick={() => navigate("/Surveypage")}>Create</button>
              <img className="sort-image" src={sort} alt="sort" />
              <img className="sort-image" src={filter} alt="sort" />
            </div>
          </div>

          <div className="title">
            <span>Name</span>
            <span className="description-table">Description</span>
            <span>Type</span>
            <span>Start Date</span>
            <span>End Date</span>
            <span>Action</span>
          </div>

          {survey.map((list, index) => {
            return (
              <div key={index} id="survey-container">
                <table>
                  <tr>
                    <td className="first-tdd">{list.name}</td>
                    <td className="description-table2">{list.description}</td>
                    <td className="third-td">{list.type}</td>
                    <td className="forth-td">{list.startDate} </td>
                    <td className="fifth-td">{list.endDate}</td>
                    <td>
                      <button>Edit</button>
                      <button
                        onClick={() => {
                          deleteSurvey(list._id);
                        }}
                      >
                        Delete
                      </button>{" "}
                    </td>
                  </tr>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navigation;
