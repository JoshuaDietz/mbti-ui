import {React, Component} from 'react';

export default class Card extends Component {
    state = {
        caption : ''
    }

    componentDidMount() {
        this.formatCaption()
    }

    /**
     * Formats the caption like requested in the task.
     * This is a method for which unit tests may be useful.
     * To do unit tests it could be best to move this outside the component
     * and into a function in a different file.
     */
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
                <div className="card-text">
                    {this.state.caption}
                </div>
            </div>
        )
    }
}