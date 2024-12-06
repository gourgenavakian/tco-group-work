import React from 'react';

function TimelineTab(props) {
    return (
        <div className="tab-pane fade show active" id="timeline" role="tabpanel">
            <div className="pd-20">
                <div className="profile-timeline">
                    <div className="timeline-month">
                        <h5>August, 2020</h5>
                    </div>
                    <div className="profile-timeline-list">
                        <ul>
                            <li>
                                <div className="date">12 Aug</div>
                                <div className="task-name"><i
                                    className="ion-android-alarm-clock"></i> Task
                                    Added
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.</p>
                                <div className="task-time">09:30 am</div>
                            </li>
                            <li>
                                <div className="date">10 Aug</div>
                                <div className="task-name"><i
                                    className="ion-ios-chatboxes"></i> Task Added
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.</p>
                                <div className="task-time">09:30 am</div>
                            </li>
                            <li>
                                <div className="date">10 Aug</div>
                                <div className="task-name"><i
                                    className="ion-ios-clock"></i> Event Added
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.</p>
                                <div className="task-time">09:30 am</div>
                            </li>
                            <li>
                                <div className="date">10 Aug</div>
                                <div className="task-name"><i
                                    className="ion-ios-clock"></i> Event Added
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.</p>
                                <div className="task-time">09:30 am</div>
                            </li>
                        </ul>
                    </div>
                    <div className="timeline-month">
                        <h5>July, 2020</h5>
                    </div>
                    <div className="profile-timeline-list">
                        <ul>
                            <li>
                                <div className="date">12 July</div>
                                <div className="task-name"><i
                                    className="ion-android-alarm-clock"></i> Task
                                    Added
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.</p>
                                <div className="task-time">09:30 am</div>
                            </li>
                            <li>
                                <div className="date">10 July</div>
                                <div className="task-name"><i
                                    className="ion-ios-chatboxes"></i> Task Added
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.</p>
                                <div className="task-time">09:30 am</div>
                            </li>
                        </ul>
                    </div>
                    <div className="timeline-month">
                        <h5>June, 2020</h5>
                    </div>
                    <div className="profile-timeline-list">
                        <ul>
                            <li>
                                <div className="date">12 June</div>
                                <div className="task-name"><i
                                    className="ion-android-alarm-clock"></i> Task
                                    Added
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.</p>
                                <div className="task-time">09:30 am</div>
                            </li>
                            <li>
                                <div className="date">10 June</div>
                                <div className="task-name"><i
                                    className="ion-ios-chatboxes"></i> Task Added
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.</p>
                                <div className="task-time">09:30 am</div>
                            </li>
                            <li>
                                <div className="date">10 June</div>
                                <div className="task-name"><i
                                    className="ion-ios-clock"></i> Event Added
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.</p>
                                <div className="task-time">09:30 am</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimelineTab;