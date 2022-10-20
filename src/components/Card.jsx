import {React, Component} from 'react';

export default class Card extends Component {
    state = {
        caption : ''
    }

    componentDidMount() {
        this.formatCaption()
    }

    formatCaption() {
        let originalCaption = this.props.caption

        let words = originalCaption.split(' ')
        let capitalizedWords = words.map((word) => {
            let firstLetter = word.substring(0, 1)
            let rest = word.substring(1)

            return firstLetter.toLowerCase() + rest.toUpperCase()
        })

        let formatted = capitalizedWords.join(' ')
        this.setState({caption: formatted})
    }

    render() {
        return (
            <div className="card">
                <img src={this.props.url} />
                <div className="card-caption">
                    {this.state.caption}
                </div>
            </div>
        )
    }
}