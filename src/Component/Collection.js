import React, { Component } from 'react';
import axios from 'axios'

class Collections extends Component {
    constructor(props) {
        super(props);
        this.state = { collections: [], loading : true}
    }

    componentDidMount() {
        this.getCollections();
    }

    getCollections() {
        axios.get('http://collection.localhost/api/collection/all')
        .then(res => {
            const collections = res.data;
            this.setState({collections})
            console.log(res.data)
        })
    }

    render() {
        const loading = this.state.loading;
        return(
            <div>
                { this.state.collections.map(collection =>
                    <div className="col-md-10 offset-md-1 row-block" key={collection.id}>
                        <ul id="sortable">
                            <li>
                                <div className="media">
                                    <div className="media-left align-self-center">
                                        <img className="rounded-circle"
                                                src={collection.id}/>
                                    </div>
                                    <div className="media-body">
                                        <h4>{collection.name}</h4>
                                    </div>
                                    <div className="media-right align-self-center">
                                        <a href="/" className="btn btn-default">Contact Now</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        )
    }
}

export default Collections
