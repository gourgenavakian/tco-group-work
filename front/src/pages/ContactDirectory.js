import React from 'react'

export default function ContactDirectory() {
  return (
    <div>
    <div className="header">
      <div className="header-left">
        <div className="menu-icon dw dw-menu"></div>
        <div className="search-toggle-icon dw dw-search2" data-toggle="header_search"></div>
        <div className="header-search">
          <form>
            <div className="form-group mb-0">
              <i className="dw dw-search2 search-icon"></i>
              <input type="text" className="form-control search-input" placeholder="Search Here"/>
              <div className="dropdown">
                <a className="dropdown-toggle no-arrow" href="#" role="button" data-toggle="dropdown">
                  <i className="ion-arrow-down-c"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <div className="form-group row">
                    <label className="col-sm-12 col-md-2 col-form-label">From</label>
                    <div className="col-sm-12 col-md-10">
                      <input className="form-control form-control-sm form-control-line" type="text"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-12 col-md-2 col-form-label">To</label>
                    <div className="col-sm-12 col-md-10">
                      <input className="form-control form-control-sm form-control-line" type="text"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-sm-12 col-md-2 col-form-label">Subject</label>
                    <div className="col-sm-12 col-md-10">
                      <input className="form-control form-control-sm form-control-line" type="text"/>
                    </div>
                  </div>
                  <div className="text-right">
                    <button className="btn btn-primary">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="header-right">
        <div className="dashboard-setting user-notification">
          <div className="dropdown">
            <a className="dropdown-toggle no-arrow" href="javascript:;" data-toggle="right-sidebar">
              <i className="dw dw-settings2"></i>
            </a>
          </div>
        </div>
        <div className="user-notification">
          <div className="dropdown">
            <a className="dropdown-toggle no-arrow" href="#" role="button" data-toggle="dropdown">
              <i className="icon-copy dw dw-notification"></i>
              <span className="badge notification-active"></span>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <div className="notification-list mx-h-350 customscroll">
                <ul>
                  <li>
                    <a href="#">
                      <img src="/images/img.jpg" alt=""/>
                      <h3>John Doe</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/images/photo1.jpg" alt=""/>
                      <h3>Lea R. Frith</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/images/photo2.jpg" alt=""/>
                      <h3>Erik L. Richards</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/images/photo3.jpg" alt=""/>
                      <h3>John Doe</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/images/photo4.jpg" alt=""/>
                      <h3>Renee I. Hansen</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/images/img.jpg" alt=""/>
                      <h3>Vicki M. Coleman</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed...</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="user-info-dropdown">
          <div className="dropdown">
            <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown">
              <span className="user-icon">
                <img src="/images/photo1.jpg" alt=""/>
              </span>
              <span className="user-name">Ross C. Lopez</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
              <a className="dropdown-item" href="profile.html"><i className="dw dw-user1"></i> Profile</a>
              <a className="dropdown-item" href="profile.html"><i className="dw dw-settings2"></i> Setting</a>
              <a className="dropdown-item" href="faq.html"><i className="dw dw-help"></i> Help</a>
              <a className="dropdown-item" href="login.html"><i className="dw dw-logout"></i> Log Out</a>
            </div>
          </div>
        </div>
        <div className="github-link">
          <a href="https://github.com/dropways/deskapp" target="_blank"><img src="/images/github.svg" alt=""/></a>
        </div>
      </div>
    </div>
  
    <div className="right-sidebar">
      <div className="sidebar-title">
        <h3 className="weight-600 font-16 text-blue">
          Layout Settings
          <span className="btn-block font-weight-400 font-12">User Interface Settings</span>
        </h3>
        <div className="close-sidebar" data-toggle="right-sidebar-close">
          <i className="icon-copy ion-close-round"></i>
        </div>
      </div>
      <div className="right-sidebar-body customscroll">
        <div className="right-sidebar-body-content">
          <h4 className="weight-600 font-18 pb-10">Header Background</h4>
          <div className="sidebar-btn-group pb-30 mb-10">
            <a href="javascript:void(0);" className="btn btn-outline-primary header-white active">White</a>
            <a href="javascript:void(0);" className="btn btn-outline-primary header-dark">Dark</a>
          </div>
  
          <h4 className="weight-600 font-18 pb-10">Sidebar Background</h4>
          <div className="sidebar-btn-group pb-30 mb-10">
            <a href="javascript:void(0);" className="btn btn-outline-primary sidebar-light ">White</a>
            <a href="javascript:void(0);" className="btn btn-outline-primary sidebar-dark active">Dark</a>
          </div>
  
          <h4 className="weight-600 font-18 pb-10">Menu Dropdown Icon</h4>
          <div className="sidebar-radio-group pb-10 mb-10">
            <div className="custom-control custom-radio custom-control-inline">
              <input type="radio" id="sidebaricon-1" name="menu-dropdown-icon" className="custom-control-input" value="icon-style-1" checked=""/>
              <label className="custom-control-label" for="sidebaricon-1"><i className="fa fa-angle-down"></i></label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input type="radio" id="sidebaricon-2" name="menu-dropdown-icon" className="custom-control-input" value="icon-style-2"/>
              <label className="custom-control-label" for="sidebaricon-2"><i className="ion-plus-round"></i></label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input type="radio" id="sidebaricon-3" name="menu-dropdown-icon" className="custom-control-input" value="icon-style-3"/>
              <label className="custom-control-label" for="sidebaricon-3"><i className="fa fa-angle-double-right"></i></label>
            </div>
          </div>
  
          <h4 className="weight-600 font-18 pb-10">Menu List Icon</h4>
          <div className="sidebar-radio-group pb-30 mb-10">
            <div className="custom-control custom-radio custom-control-inline">
              <input type="radio" id="sidebariconlist-1" name="menu-list-icon" className="custom-control-input" value="icon-list-style-1" checked=""/>
              <label className="custom-control-label" for="sidebariconlist-1"><i className="ion-minus-round"></i></label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input type="radio" id="sidebariconlist-2" name="menu-list-icon" className="custom-control-input" value="icon-list-style-2"/>
              <label className="custom-control-label" for="sidebariconlist-2"><i className="fa fa-circle-o" aria-hidden="true"></i></label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input type="radio" id="sidebariconlist-3" name="menu-list-icon" className="custom-control-input" value="icon-list-style-3"/>
              <label className="custom-control-label" for="sidebariconlist-3"><i className="dw dw-check"></i></label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input type="radio" id="sidebariconlist-4" name="menu-list-icon" className="custom-control-input" value="icon-list-style-4" checked=""/>
              <label className="custom-control-label" for="sidebariconlist-4"><i className="icon-copy dw dw-next-2"></i></label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input type="radio" id="sidebariconlist-5" name="menu-list-icon" className="custom-control-input" value="icon-list-style-5"/>
              <label className="custom-control-label" for="sidebariconlist-5"><i className="dw dw-fast-forward-1"></i></label>
            </div>
            <div className="custom-control custom-radio custom-control-inline">
              <input type="radio" id="sidebariconlist-6" name="menu-list-icon" className="custom-control-input" value="icon-list-style-6"/>
              <label className="custom-control-label" for="sidebariconlist-6"><i className="dw dw-next"></i></label>
            </div>
          </div>
  
          <div className="reset-options pt-30 text-center">
            <button className="btn btn-danger" id="reset-settings">Reset Settings</button>
          </div>
        </div>
      </div>
    </div>
  
    <div className="left-side-bar">
      <div className="brand-logo">
        <a href="index.html">
          <img src="/images/deskapp-logo.svg" alt="" className="dark-logo"/>
          <img src="/images/deskapp-logo-white.svg" alt="" className="light-logo"/>
        </a>
        <div className="close-sidebar" data-toggle="left-sidebar-close">
          <i className="ion-close-round"></i>
        </div>
      </div>
      <div className="menu-block customscroll">
        <div className="sidebar-menu">
          <ul id="accordion-menu">
            <li className="dropdown">
              <a href="javascript:;" className="dropdown-toggle">
                <span className="micon dw dw-house-1"></span><span className="mtext">Home</span>
              </a>
              <ul className="submenu">
                <li><a href="index.html">Dashboard style 1</a></li>
                <li><a href="index2.html">Dashboard style 2</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="javascript:;" className="dropdown-toggle">
                <span className="micon dw dw-edit2"></span><span className="mtext">Forms</span>
              </a>
              <ul className="submenu">
                <li><a href="form-basic.html">Form Basic</a></li>
                <li><a href="advanced-components.html">Advanced Components</a></li>
                <li><a href="form-wizard.html">Form Wizard</a></li>
                <li><a href="html5-editor.html">HTML5 Editor</a></li>
                <li><a href="form-pickers.html">Form Pickers</a></li>
                <li><a href="image-cropper.html">Image Cropper</a></li>
                <li><a href="image-dropzone.html">Image Dropzone</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="javascript:;" className="dropdown-toggle">
                <span className="micon dw dw-library"></span><span className="mtext">Tables</span>
              </a>
              <ul className="submenu">
                <li><a href="basic-table.html">Basic Tables</a></li>
                <li><a href="datatable.html">DataTables</a></li>
              </ul>
            </li>
            <li>
              <a href="calendar.html" className="dropdown-toggle no-arrow">
                <span className="micon dw dw-calendar1"></span><span className="mtext">Calendar</span>
              </a>
            </li>
            <li className="dropdown">
              <a href="javascript:;" className="dropdown-toggle">
                <span className="micon dw dw-apartment"></span><span className="mtext"> UI Elements </span>
              </a>
              <ul className="submenu">
                <li><a href="ui-buttons.html">Buttons</a></li>
                <li><a href="ui-cards.html">Cards</a></li>
                <li><a href="ui-cards-hover.html">Cards Hover</a></li>
                <li><a href="ui-modals.html">Modals</a></li>
                <li><a href="ui-tabs.html">Tabs</a></li>
                <li><a href="ui-tooltip-popover.html">Tooltip &amp; Popover</a></li>
                <li><a href="ui-sweet-alert.html">Sweet Alert</a></li>
                <li><a href="ui-notification.html">Notification</a></li>
                <li><a href="ui-timeline.html">Timeline</a></li>
                <li><a href="ui-progressbar.html">Progressbar</a></li>
                <li><a href="ui-typography.html">Typography</a></li>
                <li><a href="ui-list-group.html">List group</a></li>
                <li><a href="ui-range-slider.html">Range slider</a></li>
                <li><a href="ui-carousel.html">Carousel</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="javascript:;" className="dropdown-toggle">
                <span className="micon dw dw-paint-brush"></span><span className="mtext">Icons</span>
              </a>
              <ul className="submenu">
                <li><a href="font-awesome.html">FontAwesome Icons</a></li>
                <li><a href="foundation.html">Foundation Icons</a></li>
                <li><a href="ionicons.html">Ionicons Icons</a></li>
                <li><a href="themify.html">Themify Icons</a></li>
                <li><a href="custom-icon.html">Custom Icons</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="javascript:;" className="dropdown-toggle">
                <span className="micon dw dw-analytics-21"></span><span className="mtext">Charts</span>
              </a>
              <ul className="submenu">
                <li><a href="highchart.html">Highchart</a></li>
                <li><a href="knob-chart.html">jQuery Knob</a></li>
                <li><a href="jvectormap.html">jvectormap</a></li>
                <li><a href="apexcharts.html">Apexcharts</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="javascript:;" className="dropdown-toggle">
                <span className="micon dw dw-right-arrow1"></span><span className="mtext">Additional Pages</span>
              </a>
              <ul className="submenu">
                <li><a href="video-player.html">Video Player</a></li>
                <li><a href="login.html">Login</a></li>
                <li><a href="forgot-password.html">Forgot Password</a></li>
                <li><a href="reset-password.html">Reset Password</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="javascript:;" className="dropdown-toggle">
                <span className="micon dw dw-browser2"></span><span className="mtext">Error Pages</span>
              </a>
              <ul className="submenu">
                <li><a href="400.html">400</a></li>
                <li><a href="403.html">403</a></li>
                <li><a href="404.html">404</a></li>
                <li><a href="500.html">500</a></li>
                <li><a href="503.html">503</a></li>
              </ul>
            </li>
  
            <li className="dropdown">
              <a href="javascript:;" className="dropdown-toggle">
                <span className="micon dw dw-copy"></span><span className="mtext">Extra Pages</span>
              </a>
              <ul className="submenu">
                <li><a href="blank.html">Blank</a></li>
                <li><a href="contact-directory.html">Contact Directory</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="blog-detail.html">Blog Detail</a></li>
                <li><a href="product.html">Product</a></li>
                <li><a href="product-detail.html">Product Detail</a></li>
                <li><a href="faq.html">FAQ</a></li>
                <li><a href="profile.html">Profile</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="pricing-table.html">Pricing Tables</a></li>
              </ul>
            </li>
            <li className="dropdown">
              <a href="javascript:;" className="dropdown-toggle">
                <span className="micon dw dw-list3"></span><span className="mtext">Multi Level Menu</span>
              </a>
              <ul className="submenu">
                <li><a href="javascript:;">Level 1</a></li>
                <li><a href="javascript:;">Level 1</a></li>
                <li><a href="javascript:;">Level 1</a></li>
                <li className="dropdown">
                  <a href="javascript:;" className="dropdown-toggle">
                    <span className="micon fa fa-plug"></span><span className="mtext">Level 2</span>
                  </a>
                  <ul className="submenu child">
                    <li><a href="javascript:;">Level 2</a></li>
                    <li><a href="javascript:;">Level 2</a></li>
                  </ul>
                </li>
                <li><a href="javascript:;">Level 1</a></li>
                <li><a href="javascript:;">Level 1</a></li>
                <li><a href="javascript:;">Level 1</a></li>
              </ul>
            </li>
            <li>
              <a href="sitemap.html" className="dropdown-toggle no-arrow">
                <span className="micon dw dw-diagram"></span><span className="mtext">Sitemap</span>
              </a>
            </li>
            <li>
              <a href="chat.html" className="dropdown-toggle no-arrow">
                <span className="micon dw dw-chat3"></span><span className="mtext">Chat</span>
              </a>
            </li>
            <li>
              <a href="invoice.html" className="dropdown-toggle no-arrow">
                <span className="micon dw dw-invoice"></span><span className="mtext">Invoice</span>
              </a>
            </li>
            <li>
              <div className="dropdown-divider"></div>
            </li>
            <li>
              <div className="sidebar-small-cap">Extra</div>
            </li>
            <li>
              <a href="javascript:;" className="dropdown-toggle">
                <span className="micon dw dw-edit-2"></span><span className="mtext">Documentation</span>
              </a>
              <ul className="submenu">
                <li><a href="introduction.html">Introduction</a></li>
                <li><a href="getting-started.html">Getting Started</a></li>
                <li><a href="color-settings.html">Color Settings</a></li>
                <li><a href="third-party-plugins.html">Third Party Plugins</a></li>
              </ul>
            </li>
            <li>
              <a href="https://dropways.github.io/deskapp-free-single-page-website-template/" target="_blank" className="dropdown-toggle no-arrow">
                <span className="micon dw dw-paper-plane1"></span>
                <span className="mtext">Landing Page <img src="/images/coming-soon.png" alt="" width="25"/></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="mobile-menu-overlay"></div>
  
    <div className="main-container">
      <div className="pd-ltr-20 xs-pd-20-10">
        <div className="min-height-200px">
          <div className="container pd-0">
            <div className="page-header">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="title">
                    <h4>Contact Directory</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Contact Directory</li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div className="contact-directory-list">
              <ul className="row">
                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className="contact-directory-box">
                    <div className="contact-dire-info text-center">
                      <div className="contact-avatar">
                        <span>
                          <img src="/images/photo2.jpg" alt=""/>
                        </span>
                      </div>
                      <div className="contact-name">
                        <h4>Wade Wilson</h4>
                        <p>UI/UX designer</p>
                        <div className="work text-success"><i className="ion-android-person"></i> Freelancer</div>
                      </div>
                      <div className="contact-skill">
                        <span className="badge badge-pill">UI</span>
                        <span className="badge badge-pill">UX</span>
                        <span className="badge badge-pill">Photoshop</span>
                        <span className="badge badge-pill badge-primary">+ 8</span>
                      </div>
                      <div className="profile-sort-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing magna aliqua.
                      </div>
                    </div>
                    <div className="view-contact">
                      <a href="#">View Profile</a>
                    </div>
                  </div>
                </li>
                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className="contact-directory-box">
                    <div className="contact-dire-info text-center">
                      <div className="contact-avatar">
                        <span>
                          <img src="/images/photo2.jpg" alt=""/>
                        </span>
                      </div>
                      <div className="contact-name">
                        <h4>Wade Wilson</h4>
                        <p>UI/UX designer</p>
                        <div className="work text-success"><i className="ion-android-person"></i> Freelancer</div>
                      </div>
                      <div className="contact-skill">
                        <span className="badge badge-pill">UI</span>
                        <span className="badge badge-pill">UX</span>
                        <span className="badge badge-pill">Photoshop</span>
                        <span className="badge badge-pill badge-primary">+ 8</span>
                      </div>
                      <div className="profile-sort-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing magna aliqua.
                      </div>
                    </div>
                    <div className="view-contact">
                      <a href="#">View Profile</a>
                    </div>
                  </div>
                </li>
                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className="contact-directory-box">
                    <div className="contact-dire-info text-center">
                      <div className="contact-avatar">
                        <span>
                          <img src="/images/photo2.jpg" alt=""/>
                        </span>
                      </div>
                      <div className="contact-name">
                        <h4>Wade Wilson</h4>
                        <p>UI/UX designer</p>
                        <div className="work text-success"><i className="ion-android-person"></i> Freelancer</div>
                      </div>
                      <div className="contact-skill">
                        <span className="badge badge-pill">UI</span>
                        <span className="badge badge-pill">UX</span>
                        <span className="badge badge-pill">Photoshop</span>
                        <span className="badge badge-pill badge-primary">+ 8</span>
                      </div>
                      <div className="profile-sort-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing magna aliqua.
                      </div>
                    </div>
                    <div className="view-contact">
                      <a href="#">View Profile</a>
                    </div>
                  </div>
                </li>
                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className="contact-directory-box">
                    <div className="contact-dire-info text-center">
                      <div className="contact-avatar">
                        <span>
                          <img src="/images/photo2.jpg" alt=""/>
                        </span>
                      </div>
                      <div className="contact-name">
                        <h4>Wade Wilson</h4>
                        <p>UI/UX designer</p>
                        <div className="work text-success"><i className="ion-android-person"></i> Freelancer</div>
                      </div>
                      <div className="contact-skill">
                        <span className="badge badge-pill">UI</span>
                        <span className="badge badge-pill">UX</span>
                        <span className="badge badge-pill">Photoshop</span>
                        <span className="badge badge-pill badge-primary">+ 8</span>
                      </div>
                      <div className="profile-sort-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing magna aliqua.
                      </div>
                    </div>
                    <div className="view-contact">
                      <a href="#">View Profile</a>
                    </div>
                  </div>
                </li>
                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className="contact-directory-box">
                    <div className="contact-dire-info text-center">
                      <div className="contact-avatar">
                        <span>
                          <img src="/images/photo2.jpg" alt=""/>
                        </span>
                      </div>
                      <div className="contact-name">
                        <h4>Wade Wilson</h4>
                        <p>UI/UX designer</p>
                        <div className="work text-success"><i className="ion-android-person"></i> Freelancer</div>
                      </div>
                      <div className="contact-skill">
                        <span className="badge badge-pill">UI</span>
                        <span className="badge badge-pill">UX</span>
                        <span className="badge badge-pill">Photoshop</span>
                        <span className="badge badge-pill badge-primary">+ 8</span>
                      </div>
                      <div className="profile-sort-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing magna aliqua.
                      </div>
                    </div>
                    <div className="view-contact">
                      <a href="#">View Profile</a>
                    </div>
                  </div>
                </li>
                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className="contact-directory-box">
                    <div className="contact-dire-info text-center">
                      <div className="contact-avatar">
                        <span>
                          <img src="/images/photo2.jpg" alt=""/>
                        </span>
                      </div>
                      <div className="contact-name">
                        <h4>Wade Wilson</h4>
                        <p>UI/UX designer</p>
                        <div className="work text-success"><i className="ion-android-person"></i> Freelancer</div>
                      </div>
                      <div className="contact-skill">
                        <span className="badge badge-pill">UI</span>
                        <span className="badge badge-pill">UX</span>
                        <span className="badge badge-pill">Photoshop</span>
                        <span className="badge badge-pill badge-primary">+ 8</span>
                      </div>
                      <div className="profile-sort-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing magna aliqua.
                      </div>
                    </div>
                    <div className="view-contact">
                      <a href="#">View Profile</a>
                    </div>
                  </div>
                </li>
                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className="contact-directory-box">
                    <div className="contact-dire-info text-center">
                      <div className="contact-avatar">
                        <span>
                          <img src="/images/photo2.jpg" alt=""/>
                        </span>
                      </div>
                      <div className="contact-name">
                        <h4>Wade Wilson</h4>
                        <p>UI/UX designer</p>
                        <div className="work text-success"><i className="ion-android-person"></i> Freelancer</div>
                      </div>
                      <div className="contact-skill">
                        <span className="badge badge-pill">UI</span>
                        <span className="badge badge-pill">UX</span>
                        <span className="badge badge-pill">Photoshop</span>
                        <span className="badge badge-pill badge-primary">+ 8</span>
                      </div>
                      <div className="profile-sort-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing magna aliqua.
                      </div>
                    </div>
                    <div className="view-contact">
                      <a href="#">View Profile</a>
                    </div>
                  </div>
                </li>
                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className="contact-directory-box">
                    <div className="contact-dire-info text-center">
                      <div className="contact-avatar">
                        <span>
                          <img src="/images/photo2.jpg" alt=""/>
                        </span>
                      </div>
                      <div className="contact-name">
                        <h4>Wade Wilson</h4>
                        <p>UI/UX designer</p>
                        <div className="work text-success"><i className="ion-android-person"></i> Freelancer</div>
                      </div>
                      <div className="contact-skill">
                        <span className="badge badge-pill">UI</span>
                        <span className="badge badge-pill">UX</span>
                        <span className="badge badge-pill">Photoshop</span>
                        <span className="badge badge-pill badge-primary">+ 8</span>
                      </div>
                      <div className="profile-sort-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing magna aliqua.
                      </div>
                    </div>
                    <div className="view-contact">
                      <a href="#">View Profile</a>
                    </div>
                  </div>
                </li>
                <li className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div className="contact-directory-box">
                    <div className="contact-dire-info text-center">
                      <div className="contact-avatar">
                        <span>
                          <img src="/images/photo2.jpg" alt=""/>
                        </span>
                      </div>
                      <div className="contact-name">
                        <h4>Wade Wilson</h4>
                        <p>UI/UX designer</p>
                        <div className="work text-success"><i className="ion-android-person"></i> Freelancer</div>
                      </div>
                      <div className="contact-skill">
                        <span className="badge badge-pill">UI</span>
                        <span className="badge badge-pill">UX</span>
                        <span className="badge badge-pill">Photoshop</span>
                        <span className="badge badge-pill badge-primary">+ 8</span>
                      </div>
                      <div className="profile-sort-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing magna aliqua.
                      </div>
                    </div>
                    <div className="view-contact">
                      <a href="#">View Profile</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-wrap pd-20 mb-20 card-box">
          DeskApp - Bootstrap 4 Admin Template By <a href="https://github.com/dropways" target="_blank">Ankit Hingarajiya</a>
        </div>
      </div>
    </div>
    <script src="/scripts/core.js"></script>
    <script src="/scripts/script.min.js"></script>
    <script src="/scripts/process.js"></script>
    <script src="/scripts/layout-settings.js"></script>
  </div>
  )
}
