function execute(key, page) {

    let response = fetch("https://lightnovelreader.me/search/autocomplete", {
        method: "GET",
        queries: {
            dataType: "json",
            query: key
        }
    });

    if (response.ok) {
        let json = response.json();
        const data = [];
        json.results.forEach(e => {
            data.push({
                name: e.original_title,
                link: e.link,
                cover: e.image,
                description: e.overview,
                host: "https://lightnovelreader.me"
            })
        });

        return Response.success(data)
    }

    return null;
}