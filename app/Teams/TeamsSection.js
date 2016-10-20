import React from 'react';
import ReactDOM from 'react-dom';

class TeamsSection extends React.Component {
    constructor() {
        super();
        this.state = {
            lists : []
        }
    };

    componentDidMount() {
        fetch('//api.steampowered.com/IDOTA2Match_570/GetTeamInfoByTeamID/v1?key=40A813A042277C3DA67DC3ACFCB40103', {
                mode: 'no-cors',
                method: 'get'
            }).then(data => {
                return data.json();
            }).then(json => {
                this.setState({lists : json});
            })
    };

    render() {
        console.log('teams', this.state);
        return(
            <div>
            </div>
        );
    }
}

export default TeamsSection;