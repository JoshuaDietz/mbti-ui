import { Component, Fragment } from 'react'
import {getImageList} from '../services/getImageList'
import Card from './Card'
import * as Masonry from 'masonry-layout'

export default class CardList extends Component {
    state = {
        images : [],
        currentPage : 0
    }

    static defaultProps = {
        numCols : 5
    }

    componentDidMount() {
        this.loadPage()
    }

    componentDidUpdate() {

        //rebuild grid as soon as images have loaded
        Promise.all([...document.querySelectorAll('.masonry-wrapper img')]
        .filter((img) => {return !img.complete })
        .map((img) => {
            return new Promise((resolve, reject) => {
                img.onload = resolve
                img.reject = resolve
            })
            
        })).then(() => {
            this.rebuildGrid()
        })
        
    }

    rebuildGrid() {
        this.masonry = new Masonry( '.masonry-wrapper', {columnWidth: 20});
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
                <div className="masonry-wrapper">
                    {this.state.images.map((image) => {
                        return (
                            <div className="masonry-item">
                                <Card caption={image.author} width={image.width} height={image.height} url={image.download_url}></Card>
                            </div>
                        )
                    })}
                    
                </div>
                <div><button className="btn btn-secondary" onClick={() => {this.handleNextPage()}}>Load more!</button></div>
            </Fragment>
         )
    }
}