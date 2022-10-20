import { Component, Fragment } from 'react'
import {getImageList} from '../services/getImageList'
import Card from './Card'

export default class CardList extends Component {
    state = {
        images : [],
        currentPage : 0
    }

    componentDidMount() {
        this.loadPage()
    }
    //as soon as I have internet again this has to be moved to the right place
    
    handleNextPage() {
        let nextPage = this.state.currentPage + 1
        this.loadPage(nextPage)
        this.setState({
            currentPage : nextPage
        })
    }

    async loadPage(page) {
        let imageList = await getImageList(page)

        this.setState({
            images : [...this.state.images, ...imageList]
        }) 
    }

    render() {
        return (
            <Fragment>
                
                {this.state.images.map((image) => {
                    return <Card caption={image.author} width={image.width} height={image.height} url={image.download_url}></Card>
                })}
                <button className="btn btn-secondary" onClick={this.handleNextPage}>Load more!</button>
            </Fragment>
         )
    }
}