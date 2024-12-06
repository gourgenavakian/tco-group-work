import React from 'react';

function TasksTab(props) {
    return (
        <div className="tab-pane fade show active"  id="tasks" role="tabpanel">
            <div className="pd-20 profile-task-wrap">
                <div className="container pd-0">
                    {/*Open Task start*/}
                    <div className="task-title row align-items-center">
                        <div className="col-md-8 col-sm-12">
                            <h5>Open Tasks (4 Left)</h5>
                        </div>
                        <div className="col-md-4 col-sm-12 text-right">
                            <a href="task-add" data-toggle="modal"
                               data-target="#task-add"
                               className="bg-light-blue btn text-blue weight-500"><i
                                className="ion-plus-round"></i> Add</a>
                        </div>
                    </div>
                    <div className="profile-task-list pb-30">
                        <ul>
                            <li>
                                <div
                                    className="custom-control custom-checkbox mb-5">
                                    <input type="checkbox"
                                           className="custom-control-input"
                                           id="task-1"/>
                                    <label className="custom-control-label"
                                           htmlFor="task-1"></label>
                                </div>
                                <div className="task-type">Email</div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Id ea earum.
                                <div className="task-assign">Assigned to Ferdinand
                                    M. <div className="due-date">due date <span>22 February 2019</span>
                                    </div></div>
                            </li>
                            <li>
                                <div
                                    className="custom-control custom-checkbox mb-5">
                                    <input type="checkbox"
                                           className="custom-control-input"
                                           id="task-2"/>
                                    <label className="custom-control-label"
                                           htmlFor="task-2"></label>
                                </div>
                                <div className="task-type">Email</div>
                                Lorem ipsum dolor sit amet.
                                <div className="task-assign">Assigned to Ferdinand
                                    M. <div className="due-date">due date <span>22 February 2019</span>
                                    </div></div>
                            </li>
                            <li>
                                <div
                                    className="custom-control custom-checkbox mb-5">
                                    <input type="checkbox"
                                           className="custom-control-input"
                                           id="task-3"/>
                                    <label className="custom-control-label"
                                           htmlFor="task-3"></label>
                                </div>
                                <div className="task-type">Email</div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.
                                <div className="task-assign">Assigned to Ferdinand
                                    M. <div className="due-date">due date <span>22 February 2019</span>
                                    </div></div>
                            </li>
                            <li>
                                <div
                                    className="custom-control custom-checkbox mb-5">
                                    <input type="checkbox"
                                           className="custom-control-input"
                                           id="task-4"/>
                                    <label className="custom-control-label"
                                           htmlFor="task-4"></label>
                                </div>
                                <div className="task-type">Email</div>
                                Lorem ipsum dolor sit amet. Id ea earum.
                                <div className="task-assign">Assigned to Ferdinand
                                    M. <div className="due-date">due date <span>22 February 2019</span>
                                    </div></div>
                            </li>
                        </ul>
                    </div>
                    {/* Open Task End*/}
                    {/* Close Task start*/}
                    <div className="task-title row align-items-center">
                        <div className="col-md-12 col-sm-12">
                            <h5>Closed Tasks</h5>
                        </div>
                    </div>
                    <div className="profile-task-list close-tasks">
                        <ul>
                            <li>
                                <div
                                    className="custom-control custom-checkbox mb-5">
                                    <input type="checkbox"
                                           className="custom-control-input"
                                           id="task-close-1" checked=""
                                           disabled=""/>
                                    <label className="custom-control-label"
                                           htmlFor="task-close-1"></label>
                                </div>
                                <div className="task-type">Email</div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Id ea earum.
                                <div className="task-assign">Assigned to Ferdinand
                                    M. <div className="due-date">due date <span>22 February 2018</span>
                                    </div></div>
                            </li>
                            <li>
                                <div
                                    className="custom-control custom-checkbox mb-5">
                                    <input type="checkbox"
                                           className="custom-control-input"
                                           id="task-close-2" checked=""
                                           disabled=""/>
                                    <label className="custom-control-label"
                                           htmlFor="task-close-2"></label>
                                </div>
                                <div className="task-type">Email</div>
                                Lorem ipsum dolor sit amet.
                                <div className="task-assign">Assigned to Ferdinand
                                    M. <div className="due-date">due date <span>22 February 2018</span>
                                    </div></div>
                            </li>
                            <li>
                                <div
                                    className="custom-control custom-checkbox mb-5">
                                    <input type="checkbox"
                                           className="custom-control-input"
                                           id="task-close-3" checked=""
                                           disabled=""/>
                                    <label className="custom-control-label"
                                           htmlFor="task-close-3"></label>
                                </div>
                                <div className="task-type">Email</div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.
                                <div className="task-assign">Assigned to Ferdinand
                                    M. <div className="due-date">due date <span>22 February 2018</span>
                                    </div></div>
                            </li>
                            <li>
                                <div
                                    className="custom-control custom-checkbox mb-5">
                                    <input type="checkbox"
                                           className="custom-control-input"
                                           id="task-close-4" checked=""
                                           disabled=""/>
                                    <label className="custom-control-label"
                                           htmlFor="task-close-4"></label>
                                </div>
                                <div className="task-type">Email</div>
                                Lorem ipsum dolor sit amet. Id ea earum.
                                <div className="task-assign">Assigned to Ferdinand
                                    M. <div className="due-date">due date <span>22 February 2018</span>
                                    </div></div>
                            </li>
                        </ul>
                    </div>
                    {/*  Close Task start */}
                    {/* add task popup start*/}
                    <div
                        className="modal fade customscroll mCustomScrollbar _mCS_4 mCS_no_scrollbar"
                        id="task-add" tabIndex="-1" role="dialog">
                        <div id="mCSB_4"
                             className="mCustomScrollBox mCS-dark-2 mCSB_vertical mCSB_inside"
                             style={{maxHeight: "none"}} tabIndex="0">
                            <div id="mCSB_4_container"
                                 className="mCSB_container mCS_y_hidden mCS_no_scrollbar_y"
                                 style={{position: "relative", top: 0, left: 0}}
                                 dir="ltr">
                                <div className="modal-dialog modal-dialog-centered"
                                     role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title"
                                                id="exampleModalLongTitle">Tasks
                                                Add</h5>
                                            <button type="button" className="close"
                                                    data-dismiss="modal"
                                                    aria-label="Close"
                                                    data-toggle="tooltip"
                                                    data-placement="bottom" title=""
                                                    data-original-title="Close Modal">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div className="modal-body pd-0">
                                            <div className="task-list-form">
                                                <ul>
                                                    <li>
                                                        <form>
                                                            <div
                                                                className="form-group row">
                                                                <label
                                                                    className="col-md-4">Task
                                                                    Type</label>
                                                                <div
                                                                    className="col-md-8">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"/>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="form-group row">
                                                                <label
                                                                    className="col-md-4">Task
                                                                    Message</label>
                                                                <div
                                                                    className="col-md-8">
                                                                                                        <textarea
                                                                                                            className="form-control"></textarea>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="form-group row">
                                                                <label
                                                                    className="col-md-4">Assigned
                                                                    to</label>
                                                                <div
                                                                    className="col-md-8">
                                                                    <div
                                                                        className="dropdown bootstrap-select show-tick form-control">
                                                                        <select
                                                                            className="selectpicker form-control"
                                                                            // data-style="btn-outline-primary"
                                                                            title="Not Chosen"
                                                                            multiple=""
                                                                            data-selected-text-format="count"
                                                                            data-count-selected-text="{0} people selected"
                                                                            tabIndex="-98">
                                                                            <option>Ferdinand
                                                                                M.
                                                                            </option>
                                                                            <option>Don
                                                                                H.
                                                                                Rabon
                                                                            </option>
                                                                            <option>Ann
                                                                                P.
                                                                                Harris
                                                                            </option>
                                                                            <option>Katie
                                                                                D.
                                                                                Verdin
                                                                            </option>
                                                                            <option>Christopher
                                                                                S.
                                                                                Fulghum
                                                                            </option>
                                                                            <option>Matthew
                                                                                C.
                                                                                Porter
                                                                            </option>
                                                                        </select>
                                                                        <button
                                                                            type="button"
                                                                            className="btn dropdown-toggle btn-outline-primary bs-placeholder"
                                                                            data-toggle="dropdown"
                                                                            role="combobox"
                                                                            aria-owns="bs-select-1"
                                                                            aria-haspopup="listbox"
                                                                            aria-expanded="false"
                                                                            title="Not Chosen">
                                                                            <div
                                                                                className="filter-option">
                                                                                <div
                                                                                    className="filter-option-inner">
                                                                                    <div
                                                                                        className="filter-option-inner-inner">Not
                                                                                        Chosen
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </button>
                                                                        <div
                                                                            className="dropdown-menu ">
                                                                            <div
                                                                                className="inner show"
                                                                                role="listbox"
                                                                                id="bs-select-1"
                                                                                tabIndex="-1"
                                                                                aria-multiselectable="true">
                                                                                <ul className="dropdown-menu inner show"
                                                                                    role="presentation"></ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="form-group row mb-0">
                                                                <label
                                                                    className="col-md-4">Due
                                                                    Date</label>
                                                                <div
                                                                    className="col-md-8">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control date-picker"/>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;"
                                                           className="remove-task"
                                                           data-toggle="tooltip"
                                                           data-placement="bottom"
                                                           title=""
                                                           data-original-title="Remove Task"><i
                                                            className="ion-minus-circled"></i></a>
                                                        <form>
                                                            <div
                                                                className="form-group row">
                                                                <label
                                                                    className="col-md-4">Task
                                                                    Type</label>
                                                                <div
                                                                    className="col-md-8">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"/>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="form-group row">
                                                                <label
                                                                    className="col-md-4">Task
                                                                    Message</label>
                                                                <div
                                                                    className="col-md-8">
                                                                                                        <textarea
                                                                                                            className="form-control"></textarea>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="form-group row">
                                                                <label
                                                                    className="col-md-4">Assigned
                                                                    to</label>
                                                                <div
                                                                    className="col-md-8">
                                                                    <div
                                                                        className="dropdown bootstrap-select show-tick form-control">
                                                                        <select
                                                                            className="selectpicker form-control"
                                                                            // data-style="btn-outline-primary"
                                                                            title="Not Chosen"
                                                                            multiple=""
                                                                            data-selected-text-format="count"
                                                                            data-count-selected-text="{0} people selected"
                                                                            tabIndex="-98">
                                                                            <option>Ferdinand
                                                                                M.
                                                                            </option>
                                                                            <option>Don
                                                                                H.
                                                                                Rabon
                                                                            </option>
                                                                            <option>Ann
                                                                                P.
                                                                                Harris
                                                                            </option>
                                                                            <option>Katie
                                                                                D.
                                                                                Verdin
                                                                            </option>
                                                                            <option>Christopher
                                                                                S.
                                                                                Fulghum
                                                                            </option>
                                                                            <option>Matthew
                                                                                C.
                                                                                Porter
                                                                            </option>
                                                                        </select>
                                                                        <button
                                                                            type="button"
                                                                            className="btn dropdown-toggle btn-outline-primary bs-placeholder"
                                                                            data-toggle="dropdown"
                                                                            role="combobox"
                                                                            aria-owns="bs-select-2"
                                                                            aria-haspopup="listbox"
                                                                            aria-expanded="false"
                                                                            title="Not Chosen">
                                                                            <div
                                                                                className="filter-option">
                                                                                <div
                                                                                    className="filter-option-inner">
                                                                                    <div
                                                                                        className="filter-option-inner-inner">Not
                                                                                        Chosen
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </button>
                                                                        <div
                                                                            className="dropdown-menu ">
                                                                            <div
                                                                                className="inner show"
                                                                                role="listbox"
                                                                                id="bs-select-2"
                                                                                tabIndex="-1"
                                                                                aria-multiselectable="true">
                                                                                <ul className="dropdown-menu inner show"
                                                                                    role="presentation"></ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div
                                                                className="form-group row mb-0">
                                                                <label
                                                                    className="col-md-4">Due
                                                                    Date</label>
                                                                <div
                                                                    className="col-md-8">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control date-picker"/>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="add-more-task">
                                                <a href="#" data-toggle="tooltip"
                                                   data-placement="bottom" title=""
                                                   data-original-title="Add Task"><i
                                                    className="ion-plus-circled"></i> Add
                                                    More Task</a>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button"
                                                    className="btn btn-primary">Add
                                            </button>
                                            <button type="button"
                                                    className="btn btn-secondary"
                                                    data-dismiss="modal">Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="mCSB_4_scrollbar_vertical"
                                 className="mCSB_scrollTools mCSB_4_scrollbar mCS-dark-2 mCSB_scrollTools_vertical mCSB_scrollTools_onDrag_expand"
                                 style={{display: "none"}}>
                                <div className="mCSB_draggerContainer">
                                    <div id="mCSB_4_dragger_vertical"
                                         className="mCSB_dragger"
                                         style={{position: 'absolute', minHeight: '30px', top: '0px'}}>
                                        <div className="mCSB_dragger_bar"
                                             style={{lineHeight: '30px'}}></div>
                                    </div>
                                    <div className="mCSB_draggerRail"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*add task popup End*/}
                </div>
            </div>
        </div>
    );
}

export default TasksTab;