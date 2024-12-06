import React, {useState} from 'react';
import SettingsTab from "../components/SettingsTab";
import TasksTab from "../components/TasksTab";
import TimelineTab from "../components/TimelineTab";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPencil} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faTwitter,faInstagram,faLinkedin,} from '@fortawesome/free-brands-svg-icons';

function Profile(props) {
    const socialIcons = [
        faFacebook,faTwitter,faInstagram,faLinkedin
    ]
    const [showCurrentTab, setShowCurrentTab] = useState('');

    const renderCurrentTab = () => {
        switch (showCurrentTab) {
            case 'timeline':
                return <TimelineTab/>
            case 'tasks':
                return <TasksTab/>
            case 'setting':
                return <SettingsTab/>
            default: return <TimelineTab/>
        }
    }

    return (
        <div className="header-white sidebar-dark">

            <div className="main-container">
            <div className="pd-ltr-20 xs-pd-20-10">
                <div className="min-height-200px">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="title">
                                    <h4>Profile</h4>
                                </div>
                                <nav aria-label="breadcrumb" role="navigation">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Profile</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-30">
                            <div className="pd-20 card-box height-100-p">
                                <div className="profile-photo">
                                    <Link to="modal" data-toggle="modal" data-target="#modal" className="edit-avatar">
                                        <i className="fa fa-pencil"></i>
                                        <FontAwesomeIcon icon={faPencil} />
                                    </Link>
                                    <img src="/images/photo1.jpg" alt="" className="avatar-photo"/>
                                    <div className="modal fade" id="modal" tabIndex="-1" role="dialog"
                                         aria-labelledby="modalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <div className="modal-content">
                                                <div className="modal-body pd-5">
                                                    <div className="img-container">
                                                        <img id="image" src="/images/photo2.jpg" alt="Picture"/>
                                                    </div>
                                                </div>
                                                <div className="modal-footer">
                                                    <input type="submit" value="Update" className="btn btn-primary"/>
                                                    <button type="button" className="btn btn-default"
                                                            data-dismiss="modal">Close
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="text-center h5 mb-0">Ross C. Lopez</h5>
                                <p className="text-center text-muted font-14">Lorem ipsum dolor sit amet</p>
                                <div className="profile-info">
                                    <h5 className="mb-20 h5 text-blue">Contact Information</h5>
                                    <ul>
                                        <li>
                                            <span>Email Address:</span>
                                            FerdinandMChilds@test.com
                                        </li>
                                        <li>
                                            <span>Phone Number:</span>
                                            619-229-0054
                                        </li>
                                        <li>
                                            <span>Country:</span>
                                            America
                                        </li>
                                        <li>
                                            <span>Address:</span>
                                            1807 Holden Street<br/>
                                            San Diego, CA 92115
                                        </li>
                                    </ul>
                                </div>
                                <div className="profile-social">
                                    <h5 className="mb-20 h5 text-blue">Social Links</h5>
                                    <ul className="clearfix">
                                        {socialIcons.map((item, index) => (
                                            <li><Link to="#" className="btn" data-bgcolor="#3b5998" data-color="#ffffff"
                                                      style={{
                                                          color: "rgb(255, 255, 255)",
                                                          backgroundColor: "rgb(59, 89, 152)"
                                                      }}> <FontAwesomeIcon icon={item}/> </Link>
                                            </li>
                                        ))}

                                    </ul>
                                </div>
                                <div className="profile-skills">
                                    <h5 className="mb-20 h5 text-blue">Key Skills</h5>
                                    <h6 className="mb-5 font-14">HTML</h6>
                                    <div className="progress mb-20" style={{height: '6px'}}>
                                        <div className="progress-bar" role="progressbar" style={{width: '90%'}}
                                             aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h6 className="mb-5 font-14">Css</h6>
                                    <div className="progress mb-20" style={{height: '6px'}}>
                                        <div className="progress-bar" role="progressbar" style={{width: '70%'}}
                                             aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h6 className="mb-5 font-14">jQuery</h6>
                                    <div className="progress mb-20" style={{height: '6px'}}>
                                        <div className="progress-bar" role="progressbar" style={{width: '60%'}}
                                             aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <h6 className="mb-5 font-14">Bootstrap</h6>
                                    <div className="progress mb-20" style={{height: '6px'}}>
                                        <div className="progress-bar" role="progressbar" style={{width: '80%'}}
                                             aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 mb-30">
                            <div className="card-box height-100-p overflow-hidden">
                                <div className="profile-tab height-100-p">
                                    <div className="tab height-100-p">
                                        <ul className="nav nav-tabs customtab" role="tablist">
                                            <li className="nav-item">
                                                <Link className="nav-link"
                                                      data-toggle="tab"
                                                      to="#timeline"
                                                      role="tab" onClick={() => setShowCurrentTab('timeline')}>Timeline</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link"
                                                      data-toggle="tab"
                                                      to="#tasks"
                                                      role="tab" onClick={() => setShowCurrentTab('tasks')}>Tasks</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link"
                                                      data-toggle="tab"
                                                      to="#setting"
                                                      role="tab"
                                                      onClick={() => setShowCurrentTab('setting')}>Settings</Link>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            {renderCurrentTab()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <div className="datepickers-container" id="datepickers-container">
            <div className="datepicker -bottom-left- -from-bottom-"><i className="datepicker--pointer"></i>
                <nav className="datepicker--nav">
                    <div className="datepicker--nav-action" data-action="prev">
                        <svg>
                            <path d="M 17,12 l -5,5 l 5,5"></path>
                        </svg>
                    </div>
                    <div className="datepicker--nav-title">December, <i>2024</i></div>
                    <div className="datepicker--nav-action" data-action="next">
                        <svg>
                            <path d="M 14,12 l 5,5 l -5,5"></path>
                        </svg>
                    </div>
                </nav>
                <div className="datepicker--content">
                    <div className="datepicker--days datepicker--body active">
                        <div className="datepicker--days-names">
                            <div className="datepicker--day-name -weekend-">Su</div>
                            <div className="datepicker--day-name">Mo</div>
                            <div className="datepicker--day-name">Tu</div>
                            <div className="datepicker--day-name">We</div>
                            <div className="datepicker--day-name">Th</div>
                            <div className="datepicker--day-name">Fr</div>
                            <div className="datepicker--day-name -weekend-">Sa</div>
                        </div>
                        <div className="datepicker--cells datepicker--cells-days">
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="1"
                                 data-month="11" data-year="2024">1
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="2" data-month="11"
                                 data-year="2024">2
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="3" data-month="11"
                                 data-year="2024">3
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="4" data-month="11"
                                 data-year="2024">4
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="5" data-month="11"
                                 data-year="2024">5
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -current-" data-date="6"
                                 data-month="11" data-year="2024">6
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="7"
                                 data-month="11" data-year="2024">7
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="8"
                                 data-month="11" data-year="2024">8
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="9" data-month="11"
                                 data-year="2024">9
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="10" data-month="11"
                                 data-year="2024">10
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="11" data-month="11"
                                 data-year="2024">11
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="12" data-month="11"
                                 data-year="2024">12
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="13" data-month="11"
                                 data-year="2024">13
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="14"
                                 data-month="11" data-year="2024">14
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="15"
                                 data-month="11" data-year="2024">15
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="16" data-month="11"
                                 data-year="2024">16
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="17" data-month="11"
                                 data-year="2024">17
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="18" data-month="11"
                                 data-year="2024">18
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="19" data-month="11"
                                 data-year="2024">19
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="20" data-month="11"
                                 data-year="2024">20
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="21"
                                 data-month="11" data-year="2024">21
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="22"
                                 data-month="11" data-year="2024">22
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="23" data-month="11"
                                 data-year="2024">23
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="24" data-month="11"
                                 data-year="2024">24
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="25" data-month="11"
                                 data-year="2024">25
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="26" data-month="11"
                                 data-year="2024">26
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="27" data-month="11"
                                 data-year="2024">27
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="28"
                                 data-month="11" data-year="2024">28
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="29"
                                 data-month="11" data-year="2024">29
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="30" data-month="11"
                                 data-year="2024">30
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="31" data-month="11"
                                 data-year="2024">31
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -other-month-" data-date="1"
                                 data-month="0" data-year="2025">1
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -other-month-" data-date="2"
                                 data-month="0" data-year="2025">2
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -other-month-" data-date="3"
                                 data-month="0" data-year="2025">3
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend- -other-month-" data-date="4"
                                 data-month="0" data-year="2025">4
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="datepicker -bottom-left- -from-bottom-"><i className="datepicker--pointer"></i>
                <nav className="datepicker--nav">
                    <div className="datepicker--nav-action" data-action="prev">
                        <svg>
                            <path d="M 17,12 l -5,5 l 5,5"></path>
                        </svg>
                    </div>
                    <div className="datepicker--nav-title">December, <i>2024</i></div>
                    <div className="datepicker--nav-action" data-action="next">
                        <svg>
                            <path d="M 14,12 l 5,5 l -5,5"></path>
                        </svg>
                    </div>
                </nav>
                <div className="datepicker--content">
                    <div className="datepicker--days datepicker--body active">
                        <div className="datepicker--days-names">
                            <div className="datepicker--day-name -weekend-">Su</div>
                            <div className="datepicker--day-name">Mo</div>
                            <div className="datepicker--day-name">Tu</div>
                            <div className="datepicker--day-name">We</div>
                            <div className="datepicker--day-name">Th</div>
                            <div className="datepicker--day-name">Fr</div>
                            <div className="datepicker--day-name -weekend-">Sa</div>
                        </div>
                        <div className="datepicker--cells datepicker--cells-days">
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="1"
                                 data-month="11" data-year="2024">1
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="2" data-month="11"
                                 data-year="2024">2
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="3" data-month="11"
                                 data-year="2024">3
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="4" data-month="11"
                                 data-year="2024">4
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="5" data-month="11"
                                 data-year="2024">5
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -current-" data-date="6"
                                 data-month="11" data-year="2024">6
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="7"
                                 data-month="11" data-year="2024">7
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="8"
                                 data-month="11" data-year="2024">8
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="9" data-month="11"
                                 data-year="2024">9
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="10" data-month="11"
                                 data-year="2024">10
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="11" data-month="11"
                                 data-year="2024">11
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="12" data-month="11"
                                 data-year="2024">12
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="13" data-month="11"
                                 data-year="2024">13
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="14"
                                 data-month="11" data-year="2024">14
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="15"
                                 data-month="11" data-year="2024">15
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="16" data-month="11"
                                 data-year="2024">16
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="17" data-month="11"
                                 data-year="2024">17
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="18" data-month="11"
                                 data-year="2024">18
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="19" data-month="11"
                                 data-year="2024">19
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="20" data-month="11"
                                 data-year="2024">20
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="21"
                                 data-month="11" data-year="2024">21
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="22"
                                 data-month="11" data-year="2024">22
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="23" data-month="11"
                                 data-year="2024">23
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="24" data-month="11"
                                 data-year="2024">24
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="25" data-month="11"
                                 data-year="2024">25
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="26" data-month="11"
                                 data-year="2024">26
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="27" data-month="11"
                                 data-year="2024">27
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="28"
                                 data-month="11" data-year="2024">28
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="29"
                                 data-month="11" data-year="2024">29
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="30" data-month="11"
                                 data-year="2024">30
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="31" data-month="11"
                                 data-year="2024">31
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -other-month-" data-date="1"
                                 data-month="0" data-year="2025">1
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -other-month-" data-date="2"
                                 data-month="0" data-year="2025">2
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -other-month-" data-date="3"
                                 data-month="0" data-year="2025">3
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend- -other-month-" data-date="4"
                                 data-month="0" data-year="2025">4
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="datepicker -bottom-left- -from-bottom-"><i className="datepicker--pointer"></i>
                <nav className="datepicker--nav">
                    <div className="datepicker--nav-action" data-action="prev">
                        <svg>
                            <path d="M 17,12 l -5,5 l 5,5"></path>
                        </svg>
                    </div>
                    <div className="datepicker--nav-title">December, <i>2024</i></div>
                    <div className="datepicker--nav-action" data-action="next">
                        <svg>
                            <path d="M 14,12 l 5,5 l -5,5"></path>
                        </svg>
                    </div>
                </nav>
                <div className="datepicker--content">
                    <div className="datepicker--days datepicker--body active">
                        <div className="datepicker--days-names">
                            <div className="datepicker--day-name -weekend-">Su</div>
                            <div className="datepicker--day-name">Mo</div>
                            <div className="datepicker--day-name">Tu</div>
                            <div className="datepicker--day-name">We</div>
                            <div className="datepicker--day-name">Th</div>
                            <div className="datepicker--day-name">Fr</div>
                            <div className="datepicker--day-name -weekend-">Sa</div>
                        </div>
                        <div className="datepicker--cells datepicker--cells-days">
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="1"
                                 data-month="11" data-year="2024">1
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="2" data-month="11"
                                 data-year="2024">2
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="3" data-month="11"
                                 data-year="2024">3
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="4" data-month="11"
                                 data-year="2024">4
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="5" data-month="11"
                                 data-year="2024">5
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -current-" data-date="6"
                                 data-month="11" data-year="2024">6
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="7"
                                 data-month="11" data-year="2024">7
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="8"
                                 data-month="11" data-year="2024">8
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="9" data-month="11"
                                 data-year="2024">9
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="10" data-month="11"
                                 data-year="2024">10
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="11" data-month="11"
                                 data-year="2024">11
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="12" data-month="11"
                                 data-year="2024">12
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="13" data-month="11"
                                 data-year="2024">13
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="14"
                                 data-month="11" data-year="2024">14
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="15"
                                 data-month="11" data-year="2024">15
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="16" data-month="11"
                                 data-year="2024">16
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="17" data-month="11"
                                 data-year="2024">17
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="18" data-month="11"
                                 data-year="2024">18
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="19" data-month="11"
                                 data-year="2024">19
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="20" data-month="11"
                                 data-year="2024">20
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="21"
                                 data-month="11" data-year="2024">21
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="22"
                                 data-month="11" data-year="2024">22
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="23" data-month="11"
                                 data-year="2024">23
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="24" data-month="11"
                                 data-year="2024">24
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="25" data-month="11"
                                 data-year="2024">25
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="26" data-month="11"
                                 data-year="2024">26
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="27" data-month="11"
                                 data-year="2024">27
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="28"
                                 data-month="11" data-year="2024">28
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend-" data-date="29"
                                 data-month="11" data-year="2024">29
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="30" data-month="11"
                                 data-year="2024">30
                            </div>
                            <div className="datepicker--cell datepicker--cell-day" data-date="31" data-month="11"
                                 data-year="2024">31
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -other-month-" data-date="1"
                                 data-month="0" data-year="2025">1
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -other-month-" data-date="2"
                                 data-month="0" data-year="2025">2
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -other-month-" data-date="3"
                                 data-month="0" data-year="2025">3
                            </div>
                            <div className="datepicker--cell datepicker--cell-day -weekend- -other-month-" data-date="4"
                                 data-month="0" data-year="2025">4
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        </div>
    );
}

export default Profile;