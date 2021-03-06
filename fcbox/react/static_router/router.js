import './index.less';

import React, {Component} from 'react';

class Router extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
        const { state } = this.props;
        state.router = this;
        this.routeChildren = this.props.children;
    }

    componentDidMount() {
        this.hashChange();
        window.onhashchange = (e) => {
            this.hashChange();
        };
    }

    hashChange(e) {
        if(window.fc.routerHashLock) {
            return false;
        }
        let hash = '';
        const hashArr = location.hash.split('/');
        if (hashArr && hashArr[2]) {
            hash = hashArr[2];
        }
        this.showPage = hash || (this.props.defaultPage || 'index');
        this.setState({});
    }

    go(path) {
        if (!this.routeChildren || !this.routeChildren.length) {
            return;
        }
        location.href = '#/' + path;
    }

    push(path) {
        if (!this.routeChildren || !this.routeChildren.length) {
            return;
        }
        location.href = '#/' + path;
    }

    back() {
        if (!this.routeChildren || !this.routeChildren.length) {
            return;
        }
        history.go(-1);
    }

    render() {
        if(!this.showPage) {
            return false;
        }
        let showChild;
        for(let i in this.routeChildren) {
            if(this.routeChildren[i].props['page'] == this.showPage) {
                showChild = this.routeChildren[i];
            }
        }
        showChild = showChild || this.routeChildren[0];
        return (
            <div ref="wrapper" className="wrapper">
                <div className="wrapperContent">
                    {showChild}
                </div>
            </div>
        );
    }

}

export default Router;
