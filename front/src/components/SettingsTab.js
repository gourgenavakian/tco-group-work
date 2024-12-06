import React from 'react';

function SettingsTab(props) {
    return (
        <div className="tab-pane fade show active height-100-p" id="setting" role="tabpanel">
            <div className="profile-setting">
                <form>
                    <ul className="profile-edit-list row">
                        <li className="weight-500 col-md-6">
                            <h4 className="text-blue h5 mb-20">Edit Your Personal
                                Setting</h4>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input className="form-control form-control-lg"
                                       type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Title</label>
                                <input className="form-control form-control-lg"
                                       type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control form-control-lg"
                                       type="email"/>
                            </div>
                            <div className="form-group">
                                <label>Date of birth</label>
                                <input
                                    className="form-control form-control-lg date-picker"
                                    type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Gender</label>
                                <div className="d-flex">
                                    <div
                                        className="custom-control custom-radio mb-5 mr-20">
                                        <input type="radio" id="customRadio4"
                                               name="customRadio"
                                               className="custom-control-input"/>
                                        <label
                                            className="custom-control-label weight-400"
                                            htmlFor="customRadio4">Male</label>
                                    </div>
                                    <div
                                        className="custom-control custom-radio mb-5">
                                        <input type="radio" id="customRadio5"
                                               name="customRadio"
                                               className="custom-control-input"/>
                                        <label
                                            className="custom-control-label weight-400"
                                            htmlFor="customRadio5">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Country</label>
                                <div
                                    className="dropdown bootstrap-select form-control form-control-lg">
                                    <select
                                        className="selectpicker form-control form-control-lg"
                                        // data-style="btn-outline-secondary btn-lg"
                                        title="Not Chosen" tabIndex="-98">
                                        <option className="bs-title-option"
                                                value=""></option>
                                        <option>United States</option>
                                        <option>India</option>
                                        <option>United Kingdom</option>
                                    </select>
                                    <button type="button"
                                            className="btn dropdown-toggle btn-outline-secondary btn-lg bs-placeholder"
                                            data-toggle="dropdown" role="combobox"
                                            aria-owns="bs-select-3"
                                            aria-haspopup="listbox"
                                            aria-expanded="false"
                                            title="Not Chosen">
                                        <div className="filter-option">
                                            <div className="filter-option-inner">
                                                <div
                                                    className="filter-option-inner-inner">Not
                                                    Chosen
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                    <div className="dropdown-menu ">
                                        <div className="inner show" role="listbox"
                                             id="bs-select-3" tabIndex="-1">
                                            <ul className="dropdown-menu inner show"
                                                role="presentation"></ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>State/Province/Region</label>
                                <input className="form-control form-control-lg"
                                       type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Postal Code</label>
                                <input className="form-control form-control-lg"
                                       type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input className="form-control form-control-lg"
                                       type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <textarea className="form-control"></textarea>
                            </div>
                            <div className="form-group">
                                <label>Visa Card Number</label>
                                <input className="form-control form-control-lg"
                                       type="text"/>
                            </div>
                            <div className="form-group">
                                <label>Paypal ID</label>
                                <input className="form-control form-control-lg"
                                       type="text"/>
                            </div>
                            <div className="form-group">
                                <div
                                    className="custom-control custom-checkbox mb-5">
                                    <input type="checkbox"
                                           className="custom-control-input"
                                           id="customCheck1-1"/>
                                    <label
                                        className="custom-control-label weight-400"
                                        htmlFor="customCheck1-1">I agree to receive
                                        notification emails</label>
                                </div>
                            </div>
                            <div className="form-group mb-0">
                                <input type="submit" className="btn btn-primary"
                                       value="Update Information"/>
                            </div>
                        </li>
                        <li className="weight-500 col-md-6">
                            <h4 className="text-blue h5 mb-20">Edit Social Media
                                links</h4>
                            <div className="form-group">
                                <label>Facebook URL:</label>
                                <input className="form-control form-control-lg"
                                       type="text"
                                       placeholder="Paste your link here"/>
                            </div>
                            <div className="form-group">
                                <label>Twitter URL:</label>
                                <input className="form-control form-control-lg"
                                       type="text"
                                       placeholder="Paste your link here"/>
                            </div>
                            <div className="form-group">
                                <label>Linkedin URL:</label>
                                <input className="form-control form-control-lg"
                                       type="text"
                                       placeholder="Paste your link here"/>
                            </div>
                            <div className="form-group">
                                <label>Instagram URL:</label>
                                <input className="form-control form-control-lg"
                                       type="text"
                                       placeholder="Paste your link here"/>
                            </div>
                            <div className="form-group">
                                <label>Dribbble URL:</label>
                                <input className="form-control form-control-lg"
                                       type="text"
                                       placeholder="Paste your link here"/>
                            </div>
                            <div className="form-group">
                                <label>Dropbox URL:</label>
                                <input className="form-control form-control-lg"
                                       type="text"
                                       placeholder="Paste your link here"/>
                            </div>
                            <div className="form-group">
                                <label>Google-plus URL:</label>
                                <input className="form-control form-control-lg"
                                       type="text"
                                       placeholder="Paste your link here"/>
                            </div>
                            <div className="form-group">
                                <label>Pinterest URL:</label>
                                <input className="form-control form-control-lg"
                                       type="text"
                                       placeholder="Paste your link here"/>
                            </div>
                            <div className="form-group">
                                <label>Skype URL:</label>
                                <input className="form-control form-control-lg"
                                       type="text"
                                       placeholder="Paste your link here"/>
                            </div>
                            <div className="form-group">
                                <label>Vine URL:</label>
                                <input className="form-control form-control-lg"
                                       type="text"
                                       placeholder="Paste your link here"/>
                            </div>
                            <div className="form-group mb-0">
                                <input type="submit" className="btn btn-primary"
                                       value="Save &amp; Update"/>
                            </div>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
}

export default SettingsTab;