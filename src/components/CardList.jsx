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
        //load first images as soon as the component is mounted
        this.loadPage()
    }

    componentDidUpdate() {

        //rebuild grid as soon as all images have loaded and every time something updates (i.e. more images are loaded)
        //this snippet is inspired by a post on stackoverflow but I could've done it myself too
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

    /**
     * Triggers a rebuilding of the whole grid. 
     * This is probably not the most efficient way to recalculate the layout, there's room for optimization
     */
    rebuildGrid() {
        this.masonry = new Masonry( '.masonry-wrapper', {columnWidth: 20});
    }

    /**
     * Handles the click on the loadMore button
     */
    handleNextPage() {
        let nextPage = this.state.currentPage + 1
        this.loadPage(nextPage)
        this.setState({
            currentPage : nextPage
        })
    }

    /**
     * Loads the images for the given page and always pushes them 
     * to the end of the list with images (even if a page in between is loaded which is out of the scope of our implementation)
     * @param {*} page 
     */
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