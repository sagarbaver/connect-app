import React, { PropTypes as PT } from 'react'
import './IncompleteProjectConfirmation.scss'

function IncompleteProjectConfirmation({ loadIncompleteProject, removeIncompleteProject }) {
  
  return (
    <div className="IncompleteProjectConfirmation">
      <div className="connect-logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="37" viewBox="0 0 59 37">
          <g fill="none" fill-rule="evenodd">
            <path fill="#47474F" d="M49.0525984,14.577922 C47.5776342,11.1968033 46.1375597,8.45979274 44.794837,6.69652909 C51.4014167,5.47375271 55.8932527,6.18088362 56.812811,8.97531424 C57.5409113,11.1875291 56.1162779,14.7964697 53.0393796,18.7595783 C52.498384,19.4563029 51.8914283,19.844113 51.2183277,19.9806 C51.087133,19.6215603 50.9115817,19.1519543 50.696814,18.593665 C50.1939866,17.2865637 49.6409112,15.9265349 49.0525984,14.577922 Z M31.6418217,9.76413774 C31.3188409,9.91416763 30.9592052,10.0779367 30.5095649,10.2801647 C30.0599245,10.0779367 29.7002889,9.91416763 29.3773081,9.76413774 C26.1553362,8.26910862 22.0768341,6.88860997 18.2326726,6.02293615 C21.9397138,2.20042329 26.3773137,0 30.5095649,0 C35.0773,0 39.1916864,1.97220289 42.824961,6.01428084 C38.9695457,6.87939068 34.8745671,8.26410953 31.6418217,9.76413774 Z M16.2207037,6.69938672 C13.2035477,10.4308205 10.217795,16.6947624 9.88620113,20 C9.17104285,19.8839011 8.52948993,19.4921937 7.9606053,18.7595522 C4.88372725,14.7964697 3.4590939,11.1875291 4.18718516,8.97534151 C5.10757982,6.17836947 9.6069439,5.47273442 16.2207037,6.69938672 Z M32.2435779,10.6040598 C35.5967425,9.1029812 41.0000014,7.36019163 43.6149353,6.91823276 C43.8258758,7.16982976 44.0427252,7.45361423 44.2648118,7.76814682 C45.1865221,9.07352924 46.1727878,10.8688006 47.1891971,13.0269527 C47.984149,14.7148821 48.7516673,16.5255752 49.4624622,18.3365499 C49.6953091,18.9298012 49.9063343,19.4833057 50.0925871,19.9845898 C49.690213,19.9163943 49.2722834,19.7837184 48.8459695,19.596605 C48.3650026,19.3855038 48.0027993,19.1745396 47.5469063,18.8746176 C39.4530981,13.5498795 38.9323471,13.2246515 36.1333372,11.9875424 C34.7939566,11.3955617 33.4910678,10.9501247 32.1627254,10.6403869 L32.2435779,10.6040598 Z M10.9483664,19.9809637 C11.319971,16.7803498 14.4318183,10.3870944 17.4115044,6.92802733 C20.3185205,7.43054909 25.1954216,9.06520614 28.7049779,10.6191849 C25.5560536,11.3065912 22.6550461,12.8642947 18.3744661,15.7664276 C18.5185596,15.6687356 16.5107952,17.0366811 15.972912,17.3962668 C15.0807849,17.9926717 14.3453799,18.462635 13.6452771,18.8775901 C12.6922696,19.4424434 11.7447214,19.8434685 10.9483664,19.9809637 Z"/>
            <text fill="#262628" font-family="Roboto-Medium, Roboto" font-size="10" font-weight="400" letter-spacing="2.167">
              <tspan x=".046" y="36">CONNECT</tspan>
            </text>
          </g>
        </svg>
      </div>
      <h3>Welcome back!</h3>
      <h5>You started a project with us recently.</h5>
      <p>Do you want to continue where you left off or create a new project?</p>
      <div className="actions">
        <button className="tc-btn tc-btn-primary tc-btn-md" onClick={ loadIncompleteProject }>Continue where I left off</button>
        <button className="tc-btn tc-btn-default tc-btn-md" onClick={ removeIncompleteProject }>Create a new project</button>
      </div>
    </div>
  )
}

IncompleteProjectConfirmation.defaultProps = {
}

IncompleteProjectConfirmation.propTypes = {
  /**
   * Callback to be called when user selects to discard incomplete project and create new project
   */
  removeIncompleteProject: PT.func.isRequired,
  /**
   * Callback to be called when user selects to load incomplete project
   */
  loadIncompleteProject: PT.func.isRequired
}

export default IncompleteProjectConfirmation
