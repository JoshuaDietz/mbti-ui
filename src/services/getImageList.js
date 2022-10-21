export async function getImageList(page = 0) {
    const limit = 25
    const url = 'https://picsum.photos/v2/list?page='+page+'&limit='+limit
    

    return await fetch(url).then((data) => {
        return data.json()
    })
}