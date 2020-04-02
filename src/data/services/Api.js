class ApiService {

    fetchData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve(mockedData)
            }, 5000);
        });
    }
}

export const Api = new ApiService();

const mockedData = {
    ilustrations: [
        {
            url: 'https://www.geneve.com/-/media/geneva/images/business/media/topics/bison-made-in-geneva/bison-made-in-geneva_1280x960.jpg'
        },
        {
            url: 'https://www.geneve.com/-/media/geneva/images/business/media/topics/bison-made-in-geneva/bison-made-in-geneva_1280x960.jpg'
        },
        {
            url: 'https://www.geneve.com/-/media/geneva/images/business/media/topics/bison-made-in-geneva/bison-made-in-geneva_1280x960.jpg'
        }
    ],
    portraits: [
        {
            url: 'https://earthjustice.org/sites/default/files/styles/image_800x600/public/bison_sergioboccardo_shutterstock3.jpg?itok=hP_XT0bC'
        },
        {
            url: 'https://earthjustice.org/sites/default/files/styles/image_800x600/public/bison_sergioboccardo_shutterstock3.jpg?itok=hP_XT0bC'
        },
        {
            url: 'https://earthjustice.org/sites/default/files/styles/image_800x600/public/bison_sergioboccardo_shutterstock3.jpg?itok=hP_XT0bC'
        },
        {
            url: 'https://earthjustice.org/sites/default/files/styles/image_800x600/public/bison_sergioboccardo_shutterstock3.jpg?itok=hP_XT0bC'
        }
    ]
};