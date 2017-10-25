import { Component } from 'react';

require('/react/src/style/scss/global.scss');

export default class extends Component {

    render() {
        const {state} = this;
        return (<div style={{fontFamily:'arial'}}>
            <h1>github-help-wanted</h1>
            <h3>Created By: Mac Gainor</h3>
            <div>I'm running in a Docker container</div>

            <div>Try updating `/src/js/index.js`</div>
            <div>Hot reloading will automatically trigger a refresh</div>
        </div>);
    }

}
