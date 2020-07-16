import axios from 'axios'
import React, { Component } from 'react'
import Config from "../../Configuration"

class Image extends Component {
    constructor(props) {
        super(props)
        this.state = { base64data: null, error: null };
    }

    componentDidMount() {
        const { filePath } = this.props
        axios.get(
            `${Config.serverFilesRoute}?path=${filePath}`,
            { responseType: 'arraybuffer' }
        )
            .then(response => {
                const base64 = btoa(
                    new Uint8Array(response.data).reduce(
                        (data, byte) => data + String.fromCharCode(byte),
                        '',
                    ),
                );
                this.setState({ base64data: "data:;base64," + base64 });
            })
            .catch((err) => this.setState({ error: err }))
    }


    render() {

        const { alt, className } = this.props

        if (this.state.error != null) {
            return <div>
                {this.state.error.message}
            </div>
        }

        else if (!this.state.base64data) {
            return <div>
                loading image ...
            </div>
        }

        return <img src={this.state.base64data} className={className} alt={alt}></img>
    }
}

export default Image;